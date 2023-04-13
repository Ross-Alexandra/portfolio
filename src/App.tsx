// Initialize firebase stuff.
import './services/firebase';

import { useState } from "react";

import { Home } from "./pages/home";
import { IAppSection } from "./dec";

import {
    Nav,
    NavLogo,
    NavigationLinks,
    NavigationLink,
    ContentWrapper
} from './elements';
import { About } from './pages/about';
import { Contact } from './pages/contact';

export function App() {
    const [appSection, setAppSection] = useState<IAppSection>("portfolio");
    return (
        <>
            <Nav>
                <NavLogo primaryColor={'#ffffff'} width={50} height={75}/>
                <NavigationLinks>
                    <NavigationLink 
                        selected={appSection === "portfolio"}
                        onClick={() => setAppSection("portfolio")}
                    >
                        Home
                    </NavigationLink>
                    <NavigationLink 
                        selected={appSection === "about"}
                        onClick={() => setAppSection("about")}
                    >
                        About Me
                    </NavigationLink>
                    <NavigationLink
                        selected={appSection === "contact"}
                        onClick={() => setAppSection("contact")}
                    >
                        Contact
                    </NavigationLink>
                </NavigationLinks>
            </Nav>

            <ContentWrapper>
                {appSection === 'portfolio' && <Home />}
                {appSection === 'about' && <About />}
                {appSection === 'contact' && <Contact />}
            </ContentWrapper>
        </>
    );
}
