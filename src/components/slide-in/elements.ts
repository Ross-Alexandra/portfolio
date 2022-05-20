import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { IDirection } from "./interface";

interface AnimationAwareProps extends React.HTMLProps<HTMLElement> {
    slidePosition: IDirection;
    delay?: number;
}

const slideInKeyframes = (slidePosition: IDirection) => keyframes`
    from {${slidePosition}: -100%;}

    to {${slidePosition}: 0;}

`;

export const BaseDiv = styled.div`
    position: relative;
    overflow: hidden;
`;

export const AnimationDiv = styled.div<AnimationAwareProps>`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;

    animation-name: ${({slidePosition}: AnimationAwareProps) => slideInKeyframes(slidePosition)};
    animation-duration: 750ms;
    animation-delay: ${({delay}: AnimationAwareProps) => delay ?? 0}ms;
    animation-fill-mode: both;
`;
