import { IProject } from "./global-interfaces";

// Import Porfolio images
import StratmapperImage from './assets/stratbook.png';
import PortfolioImage from './assets/portfolio.png';
import SiegeGGScraperImage from './assets/siegegg-scraper.png';
import CommsImage from './assets/comms.png';

export const projects: IProject[] = [
    {
        type: "web",
        title: 'Stratbook',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        previewImageUrl: StratmapperImage,
        technologies: ["React", "JavScript"],
        externalLink: "http://stratbook.gg"
    },
    {
        type: "web",
        title: 'ScrimSearch',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        previewImageUrl: 'https://via.placeholder.com/500x300',
        technologies: ["React", "JavaScript", "Python","Discord Bot", "PostgreSQL"],
        externalLink: "http://scrimsearch.theserverproject.com"
    },
    {
        type: "web",
        title: 'My Portfolio',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        previewImageUrl: PortfolioImage,
        technologies: ["React", "TypeScript"],
        githubLink: "https://github.com/Ross-Alexandra/portfolio"
    },
    {
        type: "desktop",
        title: 'Comms',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        previewImageUrl: CommsImage,
        technologies: ["Electron", "JavaScript", "Python", "WinAPI"],
        githubLink: "https://github.com/Ross-Alexandra/comms"
    },
    {
        type: "desktop",
        title: 'SiegeGG Scraper',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        previewImageUrl: SiegeGGScraperImage,
        technologies: ["Electron", "TypeScript", "Cheerio"],
        githubLink: "https://github.com/Ross-Alexandra/siegegg-scraper"
    },
    {
        type: "other",
        title: 'Stat Tracker',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        previewImageUrl: 'https://via.placeholder.com/500x300',
        technologies: ["Python", "Discord Bot", "PostgreSQL"],
        githubLink: "https://github.com/Ross-Alexandra/siegeAnalyzer"
    }
]