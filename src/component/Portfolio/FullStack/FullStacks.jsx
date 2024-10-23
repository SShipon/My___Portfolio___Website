import { useEffect, useState } from "react";
import FullStack from "./FullStack";

const JavaScriptAndCss = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true); 

  
  useEffect(() => {
    fetch("projects.json") 
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.categories);
        
        setTimeout(() => {
          setLoading(false);
        }, 4000);
      });
  }, []);

  return (
    <div>
  
      {loading ? (
        <p className="text-white text-7xl">.....loading</p>
      ) : (
        <>
          {/* JavaScript Projects */}
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects?.mernStack?.map((project) => (
                <FullStack key={project.id} project={project} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default JavaScriptAndCss;
