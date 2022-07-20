import { map } from "lodash";
import { Dispatch, SetStateAction } from "react";
import { IAppSection } from "../../global-interfaces";
import { skills } from "../../skills";
import { SkillBox } from "./skill-box";

import Headshot from '../../assets/headshot.png';
import { LinkedInLogo, GithubLogo } from "../../icons";

import {
    AboutMeContainer,
    IntroBox,
    IntroTextBox,
    Name,
    Title,
    IntroParagraph,
    IntroCTAs,
    PortfolioButton,
    ResumeButton,
    ContactButton,
    IntroPictureBox,
    IntroPicture,
    SocialsLinks,
    SocialIcon,
    ElevatorPitch,
    ElevatorTitle,
    ElevatorParagraph,
    MySkills
} from './elements';

export interface IAboutContent {
    setAppSection: Dispatch<SetStateAction<IAppSection>>;
}

export function AboutContent({setAppSection}: IAboutContent) {
    return (
        <AboutMeContainer>
            <IntroBox>
                <IntroTextBox>
                    <Name>Ross Alexandra</Name>
                    <Title>Software Engineer</Title>
                    <IntroParagraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </IntroParagraph>
                    <IntroCTAs>
                        <PortfolioButton>View Portfolio</PortfolioButton>
                        <ResumeButton>View Resume</ResumeButton>
                        <ContactButton>Get In Touch</ContactButton>
                    </IntroCTAs>
                </IntroTextBox>
                <IntroPictureBox>
                    <IntroPicture src={Headshot} />
                    <SocialsLinks>
                        <SocialIcon href={'https://github.com/Ross-Alexandra'} style={{backgroundColor: 'white'}}>
                            <GithubLogo width='50' height='50' />
                        </SocialIcon>
                        <SocialIcon href={'https://www.linkedin.com/in/ross-alexandra-5201ab149/'}>
                            <LinkedInLogo fill='white' width='30' height='30' />
                        </SocialIcon>
                    </SocialsLinks>
                </IntroPictureBox>
            </IntroBox>
            <ElevatorPitch>
                <ElevatorTitle>What I do</ElevatorTitle>
                <ElevatorParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </ElevatorParagraph>
            </ElevatorPitch>
            <MySkills>
                {map(skills, ({iconUrls, title, description}) => 
                    <SkillBox 
                        key={title}
                        skillIconUrls={iconUrls}
                        skillTitle={title}
                        skillDescription={description}
                    />
                )}
            </MySkills>
       </AboutMeContainer>
    );
}
