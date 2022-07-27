import { projects } from "../../../app-data/projects";
import { Project } from "../project";
import {ProjectsBanner} from '../../../assets';

import {
    WebProjectsContainer,
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

import { IAppSection } from "../../../dec";

export interface WebProjectProps extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
    setTopLevelPage: (newSection: IAppSection) => void;
}

export function WebProjects({active, setTopLevelPage}: WebProjectProps) {
    return (
        <WebProjectsContainer id="web-projects" active={active}>
            <QuoteContainer backgroundImage={ProjectsBanner} backgroundPositionY={'45%'}>
                <Quote>Want someone to help create beautiful &#38; accessible web apps?</Quote>
                <QuoteCTAsContainer>
                    <ProjectPrimaryCTA onClick={() => setTopLevelPage('contact')}>Get in touch</ProjectPrimaryCTA>
                    <ProjectSecondaryCTA onClick={() => setTopLevelPage('about')}>Learn about me</ProjectSecondaryCTA>
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