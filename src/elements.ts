import styled from "@emotion/styled";
import React from "react";

export const ContentContainer = styled.div`
width: 100%;
height: 100vh;
background-color: #333;

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

overflow: hidden;

${({scrollHeight, viewportHeight}: ParalaxProps) => `
    top: ${viewportHeight - scrollHeight}px;
    bottom: 0px;
`}
`;

export const PageContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    bottom: 0px;
`;