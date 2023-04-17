export type IAppSection = 'portfolio' | 'about' | 'contact';
export type IProjectType = 'web' | 'desktop' | 'other'

export interface ISkill {
    iconUrls: string[];
    iconTitles: string[];
    title: string;
    description: string;
}

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        FIREBASE_APPCHECK_DEBUG_TOKEN: any;
    }
}
