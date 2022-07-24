import styled from "@emotion/styled";
import React, { HTMLProps } from "react";
import { externalLinkUrl } from "../../assets/icons";
import { systemFont, portfolioActive, portfolioBackground200 } from "../../theme";

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

    position: sticky;
    top: 0;
    z-index: 1;
`;

export const NavItem = styled.h2<ActiveAwareProps>`
    font-family: ${systemFont};
    font-weight: 600;
    font-size: 19px;
    line-height: 36px;
    text-transform: capitalize;

    color: ${portfolioActive};
    transition: filter 250ms;
    :hover {
        filter: grayscale(0);
    }

    ${({active}: ActiveAwareProps) => active ? `
        cursor: default;
        filter: grayscale(0);
    ` : `
        cursor: pointer;
        filter: grayscale(1);
    `}

    :after {
        content: '';
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 3px;

        background-color: ${portfolioActive};

        transition: transform 250ms;
        transform: ${({active}: ActiveAwareProps) => active ? 'scaleX(1)' : 'scaleX(0)'};
    }
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

export const PreviewImageLink = styled.a<IndexAwareImg>`
    position: absolute;
    top: 25px;
    height: 375px;
    width: auto;
    left: ${({index}: IndexAwareImg) => index % 2 ? '10%' : '45%'};

    transition: transform 250ms;
    :hover {
        transform: scale(1.1);
        z-index: 1;
    }
`;

export const PreviewImage = styled.img`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    height: 100%;
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
    padding: 15px;
    border-radius: 10px;
    margin-top: 10px;

    white-space: pre-line;
    line-height: 1.5;
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
    background-image: url(${externalLinkUrl()});
    
    :hover {
        background-image: url(${externalLinkUrl(portfolioActive)});
    }
`;

export interface IQuoteContainer extends HTMLProps<HTMLDivElement> {
    backgroundImage: string;
    backgroundPositionY: string;
    overlayOpacityHex?: string;
}
export const QuoteContainer = styled.div<IQuoteContainer>`
    display: grid;
    grid-gap: 25px;
    justify-items: center;

    height: 350px;

    background: 
        ${({overlayOpacityHex='c0'}) => `linear-gradient(0, #000000${overlayOpacityHex}, #000000${overlayOpacityHex})`},
        url(${({backgroundImage}) => backgroundImage});
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position-y: ${({backgroundPositionY}) => backgroundPositionY};
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

export const ProjectsList = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
`;

export const ProjectsTitle = styled.h2`
    margin: 20px;
    text-align: center;
    text-transform: capitalize;

    width: auto;

    color: white;
    font-size: 34px;
    font-weight: 700;
`;