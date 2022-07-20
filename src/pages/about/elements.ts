import styled from "@emotion/styled";
import { PrimaryCTA, SecondaryCTA } from "../../elements";
import { fancyFont, portfolioActive } from "../../theme";

export const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 30px 30px 30px 100px;
`;

export const IntroBox = styled.div`
    display: flex;
    flex-direction: row;
    
    row-gap: 20px; 
`;

export const IntroTextBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
`;

export const Name = styled.h1`
    font-family: ${fancyFont};
    font-size: 76px;
    font-wieght: 700;
`;

export const Title = styled.h3`
    font-family: ${fancyFont};
    font-size: 48px;
    font-weight: 500;
`;

export const IntroParagraph = styled.p`
    margin-bottom: 35px;
`;

export const IntroCTAs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const PortfolioButton = styled(SecondaryCTA)``;

export const ResumeButton = styled(PrimaryCTA)``;

export const ContactButton = styled(SecondaryCTA)``;

export const IntroPictureBox = styled.div`
    display: grid;
    place-items: center;
    
    width: 45%;
`;

export const IntroPicture = styled.img`
    position: relative;

    height: 350px;
    width: auto;

    transform: rotateY(180deg);
`;

export const SocialsLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    height: 60px;
    width: 400px;
`;

export const SocialIcon = styled.a`
    display: grid;
    place-items: center;

    height: 50px;
    width: 50px;
    margin-top: 10px;
    border-radius: 50%;

    background-color: ${portfolioActive};
`;

export const ElevatorPitch = styled.div`
    display: flex;
    flex-direction: column;

    padding-inline: 25%;
    margin-bottom: 40px;
`;

export const ElevatorTitle = styled.h2`
    padding-left: 15px;

    border-left: 5px solid ${portfolioActive};
`;

export const ElevatorParagraph = styled.p``;

export const MySkills = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    column-gap: 15px;
`;


// SKillBox elements.
export const SkillBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    width: 15%;
`;

export const SkillIcons = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 35px;

    column-gap: 5px;
`;

export const SkillIcon = styled.img`
    height: 35px;
    width: auto;
`;

export const SkillTitle = styled.h4`
    font-size: 16px;
    font-weight: 700;
`;

export const SkillDescription = styled.p`
    font-size: 14px;
`;
