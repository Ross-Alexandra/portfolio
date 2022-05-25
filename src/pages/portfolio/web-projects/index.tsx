import { projects } from "../../../projects";
import { Project } from "../project";

import {
    WebProjectsContainer,
    WebQuoteContainer,
    WebQuote,
    ProjectsList
} from './elements';

export interface WebProjectProps extends React.HTMLProps<HTMLDivElement> {}

export function WebProjects({...props}) {
    return (
        <WebProjectsContainer>
            <WebQuoteContainer>
                <WebQuote>Lorem Ipsum Set Delorum El Torani Something or other</WebQuote>
            </WebQuoteContainer>
            <ProjectsList>
                {projects.map((project, index) => 
                    <Project project={project} index={index} key={project.title} />    
                )}
            </ProjectsList>
        </WebProjectsContainer>
    );
}