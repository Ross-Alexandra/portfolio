import { Dispatch, SetStateAction } from "react";
import { IAppSection } from "../../global-interfaces";

import { 
    IntroTitle,
    RollingTitles,
    RollingTitle,
    QuoteSlideIn,
    QuoteBox,
    QuoteSignContainer,
    QuoteAuthor,
    IntroSlideIn,
    RollingSlideIn,
    AboutContainer,
    AboutContent,
    AboutPicture,
    AboutParagraph,
    AboutParagraphList,
    AboutCTAs,
    SlideInContainer
} from "./elements";
import HeadshotImage from '../../assets/headshot.png';
import { PrimaryCTA, SecondaryCTA } from "../../elements";

export interface IHeroContent {
    setAppSection: Dispatch<SetStateAction<IAppSection>>;
}
export function HeroContent({setAppSection}: IHeroContent) {
    return (
        <>
            <SlideInContainer>
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
            </SlideInContainer>
            <AboutContainer>
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
        </>
    );
}