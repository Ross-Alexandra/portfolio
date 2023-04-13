import { Dispatch, SetStateAction } from "react";
import { IAppSection } from "../../dec";

import { 
    IntroTitle,
    RollingTitles,
    RollingTitle,
    QuoteBox,
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
import { SlideIn } from "../../components/slide-in";

export interface IHeroContent {
    setAppSection: Dispatch<SetStateAction<IAppSection>>;
}
export function HeroContent({setAppSection}: IHeroContent) {
    return (
        <>
            <MobileImageBox />
            <SlideInContainer>
                <SlideIn direction="bottom">
                    <IntroTitle>Hi, I'm</IntroTitle>
                </SlideIn>
                <SlideIn direction="top" delay={750}>
                    <RollingTitles textDuration={2000} initialDelay={250}>
                        <RollingTitle>Ross Alexandra</RollingTitle>
                        <RollingTitle>A Developer</RollingTitle>
                        <RollingTitle>A Maker</RollingTitle>
                        <RollingTitle>A Coach</RollingTitle>
                        <RollingTitle>A Nerd</RollingTitle>
                    </RollingTitles>
                </SlideIn>
                <SlideIn direction="bottom" delay={1500}>
                    <QuoteBox>
                        <p className='quote'>Pushing the limit of what you think is possible is the best way to make the impossible possible.</p>
                        <br/>
                        <p className='author'>~ Someone, Probably</p>
                    </QuoteBox>
                </SlideIn>
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
                            • Web and desktop apps,<br/>
                            • Data analysis &amp; visualization tools,<br/>
                            • Simple machine learning models,<br/>
                            • Basic embedded systems,<br/>
                            • And even a 2D game
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