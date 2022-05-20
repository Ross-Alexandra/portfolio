import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import { IAppSection } from "../../global-interfaces";
import { 
    HeroContainer,
    HeroNav,
    HeroTitle,
    NavigationLinks,
    NavigationLink,
    IntroContainer,
    IntroTitle,
    RollingTitles,
    RollingTitle,
    IntroDescription,
    ScrollHint,
    QuoteSignContainer,
    QuoteAuthor
} from "./elements";

export interface HeroProps extends React.HTMLProps<HTMLDivElement> {
    appSection: IAppSection;
    setAppSection: Dispatch<SetStateAction<IAppSection>>;
}

export function Hero({appSection, setAppSection}: HeroProps) {
    const [heroIntersection, setHeroIntersection] = useState<number>(1);

    const scrollCallback = useCallback(() => {
        const scrollPercent: number = (window.scrollY / window.innerHeight);
        setHeroIntersection(1 - parseFloat(scrollPercent.toFixed(2)));
    }, [setHeroIntersection]);
    useEffect(() => {
        window.addEventListener('scroll', scrollCallback);

        return () => {
            window.removeEventListener('scroll', scrollCallback);
        }
    }, [scrollCallback]);

    return (
        <HeroContainer intersection={heroIntersection}>
            <HeroNav>
                <HeroTitle>My Portfolio</HeroTitle>
                <NavigationLinks>
                    <NavigationLink 
                        selected={appSection === "work"}
                        onClick={() => setAppSection("work")}
                    >
                        My Work
                    </NavigationLink>
                    <NavigationLink 
                        selected={appSection === "about"}
                        onClick={() => setAppSection("about")}
                    >
                        About
                    </NavigationLink>
                    <NavigationLink
                        selected={appSection === "contact"}
                        onClick={() => setAppSection("contact")}
                    >
                        Contact
                    </NavigationLink>
                </NavigationLinks>
            </HeroNav>
            <IntroContainer>
                <IntroTitle>Hi, I'm</IntroTitle>
                <RollingTitles textDuration={2000}>
                    <RollingTitle>Ross Alexandra</RollingTitle>
                    <RollingTitle>This is a one</RollingTitle>
                    <RollingTitle>This is a two</RollingTitle>
                    <RollingTitle>This is a three</RollingTitle>
                </RollingTitles>
                <IntroDescription>
                    <QuoteSignContainer>“</QuoteSignContainer>
                    Pushing the limit of what you think is possible is the best way to make the impossible possible.<br/>
                    <QuoteAuthor>~ Someone, Probably</QuoteAuthor>
                </IntroDescription>
            </IntroContainer>
            <ScrollHint />
        </HeroContainer>
    );
}
