import {
    AudetteBanner,
    BamboraBanner,
    BattlefyBanner,
    CradlepointBanner,
    TutelaBanner,
    UvicBanner,
} from '../assets';

export interface Job {
    company: string;
    logo: string;
    title: string;
    duration: string;
    responsibilities: string[];
    achievements: string[];
    lessons: string[];
    chips: [string, string, string, ...string[]];
    portfolioLink?: string;
}

export const jobs: Job[] = [{
    company: 'Battlefy',
    logo: BattlefyBanner,
    title: 'Full Stack Engineer',
    duration: 'Sept 2021 - Apr 2023',
    responsibilities: [
        'Improved & maintained core platform with user-centered features',
        'Developed white-labeled web experiences for B2B clients',
        'Led team tasks: retrospectives, prototypes, tech guidance, sprint management, etc',
    ],
    achievements: [
        'Developed 2 new features which drove mass adoption of the platform for a core user segment',
        "Developed 9 white-labeled web experiences for Battlefy's B2B partners",
        'Increased sprint velocity & reduced dev blocked time with new processes',
    ],
    lessons: [
        'Consideration of user actions at every level of development leads to successful products',
        'New processes require champions to prevent people bypassing them',
        'Clear requirements, designs, and planning are necessary for successful products',
    ],
    chips: ['TypeScript', 'JavaScript', 'React', 'NodeJS', 'Express', 'MongoDB', 'PostgreSQL', 'StoryBook', 'Firebase'],
    portfolioLink: '/#battlefy',
}, {
    company: 'Tutela',
    logo: TutelaBanner,
    title: 'Jr. Java Developer',
    duration: 'Jan 2020 - Dec 2020 (extended co-op)',
    responsibilities: [
        'Creating BigQuery pipelines to streamline data processing',
        'Collaborate with senior data scientists to identify & solve data issues',
        'Visualized critical data to enable simpler QA processes',
    ],
    achievements: [
        "Discovered a bug with data collection in Tutela's SDK",
        'Created an automated system which significantly reduced the time required to validate data',
    ],
    lessons: [
        'It is not always better to automate a process, especially if it would take more time to automate than to do manually',
        'It is okay to do exploratory work when requirements are unclear',
    ],
    chips: ['Java', 'BigQuery', 'Python', 'Matplotlib', 'Java Data Streams'],
}, {
    company: 'Audette',
    logo: AudetteBanner,
    title: 'Jr. Full Stack Developer',
    duration: 'May 2019 - Sep 2019 (co-op)',
    responsibilities: [
        "Maintaining & Creating new features for Audette's web application",
        'Creating a pipeline to automate the process of bootstrapping new physical devices',
    ],
    achievements: [
        'Created an automated system which significantly reduced the time required to bootstrap new devices',
        'Got very good at ping pong',
    ],
    lessons: [
        'Internal and external collaboration is essential to the success of a project, especially when working with a small team',
        'UI & UX design is not exact science, and it is important to be flexible when working with designers',
    ],
    chips: ['Javascript', 'Python', 'React', 'Django', 'GCP', 'Puppet'],
}, {
    company: 'Bambora',
    logo: BamboraBanner,
    title: 'Software Developer',
    duration: 'Sep 2018 - Dec 2018 (co-op)',
    responsibilities: [
        'Design & Development of a greenfield payment processing system',
        'Created a RESTful API which could generate & parse comprehensive datagrams for payment processing',
    ],
    achievements: [
        'Successfully completed a payment using the greenfield system', 
        'Designed and created a system which translated between web requests & socket datagrams',
    ],
    lessons: [
        'Having extremely rigid requirements, and test environments can be a blessing and a curse',
        'System design is more about understanding the problem, than having more experience with the technology',
    ],
    chips: ['Python', 'Django', 'PostgreSQL', 'Websockets', 'Locust'],
}, {
    company: 'UVIC',
    logo: UvicBanner,
    title: 'Software Development Intern',
    duration: 'Jan 2018 - Apr 2018 (co-op)',
    responsibilities: [
        'Creating visualizations of weather data for the Victoria area',
        "Parsing & processing data from UVIC's archival SQL database",
    ],
    achievements: [
        'Created visualizations and data insights which were used in a published research paper on microclimates in Victoria',
        "Created smaller applications which were used by master's students to analyze their data",
    ],
    lessons: [
        'The importance of committing often, and having proper git hygiene',
        'Applying the correct technology to the problem at hand, rather than trying to shoehorn a solution',
    ],
    chips: ['Python', 'PyGAD', 'MySQL', 'Matplotlib', 'MATLAB', 'Pandas'],
}, {
    company: 'Cradlepoint',
    logo: CradlepointBanner,
    title: 'Software Development Intern',
    duration: 'Jun 2017 - Sep 2017 (co-op)',
    responsibilities: [
        'Develop a machine learning model to determine platform health from telemetry data',
    ],
    achievements: [
        'Created a basic model which could categorize telemetry data in order to determine platform health',
    ],
    lessons: [
        "Using libraries isn't cheating, and can save a lot of time",
        'It is important to work with the data you have, rather than trying to find the perfect data set',
    ],
    chips: ['Python', 'Pytorch', 'Pytest'],
}];

export const CuratedJobs: Job[] = [
    jobs.find(job => job.company === 'Battlefy'),
    jobs.find(job => job.company === 'Tutela'),
].filter(Boolean) as Job[];
