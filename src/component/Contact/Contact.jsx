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

        <div className="my-12">
        <h2
        class="text-white text-center [leading-trim:both] [text-edge:cap] text-5xl not-italic font-semibold leading-[normal] font-outfit relative"
      >
       CONTACT US

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="256"
          height="18"
          viewBox="0 0 256 18"
          fill="none"
          class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2"
        >
          <path
            d="M253 15.0003C192 0.000329018 75 0.000244617 3 11.0003"
            stroke="url(#paint0_linear_22_140)"
            stroke-width="5"
            stroke-linecap="round"></path>
          <defs>
            <linearGradient
              id="paint0_linear_22_140"
              x1="264"
              y1="15.3887"
              x2="-13.4"
              y2="23.754"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3F1EFF"></stop>
              <stop offset="0.415" stop-color="#F459FF"></stop>
              <stop offset="0.69" stop-color="#FC6A93"></stop>
              <stop offset="1" stop-color="#FFF2A2"></stop>
            </linearGradient>
          </defs>
        </svg>
       

      </h2>
        </div>
        <span className="text-2xl lg:text-3xl text-white  italic p-4 ">Stay connected with us</span>
      </div>
      <div className="mt-20">
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
      </div>
      <ToastContainer />

     
    </section>
  );
};

export default Contact;
