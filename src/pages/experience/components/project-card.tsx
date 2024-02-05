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
    chips,
}) => {
    const buttons = [
        portfolioLink && {
            text: 'See in Portfolio',
            link: portfolioLink,
            external: false,
        },
        githubLink && {
            text: 'See on GitHub',
            link: githubLink,
            external: true,
        },
        externalLink && {
            text: 'Visit',
            link: externalLink,
            external: true,
        },
    ].filter(Boolean) as { text: string; link: string; external: boolean }[];

    return (
        <ExperienceCard
            cardTitle={title}
            image={image ?? PortfolioBanner}
            sectionTitle={type}
            sectionSubtitle={duration}
            columnNames={['Features', 'Implementation', 'Lessons Learned']}
            columnImages={[
                <FeaturesIcon key='features-icon' width={50} height={50} />,
                <TechnologyIcon key='technology-icon' width={50} height={50} />,
                <LessonsIcon key='lessons-icon' width={50} height={50} />,
            ]}
            columnData={[features, technology, lessons]}
            chips={chips}
            buttons={buttons}
        />
    );
};
