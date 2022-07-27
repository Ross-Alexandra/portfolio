import { projects } from '../../../app-data/projects';
import { Project } from '../project';
import {ProjectsBanner} from '../../../assets';

import {
    OtherProjectsContainer
} from './elements';

import {
    QuoteContainer,
    Quote,
    QuoteCTAsContainer,
    ProjectsList,
    ProjectsTitle,
    ProjectSecondaryCTA,
    ProjectPrimaryCTA
} from '../elements';

import { IAppSection } from '../../../dec';

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
                    How about a data analysis tool? An internal library?
                </Quote>
                <QuoteCTAsContainer>
                    <ProjectPrimaryCTA onClick={() => setTopLevelPage('contact')}>Email me!</ProjectPrimaryCTA>
                    <ProjectSecondaryCTA onClick={() => setTopLevelPage('about')}>See my history</ProjectSecondaryCTA>
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