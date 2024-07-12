import React from "react";
import html5Logo from "../assets/html5.png";
import css3Logo from "../assets/css3.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import gitLogo from "../assets/git.png";
import tailwindLogo from "../assets/tailwind.png";
import bootstrapLogo from "../assets/bootstrap.png";
import javaLogo from "../assets/java.png";
import mysqlLogo from "../assets/mysql.png";
import "./Skills.css";

const skills = [
  { name: "HTML5", logo: html5Logo },
  { name: "CSS3", logo: css3Logo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "Git/GitHub", logo: gitLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
  { name: "Bootstrap", logo: bootstrapLogo },
  { name: "Java", logo: javaLogo },
  { name: "MySQL", logo: mysqlLogo },
];

const Skills = () => {
  return (
    <div className=" text-white h-auto">
      <div className="skill-container  bg-[#4C3594] p-10 flex flex-wrap justify-center gap-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item flex flex-col items-center border rounded-lg p-2 w-full md:w-[200px] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="skill-logo p-0 w-[50px] h-[40px] mb-1 md:w-[70px] md:h-[70px] md:mb-2"
            />
            <div className="skill-name text-center mt-2 font-bold">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
