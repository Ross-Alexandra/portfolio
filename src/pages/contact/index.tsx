import { getFunctions, httpsCallable } from "firebase/functions";
import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import { IAppSection } from "../../dec";

import {
    ContactMeWrapper,
    ContactMeContent,
    ContactTitle,
    EmailForm,
    EmailFrom,
    EmailSubject,
    EmailText,
    ErrorText,
    SubmitButton,
    ContactBackdrop
} from './elements';

async function sendEmail(email: string, subject: string, message: string) {
    const functions = getFunctions();
    const request = httpsCallable(functions, 'sendEmail');
    
    try {
        console.log('Sending Email');
        const {data} = await request({
            email,
            subject,
            message
        });
        console.log('Retrieved data =>', data);
    } catch (err) {
        console.log('caught error =>', err);
    }
}

export interface IContactContent {
    setAppSection: Dispatch<SetStateAction<IAppSection>>;
    setScrollingDisabled: Dispatch<SetStateAction<boolean>>;
}

export function ContactContent({setScrollingDisabled}: IContactContent) {
    const [emailError, setEmailError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [messageError, setMessageError] = useState("");

    const onContactSend = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target: HTMLFormElement = e.target as HTMLFormElement;
        const emailInput = target.elements[0] as HTMLInputElement;
        const subjectInput = target.elements[1] as HTMLInputElement;
        const messageInput = target.elements[2] as HTMLInputElement;

        const email = emailInput.value;
        const subject = subjectInput.value;
        const message = messageInput.value;

        // TODO: If any additional validation is added
        // create an actual validator here.
        let errored;
        if (!email) {
            setEmailError('Email must be present.');
            errored = true;
        } else setEmailError('');

        if (!subject) {
            setSubjectError('Subject must be present.');
            errored = true;
        } else setSubjectError('');

        if (!message) {
            setMessageError('Message must be present.');
            errored = true;
        } else setMessageError('');

        if (errored) return;

        sendEmail(email, subject, message);
    }, [setEmailError, setSubjectError, setMessageError]);

    return (
        <ContactMeWrapper>
            <ContactBackdrop />
            <ContactMeContent>
                <ContactTitle>Get In Touch!</ContactTitle>
                <EmailForm id='email-form' onSubmit={onContactSend}>
                    <EmailFrom
                        type='email'
                        placeholder="Your email"
                        error={emailError}
                    />
                    {emailError && <ErrorText>{emailError}</ErrorText>}
                    <EmailSubject 
                        type='text'
                        placeholder="Message Subject"
                        error={subjectError}
                    />
                    {subjectError && <ErrorText>{subjectError}</ErrorText>}
                    <EmailText 
                        form='email-form'
                        placeholder="Your Message"
                        error={messageError}
                        onFocus={() => setScrollingDisabled(true)}
                        onBlur={() => setScrollingDisabled(false)}
                     />
                    {messageError && <ErrorText>{messageError}</ErrorText>}
                    <SubmitButton type='submit' value='Submit!' />
                </EmailForm>
            </ContactMeContent>
        </ContactMeWrapper>
    )
}
