import { useState } from "react";
import './portfolio.css'
import CssProjects from "./CssProjects/CssProjects";
import FullStacks from "./FullStack/FullStacks";

const Portfolio = () => {
 
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

   
    return (
        <div id="portfolio" className="container">
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
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
          <span className="text-xs font-extrabold  lg:text-lg"> Html & CSS </span>
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
          <span className="text-xs font-extrabold  lg:text-lg"> JavaScript</span>
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
         <span className="text-xs font-extrabold  lg:text-lg"> React.js </span>
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
         <span className="text-xs font-extrabold  lg:text-lg">  Mern Stack </span>
          </button>
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <h2>Html and css Projects</h2>
            <hr />
            <CssProjects></CssProjects>
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <h2>Content 2</h2>
            <hr />
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui laboriosam facilis totam! Alias nesciunt rerum laboriosam at dolor. Voluptas, repellendus.</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, saepe eligendi. Veniam, explicabo a. Quidem quae expedita repellat! Provident, quam!</p>
          </div>
  
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <h2>Content 4</h2>
            <hr />
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, alias.</p>
          </div>
          <div
            className={toggleState === 4 ? "content  active-content" : "content"}
          >
            <h2>Content 3</h2>
            <hr />
            <FullStacks></FullStacks>
          </div>
        </div>
      </div>
    );
};

export default Portfolio;