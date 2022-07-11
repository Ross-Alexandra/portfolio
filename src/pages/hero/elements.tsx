import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { RollingText } from "../../components/rolling-text";
import { SlideIn } from "../../components/slide-in";
import { defaultFont, fancyFont, blackText, headerHeight, systemFont } from "../../theme";

import HeroBGImage from '../../assets/hero-bg-image.png';
import { Logo } from "../../elements";

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

export const HeroLogo = styled(Logo)`
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
`;

export const ContentContainer = styled.div`
    position: fixed;
    top: ${headerHeight}px;
    bottom: 0px;
    left: 0px;
    right: 0px;
`;

export const SlideInContainer = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-left: 30px;
`;

export const IntroSlideIn = styled(SlideIn)`
    height: 140px;
`;

export const IntroTitle = styled.h2`
    font-family: ${fancyFont};
    font-size: 140px;
    line-height: 120px;

    user-select: none;
    cursor: default;
`;

export const RollingSlideIn = styled(SlideIn)`
    height: 160px;
`;

export const RollingTitles = styled(RollingText)`
    height: 160px;
`;

export const RollingTitle = styled.h2`
    margin: 0px 0px 10px 0px;

    font-family: ${fancyFont};
    font-weight: 700;
    font-size: 140px;
    line-height: 120px;

    user-select: none;
    cursor: default;
`;

export const QuoteSlideIn = styled(SlideIn)`
    height: 80px;
`;

export const QuoteBox = styled.p`
    padding-left: 15px;

    height: 80px;
    width: 50%;

    font-family: ${defaultFont};
    font-size: 18px;
    line-height: 20px;
    
    opacity: 0.75;
    border-left: 5px solid;
`;

export const QuoteSignContainer = styled.span`
    position: relative;
    top: 35%;
    padding-right: 10px;

    font-size: 80px;
`;

export const QuoteAuthor = styled.span`
    display: block;
    margin: unset;

    width: 100%;
    text-align: end;
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

    @media (max-height: 800px) {
        left: 60%;
    }
`;

export const ScrollText = styled.p`
    color: #949494;
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

    @media (max-height: 800px) {
        display: none;
    }
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

export const AboutParagraphList = styled.ul`
    padding-left: 20px;

    align-self: start;
`;

export function ScrollHint({...props}: React.SVGProps<SVGSVGElement>) {
    return (
        <StyledSvg viewBox="0 0 9 40" {...props}>
            <g xmlns="http://www.w3.org/2000/svg" id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="arrow" fill="#949494" fillRule="nonzero">
                        <polygon id="Combined-Shape" points="5 35 9 35 4.5 40 0 35 4 35 4 0 5 0"/>
                    </g>
                </g>
        </StyledSvg>
    );
}
