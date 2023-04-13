import { projects } from "../../../../app-data/projects";
import { Project } from "../project";
import {ProjectsBanner} from '../../../../assets';

import {
    WebProjectsContainer,
} from './elements';

import {
    QuoteContainer,
    Quote,
    ProjectsList,
    ProjectsTitle,
} from '../elements';

export interface WebProjectProps extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
}

export function WebProjects({active}: WebProjectProps) {
    return (
        <WebProjectsContainer id="web-projects" active={active}>
            <QuoteContainer backgroundImage={ProjectsBanner} backgroundPositionY={'45%'}>
                <Quote>Want someone to help create beautiful &#38; accessible web apps?</Quote>
            </QuoteContainer>
            <ProjectsTitle>My Web Apps</ProjectsTitle>
            <ProjectsList>
                {projects.filter(({type}) => type === "web").map((project, index) => 
                    <Project project={project} index={index} key={project.title} />    
                )}
            </ProjectsList>
        </WebProjectsContainer>
    );
}