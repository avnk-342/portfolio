import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../config/firestore";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const projectCollectionRef = collection(db, "project_info");
        const data = await getDocs(projectCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        filteredData.sort((first, second) =>
          first.id.localeCompare(second.id, undefined, { numeric: true }),
        );
        setProjects(filteredData);
      } catch (error) {
        console.error(error);
      }
    };

    getProjects();
  }, []);

  return (
    <div id="projects" className="mt-25">
      <h2 data-reveal className="font-mono text-xl underline">Engineering Projects</h2>

      <div className="flex flex-col gap-8 mt-10">
        {projects.slice(0, 3).map((project, index) => {
          const techList = Array.isArray(project.tech_stack)
            ? project.tech_stack
            : typeof project.tech_stack === "string"
              ? project.tech_stack
                  .split(",")
                  .map((tech) => tech.trim())
                  .filter(Boolean)
              : [];

          return (
            <div
              key={project.id || `${project.name}-${index}`}
              data-reveal
              style={{ "--reveal-delay": `${index * 100}ms` }}
              className={`project-feature relative flex items-center rounded-lg bg-light-cards p-6 ${index % 2 !== 0 ? "flex-row-reverse" : ""} fade-in`}
            >
              <div className="project-content">
                <p className="mb-2 font-mono text-[0.9rem] text-primary">
                  {project.type || "Featured Project"}
                </p>
                <h3 className="mb-3 text-[1.8rem]">
                  <Link
                    to={`/project/${project.id}`}
                    className="text-inherit no-underline transition-colors hover:text-primary focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {project.name}
                  </Link>
                </h3>

                <div className="mb-6 rounded bg-bg-light p-3">
                  <p className="text-justify">{project.description}</p>
                </div>

                {techList.length > 0 && (
                  <ul className="mb-1 flex list-none gap-6 font-mono text-[0.85rem]">
                    {techList.map((tech, techIndex) => (
                      <li key={`${project.name}-${tech}-${techIndex}`}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-end">
        {projects.length > 3 && (
          <Link
            to="/projects/"
            className="mt-8 rounded border border-primary px-4 py-2 font-mono text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            More
          </Link>
        )}
      </div>
    </div>
  );
};

export default Project;
