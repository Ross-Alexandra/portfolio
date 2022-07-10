import { projects } from "../../../projects";
import { Project } from "../project";

import {
    WebProjectsContainer,
} from './elements';

import {
    QuoteContainer,
    Quote,
    QuoteCTAsContainer,
    QuoteCTA,
    QuoteAlternateCTA,
    ProjectsList,
    ProjectsTitle
} from '../elements';

export interface WebProjectProps extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
}

export function WebProjects({active}: WebProjectProps) {
    return (
        <WebProjectsContainer id="web-projects" active={active}>
            <QuoteContainer>
                <Quote>Want someone to help create beautiful &#38; accessible web apps?</Quote>
                <QuoteCTAsContainer>
                    <QuoteCTA>Get in touch</QuoteCTA>
                    <QuoteAlternateCTA>Learn about me</QuoteAlternateCTA>
                </QuoteCTAsContainer>
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