import {
    PortfolioBanner,
    QuestionMark,
    RecipeListBanner,
    ScrimSearchBanner,
    StatTrackerBanner,
    TrafficLightBanner,
} from '../assets';

interface Link {
    text: string;
    link: string;
    external: boolean;
}

export interface PortfolioAndMoreInfo {
    title: string;
    description: string;
    image: string;
    externalLinks?: Link[];
}

export const PortfolioAndMore: PortfolioAndMoreInfo[] = [{
    title: 'Recipe List',
    description: 'A recipe app that allows users to create and save recipes. Users can then select ingredients from their saved recipes to create a shopping list which is categorized by aisle.',
    image: RecipeListBanner,
    externalLinks: [{
        text: 'Contact for Demo',
        link: '/contact',
        external: false,
    }],
}, {
    title: 'Volume Traffic Light',
    description: 'A volume traffic light app that allows users to set a volume threshold and then displays a traffic light based on the current volume.',
    image: TrafficLightBanner,
    externalLinks: [{
        text: 'Github',
        link: 'https://github.com/Ross-Alexandra/volume-traffic-light',
        external: true,
    }, {
        text: 'See Live',
        link: 'https://volumetrafficlight.com',
        external: true,
    }],
}, {
    title: 'Comms',
    description: 'A desktop app which allows users to change the volume of specific applications with a hotkey.',
    image: PortfolioBanner,
    externalLinks: [{
        text: 'Github',
        link: 'https://github.com/Ross-Alexandra/comms',
        external: true,
    }],
}, {
    title: 'Full Stack Spritesheets',
    description: 'An npx CLI and npm package which allows users to create and use spritesheets from a folder of images.',
    image: PortfolioBanner,
    externalLinks: [{
        text: 'Github',
        link: 'https://github.com/Ross-Alexandra/fullstack-spritesheets',
        external: true,
    }, {
        text: 'NPM',
        link: 'https://www.npmjs.com/package/fullstack-spritesheets',
        external: true,
    }],
}, {
    title: 'Scrim Search',
    description: 'A web app which allows users to search for Rainbow Six Siege scrims (practice matches).',
    image: ScrimSearchBanner,
    externalLinks: [{
        text: 'Github',
        link: 'github.com/Ross-Alexandra/ScrimFinder',
        external: true,
    }],
}, {
    title: 'Stat Tracker',
    description: 'A discord bot which allows users to track their stats in Rainbow Six Siege.',
    image: StatTrackerBanner,
    externalLinks: [{
        text: 'Github',
        link: 'https://github.com/Ross-Alexandra/siege-stats',
        external: true,
    }],
}, {
    title: 'More coming soon...',
    description: "I'm always working on new projects, so check back soon to see what I've been up to, or get in touch to make your idea a reality!",
    image: QuestionMark,
    externalLinks: [{
        text: 'Contact',
        link: '/contact',
        external: false,
    }],
}];
