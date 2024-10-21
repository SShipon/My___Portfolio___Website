

import Portfolio from "../../assets/Portfolio/porfile (4).png";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const About = () => {
    return (
        <div id='about' className="my-20">
              <h4 className="text-5xl font-semibold text-center p-4 lg:p-10 text-white ">ABOUT ME</h4>
              <h5 className="text-center text-xl text-white p-4">---------- Who i am -----------</h5>
             <div  className="flex lg:gap-60 flex-col lg:flex-row justify-center items-center">
                  <div className="w-2/2 lg:w-2/4">
                 
                    <p style={{fontFamily:'Poppins'}} className="text-sm lg:text-base text-white font-normal lg:text-justify text-justify "> <span className="text-gradient text-base lg:text-2xl">I'm an Frontend Engineer and MERN Stack developer from Cumilla, Bangladesh.</span> a focus on the MERN stack (React, Next.js Redux, MongoDB, Express, and Node.js). With experience in both front-end and back-end development, I have a well-rounded skillset that allows me to build and maintain complex web applications from start to finish. In addition to my technical skills, I am a strong problem-solver and always looking for ways to improve my processes</p>
                   
                    <br />
                    <br />
                  
           
                   <div class=" hidden lg:block md:block">
                   <HashLink to='/home#contact'>  <button class="borderGradient font-outfit py-2 px-8 text-white text-sm not-italic font-medium leading-[normal]">
                  Read More
                </button></HashLink>
              </div>

                  </div>
                  <div className="w-2/2 lg:w-2/6 sm:order-1 -order-1 py-10">
               
                  <img className="w-[350px]" src={Portfolio} alt="" />
                 

                  </div>
             </div>
        </div>
    );
};

export default About;