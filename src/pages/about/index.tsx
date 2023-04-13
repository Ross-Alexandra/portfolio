import { map } from "lodash";
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
    IntroPictureBox,
    IntroPicture,
    SocialsLinks,
    SocialIcon,
    MySkills,
    StyledGithubLogo
} from './elements';

export function About() {
    return (
        <AboutMeContainer>
            <IntroBox>
                <IntroTextBox>
                    <Name>Ross Alexandra</Name>
                    <Title>Software Engineer</Title>
                    <IntroParagraph>
                        Hi! My name is Ross Alexandra. I am a software engineer with a passion for building anything and everything.
                        <br/>
                        <br/>
                        Over the past decade I have had many opportunities to develop a variety of projects, both professionally and
                        casually, to meet the needs of an array of disciplines. Some examples are as follows:  
                        • Web and desktop apps,<br/>
                        • Data analysis &amp; visualization tools,<br/>
                        • Simple machine learning models,<br/>
                        • Basic embedded systems,<br/>
                        • And even a 2D game
                    </IntroParagraph>
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
