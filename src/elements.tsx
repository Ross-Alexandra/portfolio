import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { portfolioActive, portfolioActiveSecondary, systemFont, blackText, headerHeight } from "./theme";
import { PortfolioLogo } from "./assets";

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

export const Nav = styled.div`
    position: absolute;
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

export const NavLogo = styled(PortfolioLogo)`
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

export interface SelectedAwareProps extends React.HTMLProps<HTMLElement> {
    selected: boolean;
}

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

export const ContentWrapper = styled.div`
    width: 100%;
    height: calc(100svh - ${headerHeight}px);
    background-color: white;
    color: #333333;
    border-color: #333333;

    padding-top: ${headerHeight}px;
`;