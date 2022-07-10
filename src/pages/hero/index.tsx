import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IAppSection } from "../../global-interfaces";
import { useScreenSize } from "../../hooks";
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
    RollingSlideIn,
    AboutContainer,
    AboutContent,
    AboutPicture,
    AboutParagraph,
    AboutParagraphList,
    AboutCTAs
} from "./elements";
import HeadshotImage from '../../assets/headshot.png';
import { PrimaryCTA, SecondaryCTA } from "../../elements";

export interface HeroProps extends React.HTMLProps<HTMLDivElement> {
    appSection: IAppSection;
    setAppSection: Dispatch<SetStateAction<IAppSection>>;
    paralaxHeight: number;
    scrollToBottom: () => void;
}

export function Hero({appSection, setAppSection, paralaxHeight, scrollToBottom}: HeroProps) {
    const [heroIntersection, setHeroIntersection] = useState<number>(1);
    const [, viewportHeight] = useScreenSize();

    useEffect(() => {
        const scrollPercent: number = (paralaxHeight / viewportHeight);
        setHeroIntersection(1 - parseFloat(scrollPercent.toFixed(2)));
    }, [paralaxHeight, viewportHeight, setHeroIntersection]);

    return (
        <HeroContainer intersection={heroIntersection}>
            <HeroNav intersection={heroIntersection}>
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
            <IntroContainer intersection={heroIntersection}>
                <IntroSlideIn direction="bottom">
                    <IntroTitle>Hi, I'm</IntroTitle>
                </IntroSlideIn>
                <RollingSlideIn direction="top" delay={750}>
                    <RollingTitles textDuration={2000} initialDelay={250}>
                        <RollingTitle>Ross Alexandra</RollingTitle>
                        <RollingTitle>A Developer</RollingTitle>
                        <RollingTitle>A Maker</RollingTitle>
                        <RollingTitle>A Coach</RollingTitle>
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
            <AboutContainer intersection={heroIntersection}>
                <AboutContent>
                    <AboutPicture src={HeadshotImage} />
                    <AboutParagraph>
                        Hi! My name is Ross Alexandra, I&apos;m a software engineer with a passion for building anything and everything.
                        <br/>
                        <br/>
                        Throughout high school, university, and beyond I&apos;ve built projects in tons of disciplines, both professionally
                        and in my spare time, including:
                        <br/>
                    </AboutParagraph>
                    <AboutParagraphList>
                            • web and desktop apps,<br/>
                            • data analysis &amp; visualization tools,<br/>
                            • simple machine learning models,<br/>
                            • basic embedded systems,<br/>
                            • and even a 2D game
                        </AboutParagraphList>
                    <AboutCTAs>
                        <PrimaryCTA onClick={() => setAppSection("about")}>Learn More</PrimaryCTA>
                        <SecondaryCTA onClick={() => setAppSection("contact")}>Contact Me</SecondaryCTA>
                    </AboutCTAs>
                </AboutContent>
            </AboutContainer>
            <ScrollBox onClick={scrollToBottom}>
                <ScrollText>Scroll</ScrollText>
                <ScrollHint width="9px" height="40px"/>
            </ScrollBox>
        </HeroContainer>
    );
}
