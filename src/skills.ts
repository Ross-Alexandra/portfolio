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
        iconTitles: ['React', 'NodeJS', 'MongoDB'],
        title: 'Web Apps',
        description: 'I have built over a dozen single-page and multi-page apps across my time as a developer, both professionally and casually. In that time I’ve learned that it isn’t about what your app can do, it’s about how well the user can do it with your app'
    }, {
        iconUrls: [electonLogoUrl, typescriptLogoUrl, pythonMulticolorLogoUrl],
        iconTitles: ['Electron', 'TypeScript', 'Python'],
        title: 'Desktop Apps',
        description: 'When special requirements render web apps infeasible, I often turn to desktop apps. Rather than creating over-engineered & multi-layered tools, I leverage the ability of desktop apps to serve as both UI and API to create much simpler tools.'
    }, {
        iconUrls: [discordLogoUrl, pythonMulticolorLogoUrl, postgresLogoUrl],
        iconTitles: ['Discord Bot', 'Python', 'PostgreSQL'],
        title: 'Bots as Apps',
        description: 'When user interfaces get in the way of simple tools, I build Discord/Slack bots. I find that a well made command-interface can be much easier to learn and build, leading to more productive and happier users.'
    }
];
