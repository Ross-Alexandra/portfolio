import { Dispatch, SetStateAction } from "react";
import { IAppSection } from "../../dec";

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
    SlideInContainer,
    PrimaryAboutCTA,
    SecondaryAboutCTA,
    MobileImageBox
} from "./elements";
import {HeadshotImage} from '../../assets';

export interface IHeroContent {
    setAppSection: Dispatch<SetStateAction<IAppSection>>;
}
export function HeroContent({setAppSection}: IHeroContent) {
    return (
        <>
            <MobileImageBox />
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
                    Hi! My name is Ross Alexandra. I am a software engineer with a passion for building anything and everything.
                    <br/>
                    <br/>
                    Over the past decade I have had many opportunities to develop a variety of projects, both professionally and
                    casually, to meet the needs of an array of disciplines. Some examples are as follows:  
                    </AboutParagraph>
                    <AboutParagraphList>
                            • web and desktop apps,<br/>
                            • data analysis &amp; visualization tools,<br/>
                            • simple machine learning models,<br/>
                            • basic embedded systems,<br/>
                            • and even a 2D game
                        </AboutParagraphList>
                    <AboutCTAs>
                        <PrimaryAboutCTA onClick={() => setAppSection("about")}>Learn More</PrimaryAboutCTA>
                        <SecondaryAboutCTA onClick={() => setAppSection("contact")}>Contact Me</SecondaryAboutCTA>
                    </AboutCTAs>
                </AboutContent>
            </AboutContainer>
        </>
    );
}