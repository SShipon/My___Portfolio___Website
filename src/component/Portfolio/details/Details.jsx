import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
  const { id } = useParams(); // Get project ID from URL
  const [project, setProject] = useState(null);

  // Fetch the project details based on the ID
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch("/projects.json"); // Fetch the projects.json file
        const data = await response.json();
        console.log(data, "Fetched Data");

        // Convert id to a number to match with the project ids in the JSON file
        const projectId = Number(id);

        // Loop through all categories and find the project by ID
        let foundProject = null;
        Object.keys(data.categories).forEach((category) => {
          const project = data.categories[category].find(
            (proj) => proj.id === projectId
          );
          if (project) {
            foundProject = project;
            console.log(project);
          }
        });

        // Check if a project was found
        if (!foundProject) {
          console.error(`Project with ID ${projectId} not found`);
        }

        setProject(foundProject);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className="bg-[#0b041e] p-20">
      <div className="flex">
        <div>
          <div className="image___warp w-[330px] h-[300px] md:w-[360px] md:h-[300px] lg:w-[365px] lg:h-[330px] gradient-border overflow-hidden relative game__box">
            <img
              className="w-[100%] h-[100%] object-cover overflow-x-hidden relative rounded-xl"
              src={project.img}
              alt={project.name}
            />
          </div>
        </div>

        <div className="ml-5">
          <h3 className="text-2xl font-semibold">{project.name}</h3>
          <h3 className="text-1xl font-semibold">Introduction</h3>
          <p>{project.des}</p>

          <h3 className="text-1xl font-semibold">Project Description</h3>
          <p>{project.ProjectDescription}</p>

          <h3 className="text-2xl font-semibold">Projects Technology Use</h3>
          <ul className="pl-5">
            {project.technologies?.map((tech, index) => (
              <li key={index} className="flex items-center">
                <i className="fas fa-cog mr-2"></i>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
