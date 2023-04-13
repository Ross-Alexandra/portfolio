import styled from "@emotion/styled";
import React from "react";
import { portfolioBackground100 } from "../../../../theme";

interface ActiveAwareDiv extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
}

export const OtherProjectsContainer = styled.div<ActiveAwareDiv>`
    display: flex;
    flex-direction: column;

    background-color: ${portfolioBackground100};
`;