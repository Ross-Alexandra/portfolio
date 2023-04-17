import {
    RecipeListBanner,
    RewardYourselfBanner,
    ScrimSearchBanner,
    StatTrackerBanner,
    StratbookBanner,
    TrafficLightBanner,
} from '../assets';

export interface Project {
    type: 'web' | 'desktop' | 'mobile' | 'other';
    title: string;
    duration: string;
    image?: string;
    features: string[];
    technology: string[];
    lessons: string[];
    portfolioLink: string;
    githubLink?: string;
    externalLink?: string;
}

export const projects: Project[] = [
    {
        type: 'desktop',
        title: 'Replay Analyzer',
        duration: 'Jan 2023 - Current',
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
        portfolioLink: '/#replay-analyzer',
        githubLink: 'https://github.com/Ross-Alexandra/replay-analyzer/',
    }, {
        type: 'mobile',
        title: 'Reward Yourself',
        duration: 'Jan 2023 - Current',
        image: RewardYourselfBanner,
        features: [
            'Allows users to create a list of tasks, and reward themselves for completing them',
            'Users set a point value for each task, and can spend those points on rewards',
            'Tasks can be recurring, and users can set a frequency for them to repeat',
        ],
        technology: [
            'Uses Ionic & React (with Capacitor) to create a mobile app',
            'Creates a local design system using CSS variables, and CSS modules',
            'Incremental development, with a focus on creating a good user experience',
        ],
        lessons: [
            'Gained experience mentoring a junior developer',
            'Learned how to use Ionic, and how to create a mobile app with React',
            'Learned advanced CSS techniques, and how to create a design system',
        ],
        portfolioLink: '/#reward-yourself',
    }, {
        type: 'mobile',
        title: 'Recipe List',
        duration: 'Nov 2022 - Current',
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
        portfolioLink: '/#recipe-list',
    }, {
        type: 'web',
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
        portfolioLink: '/#volume-traffic-light',
        githubLink: 'https://github.com/Ross-Alexandra/volume-traffic-light/',
        externalLink: 'https://volumetrafficlight.com/',
    }, {
        type: 'web',
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
        portfolioLink: '/#stratbook',
        externalLink: 'https://stratbook.gg',
    }, {
        type: 'desktop',
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
        portfolioLink: '/#comms',
        githubLink: 'https://github.com/Ross-Alexandra/comms',
    }, {
        type: 'other',
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
        portfolioLink: '/#fullstack-spritesheets',
        githubLink: 'https://github.com/Ross-Alexandra/fullstack-spritesheets',
        externalLink: 'https://www.npmjs.com/package/fullstack-spritesheets',
    }, {
        type: 'web',
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
        portfolioLink: '/#scrim-search',
        githubLink: 'https://github.com/Ross-Alexandra/ScrimFinder',
    },
    {
        type: 'other',
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
        portfolioLink: '/#stat-tracker',
        githubLink: 'https://github.com/Ross-Alexandra/siege-stats',
    },
];
