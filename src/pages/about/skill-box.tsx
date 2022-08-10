import {map, get} from 'lodash';
import {
    SkillBoxWrapper,
    SkillIcons,
    SkillIcon,
    SkillTitle,
    SkillDescription
} from './elements';

export interface SkillBoxProps {
    skillIconUrls: string[];
    skillIconTitles: string[];
    skillTitle: string;
    skillDescription: string;
};

export function SkillBox({skillIconUrls, skillIconTitles, skillTitle, skillDescription}: SkillBoxProps) {
    return (
        <SkillBoxWrapper>
            <SkillIcons>
                {map(skillIconUrls, (url, index) => 
                    <SkillIcon title={get(skillIconTitles, index, 'Unknown Icon')} key={`${url}-${index}`} src={url} />
                )}
            </SkillIcons>
            <SkillTitle>{skillTitle}</SkillTitle>
            <SkillDescription>{skillDescription}</SkillDescription>
        </SkillBoxWrapper>
    );
}
