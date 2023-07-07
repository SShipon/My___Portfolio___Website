
import { Zoom } from "react-reveal";
import Portfolio from "../../assets/Portfolio/porfile (4).png";
import Spin from 'react-reveal/Spin';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const About = () => {
    return (
        <div id='about' className="my-20">
              <h4 className="text-5xl font-semibold text-center p-4 lg:p-10 text-white ">ABOUT ME</h4>
              <h5 className="text-center text-xl text-white p-4">---------- Who i am -----------</h5>
             <div  className="flex lg:gap-60 flex-col lg:flex-row justify-center items-center">
                  <div className="w-2/2 lg:w-2/4">
                  <Spin>
                    <p style={{fontFamily:'Poppins'}} className="text-sm lg:text-base text-white font-normal lg:text-justify text-justify "> <span className="text-gradient text-base lg:text-2xl">I'm an Frontend Engineer and MERN Stack developer from Cumilla, Bangladesh.</span> a focus on the MERN stack (React, Next.js Redux, MongoDB, Express, and Node.js). With experience in both front-end and back-end development, I have a well-rounded skillset that allows me to build and maintain complex web applications from start to finish. In addition to my technical skills, I am a strong problem-solver and always looking for ways to improve my processes</p>
                    </Spin>
                    <br />
                    <br />
                  
                   <HashLink to='/home#contact'> <button className="btn btn_hero"><i className="fa-solid fa-phone-volume"></i> Hire Me</button></HashLink>
       
                  </div>
                  <div className="w-2/2 lg:w-2/6 sm:order-1 -order-1 py-10">
                  <Zoom>
                  <img className="w-[350px]" src={Portfolio} alt="" />
                  </Zoom>

                  </div>
             </div>
        </div>
    );
};

export default About;