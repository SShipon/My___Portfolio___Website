/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './contact.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactAnimate from "./ContactAnimate";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q7fw8tc",
        "template_y10yfz7",
        form.current,
        "0AGx-yacdwuJYI7go"
      )
      .then(
        (result) => {
          console.log(result.text);

          toast.success("Success Notification !", {
            position: toast.POSITION.TOP_RIGHT,
          });
    
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact"
      style={{
      /*   background: `url(${appointment})`, */
      }}
       className="sm:my-12"
    >
      <div className="text-center pb-14 text-white contact_content">
        <br />
        <br />
        <p className="text-4xl font-bold text-gradient">Contact Us</p>
        <h1 className="lg:text-4xl sm:text-3xl">Stay connected with us</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="w-[100%]">
      <ContactAnimate />
      </div>
        <div className="w-[100%]">
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 justify-items-center gap-5">
              <input
                type="text"
                placeholder="Name*"
                name="user_name}"
                className="input w-full  max-w-md input-bordered input-info "
                required
              />
              <input
                type="text"
                placeholder="Email Address*"
                name="user_email"
                className="input w-full max-w-md input-bordered input-info "
                required
              />
              <input
                type="text"
                placeholder="Subject*"
                name="from_name"
                className="input w-full max-w-md input-bordered input-info "
                required
              />
              <textarea
                className="textarea w-full max-w-md input-bordered input-info "
                placeholder="Your message*"
                name="message"
                required
                rows={6}
              ></textarea>
             <button className="btn btn-outline btn-info w-full max-w-md" type="Submit" value="send">Submit</button>
            </div>
            <br />

            <br />
          </form>
        </div>
         
      </div>
      <ToastContainer />

     
    </section>
  );
};

export default Contact;
