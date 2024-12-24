import React from "react";
import java from "../../public/Java.png"
import Hibernate from "../../public/Hibernate.png"
import MySQL from "../../public/MySQL.png"
import PHP from "../../public/PHP.png"
import bootstrap from "../../public/bootstrap.jpg"
import css from "../../public/css.png"
import ebean from "../../public/ebean.png"
import html from "../../public/html.png"
import javascript from "../../public/javascript.png"
import jooby from "../../public/jooby.png"
import tailwind from "../../public/tailwind.png"
import sql from "../../public/sql.png"
import jsp from "../../public/jsp.png"
import next from "../../public/next js.png"
import react from "../../public/react.svg"
import spring from "../../public/spring.png"
import springBoot from "../../public/spring boot.png"
import Laravel from "../../public/laravel.avif"
import Image from "next/image";

function Skills() {
  const skills = [
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "JavaScript", logo: javascript },
    { name: "Java", logo: java },
    { name: "Jooby", logo: jooby },
    { name: "PHP", logo: PHP },
    { name: "MySQL", logo: MySQL },
    { name: "SQL", logo: sql },
    { name: "Hibernate", logo: Hibernate },
    { name: "Ebean", logo: ebean },
    { name: "Tailwind", logo: tailwind },
    { name: "Bootstrap", logo: bootstrap },
    { name: "JSP", logo: jsp },
    { name: "Next JS", logo: next },
    { name: "React JS", logo: react },
    { name: "Spring", logo: spring },
    { name: "Spring Boot", logo: springBoot },
    { name: "Laravel", logo: Laravel },
  ];

  return (
    <section id="skills" className="p-[20px] m-[10px] ">
      <h2 className=" text-[30px]">Skills</h2>
      <div className="skills-container p-[20px] grid grid-cols-3 gap-4 justify-items-center content-center bg-[#353839]">
        {skills.map((skill, index) => (
          <div key={index} className="w-[250px] rounded-[8px] h-[300px] bg-[#ffffff] flex flex-col gap-[44px] justify-center p-[10px] items-center">
            <Image src={skill.logo} height={100} width={100} alt={skill.name} />
            <p className="font-bold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
