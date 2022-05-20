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
    QuoteSlideIn,
    QuoteBox,
    ScrollHint,
    QuoteSignContainer,
    QuoteAuthor,
    ScrollBox,
    ScrollText,
    IntroSlideIn,
    RollingSlideIn
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
                        selected={appSection === "portfolio"}
                        onClick={() => setAppSection("portfolio")}
                    >
                        Portfolio
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
                <IntroSlideIn direction="bottom">
                    <IntroTitle>Hi, I'm</IntroTitle>
                </IntroSlideIn>
                <RollingSlideIn direction="top" delay={750}>
                    <RollingTitles textDuration={2000} initialDelay={250}>
                        <RollingTitle>A Maker</RollingTitle>
                        <RollingTitle>An Engineer</RollingTitle>
                        <RollingTitle>A Developer</RollingTitle>
                        <RollingTitle>Ross Alexandra</RollingTitle>
                    </RollingTitles>
                </RollingSlideIn>
                <QuoteSlideIn direction="bottom" delay={1500}>
                    <QuoteBox>
                        <QuoteSignContainer>“</QuoteSignContainer>
                        Pushing the limit of what you think is possible is the best way to make the impossible possible.<br/>
                        <QuoteAuthor>~ Someone, Probably</QuoteAuthor>
                    </QuoteBox>
                </QuoteSlideIn>
            </IntroContainer>
            <ScrollBox onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>
                <ScrollText>Scroll</ScrollText>
                <ScrollHint width="9px" height="40px"/>
            </ScrollBox>
        </HeroContainer>
    );
}
