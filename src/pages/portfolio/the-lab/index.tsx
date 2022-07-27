import {
    LabContainer
} from './elements';
import {LabBanner} from '../../../assets';

import {
    QuoteContainer,
    Quote,
    QuoteCTAsContainer,
    ProjectsList,
    ProjectsTitle,
    ProjectPrimaryCTA,
    ProjectSecondaryCTA
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
            <ProjectsTitle>my experiments</ProjectsTitle>
            <ProjectsList>
                Coming Soon TM
            </ProjectsList>
        </LabContainer>
    );
}