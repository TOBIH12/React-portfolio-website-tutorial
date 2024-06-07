import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wj0cr1r', 'template_fdgjg3h', form.current, {
        publicKey: '52TR5rNunmftM3h6Q',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <MdOutlineMailOutline className='contact__icon' />
            <h4>Email</h4>
            <h5>ayomikunbolaji043@gmail.com</h5>
            <a href="mailto:ayomikunbolaji043@gmail.com" target='_blank' >Send a Message</a>
          </article>
          <article className='contact__option'>
          <RiMessengerLine className='contact__icon'/>
            <h4>Messenger</h4>
            <h5>Har Your</h5>
            <a href="https:m.me/profile.php?id=100071006301868" target='_blank' >Send a Message</a>
          </article>
          <article className='contact__option'>
          <FaWhatsapp className='contact__icon' />
            <h4>WhatsApp</h4>
            <h5>Tobi</h5>
            <a href="https://api.whatsapp.com/send?phone+2349158877369" target='_blank' >Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' />
          <textarea name="massage" rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
