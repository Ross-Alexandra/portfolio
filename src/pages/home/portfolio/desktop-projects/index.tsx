import { projects } from '../../../../app-data/projects';
import { Project } from '../project';
import {ProjectsBanner} from '../../../../assets';

import {
    DesktopProjectsContainer
} from './elements';

import {
    QuoteContainer,
    Quote,
    ProjectsList,
    ProjectsTitle,
} from '../elements';


export interface DesktopProjectsProps extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
}

export function DesktopProjects({active}: DesktopProjectsProps) {
    return (
        <DesktopProjectsContainer active={active}>
            <QuoteContainer backgroundImage={ProjectsBanner} backgroundPositionY={'69%'}>
                <Quote>Need someone to help build powerful &#38; dynamic desktop apps?</Quote>
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