import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';

function ContactForm() {
  const [state, handleSubmit] = useForm("xpzgqzjn");
  if (state.succeeded) {
      return <>
      <p className='final-result'>Thanks for joining!</p>
      <Image src='https://liubavyshka.ru/_ph/19/2/661270935.gif' alt='gif' width={150} height={150} id='prikol'/>
      </>;
  }
  return (
      <form onSubmit={handleSubmit}  className='form'>
      <p>Proposal Form</p>
      <label htmlFor="name" className='label-form'>
        Your Name
      </label>  
      <input
        id="name"
        type="name" 
        name="name"
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <label htmlFor="email" className='label-form'>
        Email
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="link" className='label-form'>
        Link
      </label>  
      <input
        id="link"
        type="link" 
        name="link"
      />
      <ValidationError 
        prefix="Link" 
        field="link"
        errors={state.errors}
      />
      <label htmlFor="message" className='label-form'>
        Message
      </label> 
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} id='button-s'>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;