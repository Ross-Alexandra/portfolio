import styled from "@emotion/styled";
import React from "react";
import { portfolioBackground } from "../../../../theme";

interface ActiveAwareDiv extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
}

export const DesktopProjectsContainer = styled.div<ActiveAwareDiv>`
    display: flex;
    flex-direction: column;

    background-color: ${portfolioBackground};
`;
