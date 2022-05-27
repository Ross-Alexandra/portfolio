import { projects } from '../../../projects';
import { Project } from '../project';

import {
    OtherProjectsContainer
} from './elements';

import {
    QuoteContainer,
    Quote,
    ProjectsList,
} from '../elements';

export interface OtherProjectsProps extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
}

export function OtherProjects({active}: OtherProjectsProps) {
    return (
        <OtherProjectsContainer id="other-projects" active={active}>
            <QuoteContainer>
                <Quote>Projects don&apos;t always need a UI, do they?</Quote>
            </QuoteContainer>
            <ProjectsList>
                {projects.filter(({type}) => type === "other").map((project, index) => 
                    <Project project={project} index={index} key={project.title} />    
                )}
            </ProjectsList>
        </OtherProjectsContainer>
    );
}