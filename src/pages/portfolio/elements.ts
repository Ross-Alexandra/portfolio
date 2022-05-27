import styled from "@emotion/styled";
import React from "react";
import { systemFont, portfolioActive, portfolioInactive, portfolioBackground200 } from "../../theme";

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
    font-weight: 500;
    font-size: 19px;
    line-height: 36px;

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
    width: 45%;
    left: ${({index}: IndexAwareImg) => index % 2 ? '10%' : '45%'};
    
    aspect-ratio: 4 / 3;
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
`;

export const GithubLink = styled.a`
    width: 40px;
    height: 40px;

    background-image: url('https://via.placeholder.com/40x40');
`;

export const ExternalLink = styled.a`
    width: 40px;
    height: 40px;

    background-image: url('https://via.placeholder.com/40x40');
`;

export const QuoteContainer = styled.div`
    display: grid;
    place-items: center;

    height: 225px;
`;

export const Quote = styled.h2`
    margin: unset;
    text-align: center;

    width: 75%;

    color: ${portfolioActive};
    font-size: 32px;
`;

export const ProjectsList = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
`;
