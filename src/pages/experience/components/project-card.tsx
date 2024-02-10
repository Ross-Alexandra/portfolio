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
    types,
    title,
    duration,
    image,
    features,
    technology,
    lessons,
    links,
    chips,
}) => {
    return (
        <ExperienceCard
            cardTitle={title}
            image={image ?? PortfolioBanner}
            sectionTitle={types.join(' & ')}
            sectionSubtitle={duration}
            columnNames={['Features', 'Implementation', 'Lessons Learned']}
            columnImages={[
                <FeaturesIcon key='features-icon' width={50} height={50} />,
                <TechnologyIcon key='technology-icon' width={50} height={50} />,
                <LessonsIcon key='lessons-icon' width={50} height={50} />,
            ]}
            columnData={[features, technology, lessons]}
            chips={chips}
            buttons={links}
        />
    );
};
