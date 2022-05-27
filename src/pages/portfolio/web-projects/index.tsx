import { projects } from "../../../projects";
import { Project } from "../project";

import {
    WebProjectsContainer,
} from './elements';

import {
    QuoteContainer,
    Quote,
    ProjectsList,
} from '../elements';

export interface WebProjectProps extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
}

export function WebProjects({active}: WebProjectProps) {
    return (
        <WebProjectsContainer id="web-projects" active={active}>
            <QuoteContainer>
                <Quote>Lorem Ipsum Set Delorum El Torani Something or other</Quote>
            </QuoteContainer>
            <ProjectsList>
                {projects.filter(({type}) => type === "web").map((project, index) => 
                    <Project project={project} index={index} key={project.title} />    
                )}
            </ProjectsList>
        </WebProjectsContainer>
    );
}