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
    ExternalLink,
    PreviewImageLink
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
            <PreviewImageLink index={index} href={externalLink ?? githubLink ?? ''}  target="_blank" rel="noopener noreferrer">
                <PreviewImage src={previewImageUrl} />
            </PreviewImageLink>
            <ProjectInfoContainer index={index}>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>{description}</ProjectDescription>
                <ProjectTechnologies>
                    {technologies.map((technology, index) => 
                        <Technology key={`${index}-${technology}`}>{technology}</Technology>
                    )}
                </ProjectTechnologies>
                <ExternalLinks>
                    {githubLink && <GithubLink title='GitHub' href={githubLink} target="_blank" rel="noopener noreferrer" />}
                    {externalLink && <ExternalLink href={externalLink} target="_blank" rel="noopener noreferrer" />}
                </ExternalLinks>
            </ProjectInfoContainer>
        </ProjectContainer>
    )
}
