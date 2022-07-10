import { projects } from '../../../projects';
import { Project } from '../project';

import {
    DesktopProjectsContainer
} from './elements';

import {
    QuoteContainer,
    Quote,
    QuoteCTAsContainer,
    ProjectsList,
    ProjectsTitle
} from '../elements';

import {
    PrimaryCTA,
    SecondaryCTA
} from '../../../elements';
import { IAppSection } from '../../../global-interfaces';

export interface DesktopProjectsProps extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
    setTopLevelPage: (newSection: IAppSection) => void;
}

export function DesktopProjects({active, setTopLevelPage}: DesktopProjectsProps) {
    return (
        <DesktopProjectsContainer id="desktop-projects" active={active}>
            <QuoteContainer>
                <Quote>Need someone to help build powerful &#38; dynamic desktop apps?</Quote>
                <QuoteCTAsContainer>
                    <PrimaryCTA onClick={() => setTopLevelPage('contact')}>Contact me</PrimaryCTA>
                    <SecondaryCTA onClick={() => setTopLevelPage('about')}>Get to know me</SecondaryCTA>
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