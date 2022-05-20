import { MyWorkContainer } from "./elements";

export interface MyWorkProps extends React.HTMLProps<HTMLDivElement> {}

export function MyWork({...props}: MyWorkProps) {
    return (
        <MyWorkContainer>

        </MyWorkContainer>
    );
}