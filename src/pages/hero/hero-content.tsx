import { Dispatch, SetStateAction } from "react";
import { IAppSection } from "../../dec";

import { 
    IntroTitle,
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
import { RollingText } from "../../components/rolling-text";

const heroText = [
    'Ross Alexandra',
    'A Developer',
    'A Maker',
    'A Coach',
    'A Nerd'
];

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
                    <RollingText textDuration={2000} initialDelay={250}>
                        {heroText.map((text) => 
                            <RollingTitle key={text}>{text}</RollingTitle>
                        )}
                    </RollingText>
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