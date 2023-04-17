import React from 'react';

import { Project } from '../../../app-data/projects';
import {
    FeaturesIcon,
    LessonsIcon,
    PortfolioBanner,
    TechnologyIcon,
} from '../../../assets';

import { ExperienceCard } from './experience-card';

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
            cardTitle={title}
            image={image ?? PortfolioBanner}
            sectionTitle={type}
            sectionSubtitle={duration}
            columnNames={['Features', 'Technology', 'Lessons Learned']}
            columnImages={[
                <FeaturesIcon key='features-icon' width={50} height={50} />,
                <TechnologyIcon key='technology-icon' width={50} height={50} />,
                <LessonsIcon key='lessons-icon' width={50} height={50} />,
            ]}
            columnData={[features, technology, lessons]}
            buttonLinks={buttonLinks}
        />
    );
};
