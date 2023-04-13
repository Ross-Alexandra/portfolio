import styled from '@emotion/styled';
import { DesktopProjects } from './desktop-projects';

import { OtherProjects } from './other-projects';
import { WebProjects } from './web-projects';

const Wrapper = styled.div`
    display: flex;
    width: 100%;

    flex-direction: column;
`;

export function Portfolio() {
    return (
        <Wrapper>
            <WebProjects active={true}/>
            <DesktopProjects active={false}/>
            <OtherProjects active={false}/>
            {/*<TheLab active={false}/> */}
        </Wrapper>
    );
}
