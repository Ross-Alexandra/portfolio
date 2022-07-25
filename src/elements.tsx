import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { portfolioBackground100, portfolioActive, portfolioActiveSecondary, systemFont } from "./theme";

interface ParalaxProps extends React.HTMLProps<HTMLDivElement> {
    paralaxHeight: number;
    viewportHeight: number;
}

export const ParalaxDiv = styled.div<ParalaxProps>`
    position: fixed;
    left: 0px;
    right: 0px;
    background-color: ${portfolioBackground100};

    ${({paralaxHeight, viewportHeight}: ParalaxProps) => `
        top: ${viewportHeight - paralaxHeight}px;
        bottom: 0px;
        overflow: ${viewportHeight === paralaxHeight ? 'scroll' : 'hidden'};
    `}

    transition: top 200ms;
`;

export const PageContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    bottom: 0px;
`;

export const buttonCSS = css`
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

export const primaryButtonCSS = css`
    ${buttonCSS}
    color: black;
    background-color: ${portfolioActive};

    :hover {
        color: white;
    }
`;

export const secondaryButtonCSS = css`
    ${buttonCSS}
    color: black;
    background-color: ${portfolioActiveSecondary};

    :hover {
        color: white;
    }
`;

export const PrimaryCTA = styled.div`
    ${primaryButtonCSS}
`;

export const SecondaryCTA = styled.div`
    ${secondaryButtonCSS}
`;
