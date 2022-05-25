import styled from "@emotion/styled";
import React from "react";
import { portfolioBackground100 } from "./theme";

export const ContentContainer = styled.div`
width: 100%;
height: 100vh;
background-color: ${portfolioBackground100};

position: relative;
z-index: 1;
`;

interface ParalaxProps extends React.HTMLProps<HTMLDivElement> {
scrollHeight: number;
viewportHeight: number;
}

export const ParalaxDiv = styled.div<ParalaxProps>`
position: fixed;
left: 0px;
right: 0px;

overflow: scroll;

${({scrollHeight, viewportHeight}: ParalaxProps) => `
    top: ${viewportHeight - scrollHeight}px;
    bottom: 0px;
    overflow: ${viewportHeight === scrollHeight ? 'scroll' : 'hidden'}
`}
`;
