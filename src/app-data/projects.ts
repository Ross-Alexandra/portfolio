import { IProject } from "../dec";

// Import Porfolio images
import {StratmapperImage} from '../assets';
import {PortfolioImage} from '../assets';
import {SiegeGGScraperImage} from '../assets';
import {CommsImage} from '../assets';
import {ScrimSearch} from '../assets';
import {StatTracker} from '../assets';
import {FullstackSpritesheets} from '../assets';

export const projects: IProject[] = [
    {
        type: "web",
        title: 'Stratbook',
        description: `Stratbook is a strategy planning tool used by competitive teams in "Tom Clancy's Rainbow Six: Siege". It is used by dozens of players as a simpler solution to creating, saving, and sharing strategies.

        The original goal of this Strabook was to create a spiritual successor to a now defunct tool called Battleplanner. Once the original core was complete, I rebuilt it with more modern web-practices to learn better design and simultaneously learn the SVG spec better.
        `,
        previewImageUrl: StratmapperImage,
        technologies: ["React", "JavaScript"],
        externalLink: "http://stratbook.gg"
    },
    {
        type: "web",
        title: 'My Portfolio',
        description: `You're looking at it! Designed and built in mid-2022 during a move across the province, this iteration of my ever-evolving portfolio is meant to highlight both my newly learned abilities in web-design, and my ability to implement any design I could imagine. Designed with future-iterations in mind, I've even added a 'lab' section as a place to showcase smaller and potentially more technical projects.`,
        previewImageUrl: PortfolioImage,
        technologies: ["React", "TypeScript"],
        githubLink: "https://github.com/Ross-Alexandra/portfolio"
    },
    {
        type: "web",
        title: 'ScrimSearch',
        description: `ScrimSearch was used by competitive teams in "Tom Clancy's Rainbow Six: Siege" as a tool to help match them with other teams looking to scrim (practice). The tool will automatically match teams with similar times & map requests, and then send confirmation DMs to them on Discord which allows teams to plan weeks in advance for their scrims.`,
        previewImageUrl: ScrimSearch,
        technologies: ["React", "JavaScript", "Python","Discord Bot", "PostgreSQL"],
        externalLink: "http://scrimsearch.theserverproject.com"
    },
    {
        type: "desktop",
        title: 'SiegeGG Scraper',
        description: `As developers often know, data is king. This tool is a simple user interface on top of a web scraper to automatically grab and visualize data from professional "Tom Clancy's Rainbow Six: Siege" matches to allow for easier preparation.`,
        previewImageUrl: SiegeGGScraperImage,
        technologies: ["Electron", "TypeScript", "Cheerio"],
        githubLink: "https://github.com/Ross-Alexandra/siegegg-scraper"
    },
    {
        type: "desktop",
        title: 'Comms',
        description: `This was my first foray into desktop apps. I created this tool out of necessity while coaching a professional "Tom Clancy's Rainbow Six: Siege" team. When playing competitive FPS games, a common phrase is 'comms'. This in effect is telling other teammates to be quiet momentarily as they need to hear in-game audio. However, this is problematic as the communication from those teammates is often vital to winning a round. To fix this potential dilemma I created this 'half-deafen' tool. It allows a user to set a hotkey which will lower (but not necessarily mute) the volume of a specific app (Discord for our purposes). This allowed players to hear the game when needed, but still have access to the team's comms.`,
        previewImageUrl: CommsImage,
        technologies: ["Electron", "JavaScript", "Python", "WinAPI"],
        githubLink: "https://github.com/Ross-Alexandra/comms"
    },
    {
        type: "other",
        title: "Fullstack Spritesheets",
        description: `Fullstack Spritesheets is a tool I created to support increasing daily-active users for another one of my projects (Stratbook). It is a combined npx tool and npm library which allows a user to generate a spritesheet from existing assets. This tool solves a niche use-case where hundreds of small assets are required on every page-load. This tool allows users to decrease total downloads by only downloading 1 relatively large file, saving the static cost per download.`,
        previewImageUrl: FullstackSpritesheets,
        technologies: ["Typescript", 'npm', 'npx'],
        githubLink: "https://github.com/Ross-Alexandra/fullstack-spritesheets",
        externalLink: 'https://www.npmjs.com/package/fullstack-spritesheets'
    },
    {
        type: "other",
        title: 'Stat Tracker',
        description: `Stat Tracker is a discord bot I built to allow competitive “Tom Clancy's Rainbow Six: Siege” teams to track and aggregate their stats for games they've played. I created this tool to better understand the trends I was seeing as their coach. This tool allows users to upload a file generated by a third-party tool using a Discord bot. After processing, teams can then send another command to check the data (grouped by various user-defined tags) at any time.`,
        previewImageUrl: StatTracker,
        technologies: ["Python", "Discord Bot", "PostgreSQL"],
        githubLink: "https://github.com/Ross-Alexandra/siegeAnalyzer"
    }
]