import React from "react";

function Projects() {
    const projects = [
        { title: "Enshaa", description: "A platform for selling products and managing projects." },
        { title: "E15", description: "A special project for issuing invoices and receipts to institutions and can be linked to it from any terminal." },
        { title: "Emdad Platform", description: "A platform for buying and selling through individuals or companies." },
    ];

    return (
        <section id="projects" className="projects-section p-[20px] m-[10px]">
            <h2 className="text-[30px]">Projects</h2>
            <div className="p-[20px] flex flex-col gap-4 justify-center items-start bg-[#353839]">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h3 className="text-[#ffffff]">- {project.title}</h3>
                        <p className="p-[20px] text-[#ffffff]">* {project.description}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default Projects;