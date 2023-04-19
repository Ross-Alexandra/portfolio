import React from 'react';

import { Job } from '../../../app-data/jobs';
import { AchievementsIcon, LessonsIcon, ResponsibilityIcon } from '../../../assets';

import { ExperienceCard } from './experience-card';

type JobCardProps = Omit<React.HTMLProps<HTMLDivElement>, 'as'> & Job;

export const JobCard: React.FC<JobCardProps> = ({
    company,
    logo,
    title,
    duration,
    responsibilities,
    achievements,
    lessons,
    portfolioLink,
    chips,
}) => {
    const buttons = [
        portfolioLink && {
            text: 'See in Portfolio',
            link: portfolioLink,
            external: false,
        },
    ].filter(Boolean) as { text: string; link: string; external: boolean }[];

    return (
        <ExperienceCard
            cardTitle={company}
            image={logo}
            sectionTitle={title}
            sectionSubtitle={duration}
            columnNames={['Responsibilities', 'Achievements', 'Lessons Learned']}
            columnImages={[
                <ResponsibilityIcon key='responsibility-icon' width={50} height={50} />,
                <AchievementsIcon key='achievements-icon' width={50} height={50} />,
                <LessonsIcon key='lessons-icon' width={50} height={50} />,
            ]}
            columnData={[responsibilities, achievements, lessons]}
            chips={chips}
            buttons={buttons}
        />
    );
};
