import ContactFormComponent from './components/ContactForm.jsx';

function Contact(){
    return(
        <>
        <div className='text-amber-50 py-30 max-2-5x1 mx-auto px-20 md:px-25 lg:px-60 '>
            <h1 className='text-4xl pb-5'>Contact</h1>
            <ContactFormComponent/>
        </div>
        </>
    );
}

export default Contact