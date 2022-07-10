import { useCallback, useEffect, useState } from "react";

import { Hero } from "./pages/hero";
import { Portfolio } from "./pages/portfolio";
import { IAppSection } from "./global-interfaces";
import { useScreenSize } from "./hooks";

import {
  ParalaxDiv,
  PageContent
} from './elements';
import { slowChangeValue } from "./helpers";

export function App() {
  const [appSection, setAppSection] = useState<IAppSection>("portfolio");
  const [, viewportHeight] = useScreenSize();

  const [paralaxHeight, setParalaxHeight] = useState(window.scrollY);

  const onScrollCallback = useCallback((event: WheelEvent) => {
    const paralaxDiv = document.getElementById('portfolio-paralax');
    const scrollTop = paralaxDiv?.scrollTop

    if (scrollTop === 0) setParalaxHeight((scrollHeight: number) => {
          const update = scrollHeight + event.deltaY;

          if (update < 0) return 0;
          else if (update > viewportHeight) return viewportHeight;
          else return update;
      });
  }, [setParalaxHeight, viewportHeight]);

  const scrollToBottom = useCallback(() => {
    slowChangeValue(setParalaxHeight, 40, viewportHeight);
  }, [setParalaxHeight, viewportHeight]);

  const scrollToTop = useCallback(() => {
    slowChangeValue(setParalaxHeight, 40, 0);
  }, [setParalaxHeight]);

  const setTopLevelPage = useCallback((newSection: IAppSection) => {
    setAppSection(newSection);
    scrollToTop();
  }, [scrollToTop, setAppSection]);

  useEffect(() => {
      window.addEventListener('wheel', onScrollCallback);

      return () => window.removeEventListener('wheel', onScrollCallback);
  }, [onScrollCallback]);

  return (
    <>
      <Hero 
        appSection={appSection}
        setAppSection={setAppSection}
        paralaxHeight={paralaxHeight}
        scrollToBottom={scrollToBottom}
      />
      <ParalaxDiv 
        id="portfolio-paralax"
        viewportHeight={viewportHeight}
        paralaxHeight={paralaxHeight}
      >
        <PageContent>
          <Portfolio setTopLevelPage={setTopLevelPage}/>
        </PageContent>
      </ParalaxDiv>
    </>
  );
}
