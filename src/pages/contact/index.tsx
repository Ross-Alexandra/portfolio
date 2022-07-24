import { getFunctions, httpsCallable } from "firebase/functions";
import { Dispatch, SetStateAction, useCallback } from "react";
import { IAppSection } from "../../dec";

export interface IContactContent {
    setAppSection: Dispatch<SetStateAction<IAppSection>>;
}

export function ContactContent({setAppSection}: IContactContent) {

    const onContactSend = useCallback(() => {
        async function fireRequest() {
            const functions = getFunctions();
            const request = httpsCallable(functions, 'helloWorld');
            
            try {
                const {data} = await request();
                console.log('Retrieved data =>', data);
            } catch (err) {
                console.log('caught error =>', err);
            }

        }

        fireRequest();
    }, []);

    return (
        <button onClick={onContactSend}>Coming Soon!</button>
    )
}