import styled from "@emotion/styled";
import { PrimaryCTA, SecondaryCTA } from "../../elements";
import { fancyFont, portfolioActive } from "../../theme";
import {BinaryBackground} from '../../assets';
import { GithubLogo } from "../../assets/icons";

export const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0px 30px 0px 100px;
    height: 100%;

    @media (max-width: 1025px) {
        padding-left: 30px;
    }
`;

export const IntroBox = styled.div`
    display: flex;
    flex-direction: row;
    
    row-gap: 20px;

    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, .25);

    @media (max-height: 865px) {
        padding-bottom: 15px;
        margin-bottom: 15px;
    }

    @media (max-height: 830px) {
        border-bottom: unset;
    }

    @media (max-width: 725px) {
        height: 80%;
    }
`;

export const IntroTextBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;

    @media (max-width: 1550px) {
        width: 70%;
    }

    @media (max-width: 1300px) {
        width: 80%;
    }

    @media (max-width: 1025px) {
        width: 100%;
    }

    @media (max-width: 725px) {
        height: calc(100% - 100px);
        padding-top: 100px;
    }
`;

export const Name = styled.h1`
    font-family: ${fancyFont};
    font-size: 76px;
    font-wieght: 700;

    @media (max-width: 1300px) {
        font-size: 50px;
    }

    @media (max-width: 450px) {
        font-size: 36px;
    }
`;

export const Title = styled.h3`
    font-family: ${fancyFont};
    font-size: 48px;
    font-weight: 500;

    @media (max-width: 1300px) {
        font-size: 36px;
    }

    @media (max-width: 450px) {
        font-size: 24px;
    }
`;

export const IntroParagraph = styled.p`
    margin-bottom: 10px;
    line-height: 1.5;

    @media (max-width: 1300px) {
        font-size: 16px;
    }
`;

export const IntroCTAs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 725px) {
        margin-top: auto; 
    }
`;

export const PortfolioButton = styled(SecondaryCTA)`
    @media (max-width: 450px) {
        font-size: 14px;
        padding: 8px 10px;
    }
`;

export const ContactButton = styled(PrimaryCTA)`
    @media (max-width: 450px) {
        font-size: 14px;
        padding: 8px 10px;
    }
`;

export const IntroPictureBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    
    width: 45%;
    
    background-image: url('${BinaryBackground}');
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: 50% 50%;

    @media (max-width: 1550px) {
        width: 30%;
        background-size: 85%;
    }

    @media (max-width: 1300px) {
        width: 20%;
        background-size: 100%;
        background-position: 50% 75%;
    }

    @media (max-width: 1025px) {
        display: none;
    }
`;

export const IntroPicture = styled.div<{src: string}>`
    position: relative;

    height: 350px;
    aspect-ratio: 3/4;

    background-image: url('${({src}) => src}');
    background-size: 100%;

    box-shadow: 0px 0px 3px 3px #ffffff inset;
    border-radius: 10px;

    @media (max-width: 1300px) {
        height: 250px;
    }
`;

export const SocialsLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    height: 45px;
    width: 400px;
`;

export const SocialIcon = styled.a`
    display: grid;
    place-items: center;

    height: 35px;
    width: 35px;
    margin-top: 10px;
    border-radius: 50%;

    background-color: black;
    
    :hover {
        background-color: ${portfolioActive};
    }
`;

export const StyledGithubLogo = styled(GithubLogo)`
    fill: black;

    :hover {
        fill: ${portfolioActive};
    }
`;

export const MySkills = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-evenly;
    column-gap: 15px;
    flex-grow: 1;

    @media (max-height: 830px) {
        display: none;
    }
`;

// SKillBox elements.
export const SkillBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    width: 15%;

    @media (max-height: 950px) {
        width: 30%;
    }
`;

export const SkillIcons = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 35px;

    column-gap: 5px;

    @media (max-height: 890px) {
        height: 25px;
    }
`;

export const SkillIcon = styled.img`
    height: 35px;
    width: auto;

    @media (max-height: 890px) {
        height: 25px;
    }
`;

export const SkillTitle = styled.h4`
    font-size: 16px;
    font-weight: 700;
`;

export const SkillDescription = styled.p`
    font-size: 14px;
`;