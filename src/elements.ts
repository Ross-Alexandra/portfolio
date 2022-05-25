import styled from "@emotion/styled";
import React from "react";
import { portfolioBackground100 } from "./theme";

interface ParalaxProps extends React.HTMLProps<HTMLDivElement> {
    paralaxHeight: number;
    viewportHeight: number;
}

export const ParalaxDiv = styled.div<ParalaxProps>`
    position: fixed;
    left: 0px;
    right: 0px;
    background-color: ${portfolioBackground100};

    overflow: scroll;

    ${({paralaxHeight, viewportHeight}: ParalaxProps) => `
        top: ${viewportHeight - paralaxHeight}px;
        bottom: 0px;
        overflow: ${viewportHeight === paralaxHeight ? 'scroll' : 'hidden'}
    `}
`;

export const PageContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    bottom: 0px;
`;
