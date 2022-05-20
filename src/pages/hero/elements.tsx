import styled from "@emotion/styled";
import { RollingText } from "../../components/rolling-text";
import { SlideIn } from "../../components/slide-in";
import { defaultFont, fancyFont, blackText, headerHeight, systemFont } from "../../theme";

export interface SelectedAwareProps extends React.HTMLProps<HTMLElement> {
    selected: boolean;
}

export interface IntersectionAwareProps extends React.HTMLProps<HTMLElement> {
    intersection: number;
}

export const HeroContainer = styled.div<IntersectionAwareProps>`
    width: 100%;
    height: 100vh;

    ${({intersection}: IntersectionAwareProps) => `
    background-color: rgb(
        calc(255 * ${intersection}),
        calc(255 * ${intersection}),
        calc(255 * ${intersection})
    );

    color: rgb(
        calc(51 + (153 * (1 - ${intersection}))),
        calc(51 + (153 * (1 - ${intersection}))),
        calc(51 + (153 * (1 - ${intersection})))
    );

    border-color: rgb(
        calc(51 + (153 * (1 - ${intersection}))),
        calc(51 + (153 * (1 - ${intersection}))),
        calc(51 + (153 * (1 - ${intersection})))
    );
`}
`;

export const HeroNav = styled.div`
    height: ${headerHeight}px;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const HeroTitle = styled.h2`
    margin: 0px 0px 0px 30px;

    font-family: ${fancyFont}; 
    font-weight: 400;
    font-size: 40px;
    color: ${blackText};
    line-height: 36px;
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

export const IntroContainer = styled.div`
    position: fixed;
    top: ${headerHeight}px;
    bottom: 0px;
    left: 0px;
    right: 0px;

    display: flex;
    flex-direction: column;

    padding-left: 30px;
`;

export const IntroSlideIn = styled(SlideIn)`
    margin: 12.5% 0px 0px 0px;
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
`;

export const ScrollText = styled.p`
    color: #949494;
    font-size: 15px;
`;

const StyledSvg = styled.svg``;

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
