import { useState } from "react";

import { Hero } from "./pages/hero";
import { Portfolio } from "./pages/portfolio";
import { IAppSection } from "./global-interfaces";
import { useScreenSize, useScrollHeight } from "./hooks";

import {
  ContentContainer,
  ParalaxDiv,
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
          <Portfolio />
        </ParalaxDiv>
      </ContentContainer>
    </>
  );
}
