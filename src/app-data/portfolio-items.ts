import {
    ChessComBanner,
    ConnectedCupBanner,
    DesignSystemSlide1,
    DesignSystemSlide2,
    DesignSystemSlide3,
    DesignSystemSlide4,
    DesignSystemSlide5,
    NHL22Banner,
    ReplayAnalyzerSlide1,
    ReplayAnalyzerSlide2,
    ReplayAnalyzerSlide3,
    ReplayAnalyzerSlide4,
    RewardYourselfSlide1,
    RewardYourselfSlide2,
    RewardYourselfSlide3,
    RewardYourselfSlide4,
    RewardYourselfSlide5,
    RewardYourselfSlide6,
    RewardYourselfSlide7,
    StratBook,
    StratbookSlide1,
    StratbookSlide2,
    StratbookSlide3,
    StratbookSlide4,
    StratbookSlide5,
    StratbookSlide6,
    StratbookSlide7,
    StratbookSlide8,
    ZotacCupBanner,
    ePLBanner,
} from '../assets';

interface PrimaryTile {
    title: string;
    image: string;
    externalLink?: string;
}

interface Button {
    text: string;
    link: string;
    external: boolean;
}

export interface PortfolioPageInfo {
    title: string;
    intro: string;
    backgroundImage: string;
    primaryTiles: PrimaryTile[];
    featureTitle?: string;
    featureDescription?: string;
    featureImages: string[];
    buttons: Button[];
}

export const PortfolioPages: PortfolioPageInfo[] = [{
    title: 'Chess.com',
    intro: 'I am currently working at Chess.com as a Senior Frontend Engineer. My current role sees me working on a major, breaking change version migration of our core framework. I am also currently helping mentor interns and new hires, and often work cross-functionally to help improve neglected areas of the site uncovered during the migration.',
    primaryTiles: [{
        title: 'Chess.com',
        image: ChessComBanner,
        externalLink: 'https://chess.com',
    }],
    featureTitle: 'Position is ongoing, keep an eye out for updates!',
    featureImages: [],
    backgroundImage: 'https://source.unsplash.com/Iq9SaJezkOE',
    buttons: [],
},{
    title: 'Battlefy',
    intro: 'During my time at Battlefy, I had the opportunity to work on several exciting projects which helped enhance the overall experience for our users. Four of my proudest projects include NHL 2022, Zotac Cup, Connected Club Cub, and ePremier League.',
    backgroundImage: 'https://source.unsplash.com/I45hdPF5Na0',
    primaryTiles: [{
        title: 'NHL 2022',
        image: NHL22Banner,
        externalLink: 'https://battlefy.com/nhl-2022',
    }, {
        title: 'Zotac Cup',
        image: ZotacCupBanner,
        externalLink: 'https://battlefy.com/zotac-cup',
    }, {
        title: 'Connected Club Cup',
        image: ConnectedCupBanner,
        externalLink: 'https://battlefy.com/connectedclubcup/home',
    }, {
        title: 'ePremier League',
        image: ePLBanner,
        externalLink: 'https://e.premierleague.com/',
    }],
    featureTitle: 'Design System',
    featureDescription: 'I also had the opportunity to work with a team of designers to create a design system for Battlefy. This system was primarily designed to allow design customization for our clients needs, while also creating a consistent template to reduce development time. Moreover, this system was designed to be easily customizable by our developers (through easy escape-hatches) & designers (through the use of CSS variables which could be edited without code).',
    featureImages: [DesignSystemSlide1, DesignSystemSlide2, DesignSystemSlide3, DesignSystemSlide4, DesignSystemSlide5],
    buttons: [{
        link: '/experience#battlefy',
        text: 'My Time at Battlefy',
        external: false,
    }],
}, {
    title: 'StratBook',
    intro: 'StratBook is a web application that allows users to create and share their own strategies for Rainbow Six Siege. Users can create their own strategies, then export them to an image for easy sharing.',
    primaryTiles: [],
    backgroundImage: StratBook,
    featureImages: [StratbookSlide1, StratbookSlide2, StratbookSlide3, StratbookSlide4, StratbookSlide5, StratbookSlide6, StratbookSlide7, StratbookSlide8],
    buttons: [{
        link: 'https://stratbook.gg',
        text: 'Visit StratBook.gg',
        external: true,
    }, {
        link: '/experience#stratbook',
        text: 'Learn About StratBook',
        external: false,
    }],
}, {
    title: 'Reward Yourself',
    intro: 'Reward yourself is a mobile app that allows users to earn points for completing tasks, which they can redeem for rewards they have created for themselves. This app was created both as a way to learn about mobile development, and as a tool to help mentor a friend. This app is not currently available on the app store, but we are working on getting it there.',
    primaryTiles: [],
    backgroundImage: 'https://source.unsplash.com/78A265wPiO4',
    featureImages: [RewardYourselfSlide1, RewardYourselfSlide2, RewardYourselfSlide3, RewardYourselfSlide4, RewardYourselfSlide5, RewardYourselfSlide6, RewardYourselfSlide7],
    buttons: [{
        link: '/experience#reward-yourself',
        text: 'Learn About Reward Yourself',
        external: false,
    }],
}, {
    title: 'Replay Analyzer',
    intro: 'Replay Analyzer is a desktop application which allows users to upload & save their Rainbow Six Siege replays, and then analyze them to see how they performed. This application was created as a way to learn about desktop development, and was created for an eSports team which I coach.',
    primaryTiles: [],
    backgroundImage: 'https://source.unsplash.com/mcSDtbWXUZU',
    featureImages: [ReplayAnalyzerSlide1, ReplayAnalyzerSlide2, ReplayAnalyzerSlide3, ReplayAnalyzerSlide4],
    buttons: [{
        link: 'https://github.com/Ross-Alexandra/replay-analyzer/',
        text: 'View on GitHub',
        external: true,
    }, {
        link: '/experience#replay-analyzer',
        text: 'Learn About Replay Analyzer',
        external: false,
    }],
}];
