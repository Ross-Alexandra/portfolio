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
            const request = httpsCallable(functions, 'sendEmail');
            
            try {
                const {data} = await request({
                    email: 'rossandus@hotmail.com',
                    subject: 'Test Email',
                    message: '<h1>From my test contact form</h1>'
                });
                console.log('Retrieved data =>', data);
            } catch (err) {
                console.log('caught error =>', err);
            }
        }

        fireRequest();
    }, []);

    return (
        <p>Coming Soon</p>
    )
}