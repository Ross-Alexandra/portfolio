export type IAppSection = "portfolio" | "about" | "contact";
export type IProjectType = "web" | "desktop" | "other"

export interface IProject {
    type: IProjectType;
    title: string;
    description: string;
    previewImageUrl: string;
    technologies: string[];
    githubLink?: string;
    externalLink?: string;
};

export interface ISkill {
    iconUrls: string[];
    title: string;
    description: string;
};
