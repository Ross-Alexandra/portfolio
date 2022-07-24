import { map } from "lodash";
import { Dispatch, SetStateAction } from "react";
import { IAppSection } from "../../dec";
import { skills } from "../../app-data/skills";
import { SkillBox } from "./skill-box";

import {HeadshotAlternate} from '../../assets';
import { LinkedInLogo } from "../../assets/icons";

import {
    AboutMeContainer,
    IntroBox,
    IntroTextBox,
    Name,
    Title,
    IntroParagraph,
    IntroCTAs,
    PortfolioButton,
    ContactButton,
    IntroPictureBox,
    IntroPicture,
    SocialsLinks,
    SocialIcon,
    MySkills,
    StyledGithubLogo
} from './elements';

export interface IAboutContent {
    setAppSection: Dispatch<SetStateAction<IAppSection>>;
    scrollToBottom: () => void;
}

export function AboutContent({setAppSection, scrollToBottom}: IAboutContent) {
    return (
        <AboutMeContainer>
            <IntroBox>
                <IntroTextBox>
                    <Name>Ross Alexandra</Name>
                    <Title>Software Engineer</Title>
                    <IntroParagraph>
                        I am a software engineering graduate from the University of Victoria (UVIC). Technological
                        experimentation and invention has been a passion of mine  since 2012; however, in  2017
                        when I enrolled in the co-op (internship) program at UVIC, I was thrilled to refine my
                        previous passions into a practical profession. Thanks to UVIC&apos;s co-op program, my
                        professional experience extends to many fields, from web design, to fullstack development, 
                        to data science. Since graduating my focus has been set on a collection of projects 
                        centered around esports. These projects have helped bolster a professional &quot;Tom
                        Clancy&apos;s Rainbow Six: Siege&quot; team which I was contracted to coach.
                        <br/>
                        <br/>
                        From years of professional and casual coaching experience I have learned that collaboration
                        is the best way to multiply individual performances in any type of team. I believe that the 
                        job of a software engineer is not to just write code, but to collaborate to find the best
                        solution for a problem. Then, once a plan has been created, collaboration must be used once
                        more to bring the reality of that  solution to fruition. Things which are truly amazing come
                        from countless hours of teamwork and cooperation. No one person can do it all.
                    </IntroParagraph>
                    <IntroCTAs>
                        <PortfolioButton onClick={scrollToBottom}>View Portfolio</PortfolioButton>
                        <ContactButton onClick={() => setAppSection('contact')}>Get In Touch</ContactButton>
                    </IntroCTAs>
                </IntroTextBox>
                <IntroPictureBox>
                    <IntroPicture src={HeadshotAlternate} />
                    <SocialsLinks>
                        <SocialIcon title='GitHub' href={'https://github.com/Ross-Alexandra'} style={{backgroundColor: 'white'}}>
                            <StyledGithubLogo width='35' height='35' />
                        </SocialIcon>
                        <SocialIcon title='Linkedin' href={'https://www.linkedin.com/in/ross-alexandra-5201ab149/'}>
                            <LinkedInLogo fill='white' width='20' height='20' />
                        </SocialIcon>
                    </SocialsLinks>
                </IntroPictureBox>
            </IntroBox>
            <MySkills>
                {map(skills, ({iconUrls, iconTitles, title, description}) => 
                    <SkillBox 
                        key={title}
                        skillIconUrls={iconUrls}
                        skillIconTitles={iconTitles}
                        skillTitle={title}
                        skillDescription={description}
                    />
                )}
            </MySkills>
       </AboutMeContainer>
    );
}
