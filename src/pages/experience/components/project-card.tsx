import React from 'react';
import { ExperienceCard } from './experience-card';
import { FeaturesIcon, LessonsIcon, PortfolioBanner, TechnologyIcon } from '../../../assets';
import { Project } from '../../../app-data/projects';

type ProjectCardProps = Omit<React.HTMLProps<HTMLDivElement>, 'as'> & Project;

export const ProjectCard: React.FC<ProjectCardProps> = ({
    type,
    title,
    duration,
    image,
    features,
    technology,
    lessons,
    portfolioLink,
    githubLink,
    externalLink,
}) => {
    const buttonLinks: Record<string, string> = {};
    if (portfolioLink) {
        buttonLinks[portfolioLink] = 'See in Portfolio';
    }
    if (githubLink) {
        buttonLinks[githubLink] = 'See on GitHub';
    }
    if (externalLink) {
        buttonLinks[externalLink] = 'See External';
    }

    return (
        <ExperienceCard
            cardTitle={type}
            image={image ?? PortfolioBanner}
            sectionTitle={title}
            sectionSubtitle={duration}
            columnNames={['Features', 'Technology', 'Lessons Learned']}
            columnImages={[<FeaturesIcon width={50} height={50} />, <TechnologyIcon width={50} height={50} />, <LessonsIcon width={50} height={50} />]}
            columnData={[features, technology, lessons]}
            buttonLinks={buttonLinks}
        />
    );
};
