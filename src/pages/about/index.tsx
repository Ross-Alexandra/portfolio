import { Dispatch, SetStateAction } from "react";
import { IAppSection } from "../../global-interfaces";

export interface IAboutContent {
    setAppSection: Dispatch<SetStateAction<IAppSection>>;
}

export function AboutContent({setAppSection}: IAboutContent) {
    return (
        <p>Coming Soon!</p>
    )
}