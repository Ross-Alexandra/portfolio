export type IAppSection = "portfolio" | "about" | "contact";

export interface IProject {
    title: string;
    description: string;
    previewImageUrl: string;
    technologies: string[];
    githubLink?: string;
    externalLink?: string;
};
