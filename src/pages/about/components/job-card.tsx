import styled from '@emotion/styled';
import React from 'react';
import { AchievementsIcon, LessonsIcon, ResponsibilityIcon } from '../../../assets';
import { Job } from '../../../app-data/jobs';
import { maxDesktopBreakpoint, maxPhoneBreakpoint, text } from '../../../theme';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 200px auto;

    width: 100%;
    max-width: 2000px;
    margin: 0px auto;

    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    padding: 20px;
    border: 1px solid ${text}80;

    @media (max-width: ${maxPhoneBreakpoint}px) {
        grid-template-columns: unset;
        grid-template-rows: min-content auto;

        padding: 10px;

        img {
            width: 100%;
        }
    }

    h3 {
        font-size: 28px;
        font-weight: 700;

        width: 100%;
    }

    h4 {
        font-size: 20px;
        font-weight: 500;
    }

    h5 {
        font-size: 15px;
        font-weight: 500;

        @media (max-width: ${maxPhoneBreakpoint}px) {
            padding-bottom: 10px;
        }
    }

    .company-info {
        display: flex;
        flex-direction: column;
        padding-right: 15px;
        gap: 10px;

        border-right: 1px solid ${text}20;

        text-transform: uppercase;

        @media (max-width: ${maxPhoneBreakpoint}px) {
            padding-right: unset;
            border-right: unset;

            padding-bottom: 15px;
        }
        
        img {
            width: 100%;
            aspect-ratio: 1;

            border-radius: 10px;
        }
    }

    .position-info {
        display: flex;
        flex-direction: column;

        width: 100%;

        padding: 0px 10px;

        @media (max-width: ${maxPhoneBreakpoint}px) {
            padding: 10px 0px;
        }
    }

    .description {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;

        padding: 20px 0px;

        @media (max-width: ${maxDesktopBreakpoint}px) {
            grid-template-columns: unset;
            grid-template-rows: 1fr 1fr 1fr;

            padding: 10px 0px 0px 0px;
        }

        @media (max-width: ${maxPhoneBreakpoint}px) {
            border-top: 1px solid ${text}20;
        }
    }

    .description-content {
        display: flex;
        flex-direction: column;
        gap: 10px;

        svg,
        h4 {
            align-self: center;

            @media (max-width: ${maxDesktopBreakpoint}px) {
                align-self: unset;
            }
        }

        ul {
            margin: 0px;
            line-height: 1.3;
        }
    }
`;

type JobCardProps = Omit<React.HTMLProps<HTMLDivElement>, 'as'> & Job;

export const JobCard: React.FC<JobCardProps> = ({
    company,
    logo,
    title,
    duration,
    responsibilities,
    achievements,
    lessons,
    ...props
}) => {
    return (
        <Wrapper {...props}>
            <div className="company-info">
                <h3>{company}</h3>
                <div className="logo-container">
                    <img src={logo} alt="Battlefy Logo" />
                </div>
            </div>

            <div className='position-info'>
                <h3>{title}</h3>
                <h5>{duration}</h5>
                <div className="description">
                    <div className="description-content">
                        <ResponsibilityIcon width={50} height={50} />
                        <h4>Responsibilities</h4>
                        <ul>
                            {responsibilities.map((responsibility) => 
                                <li key={responsibility}>{responsibility}</li>
                            )}
                        </ul>
                    </div>
                    <div className="description-content">
                        <AchievementsIcon width={50} height={50} />
                        <h4>Achievements</h4>
                        <ul>
                            {achievements.map((achievement) =>
                                <li key={achievement}>{achievement}</li>
                            )}
                        </ul>
                    </div>
                    <div className='description-content'>
                        <LessonsIcon width={50} height={50} />
                        <h4>Lessons Learned</h4>
                        <ul>
                            {lessons.map((lesson) =>
                                <li key={lesson}>{lesson}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};
