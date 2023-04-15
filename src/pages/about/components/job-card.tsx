import React from 'react';
import { Job } from '../../../app-data/jobs';
import { ExperienceCard } from './experience-card';
import { AchievementsIcon, LessonsIcon, ResponsibilityIcon } from '../../../assets';

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
}) => {
    const buttonLinks = portfolioLink ? { [portfolioLink]: 'See in Portfolio' } : {};

    return (
        <ExperienceCard
            cardTitle={company}
            image={logo}
            sectionTitle={title}
            sectionSubtitle={duration}
            columnNames={['Responsibilities', 'Achievements', 'Lessons Learned']}
            columnImages={[<ResponsibilityIcon width={50} height={50} />, <AchievementsIcon width={50} height={50} />, <LessonsIcon width={50} height={50} />]}
            columnData={[responsibilities, achievements, lessons]}
            buttonLinks={buttonLinks}
        />
    );
};
