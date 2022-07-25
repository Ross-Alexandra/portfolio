import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IAppSection } from "../../dec";
import { useScreenSize } from "../../hooks";
import { AboutContent } from "../about";
import { ContactContent } from "../contact";
import { 
    HeroContainer,
    HeroNav,
    HeroLogo,
    NavigationLinks,
    NavigationLink,
    ScrollHint,
    ScrollBox,
    ScrollText,
    HeroScalingDiv,
    ContentContainer,
} from "./elements";
import { HeroContent } from "./hero-content";

export interface HeroProps extends React.HTMLProps<HTMLDivElement> {
    appSection: IAppSection;
    setAppSection: Dispatch<SetStateAction<IAppSection>>;
    setScrollingDisabled: Dispatch<SetStateAction<boolean>>;
    paralaxHeight: number;
    scrollToBottom: () => void;
}

export function Hero({appSection, setAppSection, paralaxHeight, scrollToBottom, setScrollingDisabled}: HeroProps) {
    const [heroIntersection, setHeroIntersection] = useState<number>(1);
    const [, viewportHeight] = useScreenSize();

    useEffect(() => {
        const scrollPercent: number = (paralaxHeight / viewportHeight);
        setHeroIntersection(1 - parseFloat(scrollPercent.toFixed(2)));
    }, [paralaxHeight, viewportHeight, setHeroIntersection]);

    return (
        <HeroContainer intersection={heroIntersection}>
            <HeroNav intersection={heroIntersection}>
                <HeroLogo primaryColor={'#ffffff'} width={50} height={75}/>
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
            </HeroNav>
            <HeroScalingDiv intersection={heroIntersection}>
                <ContentContainer>
                    {appSection === 'portfolio' && <HeroContent setAppSection={setAppSection} /> }
                    {appSection === 'about' && <AboutContent setAppSection={setAppSection} scrollToBottom={scrollToBottom}/>}
                    {appSection === 'contact' && <ContactContent setAppSection={setAppSection} setScrollingDisabled={setScrollingDisabled} />}
                </ContentContainer>
            </HeroScalingDiv>
            <ScrollBox onClick={scrollToBottom}>
                <ScrollText color={appSection === 'contact' ? 'white' : undefined}>Scroll</ScrollText>
                <ScrollHint width="9px" height="40px" fill={appSection === 'contact' ? 'white' : undefined}/>
            </ScrollBox>
        </HeroContainer>
    );
}
