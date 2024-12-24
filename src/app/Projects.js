import React from "react";

function Projects() {
  const projects = [
    { title: "Project 1", description: "Details about project 1." },
    { title: "Project 2", description: "Details about project 2." },
    { title: "Project 3", description: "Details about project 3." },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;