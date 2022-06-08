import { IProject } from "../../global-interfaces";
import {
    ProjectContainer,
    PreviewImage,
    ProjectInfoContainer,
    ProjectTitle,
    ProjectDescription,
    ProjectTechnologies,
    Technology,
    ExternalLinks,
    GithubLink,
    ExternalLink
} from './elements';

export interface ProjectProps extends React.HTMLProps<HTMLDivElement> {
    project: IProject;
    index: number;
}

export function Project({project, index}: ProjectProps) {
    const {
        title,
        description,
        previewImageUrl,
        technologies,
        githubLink,
        externalLink,
    } = project;

    return (
        <ProjectContainer>
            <PreviewImage index={index} src={previewImageUrl} />
            <ProjectInfoContainer index={index}>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>{description}</ProjectDescription>
                <ProjectTechnologies>
                    {technologies.map((technology, index) => 
                        <Technology key={`${index}-${technology}`}>{technology}</Technology>
                    )}
                </ProjectTechnologies>
                <ExternalLinks>
                    {githubLink && <GithubLink href={githubLink} target="_blank" rel="noopener noreferrer" />}
                    {externalLink && <ExternalLink href={externalLink} target="_blank" rel="noopener noreferrer" />}
                </ExternalLinks>
            </ProjectInfoContainer>
        </ProjectContainer>
    )
}
