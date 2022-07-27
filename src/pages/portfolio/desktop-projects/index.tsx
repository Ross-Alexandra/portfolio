import { projects } from '../../../app-data/projects';
import { Project } from '../project';
import {ProjectsBanner} from '../../../assets';

import {
    DesktopProjectsContainer
} from './elements';

import {
    QuoteContainer,
    Quote,
    QuoteCTAsContainer,
    ProjectsList,
    ProjectsTitle,
    ProjectPrimaryCTA,
    ProjectSecondaryCTA
} from '../elements';

import { IAppSection } from '../../../dec';

export interface DesktopProjectsProps extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
    setTopLevelPage: (newSection: IAppSection) => void;
}

export function DesktopProjects({active, setTopLevelPage}: DesktopProjectsProps) {
    return (
        <DesktopProjectsContainer id="desktop-projects" active={active}>
            <QuoteContainer backgroundImage={ProjectsBanner} backgroundPositionY={'69%'}>
                <Quote>Need someone to help build powerful &#38; dynamic desktop apps?</Quote>
                <QuoteCTAsContainer>
                    <ProjectPrimaryCTA onClick={() => setTopLevelPage('contact')}>Contact me</ProjectPrimaryCTA>
                    <ProjectSecondaryCTA onClick={() => setTopLevelPage('about')}>Get to know me</ProjectSecondaryCTA>
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