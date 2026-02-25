import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import { useTranslation } from 'react-i18next';



function ContactForm() {
    const [t, i18n] = useTranslation('contactform');
    const handleAutoResize = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    }

    const [state, handleSubmit] = useForm("xlgwajze");
    if (state.succeeded) {
        return (
            <>
                <div className='outline-2 bg-[#084569]/40 outline-[#016FB9] outline-offset-2 rounded-3xl  hover:outline-[#22AED1] grid gap-3 p-5 text-center'>
                    <p>Thanks for joining!</p>
                </div>

            </>
        );
    }
    return (
        <form action="https://formspree.io/f/xlgwajze"
            method="POST"
            onSubmit={handleSubmit}
            className='outline-2 bg-[#084569]/40 outline-[#016FB9] outline-offset-2 rounded-3xl  hover:outline-[#22AED1] grid gap-3 p-5'>
            <label htmlFor='name'>
                {t('name')}
            </label>
            <input required
                id="name"
                name="name"
                type='text'
                className='w-full border-b-2 border-gray-500 focus:border-[#22AED1] transition outline-none bg-transparent'
            />
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />
            <label htmlFor="email">
                Email
            </label>
            <input required
                id="email"
                type="email"
                name="email"
                className='border-b-2 border-gray-500 focus:border-[#22AED1] transition outline-none bg-transparent'
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor='message'>
                {t('message')}
            </label>
            <textarea required
                id="message"
                name="message"
                rows="1"
                onInput={handleAutoResize}
                className='w-full border-b-2 border-gray-500 focus:border-[#22AED1] transition outline-none bg-transparent resize-none overflow-hidden'
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}
                className='relative w-full py-3 rounded-xl font-medium transition-all duration-300 bg-[#016FB9] hover:bg-[#22AED1] disabled:cursor-not-allowed overflow-hidden'>
                {t('submit')}
            </button>
        </form>
    );
}

function ContactFormComponent() {
    return (
        <ContactForm />
    );
}

export default ContactFormComponent;