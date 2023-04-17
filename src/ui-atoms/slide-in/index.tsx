import { BaseDiv, AnimationDiv } from './elements';
import { IDirection } from './interface';

export interface SlideInProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    direction: IDirection;
    delay?: number;
}

export function SlideIn({ direction, delay, children, ...props }: SlideInProps) {
    return (
        <BaseDiv {...props}>
            <div className='hidden-children'>
                {children}
            </div>
            <AnimationDiv slidePosition={direction} delay={delay}>
                {children}
            </AnimationDiv>
        </BaseDiv>
    );
}
