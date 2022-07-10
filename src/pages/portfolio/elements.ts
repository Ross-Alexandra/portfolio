import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { systemFont, portfolioActive, portfolioActiveSecondary, portfolioInactive, portfolioBackground200 } from "../../theme";

/***** index.tsx Stying *****/

interface ActiveAwareProps extends React.HTMLProps<HTMLHeadingElement> {
    active: boolean;
}

interface PageIndexAwareProps extends React.HTMLProps<HTMLDivElement> {
    pageIndex: number;
    bodyHeight: number | undefined;
}

export const PortfolioContainer = styled.div`
    display: flex;
    width: 100%;

    flex-direction: column;
`;

export const PortfolioNav = styled.div`
    display: flex;
    width: 100%;
    height: 90px;
    background-color: ${portfolioBackground200};

    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const NavItem = styled.h2<ActiveAwareProps>`
    font-family: ${systemFont};
    font-weight: 600;
    font-size: 19px;
    line-height: 36px;
    text-transform: capitalize;

    ${({active}: ActiveAwareProps) => active ? `
        color: ${portfolioActive};
        cursor: default;
    ` : `
        color: ${portfolioInactive};
        cursor: pointer;
    `}


`;

export const PortfolioBody = styled.div<PageIndexAwareProps>`
    position: relative;
    width: 100%;

    height: ${({bodyHeight}: PageIndexAwareProps) => bodyHeight ?? 0}px;

    transition: transform 400ms;
    transform: rotateY(${({pageIndex}: PageIndexAwareProps) => (pageIndex * -90) + .001}deg);
    transform-style: preserve-3d;
`;

/***** project.tsx Stying *****/

interface IndexAwareImg extends React.HTMLProps<HTMLImageElement> {
    index: number;
}

interface IndexAwareDiv extends React.HTMLProps<HTMLDivElement> {
    index: number;
}

export const ProjectContainer = styled.div`
    position: relative;
    height: 425px;
`;

export const PreviewImage = styled.img<IndexAwareImg>`
    position: absolute;
    top: 25px;
    height: 375px;
    width: auto;
    left: ${({index}: IndexAwareImg) => index % 2 ? '10%' : '45%'};
    
    //aspect-ratio: 4 / 3;
`;

export const ProjectInfoContainer = styled.div<IndexAwareDiv>`
    position: absolute;
    top: 25px;
    height: 375px;
    width: 45%;
    left: ${({index}: IndexAwareDiv) => index % 2 ? '45%' : '10%'};

    display: flex;
    flex-direction: column;
    align-items: ${({index}: IndexAwareDiv) => index % 2 ? 'flex-end' : 'flex-start'};
    justify-content: space-evenly;
`;

export const ProjectTitle = styled.h3`
    font-size: 32px;
    font-weight: 700;

    color: white;

    margin: 20px 0px 10px 0px;
`;

export const ProjectDescription = styled.p`
    color: white;
    background-color: ${portfolioBackground200};

    width: 85%;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
`;

export const ProjectTechnologies = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
`;

export const Technology = styled.h4`
    color: ${portfolioActive};
`;

export const ExternalLinks = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;

    align-items: center;
`;

export const GithubLink = styled.a`
    position: relative;
    width: 25px;
    height: 25px;

    background-size: contain;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/%3E%3C/svg%3E");
    :hover {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='${portfolioActive.replace('#', '%23')}' d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/%3E%3C/svg%3E");
    }
`;

export const ExternalLink = styled.a`
    width: 21px;
    height: 21px;

    background-size: contain;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140.429' height='140.429' viewBox='0 0 37.155 37.155'%3E%3Cg stroke='%23fff'%3E%3Cpath d='M13.21 4.101H3.95v29.104h29.104v-9.26M29.085 8.07L14.533 22.622z' fill='none' stroke-width='6'/%3E%3Cpath d='M19.825.132L37.023 17.33V.132z' fill='%23fff' stroke-width='.265'/%3E%3C/g%3E%3C/svg%3E");
    
    :hover {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140.429' height='140.429' viewBox='0 0 37.155 37.155'%3E%3Cg stroke='${portfolioActive.replace('#', '%23')}'%3E%3Cpath d='M13.21 4.101H3.95v29.104h29.104v-9.26M29.085 8.07L14.533 22.622z' fill='none' stroke-width='6'/%3E%3Cpath d='M19.825.132L37.023 17.33V.132z' fill='${portfolioActive.replace('#', '%23')}' stroke-width='.265'/%3E%3C/g%3E%3C/svg%3E");
    }
`;

export const QuoteContainer = styled.div`
    display: grid;
    grid-gap: 25px;
    justify-items: center;

    height: 225px;
    background-color: rgba(255, 255, 255, 0.25);
`;

export const Quote = styled.h2`
    margin: unset;
    text-align: center;
    //text-transform: capitalize;
    align-self: end;

    width: 75%;

    color: white;
    font-size: 32px;
`;

export const QuoteCTAsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-evenly;

    width: 50%;
`;

const buttonCSS = css`
    text-align: center;
    text-transform: capitalize;
    font-family: ${systemFont};
    font-size: 17px;
    font-weight: 700;

    border-radius: 7px;
    padding: 10px 20px;

    filter: brightness(1);
    transition: filter 250ms;
    cursor: pointer;

    :hover {
        filter: brightness(1.2);
    };

    :active {
        filter: brightness(0.8);
    }
`;

export const QuoteCTA = styled.div`
    ${buttonCSS}
    color: black;
    background-color: ${portfolioActive};
`;

export const QuoteAlternateCTA = styled.div`
    ${buttonCSS}
    color: black;
    background-color: ${portfolioActiveSecondary};
`;

export const ProjectsList = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
`;

export const ProjectsTitle = styled.h2`
margin: 20px;
text-align: center;
text-transform: capitalize;
text-decoration: underline;

width: auto;

color: white;
font-size: 32px;
`;