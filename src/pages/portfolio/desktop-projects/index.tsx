import { projects } from '../../../projects';
import { Project } from '../project';

import {
    DesktopProjectsContainer
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

export interface DesktopProjectsProps extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
}

export function DesktopProjects({active}: DesktopProjectsProps) {
    return (
        <DesktopProjectsContainer id="desktop-projects" active={active}>
            <QuoteContainer>
                <Quote>Need someone to help build powerful &#38; dynamic desktop apps?</Quote>
                <QuoteCTAsContainer>
                    <QuoteCTA>Contact me</QuoteCTA>
                    <QuoteAlternateCTA>Get to know me</QuoteAlternateCTA>
                </QuoteCTAsContainer>
            </QuoteContainer>
            <ProjectsTitle>My Desktop Apps</ProjectsTitle>
            <ProjectsList>
                {projects.filter(({type}) => type === "desktop").map((project, index) => 
                    <Project project={project} index={index} key={project.title} />    
                )}
            </ProjectsList>
        </DesktopProjectsContainer>
    );
}