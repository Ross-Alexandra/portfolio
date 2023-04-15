import styled from "@emotion/styled";
import { fancyFont, maxDesktopBreakpoint, maxLaptopBreakpoint, maxPhoneBreakpoint, maxTabletBreakpoint, portfolioBackground, text } from "../../theme";
import { GraduationPhoto, ProjectsImage, TutelaImage } from "../../assets";
import { SlideIn } from "../../ui-atoms/slide-in";
import { primaryButtonCSS } from "../../elements";
import { jobs } from "../../app-data/jobs";
import { JobCard } from "./components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;

    @media (max-width: ${maxTabletBreakpoint}px) {
        gap: 20px;
    }

    h1, h2 {
        font-family: ${fancyFont};
    }

    h1 {
        padding-left: 30px;
        font-size: 53px;

        @media (max-width: ${maxTabletBreakpoint}px) {
            padding-left: 15px;
            font-size: 40px;
        }
    }

    h2 {
        font-size: 35px;

        @media (max-width: ${maxTabletBreakpoint}px) {
            font-size: 30px;
        }
    }

    #at-a-glance {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10%;

        width: 100%;
        padding-inline: 10%;

        @media (max-width: ${maxDesktopBreakpoint}px) {
            gap: 40px;
        }

        @media (max-width: ${maxLaptopBreakpoint}px) {
            display: flex;
            flex-direction: column;

            padding-inline: 15px;
            gap: 20px;
        }
    }

    .card {
        position: relative;
        width: 100%;
        height: 100%;

        display: grid;
        grid-template-rows: 30px 1fr 40px;

        padding: 20px;

        border: 1px solid ${text}80;
        border-radius: 10px;

        background-size: cover;
        background-position: center;

        h3 {
            font-size: 28px;
        }

        ul {
            font-size: 20px;
            line-height: 1.3;
        }

        a {
            text-decoration: none;
            ${primaryButtonCSS}
        }

        @media (max-width: ${maxPhoneBreakpoint}px) {
            height: auto;

            h3 {
                font-size: 20px;
            }

            ul {
                font-size: 18px;
            }
        }

        &.education {
            background-image: 
                linear-gradient(180deg, ${portfolioBackground}dd 0%, ${portfolioBackground}dd 100%),
                url(${GraduationPhoto});
        }

        &.work-experience {
            background-image:
                linear-gradient(180deg, ${portfolioBackground}dd 0%, ${portfolioBackground}dd 100%),
                url(${TutelaImage});
        }

        &.projects {
            background-image: 
                linear-gradient(180deg, ${portfolioBackground}dd 0%, ${portfolioBackground}dd 100%),
                url(${ProjectsImage});
        }
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    #interests {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 30px 55% 30px 30px;

        animation: fade-in 1500ms ease-in-out;
        animation-delay: 1500ms;
        animation-fill-mode: forwards;

        opacity: 0;

        p, h4 {
            padding-left: 30px;
            line-height: 1.3;

            font-size: 18px;
        }

        position: relative;
        background-color: rgba(255, 255, 255, 0.15);

        @media (max-width: ${maxTabletBreakpoint}px) {
            padding: 30px;

            ::before {
                display: none;
            }
        }

        @media (max-width: ${maxPhoneBreakpoint}px) {
            display: none;
        }

        ::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            inset: 0px;

            clip-path: polygon(100% 0, 45% 0, 55% 100%, 100% 100%);
            background-image: url('https://source.unsplash.com/4hbJ-eymZ1o');

            background-size: cover;
            background-position: center;

            opacity: 0.85;
        }
    }

    #work-experience {
        display: flex;
        flex-direction: column;
        padding: 0px 30px;
        gap: 20px;

        @media (max-width: ${maxPhoneBreakpoint}px) {
            padding: 0px 15px;
        }
    }
`;

export function About() {
    return (
        <Wrapper>
            <h1>Ross Alexandra</h1>

            <div id='at-a-glance'>
                <SlideIn direction="bottom">
                    <div className="card education">
                        <h3>Education</h3>
                        <ul>
                            <li>University of Victoria</li>
                            <li>Bachelor&apos;s of Software Engineering</li>
                            <li>Graduated 2021</li>
                            <li>6.50 GPA (B+ to A-)</li>
                        </ul>
                    </div>
                </SlideIn>

                <SlideIn direction="bottom" delay={500}>
                    <div className="card work-experience">
                        <h3>Work Experience</h3>
                        <ul>
                            <li>4 Years Experience</li>
                            <li>2.5 Years in Full-Stack Roles</li>
                            <li>1.5 Year in Backend-focused Roles</li>
                        </ul>
                        <a href='#work-experience'>More Details</a>
                    </div>
                </SlideIn>

                <SlideIn direction="bottom" delay={1000}>
                    <div className="card projects">
                        <h3>Independent Projects</h3>
                        <ul>
                            <li>4 Web Applications</li>
                            <li>2 Mobile Applications</li>
                            <li>3 Desktop Applications</li>
                            <li>Various Additional Backend Infrastructure &amp; Utility Projects</li>
                        </ul>
                        <a href="#projects">More Details</a>
                    </div>
                </SlideIn>
            </div>

            <div id="interests">
                <h2>Creating Software People <i>Want</i> To Use</h2>
                <p>
                    I believe that great software isn't just about the code or the technology, it's about the
                    user experience. Software is created to solve a problem or fulfill a need for the end user, so
                    it is paramount to approach software development with a user-centric mindset.Focusing on the
                    user experience from the very beginning ensures that the software you create is
                    not only functional, but also intuitive, efficient, and enjoyable to use.
                </p>
                <h4>The only way to truly keep a user is to ensure that they never look for an alternative.</h4>
                <p>
                    That&apos;s why I&apos;m always looking for ways to improve the user experience of the software
                    I&apos;m working on. Whether it&apos;s through better design, more intuitive navigation, or
                    more efficient workflows.
                </p>
            </div>

            <div id="work-experience">
                <h2 className='sub-section-title'>Work Experience</h2>

                {jobs.map((job, index) => (
                    <JobCard key={index} {...job} />
                ))}
            </div>
        </Wrapper>
    );
}
