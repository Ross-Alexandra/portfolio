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
        'Using Passwordless authentication is a great way to prioritize user convenience and security by not allowing users to forget their password, and not requiring them to create a new one',
        'Custom emailing services are notoriously finicky and can be a pain to set up. They probably aren\'t worth it, especially for small projects',
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
        'Despite the stigma, Electron is a fairly-good developer experience for creating desktop apps without the complexity',
        'Electron can be used as a way to wrap a CLI tool in a GUI, using low-level APIs to interact with the CLI tool',
        'Filtering is a much more complex problem than it seems, and can be very difficult to get right',
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
        'Similar to Electron, Ionic\'s Capacitor is a good developer experience for creating mobile apps without the complexity of native development',
        'LocalStorage is a great way to store data for small projects, and is much easier to use than a database',
        'Custom data models make it easy to store data in an object-based system, such as LocalStorage',
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
        'Gathering requirements from a client is not always easy, but is a very important skill to have as a developer',
        'The Web Audio API can be used to interact with a computer\'s microphone, and is fairly easy to use in basic scenarios',
        'Not every project needs to have a rich user interface, and sometimes a simple interface is better for the user',
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
        'SVGs are an extremely powerful tool akin to HTML, and can be used to create very complex interfaces and images',
        'Stenography isn\'t a great way to store data as most image formats compress the data, and can cause it to be lost',
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
        'Performance can be a key factor in a desktop app, and can be difficult to achieve in Electron apps especially when interacting with the Windows API',
        'Python can be used to interact with the Windows API to control low-level system settings, such as app volume',
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
        'NPX is a great way to create a tool which can be used from the command line without needing to install it globally',
        'NPM libraries can be a great way to share code between projects, and can be a great way to create a tool which can be used by others',
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
        'Docker is a great way to containerize microservices, and can be used for deployment with careful planning',
        'Deploying a microservices architecture on a bare-metal server can be a great way to save money, and can be a great way to learn about server management',
        'Jenkins and other CI/CD tools are a great way to always have an idea of the state of your code, and can be a great way to deploy your code with confidence',
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
        'Python is a very versatile language due to its many libraries, and can be used to create a Discord bot with ease',
        'PostgreSQL is a great way to store data, and doesn\'t require a lot of setup to get started',
        'Deploying a Python app on a bare-metal server using Docker & Jenkins is a great way to learn about server management, and can be a great way to save money',
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
