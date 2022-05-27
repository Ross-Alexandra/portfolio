import styled from "@emotion/styled";
import React from "react";
import { portfolioBackground100, rotationTime } from "../../../theme";

interface ActiveAwareDiv extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
}

export const LabContainer = styled.div<ActiveAwareDiv>`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;

    display: flex;
    flex-direction: column;

    background-color: ${portfolioBackground100};

    transform-style: preserve-3d;
    transform: translateX(-50%) rotateY(-90deg);

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