import { IProject } from "./global-interfaces";

export const projects: IProject[] = [
    {
        type: "web",
        title: 'Stratbook',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        previewImageUrl: 'https://via.placeholder.com/500x300',
        technologies: ["React", "JavScript"],
        externalLink: "http://stratbook.gg"
    },
    {
        type: "web",
        title: 'ScrimSearch',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        previewImageUrl: 'https://via.placeholder.com/500x300',
        technologies: ["React", "JavaScript", "Python","Discord Bot"],
        externalLink: "http://scrimsearch.theserverproject.com"
    },
    {
        type: "desktop",
        title: 'Comms',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        previewImageUrl: 'https://via.placeholder.com/500x300',
        technologies: ["Electron", "JavaScript", "Python", "WinAPI"],
        githubLink: "https://github.com/Ross-Alexandra/comms"
    },
    {
        type: "desktop",
        title: 'SiegeGG Scraper',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        previewImageUrl: 'https://via.placeholder.com/500x300',
        technologies: ["Electron", "TypeScript", "Cheerio"],
        githubLink: "https://github.com/Ross-Alexandra/siegegg-scraper"
    },
    {
        type: "desktop",
        title: 'FooBarBaz',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        previewImageUrl: 'https://via.placeholder.com/500x300',
        technologies: ["Electron", "JS", "Cheerio"],
        githubLink: "https://github.com/Ross-Alexandra/siegegg-scraper"
    }
]