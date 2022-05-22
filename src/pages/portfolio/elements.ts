import styled from "@emotion/styled";
import React from "react";
import { systemFont, portfolioActive, portfolioInactive } from "../../theme";

interface ActiveAwareProps extends React.HTMLProps<HTMLHeadingElement> {
    active: boolean;
}

export const PortfolioContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    flex-direction: column;
`;

export const PortfolioNav = styled.div`
    display: flex;
    width: 100%;
    height: 90px;
    background-color: #fff1;

    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const NavItem = styled.h2<ActiveAwareProps>`
    font-family: ${systemFont};
    font-weight: 500;
    font-size: 19px;
    line-height: 36px;
    color: ${({active}: ActiveAwareProps) => active ? portfolioActive : portfolioInactive};
`;

export const PortfolioBody = styled.div`
    flex-grow: 1; //AKA Take remaining height.
    width: 100%;
`;
