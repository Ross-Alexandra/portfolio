// Initialize firebase stuff.
import'./services/firebase';

import { useCallback, useEffect, useState } from "react";

import { Hero } from "./pages/hero";
import { Portfolio } from "./pages/portfolio";
import { IAppSection } from "./dec";
import { useScreenSize } from "./hooks";

import {
  ParalaxDiv,
  PageContent
} from './elements';
import { slowChangeValue } from "./utils";

export function App() {
  const [appSection, setAppSection] = useState<IAppSection>("portfolio");
  const [scrollingDisabled, setScrollingDisabled] = useState<boolean>(false);
  const [, viewportHeight] = useScreenSize();

  const [paralaxHeight, setParalaxHeight] = useState(window.scrollY);

  const onScrollCallback = useCallback((event: WheelEvent) => {
    const paralaxDiv = document.getElementById('portfolio-paralax');
    const scrollTop = paralaxDiv?.scrollTop

    if (scrollTop === 0) setParalaxHeight((scrollHeight: number) => {
        // If we're on the contact page, allow users to scroll up but not down
        // if they're already scrolled all the way (so they can scroll on the
        // text box).
        if (scrollingDisabled) {
            return scrollHeight;
        }

        const update = scrollHeight + event.deltaY;
        if (update < 0) return 0;
        else if (update > viewportHeight) return viewportHeight;
        else return update;
    });
  }, [setParalaxHeight, viewportHeight, scrollingDisabled]);

  const scrollToBottom = useCallback(() => {
    slowChangeValue(setParalaxHeight, 40, viewportHeight);
  }, [setParalaxHeight, viewportHeight]);

  const scrollToTop = useCallback(() => {
    slowChangeValue(setParalaxHeight, 40, 0);
  }, [setParalaxHeight]);

  const setTopLevelPage = useCallback((newSection: IAppSection) => {
    setAppSection(newSection);
    scrollToTop();

    // Scroll animation takes 250ms. Wait for 300, then scroll the
    // portfolio page back to top, as if it is not at the top then
    // scrolling back down the portfolio requires clicking
    // the scroll button.
    setTimeout(() => document.getElementById('portfolio-paralax')?.scrollTo(0, 0), 300);
  }, [scrollToTop, setAppSection]);

  useEffect(() => {
    window.addEventListener('wheel', onScrollCallback);

    return () => window.removeEventListener('wheel', onScrollCallback);
  }, [onScrollCallback, appSection]);

  // Lock screen to portrait mode to avoid
  // annoying styling stuff. Reset scroll
  // to 0 to prevent issues with
  // scrolling after refresh.
  useEffect(() => {
    window.screen.orientation.lock('portrait-primary');
    document.getElementById('portfolio-paralax')?.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero 
        appSection={appSection}
        setAppSection={setAppSection}
        paralaxHeight={paralaxHeight}
        scrollToBottom={scrollToBottom}
        setScrollingDisabled={setScrollingDisabled}
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
