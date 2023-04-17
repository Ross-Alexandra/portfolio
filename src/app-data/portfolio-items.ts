import { ConnectedCupBanner, NHL22Banner, PickBanBanner, ReplayAnalyzerSlide1, ReplayAnalyzerSlide2, ReplayAnalyzerSlide3, ReplayAnalyzerSlide4, RewardYourselfSlide1, RewardYourselfSlide2, RewardYourselfSlide3, RewardYourselfSlide4, RewardYourselfSlide5, RewardYourselfSlide6, RewardYourselfSlide7, StratBook, StratbookSlide1, StratbookSlide2, StratbookSlide3, StratbookSlide4, StratbookSlide5, StratbookSlide6, StratbookSlide7, StratbookSlide8, ZotacCupBanner, ePLBanner } from "../assets";

interface PrimaryTile {
    title: string;
    image: string;
    externalLink?: string;
}

interface Button {
    text: string;
    link: string;
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
    title: 'Battlefy',
    intro: 'During my time at Battlefy, I had the opportunity to work on several exciting projects which helped enhance the overall experience for our users. Four of my proudest projects include NHL 2022, Zotac Cup, Connected Club Cub, and ePremier League.',
    backgroundImage: 'https://source.unsplash.com/I45hdPF5Na0',
    primaryTiles: [{
        title: 'NHL 2022',
        image: NHL22Banner,
        externalLink: 'https://battlefy.com/nhl-2022'
    }, {
        title: 'Zotac Cup',
        image: ZotacCupBanner,
        externalLink: 'https://battlefy.com/zotac-cup'
    }, {
        title: 'Connected Club Cup',
        image: ConnectedCupBanner,
        externalLink: 'https://battlefy.com/connectedclubcup/home'
    }, {
        title: 'ePremier League',
        image: ePLBanner,
        externalLink: 'https://e.premierleague.com/'
    }],
    featureTitle: 'Pick Ban System',
    featureDescription: "I also had the opportunity to work on numerous internal projects, the biggest of which was the platform's Pick Ban system. This system allows tournament organizers to setup a Pick Ban draft for their Valorant tournaments.",
    featureImages: [PickBanBanner],
    buttons: [{
        link: '/experience#battlefy',
        text: 'My Time at Battlefy'
    }]
}, {
    title: 'StratBook',
    intro: 'StratBook is a web application that allows users to create and share their own strategies for Rainbow Six Siege. Users can create their own strategies, then export them to an image for easy sharing.',
    primaryTiles: [],
    backgroundImage: StratBook,
    featureImages: [StratbookSlide1, StratbookSlide2, StratbookSlide3, StratbookSlide4, StratbookSlide5, StratbookSlide6, StratbookSlide7, StratbookSlide8],
    buttons: [{
        link: 'https://stratbook.gg',
        text: 'Visit StratBook.gg'
    }, {
        link: '/experience#stratbook',
        text: 'Learn About StratBook'
    }],
}, {
    title: 'Reward Yourself',
    intro: 'Reward yourself is a mobile app that allows users to earn points for completing tasks, which they can redeem for rewards they have created for themselves. This app was created both as a way to learn about mobile development, and as a tool to help mentor a friend. This app is not currently available on the app store, but we are working on getting it there.',
    primaryTiles: [],
    backgroundImage: 'https://source.unsplash.com/78A265wPiO4',
    featureImages: [RewardYourselfSlide1, RewardYourselfSlide2, RewardYourselfSlide3, RewardYourselfSlide4, RewardYourselfSlide5, RewardYourselfSlide6, RewardYourselfSlide7],
    buttons: [{
        link: '/experience#reward-yourself',
        text: 'Learn About Reward Yourself'
    }],
}, {
    title: 'Replay Analyzer',
    intro: 'Replay Analyzer is a desktop application which allows users to upload & save their Rainbow Six Siege replays, and then analyze them to see how they performed. This application was created as a way to learn about desktop development, and was created for an eSports team which I coach.',
    primaryTiles: [],
    backgroundImage: 'https://source.unsplash.com/mcSDtbWXUZU',
    featureImages: [ReplayAnalyzerSlide1, ReplayAnalyzerSlide2, ReplayAnalyzerSlide3, ReplayAnalyzerSlide4],
    buttons: [{
        link: 'https://github.com/Ross-Alexandra/replay-analyzer/',
        text: 'View on GitHub'
    }, {
        link: '/experience#replay-analyzer',
        text: 'Learn About Replay Analyzer'
    }],
}];