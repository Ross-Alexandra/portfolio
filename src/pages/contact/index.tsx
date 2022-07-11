import { Dispatch, SetStateAction } from "react";
import { IAppSection } from "../../global-interfaces";

export interface IContactContent {
    setAppSection: Dispatch<SetStateAction<IAppSection>>;
}

export function ContactContent({setAppSection}: IContactContent) {
    return (
        <p>Coming Soon!</p>
    )
}