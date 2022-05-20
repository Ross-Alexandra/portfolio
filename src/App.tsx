import { useState } from "react";

import { Hero } from "./pages/hero";
import { MyWork } from "./pages/my-work";
import { IAppSection } from "./global-interfaces";

export function App() {
  const [appSection, setAppSection] = useState<IAppSection>("work");

  return (
    <>
      <Hero appSection={appSection} setAppSection={setAppSection}/>
      <MyWork />
    </>
  );
}
