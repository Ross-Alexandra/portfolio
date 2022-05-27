import styled from "@emotion/styled";
import React from "react";
import { portfolioBackground100, rotationTime } from "../../../theme";

interface ActiveAwareDiv extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
}

export const OtherProjectsContainer = styled.div<ActiveAwareDiv>`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;

    display: flex;
    flex-direction: column;

    background-color: ${portfolioBackground100};

    transform-style: preserve-3d;
    transform: translateZ(-1px) rotateY(180deg);

    backface-visibility: hidden;
    overflow: hidden;

    ${({active}: ActiveAwareDiv) => active ? `
        max-height: 5000vh;
    ` : `
        transition: max-height: 1ms;
        transition-delay: ${rotationTime};
        max-height: 0px;
    `}
`;