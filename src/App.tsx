import { useState } from "react";

import { Hero } from "./pages/hero";
import { Portfolio } from "./pages/portfolio";
import { IAppSection } from "./global-interfaces";

export function App() {
  const [appSection, setAppSection] = useState<IAppSection>("portfolio");

  return (
    <>
      <Hero appSection={appSection} setAppSection={setAppSection}/>
      <Portfolio />
    </>
  );
}
