import React, { useState } from "react";
import Skills from "./Skills";
import Portfolio from "../assets/Portfolio.jpg";
import EventManagement from "../assets/Event-Management.jpg";

const Projects = () => {
  // Project data
  const projectData = [
    { name: "Portfolio", img: Portfolio, discription:"A modern, responsive portfolio showcasing my skills and projects with a sleek design and user-friendly interface." },
    { name: "Event Management System", img: EventManagement , discription: "An efficient event management system designed to streamline planning, coordination, and execution of events with real-time updates and user-friendly features." },
  ];

  // use state for project button modal

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="bg-white text-white h-full relative">
        <Skills />

        <div className="project-container">
          <h1 className="text-4xl font-bold text-center p-8 tracking-wider hover:scale-110 transition-transform duration-300 md:hover:scale-150 md:text-5xl">
            <span className="text-[#4C3594]">Pro</span>
            <span className="text-[#EB5365]">jects!</span>
          </h1>
          {/* ------------------------------------------------------------------------------------------------------------------------------ */}
          {/* Importing project data using map */}
          <div className="p-5 flex flex-wrap justify-center gap-6">
            {projectData.map((p, index) => (
              <ProjectBox key={index} p={p} />
            ))}
          </div>
        </div>
            {/* ---------------------------------------------------------------------------------------------------------------------------- */}
        {/* Modal Button */}
        <button
          onClick={toggleModal}
          className="absolute top-[62%] right-[20px] transform rotate-90 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all duration-300"
        >
          Click Me
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 relative max-w-sm mx-auto">
              <button onClick={toggleModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#0000F5"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
              </button>
              <h2 className="text-2xl font-bold mb-4 text-red-600">Projects Not Linked</h2>
              <p className="mb-4 text-black">
                Currently, projects are not linked in this portfolio. If you
                want to see my projects, you can visit my GitHub.
              </p>
              <a
                href=" https://github.com/Kaizen2002"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit my GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

const ProjectBox = ({ p }) => {
  return (
    <div className="project-card w-[90%] md:w-[450px] h-[250px] relative bg-white m-auto mb-8 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">

      {/* Front side */}
      <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg overflow-hidden">
        <img src={p.img} alt={p.name} className="w-full h-full object-cover bg-cover " />
      </div>

      {/* Back side */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-800 rounded-lg overflow-hidden transform rotate-y-180 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="flex flex-col justify-center items-center h-full text-white">
          <h3 className="text-3xl font-bold mb-4">{p.name}</h3>
          <p className="text-lg p-2">{p.discription}
          </p>
          <a href="#" className="mt-4 px-4 py-2 bg-white text-purple-800 rounded-lg hover:bg-purple-200 transition-all duration-300">
            Take a Tour
          </a>
        </div>
      </div>
    </div>
  );
};
