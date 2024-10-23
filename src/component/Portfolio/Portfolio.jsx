import { useState } from "react";
import './portfolio.css'
import FullStacks from "./FullStack/FullStacks";
import AllProjects from './allProjects/AllProjects'
import JavaScriptAndCss from "./javaScriptAndCss/JavaScriptAndCss";
const Portfolio = () => {
 
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

   
    return (
        <div id="portfolio" className="container">
      <br />
      <br />

        <div className="my-12">
        <h2
        class="text-white text-center [leading-trim:both] [text-edge:cap] text-5xl not-italic font-semibold leading-[normal] font-outfit relative"
      >
Latest All Projects
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

        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
          <span className="text-xs font-extrabold  lg:text-lg"> All </span>
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
          <span className="text-xs font-extrabold  lg:text-lg"> Js & CSS</span>
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
         <span className="text-xs font-extrabold  lg:text-lg"> Frontend  </span>
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
         <span className="text-xs font-extrabold  lg:text-lg  ">  Full Stack </span>
          </button>
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
             <AllProjects />
          
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
           
           
           <JavaScriptAndCss></JavaScriptAndCss>
          </div>
  
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
           
            <hr />
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, alias.</p>
          </div>
          <div
            className={toggleState === 4 ? "content  active-content" : "content"}
          >
          
          
             <br />
            <FullStacks></FullStacks>
          </div>
        </div>
      </div>
    );
};

export default Portfolio;