import {
    LabContainer
} from './elements';

import {
    QuoteContainer,
    Quote,
    ProjectsList,
} from '../elements';

export interface TheLabProps extends React.HTMLProps<HTMLDivElement> {
    active: boolean;
}

export function TheLab({active}: TheLabProps) {
    return (
        <LabContainer id="lab-projects" active={active}>
            <QuoteContainer>
                <Quote>What&apos;s a mad scientist without a lab?<br/><br/>Coming Soon</Quote>
            </QuoteContainer>
            <ProjectsList>
            </ProjectsList>
        </LabContainer>
    );
}