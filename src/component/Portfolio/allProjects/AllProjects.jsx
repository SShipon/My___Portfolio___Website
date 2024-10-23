import { useEffect, useState } from "react";
import AllProject from "./AllProject";

const AllProjects = () => {
  const [projects, setProjects] = useState(null);

  // Fetch JSON Data
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.categories));
  }, []);

  return (
    <div>
    {/* Loading state */}
    {!projects ? (
      <p className="text-white text-7xl">.....loading</p>
    ) : (
      <>
       
      
    <div className="mt-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.javascript.map((project) => (
            <AllProject key={project.id} project={project} />
          ))}
        </div>

        {/* MERN Stack Projects */}
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-4 ">
          {projects.mernStack.map((project) => (
            <AllProject key={project.id} project={project} />
          ))}
        </div>

        {/* Frontend Projects */}
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.frontend.map((project) => (
            <AllProject key={project.id} project={project} />
          ))}
        </div>
    </div>
      </>
    )}
  </div>
  );
};

export default AllProjects;
