import { ISkill } from "./global-interfaces";
import { 
    nodeJSULogoUrl,
    pythonMulticolorLogoUrl,
    reactLogoUrl,
    electonLogoUrl,
    discordLogoUrl,
    postgresLogoUrl,
    mongoLogoUrl,
    typescriptLogoUrl
} from "./icons";

export const skills: ISkill[] = [
    {
        iconUrls: [reactLogoUrl, nodeJSULogoUrl, mongoLogoUrl],
        title: 'Web Apps',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }, {
        iconUrls: [electonLogoUrl, typescriptLogoUrl, pythonMulticolorLogoUrl],
        title: 'Desktop Apps',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }, {
        iconUrls: [pythonMulticolorLogoUrl, reactLogoUrl, postgresLogoUrl],
        title: 'Data Analysis and Visualization',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }, {
        iconUrls: [discordLogoUrl, pythonMulticolorLogoUrl, postgresLogoUrl],
        title: 'Automation with Bots',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
];
