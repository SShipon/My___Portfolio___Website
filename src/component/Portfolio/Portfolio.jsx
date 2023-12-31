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
            <h3 className="text-3xl text-gradient font-extrabold text-center my-10">My Latest All Projects </h3>
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