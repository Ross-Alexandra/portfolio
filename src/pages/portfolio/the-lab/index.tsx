import {
    LabContainer
} from './elements';

import {
    QuoteContainer,
    Quote,
    QuoteCTAsContainer,
    ProjectsList,
    ProjectsTitle
} from '../elements';

import {
    PrimaryCTA,
    SecondaryCTA
} from '../../../elements';
import { IAppSection } from '../../../global-interfaces';

export interface TheLabProps extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
    setTopLevelPage: (newSection: IAppSection) => void;
}

export function TheLab({active, setTopLevelPage}: TheLabProps) {
    return (
        <LabContainer id="lab-projects" active={active}>
            <QuoteContainer>
                <Quote>Interested in someone who&lsquo;s always learning?</Quote>
                <QuoteCTAsContainer>
                    <PrimaryCTA onClick={() => setTopLevelPage('contact')}>Connect with me</PrimaryCTA>
                    <SecondaryCTA onClick={() => setTopLevelPage('about')}>Read about me</SecondaryCTA>
                </QuoteCTAsContainer>
            </QuoteContainer>
            <ProjectsTitle>See my experiments</ProjectsTitle>
            <ProjectsList>
                Coming Soon TM
            </ProjectsList>
        </LabContainer>
    );
}