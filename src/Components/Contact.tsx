import React from 'react';
import "@/app/styles/contact.css";

function Contact() {
  return (
    <section className="contact-section" id="ContactUs">
      <h2>Contact</h2>
      <p className='p'>If you have any questions or would like to get in touch, feel free to reach out to me using the contact form or the following details:</p>
      <form id="Form" action="#">
        <div className="input-name">
          <input className='fname' type="text" placeholder="First Name" />
          <input className='lname' type="text" placeholder="Last Name" />
        </div>
        <input  className=' email'type="email" placeholder="Your Email" />
        <textarea className=' text'placeholder="Your Message"></textarea>
        <button type="submit" className="btn contact-btn">SUBMIT</button>
      </form>
    </section>
  );
}

export default Contact;
