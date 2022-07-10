import { projects } from '../../../projects';
import { Project } from '../project';
import ProjectsBanner from '../../../assets/projects-banner.png';

import {
    OtherProjectsContainer
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

export interface OtherProjectsProps extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
    setTopLevelPage: (newSection: IAppSection) => void;
}

export function OtherProjects({active, setTopLevelPage}: OtherProjectsProps) {
    return (
        <OtherProjectsContainer id="other-projects" active={active}>
            <QuoteContainer backgroundImage={ProjectsBanner} backgroundPositionY={'88%'}>
                <Quote>
                    Require someone to help produce a scalable &#38; robust backend service?
                    <br/>
                    How about data analysis tool? Internal Library?
                </Quote>
                <QuoteCTAsContainer>
                    <PrimaryCTA onClick={() => setTopLevelPage('contact')}>Email me!</PrimaryCTA>
                    <SecondaryCTA onClick={() => setTopLevelPage('about')}>See my history</SecondaryCTA>
                </QuoteCTAsContainer>
            </QuoteContainer>
            <ProjectsTitle>My Other Projects</ProjectsTitle>
            <ProjectsList>
                {projects.filter(({type}) => type === "other").map((project, index) => 
                    <Project project={project} index={index} key={project.title} />    
                )}
            </ProjectsList>
        </OtherProjectsContainer>
    );
}