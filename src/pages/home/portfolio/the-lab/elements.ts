import styled from "@emotion/styled";
import React from "react";
import { portfolioBackground100 } from "../../../../theme";
import { GithubLink, ProjectsTitle } from "../elements";

interface ActiveAwareDiv extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
}

export const LabContainer = styled.div<ActiveAwareDiv>`
    display: flex;
    flex-direction: column;

    background-color: ${portfolioBackground100};
`;

export const LabTitle = styled(ProjectsTitle)`
    margin: 20px 20px 5px 20px;
`;

export const LabSubtitle = styled.p`
    margin: 0px 0px 25px 0px;
    color: white;
    text-align: center;
`;

export const LabProjects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0px 15% 50px 15%;

    row-gap: 25px;

    @media (max-width: 900px) {
        padding-inline: 20px;
    }
`;

export const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;
`;

export const ProjectTitle = styled.h2`
    margin: unset;
    color: white;
    width: 100%;

    :nth-of-type(odd) {
        text-align: left;
    }

    :nth-of-type(even) {
        text-align: right;
    }
`;

export const ProjectDescription = styled.p`
    margin: 0px 0px 10px 0px;
    color: white;

    width: 100%;

    :nth-of-type(odd) {
        text-align: left;
    }

    :nth-of-type(even) {
        text-align: right;
    }
`;

export const FrameWrapper = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 2/1;

    @media (max-width: 900px) {
        aspect-ratio: unset;
        height: 70vh;
    }
`;

export const ProjectIFrame = styled.iframe`
    position: absolute;
    inset: 0px;

    width: 100%;
    height: 100%;
`;

export const IFrameGithubLink = styled(GithubLink('black'))`
    position: absolute;
    bottom: 50px;
    right: 50px;

    width: 50px;
    height: 50px;

    @media (max-width: 900px) {
        bottom: 25px;
        right: 25px;

        width: 25px;
        height: 25px;
    }
`;