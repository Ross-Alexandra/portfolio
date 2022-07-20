import {map} from 'lodash';
import {
    SkillBoxWrapper,
    SkillIcons,
    SkillIcon,
    SkillTitle,
    SkillDescription
} from './elements';

export interface SkillBoxProps {
    skillIconUrls: string[];
    skillTitle: string;
    skillDescription: string;
};

export function SkillBox({skillIconUrls, skillTitle, skillDescription}: SkillBoxProps) {
    return (
        <SkillBoxWrapper>
            <SkillIcons>
                {map(skillIconUrls, (url, index) => 
                    <SkillIcon key={`${url}-${index}`} src={url} />
                )}
            </SkillIcons>
            <SkillTitle>{skillTitle}</SkillTitle>
            <SkillDescription>{skillDescription}</SkillDescription>
        </SkillBoxWrapper>
    );
}
