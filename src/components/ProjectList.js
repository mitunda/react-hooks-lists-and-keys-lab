// import React from "react";
// import ProjectItem from "./ProjectItem";

// function ProjectList({ projects }) {
//   console.log(projects);
//   return (
//     <div id="projects">
//       <h2>My Projects</h2>
//       <div id="project-list">
//         {projects.map((project) => (
//           <ProjectItem key={project.id} title={project.title} description={project.description} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProjectList;

import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* Map over the projects array and render ProjectItem components */}
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            name={project.name}
            about={project.about}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
