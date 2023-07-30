import { useEffect } from "react";
import { useState } from "react";
import CssProject from "./CssProject";


const CssProjects = () => {

    const [projects, setProjects] = useState([])
    useEffect(()=>{
      fetch('fullStack.json')
      .then(res => res.json())
      .then(data => setProjects(data.css))
      
    },[])
    return (

        <div>
       
          {!projects?<p className="text-white text-7xl">.....loading</p>:
             
        
         
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                projects?.map(project=><CssProject
                   key={project.id}
                   project={project}
                ></CssProject>)
                }
                  
             </div>
        }
        </div>


    );
};

export default CssProjects;