import { projects } from '../../../projects';
import { Project } from '../project';

import {
    OtherProjectsContainer
} from './elements';

import {
    QuoteContainer,
    Quote,
    QuoteCTAsContainer,
    QuoteCTA,
    QuoteAlternateCTA,
    ProjectsList,
    ProjectsTitle
} from '../elements';


export interface OtherProjectsProps extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
}

export function OtherProjects({active}: OtherProjectsProps) {
    return (
        <OtherProjectsContainer id="other-projects" active={active}>
            <QuoteContainer>
                <Quote>
                    Require someone to help produce a scalable &#38; robust backend service?
                    <br/>
                    How about data analysis tool? Internal Library?
                </Quote>
                <QuoteCTAsContainer>
                    <QuoteCTA>Email me!</QuoteCTA>
                    <QuoteAlternateCTA>See my history</QuoteAlternateCTA>
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