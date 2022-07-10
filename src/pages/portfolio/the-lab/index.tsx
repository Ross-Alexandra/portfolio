import {
    LabContainer
} from './elements';

import {
    QuoteContainer,
    Quote,
    QuoteCTAsContainer,
    QuoteCTA,
    QuoteAlternateCTA,
    ProjectsList,
    ProjectsTitle
} from '../elements';

export interface TheLabProps extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
}

export function TheLab({active}: TheLabProps) {
    return (
        <LabContainer id="lab-projects" active={active}>
            <QuoteContainer>
                <Quote>Interested in someone who&lsquo;s always learning?</Quote>
                <QuoteCTAsContainer>
                    <QuoteCTA>Connect with me</QuoteCTA>
                    <QuoteAlternateCTA>Read about me</QuoteAlternateCTA>
                </QuoteCTAsContainer>
            </QuoteContainer>
            <ProjectsTitle>See my experiments</ProjectsTitle>
            <ProjectsList>
                Coming Soon TM
            </ProjectsList>
        </LabContainer>
    );
}