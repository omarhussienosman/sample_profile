import React from "react";
import photo from "../../public/programmer.jpg"
import Image from "next/image";
function About() {
  return (
    <div id="about" className="flex flex-col gap-4 p-[40px] m-[30px] h-full bg-[#353839]">
      <h1 className="text-[#ffffff] text-[30px]">About Me </h1>
      <div className="flex flex-row justify-between gap- pl-[30px] w-full h-full">
        <Image src={photo} width={350} height={400} alt="Profile" className="profile-img" />
        <p  className="w-[60%] pt-[20px] text-[#ffffff] flex flex-col">
          <strong className="text-[40px]">I'm Omer Hussien Osman</strong>
           Experienced backend developer with over +3 years of proficiency in Java and PHP languages. Skilled in leveraging Springboot,
          Jooby, and Laravel frameworks. Additionally, well-versed in frontend technologies including Bootstrap, JavaScript , reactjs , nextjs ,
          tailwind and CSS . Proficiency extends to crafting efficient systems and contributing positively to resolving critical software
          challenges for diverse organizations.</p>
      </div>

    </div>
  );
}

export default About;
