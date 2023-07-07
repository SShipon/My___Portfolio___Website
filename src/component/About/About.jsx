
import { Zoom } from "react-reveal";
import Portfolio from "../../assets/Portfolio/porfile (4).png";
import Spin from 'react-reveal/Spin';
const About = () => {
    return (
        <div id='about' className="my-20">
              <h4 className="text-5xl font-semibold text-center p-10 text-white ">ABOUT ME</h4>
              <h5 className="text-center text-lg text-white">---------- Who i am -----------</h5>
             <div  className="flex gap-60 justify-center items-center">
                  <div className="w-2/4">
                  <Spin>
                    <p style={{fontFamily:'Poppins'}} className="text-sm lg:text-base text-white font-normal "> <span className="text-gradient text-2xl">I'm an Frontend Engineer and MERN Stack developer from Cumilla,</span> Bangladesh. a focus on the MERN stack (React, Next.js Redux, MongoDB, Express, and Node.js). With experience in both front-end and back-end development, I have a well-rounded skillset that allows me to build and maintain complex web applications from start to finish. In addition to my technical skills, I am a strong problem-solver and always looking for ways to improve my processes</p>
                    </Spin>
                    <br />
                    <br />
                    <a href='' download>
           <button className="btn btn_hero"><i className="fa-solid fa-phone-volume"></i> Hire Me</button>
          </a>
                  </div>
                  <div className="w-2/6">
                  <Zoom>
                  <img className="w-[350px]" src={Portfolio} alt="" />
                  </Zoom>

                  </div>
             </div>
        </div>
    );
};

export default About;