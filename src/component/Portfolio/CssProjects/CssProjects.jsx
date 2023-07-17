import { useEffect } from "react";
import { useState } from "react";
import CssProject from "./CssProject";


const CssProjects = () => {
    const [projects, setProjects] = useState([])
    useEffect(()=>{
      fetch('cssProject.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      
    },[])
    return (
        <div>
             <h1>{projects.length}</h1> 
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                projects.map(project=><CssProject
                   key={project.id}
                   project={project}
                ></CssProject>)
                }
                  
             </div>
        </div>
    );
};

export default CssProjects;