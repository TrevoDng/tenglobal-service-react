import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "./SendEmail.css";

export const ContactUsEmailsjs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dlhaldt', 'template_2jzqx7a', form.current, 'C3qLNBp9kQNAqJ4We')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='send-email-container'>
      <p>Need more help? send us an email bellow</p>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label><br></br>
      <input type="text" name="user_name" /><br></br>
      <label>Email</label><br></br>
      <input type="email" name="user_email" /><br></br>
      <label>Message</label><br></br>
      <textarea name="message" /><br></br>
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};
