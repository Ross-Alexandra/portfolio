import { projects } from '../../../projects';
import { Project } from '../project';

import {
    DesktopProjectsContainer
} from './elements';

import {
    QuoteContainer,
    Quote,
    ProjectsList,
} from '../elements';

export interface DesktopProjectsProps extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
}

export function DesktopProjects({active}: DesktopProjectsProps) {
    return (
        <DesktopProjectsContainer id="desktop-projects" active={active}>
            <QuoteContainer>
                <Quote>Lorem Ipsum Set Delorum El Torani Something or other</Quote>
            </QuoteContainer>
            <ProjectsList>
                {projects.filter(({type}) => type === "desktop").map((project, index) => 
                    <Project project={project} index={index} key={project.title} />    
                )}
            </ProjectsList>
        </DesktopProjectsContainer>
    );
}