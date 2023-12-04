import React, { useRef } from 'react';
import Container from '../../../components/Container';
import contact from "../../../assets/contact.png"
import "./Contact.css"
import emailjs, { sendForm } from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_23i4g8l', 'template_tplafxc', form.current, 'U_XsuvytX_A3nqLEr')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };




    return (
        <div id='contact-part'>
            <Container>
               
            <h1 className='lg:text-3xl md:text-2xl sm:text-1xl font-bold text-white ps-[20px] pt-[20px] uppercase text-center'>Contact <span className='text-[#00b4d8]'>Me</span> </h1>

            <div className="contact-container grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-[50px]">
                <div className="contact-left">
                    <div className="inner-box flex justify-center items-center">
                       <div className='img ms-12'> 
                          <img src={contact} alt="" />
                       </div>
                    </div>
                </div>
                <div className="contact-right px-2">
                    <form onSubmit={sendEmail} ref={form} >
                        <input className='focus:outline-none focus:border-b-0' type="text" name="name" id="name" placeholder='Name...' />
                        <input  className='focus:outline-none'  type="email" name="email" id="email" placeholder='Email..' />
                        <input  className='focus:outline-none'  type="text" name="subject" id="subject" placeholder='Subject...' />
                        <textarea className='focus:outline-none' name="mesage" id="message" cols="30" rows="5" placeholder='Enter your quaries...'></textarea>

                        <input className='btn-submit' type="submit" value="send" placeholder='Send mail' />

                        {/* <button>Send Mail</button> */}
                    </form>
                </div>
            </div>

            </Container>
            
        </div>
    );
};

export default Contact;