import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", logo: "/assets/skill-logos/html.png" },
    { name: "CSS", logo: "/assets/skill-logos/css.png" },
    { name: "JavaScript", logo: "/assets/skill-logos/js.png" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.logo} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
