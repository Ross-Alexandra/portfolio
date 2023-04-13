import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { RollingText } from "../../components/rolling-text";
import { defaultFont, fancyFont, blackText, headerHeight, systemFont } from "../../theme";

import {HeadshotImage, HeroBGImage} from '../../assets';
import { PortfolioLogo } from "../../assets/icons";
import { PrimaryCTA, SecondaryCTA } from "../../elements";

export interface SelectedAwareProps extends React.HTMLProps<HTMLElement> {
    selected: boolean;
}

export interface IntersectionAwareProps extends React.HTMLProps<HTMLElement> {
    intersection: number;
}

export const HeroContainer = styled.div<IntersectionAwareProps>`
    width: 100%;
    height: 100vh;
    background-color: white;
    color: #333333;
    border-color: #333333;

    transition: filter 200ms;

    ${({intersection}: IntersectionAwareProps) => `
        filter: brightness(${(intersection / 2) + .5}) invert(${1 - ((intersection / 2) + .5)});
    `}
`;

export const HeroScalingDiv = styled.div<IntersectionAwareProps>`
    width: 100%;
    height: 100%;

    transition: transform 200ms;
    ${({intersection}: IntersectionAwareProps) => `
        transform: scale(calc(1 - (0.1 * (1 - ${intersection}))));
    `}
`;

export const HeroNav = styled.div<IntersectionAwareProps>`
    position: absolute;
    top: ${({intersection}: IntersectionAwareProps) => `calc(-90px * 2.5 * (1 - ${intersection}))`};
    transition: top 50ms;

    height: ${headerHeight}px;
    width: 100%;
    z-index: 1;
    background-color: white;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    transition: top 200ms;
`;

export const HeroLogo = styled(PortfolioLogo)`
    margin: 0px 0px 0px 30px;
`;

export const NavigationLinks = styled.div`
    margin: 0px 30px 0px 0px;
    width: 33%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 780px) {
        width: 50%;
    }

    @media (max-width: 545px) {
        width: 75%;
    }
`;

export const NavigationLink = styled.h2<SelectedAwareProps>`
    position: relative;

    font-family: ${systemFont};
    font-weight: 500;
    font-size: 19px;
    line-height: 36px;
    color: ${blackText};

    :after {
        content: '';
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 3px;

        background-color: ${blackText};

        transition: transform 250ms;
        transform: ${({selected}: SelectedAwareProps) => selected ? 'scaleX(1)' : 'scaleX(0)'};
    }

    ${({selected}: SelectedAwareProps) => selected ? `
        opacity: 1;
        cursor: default;
    ` : `
        opacity: 0.5;
        cursor: pointer;

        transition: opacity 250ms;

        :hover {
            opacity: 1;
        }
    `}

    @media (max-width: 385px) {
        font-size: 16px;
    }
`;

export const ContentContainer = styled.div`
    position: fixed;
    top: ${headerHeight}px;
    bottom: 0px;
    left: 0px;
    right: 0px;
`;

export const MobileImageBox = styled.div`
    display: none;
    position: absolute;
    inset: 0px 50%;
    transform: translate(-50%, 0);
    
    width: 150px;
    height: 150px;

    background-image: url('${HeadshotImage}');
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius: 50%;

    @media (max-width: 550px) {
        display: inherit;
    }
`;

export const SlideInContainer = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-left: 30px;

    @media (max-width: 900px) {
        padding-left: 10px;
        row-gap: 20px;
    }
`;

export const IntroTitle = styled.h2`
    font-family: ${fancyFont};
    font-size: 140px;
    line-height: 120px;

    user-select: none;
    cursor: default;

    @media (max-width: 1050px) {
        font-size: 100px;
        line-height: 80px;
    }

    @media (max-width: 780px) {
        font-size: 75px;
        line-height: 60px;
    }

    @media (max-width: 550px) {
        font-size: 60px;
        line-height: 50px;
    }

    @media (max-width: 385px) {
        font-size: 36px;
        line-height: 30px;
    }
`;

export const RollingTitles = styled(RollingText)`
    height: 160px;

    @media (max-width: 1050px) {
        height: 100px;
    }

    @media (max-width: 780px) {
        height: 75px;
    }

    @media (max-width: 550px) {
        height: 60px;
    }

    @media (max-width: 385px) {
        height: 35px;
    }
`;

export const RollingTitle = styled.h2`
    margin: 0px 0px 10px 0px;

    font-family: ${fancyFont};
    font-weight: 700;
    font-size: 140px;
    line-height: 120px;

    user-select: none;
    cursor: default;

    @media (max-width: 1050px) {
        font-size: 100px;
        line-height: 80px;
        margin-bottom: 0px;
    }

    @media (max-width: 780px) {
        font-size: 75px;
        line-height: 60px;
    }

    @media (max-width: 550px) {
        font-size: 50px;
        line-height: 50px;
    }

    @media (max-width: 385px) {
        font-size: 36px;
        line-height: 30px;
    }
`;

export const QuoteBox = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    width: fit-content;
    padding-inline: 15px;
    border-left: 5px solid;

    font-family: ${defaultFont};
    font-size: 18px;
    
    opacity: 0.75;

    .author {
        margin-top: 10px;
        text-align: right;
    }

    @media (max-width: 850px) {
        font-size: 14px;
    }

    quotes: "“" "”";
    ::before {
        content: open-quote;
        font-size: 80px;

        height: 45px; // This is a hack to make the quote sign appear above the text
    }
`;

export const ScrollBox = styled.div`
    position: fixed;
    bottom: 30px;
    left: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    transform: translate(-50%, 0);
`;

export const ScrollText = styled.p<{color: string | undefined}>`
    color: ${({color='#949494'}) => color};
    font-size: 15px;
`;

const floatAnimation = keyframes`
    from {margin-top: 0px;}
    to {margin-top: 10px;}
`;

const StyledSvg = styled.svg`
    animation-name: ${floatAnimation};
    animation-duration: 2s;
    animation-delay: 5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
`;

export const AboutContainer = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 35%;
    height: 100%;

    display: grid;
    place-items: center;

    background-repeat: no-repeat;
    background-size: 100% auto;

    background-image: url(${HeroBGImage});

    @media (max-height: 800px) {
        display: none;
    }

    @media (max-width: 1500px) {
        display: none;
    }
`;

export const AboutContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 60%;
    height 100%;
    padding: 30px 50px;

    line-height: 1.5;
    font-size: 17px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: white;
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
`;

export const AboutPicture = styled.img`
    margin: 0px auto 30px auto;

    width: 175px;
    height: 175px;
    border-radius: 50%;
    transform: rotateY(180deg);
`;

export const AboutParagraph = styled.p``;

export const AboutCTAs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;
    margin-top: auto
`;

export const PrimaryAboutCTA = styled(PrimaryCTA)``;

export const SecondaryAboutCTA = styled(SecondaryCTA)``;

export const AboutParagraphList = styled.ul`
    padding-left: 20px;

    align-self: start;
`;

export function ScrollHint({fill='#949494', ...props}: React.SVGProps<SVGSVGElement>) {
    return (
        <StyledSvg viewBox="0 0 9 40" {...props}>
            <g xmlns="http://www.w3.org/2000/svg" id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="arrow" fill={fill} fillRule="nonzero">
                        <polygon id="Combined-Shape" points="5 35 9 35 4.5 40 0 35 4 35 4 0 5 0"/>
                    </g>
                </g>
        </StyledSvg>
    );
}
