import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IAppSection } from "../../global-interfaces";
import { useScreenSize, useScrollHeight } from "../../hooks";
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
    const scrollHeight = useScrollHeight();
    const [, viewportHeight] = useScreenSize();

    useEffect(() => {
        const scrollPercent: number = (scrollHeight / viewportHeight);
        setHeroIntersection(1 - parseFloat(scrollPercent.toFixed(2)));
    }, [scrollHeight, viewportHeight, setHeroIntersection]);

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
            <IntroContainer>
                <IntroSlideIn direction="bottom">
                    <IntroTitle>Hi, I'm</IntroTitle>
                </IntroSlideIn>
                <RollingSlideIn direction="top" delay={750}>
                    <RollingTitles textDuration={2000} initialDelay={250}>
                        <RollingTitle>Ross Alexandra</RollingTitle>
                        <RollingTitle>A Maker</RollingTitle>
                        <RollingTitle>A Developer</RollingTitle>
                        <RollingTitle>A Nerd</RollingTitle>
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
