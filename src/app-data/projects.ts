import {
    RecipeListBanner,
    IIMBIcon,
    ScrimSearchBanner,
    StatTrackerBanner,
    StratbookBanner,
    TrafficLightBanner,
} from '../assets';

export interface Project {
    types: ('web' | 'desktop' | 'mobile' | 'other')[];
    title: string;
    duration: string;
    image?: string;
    features: string[];
    technology: string[];
    lessons: string[];
    chips: [string, string, string, ...string[]];
    links: { text: string, link: string, external: boolean }[];
    isCurated?: true;
}

export const projects: Project[] = [{
    types: ['web', 'mobile'], 
    title: 'Is It My Birthday?',
    duration: 'Jan 2024 - Feb 2024',
    image: IIMBIcon,
    features: [
        'Allows users to check if it\'s their birthday based on a saved date',
        'Has a competitive element with leaderboards for longest streak, and consecutive birthday checks',
        'Prioritizes user convenience and security with passwordless authentication, and a hassle-free login experience',
    ],
    technology: [
        'Uses Ionic Capacitor & Vue to create a web & mobile app',
        'Micro-service based backend hosted on a bare-metal server via a VPS',
        'Custom emailing service to send login links to users',
    ],
    lessons: [
        'For early projects, taking the time to create a CI/CD pipeline is likely not worth it, and can be replaced with strong bash scripts',
        'Learned how to create a passwordless authentication system using email',
        'Learned about deploying microservices such as email clients, and backends on a bare-metal server',
    ],
    chips: ['Typescript', 'Vue', 'Ionic/Capacitor', 'Nginx', 'Python/FastAPI', 'MySQL'],
    links: [{
        text: 'View on Portfolio',
        link: '/#is-it-my-birthday?',
        external: false,
    }, {
        text: 'View on GitHub',
        link: 'https://github.com/Ross-Alexandra/is-it-my-birthday-app',
        external: true,
    }, {
        text: 'On the Web',
        link: 'https://isitmybirth.day',
        external: true,
        
    }, {
        text: 'Play Store',
        link: 'https://play.google.com/store/apps/details?id=com.isitmybirthday',
        external: true,
    }],
    isCurated: true,
}, {
    types: ['desktop'],
    title: 'Replay Analyzer',
    duration: 'Jan 2023 - Mar 2023',
    features: [
        'Allows users to analyze their Rainbow Six Siege .rec replay files',
        'Users can view their stats, and compare them to their teammates',
        'Users can filter & manage their replays, and export them to a spreadsheet',
    ],
    technology: [
        'Uses Electron & React to create a desktop app',
        'Uses a third-party program to parse .rec files',
        'Implements a filtering system to allow users to filter their replays by completely custom criteria',
    ],
    lessons: [
        'Learned how to use Electron, and how to create a desktop app with React',
        'Learned how to interface with third-party programs with Electron',
        'Learned how to create a filtering system that allows users to filter by completely custom criteria',
    ],
    chips: ['Typescript', 'React', 'Electron', 'NodeJS'],
    links: [{
        text: 'View on Portfolio',
        link: '/#replay-analyzer',
        external: false,
    }, {
        text: 'View on GitHub',
        link: 'https://github.com/Ross-Alexandra/replay-analyzer/',
        external: true,
    }],
    isCurated: true,
}, {
    types: ['mobile'], 
    title: 'Recipe List',
    duration: 'Nov 2022 - Jan 2023',
    image: RecipeListBanner,
    features: [
        'Allows users to create, and manage a list of recipes',
        'Users can add items from their recipes to a shopping list, and check them off as they buy them',
        'Users can also manage what meals they want to eat for the week, and generate a shopping list for those meals',
    ],
    technology: [
        'Uses Ionic & React (with Capacitor) to create a mobile app',
        'Uses local storage and custom data models to store recipes, and shopping lists',
    ],
    lessons: [
        'Learned how to use Ionic, and how to create a mobile app with React',
        "Learned how to use local storage to store data on a user's device",
        'Learned how to use custom data models to store data in a way that is easy to use',
    ],
    chips: ['Typescript', 'React', 'Ionic/Capacitor'],
    links: [{
        text: 'View on Portfolio',
        link: '/#recipe-list',
        external: false,
    }, {
        text: 'View on GitHub',
        link: 'https://github.com/Ross-Alexandra/recipe-list',
        external: true,
    }],
}, {
    types: ['web'],
    title: 'Volume Traffic Light',
    duration: '24-hour project (2022)',
    image: TrafficLightBanner,
    features: [
        'Allows users to monitor the volume in a room, and see if it is too loud or too quiet',
        'Used in a classroom to monitor the volume of students, and alert the teacher if it is too loud or too quiet',
    ], 
    technology: [
        "Uses a computer's microphone, and a React frontend to display the volume level",
        'Allows users to set a threshold for green, yellow, and red lights',
    ],
    lessons: [
        'Gained experience creating a project in a short amount of time',
        "Learned how to use the Web Audio API to get audio data from a computer's microphone",
        "Gained experience soliciting requirements, and creating a project from a client's needs",
    ],
    chips: ['Typescript', 'React', 'Web Audio API', 'Firebase'],
    links: [{
        text: 'View on Portfolio',
        link: '/#volume-traffic-light',
        external: false,
    }, {
        text: 'View on GitHub',
        link: 'https://github.com/Ross-Alexandra/volume-traffic-light/',
        external: true,
    }, {
        text: 'On the Web',
        link: 'https://volumetrafficlight.com',
        external: true,
    }],
}, {
    types: ['web'],
    title: 'Stratbook',
    duration: 'Jun 2020 - Aug 2022',
    image: StratbookBanner,
    features: [
        "Allows users to create strategies for Tom Clancy's Rainbow Six: Siege",
        'Users can export, and import strategies as images to share with others',
        'Long-term support to keep balancing, and content up-to-date for each season',
    ],
    technology: [
        'Custom SVG-based drawing interface',
        "Employs stenography to store strategy meta in the strategy's image",
        'Uses React, TypeScript, and in-place data models to allow for seamless content updates',
    ],
    lessons: [
        'Gathering user information via interviews and surveys is a great way to understand user needs',
        'Learned how to use SVGs, and how to allow users to interact with them',
        'Learned how to use stenography to store data in images',
    ],
    chips: ['JavaScript', 'React', 'SVG API', 'Canvas API', 'Stenography', 'Firebase', 'Jenkins CI/CD'],
    links: [{
        text: 'Visit StratBook.gg',
        link: 'https://stratbook.gg',
        external: true,
    }, {
        text: 'Learn About StratBook',
        link: '/#stratbook',
        external: false,
    }],
    isCurated: true,
}, {
    types: ['desktop'],
    title: 'Comms',
    duration: 'Mar 2022 - Apr 2022',
    features: [
        'Allows users to set a hotkey which will lower (but not necessarily mute) the volume of a specific app',
    ],
    technology: [
        'Electron-based desktop app',
        'Uses Python to interact with the Windows API to set the volume of an app',
    ],
    lessons: [
        'Learned how to use Electron to create a desktop app',
        'Learned how to use Python to interact with the Windows API',
    ],
    chips: ['Typescript', 'React', 'Electron', 'Python', 'Win API'],
    links: [{
        text: 'View on Portfolio',
        link: '/#comms',
        external: false,
    }, {
        text: 'View on GitHub',
        link: 'https://github.com/Ross-Alexandra/comms',
        external: true,
    }],
}, {
    types: ['other'],
    title: 'Fullstack Spritesheets',
    duration: '24-hour project (2022)',
    features: [
        'Allows users to generate a spritesheet from existing assets',
        'Allows users to decrease total downloads by only downloading 1 relatively large file, saving the static cost per download',
    ],
    technology: [
        'Uses npx to allow users to generate a spritesheet from the command line',
        'Exposes an npm library which allows users to use images from their spritesheet in their code',
    ],
    lessons: [
        'Learned how to use npx to create a tool which can be used from the command line',
        'Learned how to use npm to create a library which can be used in other projects',
    ],
    chips: ['TypeScript', 'Node.js', 'npm', 'npx'],
    links: [{
        text: 'View on Portfolio',
        link: '/#and-more',
        external: false,
    }, {
        text: 'View on GitHub',
        link: 'https://github.com/Ross-Alexandra/fullstack-spritesheets',
        external: true,
    }, {
        text: 'NPM',
        link: 'https://www.npmjs.com/package/fullstack-spritesheets',
        external: true,
    }],
}, {
    types: ['web'],
    title: 'ScrimSearch',
    image: ScrimSearchBanner,
    duration: 'Apr 2021 - Aug 2021',
    features: [
        'Allows users to find other teams to scrim (practice) with',
        'Automatically matches teams based on map, and time preferences',
        'Uses a Discord bot to send invitations to teams, and allow them to plan their scrims',
    ],
    technology: [
        'Dockerized microservices architecture deployed on a bare-metal server',
        'Uses a React frontend, a Flask backend, and a Discord bot written in Python',
        'Uses a PostgreSQL database to map & time preferences for scrims',
    ],
    lessons: [
        'Learned how to use Docker to containerize microservices',
        'Learned how to deploy a microservices architecture on a bare-metal server',
        'Learned how to setup CI/CD pipelines using Jenkins',
    ],
    chips: ['Typescript', 'Python', 'React', 'Flask', 'PostgreSQL', 'Docker', 'Jenkins CI/CD', 'Discord API'],
    links: [{
        text: 'View on Portfolio',
        link: '/#and-more',
        external: false,
    }, {
        text: 'View on GitHub',
        link: 'https://github.com/Ross-Alexandra/ScrimFinder',
        external: true,
    }],
},
{
    types: ['other'],
    title: 'Stat Tracker',
    duration: 'Mar 2021 - Nov 2021',
    image: StatTrackerBanner,
    features: [
        'Allows users to upload a file generated by a third-party tool using a Discord bot',
        'After processing, teams can then send another command to check the data (grouped by various user-defined tags) at any time',
    ],
    technology: [
        'Discord bot written in Python',
        'Uses PostgreSQL to store data',
        'deployed on a bare-metal server',
    ],
    lessons: [
        'Learned how to use Python to interact with the Discord API',
        'Learned how to use PostgreSQL to store data',
        'Learned how to deploy a Python app on a bare-metal server using Docker & Jenkins',
    ],
    chips: ['Python', 'PostgreSQL', 'Docker', 'Jenkins CI/CD', 'Discord API'],
    links: [{
        text: 'View on Portfolio',
        link: '/#and-more',
        external: false,
    }, {
        text: 'View on GitHub',
        link: 'https://github.com/Ross-Alexandra/siege-stats',
        external: true,
    }],
},
];

export const CuratedProjects = projects.filter(project => project.isCurated);
