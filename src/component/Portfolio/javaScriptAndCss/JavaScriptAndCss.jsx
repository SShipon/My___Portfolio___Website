import { useEffect, useState } from "react";
import JsAndCss from "./JsAndCss";

const JavaScriptAndCss = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading

  // Fetch JSON Data
  useEffect(() => {
    fetch("projects.json") // Replace with the correct path to your JSON file
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.categories);
        // Set loading to false after 5 seconds
        setTimeout(() => {
          setLoading(false);
        }, 4000);
      });
  }, []);

  return (
    <div>
      {/* Loading state */}
      {loading ? (
        <p className="text-white text-7xl">.....loading</p>
      ) : (
        <>
          {/* JavaScript Projects */}
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects?.javascript?.map((project) => (
                <JsAndCss key={project.id} project={project} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default JavaScriptAndCss;
