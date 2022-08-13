import {
    LabContainer,
    LabTitle,
    LabSubtitle,
    LabProjects,
    ProjectWrapper,
    ProjectTitle,
    ProjectDescription,
    FrameWrapper,
    ProjectIFrame,
    IFrameGithubLink
} from './elements';
import {LabBanner} from '../../../assets';

import {
    QuoteContainer,
    Quote,
    QuoteCTAsContainer,
    ProjectPrimaryCTA,
    ProjectSecondaryCTA,
} from '../elements';

import { IAppSection } from '../../../dec';

export interface TheLabProps extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
    setTopLevelPage: (newSection: IAppSection) => void;
}

export function TheLab({active, setTopLevelPage}: TheLabProps) {
    return (
        <LabContainer id="lab-projects" active={active}>
            <QuoteContainer backgroundImage={LabBanner} backgroundPositionY={'100%'} overlayOpacityHex={'80'}>
                <Quote>Interested in someone who&lsquo;s always learning?</Quote>
                <QuoteCTAsContainer>
                    <ProjectPrimaryCTA onClick={() => setTopLevelPage('contact')}>Connect with me</ProjectPrimaryCTA>
                    <ProjectSecondaryCTA onClick={() => setTopLevelPage('about')}>Read about me</ProjectSecondaryCTA>
                </QuoteCTAsContainer>
            </QuoteContainer>
            <LabTitle>my experiments</LabTitle>
            <LabSubtitle>Projects which are either still in development, just for fun, or for personal use only</LabSubtitle>
            <LabProjects>
                <ProjectWrapper>
                    <ProjectTitle>React Utilities</ProjectTitle>
                    <ProjectDescription>A library of self-made react hooks &amp; components which I use in my projects</ProjectDescription>
                    <FrameWrapper>
                        <ProjectIFrame src={'https://react-utilities.web.app/'} />
                        <IFrameGithubLink href={'https://github.com/Ross-Alexandra/react-utilities'} rel={'noopener noreferrer'} target={'_blank'}/>
                    </FrameWrapper>
                </ProjectWrapper>
            </LabProjects>
        </LabContainer>
    );
}