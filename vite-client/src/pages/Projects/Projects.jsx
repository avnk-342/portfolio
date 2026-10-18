import { Link } from "react-router-dom";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../config/firestore";
import Footer from '../../components/Footer/Footer';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const projectCollectionRef = collection(db, "project_info");
        const data = await getDocs(projectCollectionRef);
        const filteredData = await Promise.all(
          data.docs.map(async (projectDoc) => {
            const project = projectDoc.data();
            const individualProjectRef = doc(
              db,
              "individual_project_info",
              projectDoc.id,
            );
            const individualProjectSnapshot = await getDoc(individualProjectRef);
            const individualProject = individualProjectSnapshot.exists()
              ? individualProjectSnapshot.data()
              : {};

            return {
              ...project,
              id: projectDoc.id,
              image:
                project.image ||
                project.image1 ||
                individualProject.image1 ||
                individualProject.image,
            };
          }),
        );
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
    <main className="min-h-screen px-5 pb-16 pt-32 text-text-dark sm:px-8">
      <section className="mx-auto w-full max-w-5xl">
        <div className="mb-7 border-b border-light-shadow/30 pb-4">
          <h1 data-reveal className="text-3xl font-semibold">Projects</h1>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((item, index) => {
            const image = item.image || item.image1 || item.thumbnail || item.cover_image;
            const description = item.oneintro || item.description || item.desc;

            return (
              <Link
                key={item.id || `${item.name}-${index}`}
                to={`/project/${item.id}`}
                data-reveal
                style={{ "--reveal-delay": `${index * 80}ms` }}
                className="group flex flex-col overflow-hidden rounded-xl border border-light-shadow/15 bg-light-cards shadow-sm transition-[transform,box-shadow] duration-200 hover:scale-[1.02] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:flex-row"
              >
                <div className="aspect-video w-full shrink-0 overflow-hidden bg-secondary-light-bg sm:aspect-auto sm:h-36 sm:w-36 lg:h-44 lg:w-44">
                  {image ? (
                    <img
                      src={image}
                      alt={`${item.name || "Project"} preview`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full min-h-36 items-center justify-center font-mono text-sm text-text-dark/60">
                      Project preview
                    </div>
                  )}
                </div>
                <div className="flex min-w-0 flex-col justify-center p-4">
                  <h2 className="mb-2 text-xl font-semibold text-text-dark transition-colors group-hover:text-primary">
                    {item.name || "Untitled project"}
                  </h2>
                  <p className="line-clamp-3 text-sm leading-6 text-text-dark/75">
                    {description || "Project details coming soon."}
                  </p>
                </div>
              </Link>
            );
          })}
          {projects.length === 0 && (
            <p className="py-8 text-center text-text-dark/70 md:col-span-2">
              No projects to show yet.
            </p>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Projects;
