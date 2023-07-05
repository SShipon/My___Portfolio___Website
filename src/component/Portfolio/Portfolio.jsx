import { useState } from "react";
import './portfolio.css'

const Portfolio = () => {
 
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

   
    return (
        <div className="container">
            <h3 className="text-3xl text-gradient font-extrabold text-center my-10">My Latest All Projects </h3>
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
          <span className="text-xs font-extrabold  lg:text-lg"> Html & CSS Projects</span>
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
          <span className="text-xs font-extrabold  lg:text-lg"> JavaScript & React Projects</span>
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
         <span className="text-xs font-extrabold  lg:text-lg">  Mern Stack Projects</span>
          </button>
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <h2>Content 1</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
              vel voluptatum?
            </p>
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <h2>Content 2</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatum qui adipisci.
            </p>
          </div>
  
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <h2>Content 3</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Portfolio;