import moment from 'moment';

import { BaseDiv, AnimationDiv } from './elements';
import { IDirection } from './interface';

export interface SlideInProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    direction: IDirection;
    delay?: number;
    noRepeatId?: string;
}

export function SlideIn({ direction, delay, noRepeatId, children, ...props }: SlideInProps) {
    const lastAnimationInStorage = localStorage.getItem(noRepeatId ?? '');
    const lastAnimation = lastAnimationInStorage ? moment(lastAnimationInStorage) : moment(0);

    // If the animation has been shown in the last 10 minutes, don't show it again
    const hasAnimatedRecently = noRepeatId && !lastAnimation.add(10, 'minutes').isBefore(moment());
    return (
        <BaseDiv {...props}>
            <div className='hidden-children'>
                {children}
            </div>
            <AnimationDiv 
                className={`${hasAnimatedRecently ? 'no-animation' : ''}`}
                slidePosition={direction}
                delay={delay}
                onAnimationEnd={() => {
                    if (noRepeatId) {
                        localStorage.setItem(noRepeatId, moment().toISOString());
                    }
                }}
            >
                {children}
            </AnimationDiv>
        </BaseDiv>
    );
}
