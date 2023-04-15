export type IAppSection = "portfolio" | "about" | "contact";
export type IProjectType = "web" | "desktop" | "other"

export interface ISkill {
    iconUrls: string[];
    iconTitles: string[];
    title: string;
    description: string;
};

declare global {
    interface Window {
        FIREBASE_APPCHECK_DEBUG_TOKEN: any;
    }
}