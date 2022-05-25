import styled from "@emotion/styled";
import { portfolioActive } from "../../../theme";

export const WebProjectsContainer = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
`;

export const WebQuoteContainer = styled.div`
    display: grid;
    place-items: center;

    height: 225px;
`;

export const WebQuote = styled.h2`
    margin: unset;
    text-align: center;

    width: 75%;

    color: ${portfolioActive};
    font-size: 32px;
`;

export const ProjectsList = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
`;
