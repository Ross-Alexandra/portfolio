import { projects } from "../../../projects";
import { Project } from "../project";

import {
    WebProjectsContainer,
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
import { IAppSection } from "../../../global-interfaces";

export interface WebProjectProps extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
    setTopLevelPage: (newSection: IAppSection) => void;
}

export function WebProjects({active, setTopLevelPage}: WebProjectProps) {
    return (
        <WebProjectsContainer id="web-projects" active={active}>
            <QuoteContainer>
                <Quote>Want someone to help create beautiful &#38; accessible web apps?</Quote>
                <QuoteCTAsContainer>
                    <PrimaryCTA onClick={() => setTopLevelPage('contact')}>Get in touch</PrimaryCTA>
                    <SecondaryCTA onClick={() => setTopLevelPage('about')}>Learn about me</SecondaryCTA>
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