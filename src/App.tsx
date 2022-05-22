import { useState } from "react";

import { Hero } from "./pages/hero";
import { Portfolio } from "./pages/portfolio";
import { IAppSection } from "./global-interfaces";
import { useScreenSize, useScrollHeight } from "./hooks";

import {
  ContentContainer,
  ParalaxDiv,
  PageContent
} from './elements';

export function App() {
  const [appSection, setAppSection] = useState<IAppSection>("portfolio");
  const scrollHeight = useScrollHeight();
  const [, viewportHeight] = useScreenSize();

  return (
    <>
      <Hero appSection={appSection} setAppSection={setAppSection}/>
      <ContentContainer>
        <ParalaxDiv viewportHeight={viewportHeight} scrollHeight={scrollHeight}>
          <PageContent>
            <Portfolio />
          </PageContent>
        </ParalaxDiv>
      </ContentContainer>
    </>
  );
}
