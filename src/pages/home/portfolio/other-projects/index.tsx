import { projects } from '../../../../app-data/projects';
import { Project } from '../project';
import {ProjectsBanner} from '../../../../assets';

import {
    OtherProjectsContainer
} from './elements';

import {
    QuoteContainer,
    Quote,
    ProjectsList,
    ProjectsTitle,
} from '../elements';


export interface OtherProjectsProps extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
}

export function OtherProjects({active}: OtherProjectsProps) {
    return (
        <OtherProjectsContainer active={active}>
            <QuoteContainer backgroundImage={ProjectsBanner} backgroundPositionY={'88%'}>
                <Quote>
                    Require someone to help produce a scalable &#38; robust backend service?
                    <br/>
                    How about a data analysis tool? An internal library?
                </Quote>
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