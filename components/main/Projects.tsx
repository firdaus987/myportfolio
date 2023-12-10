import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const projectsData = [
    {
      src: "/home_p1.png",
      title: "UD. NABILA",
      description: "Innovative desktop application specifically designed to ease transactions and stock management in the stationery store business. Developed in partnership with UD Nabila, the app provides a comprehensive solution to help ATK shop owners improve operational efficiency and enhance customer experience."
    },
    {
      src: "/home_p2.png",
      title: "BREAD’O",
      description: "BREAD'O desktop application is a modern and sophisticated solution for bakery transaction management, developed specifically for Lily Bakery partners. Designed to simplify the transaction process, sales recording, and bread stock management quickly and efficiently. Equipped with barcode scanner and e-report feature."
    },
    {
      src: "/home_p3.png",
      title: "V-ANGKRINGAN",
      description: "V-ANGKRINGAN is an innovative web application that provides an easy and convenient transaction experience at Angkringan Mbah Singo. With V-ANGKRINGAN, transactions at Angkringan Mbah Singo become more practical and modern, creating a satisfying shopping experience for every user."
    },
    {
      src: "/home_p4.png",
      title: "E-DAMKAR",
      description: "E-DAMKAR is a web application specifically designed to improve efficiency and effectiveness in the operational management of the Nganjuk District Fire Service. Developed in collaboration with key partner, the Nganjuk District Fire Service, E-DAMKAR brings a digital revolution in emergency incident handling and coordination."
    },
    {
      src: "/home_p5.png",
      title: "HYPERMEDIA LEARNING ENVIRONMENT",
      description: "Hypermedia Learning Environment (HLE) is a learning media that uses the concept of multimedia learning and organizes it as a network-like information structure. HLE creates an interactive and immersive learning experience, allowing users to explore content independently and customize their learning to individual needs and preferences."
    },
    {
      src: "/home_p6.png",
      title: "Quar'any",
      description: "Qur'any is a revolutionary innovation in the digital world to facilitate users in accessing and understanding the Quran. With an attractive and functional UI/UX design, Qur'ani has won the 5th Runner Up Award at the National Level. The app not only offers easy access to the holy text of the Quran but also provides a thorough and immersive user experience."
    },
    {
      src: "/home_p7.png",
      title: "SiMaPos",
      description: "SiMaPos is an innovative app that aims to address the serious problems associated with food waste. With a focus on positive solutions, SiMaPos seeks to create an ecosystem that connects food donors with recipients in need, thus creating a virtuous circle that reduces food waste."
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <div className="col-span-3 text-left mb-8">
          <h2 className="text-2xl font-semibold mb-4">Desktop Application</h2>
        </div>
        {projectsData.slice(0, 2).map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
          />
        ))}

        <div className="col-span-3 text-left mb-8">
          <h2 className="text-2xl font-semibold mb-4">Website Application</h2>
        </div>
        {projectsData.slice(2, 5).map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
          />
        ))}

        <div className="col-span-3 text-left mb-8">
          <h2 className="text-2xl font-semibold mb-4">UI/UX Design</h2>
        </div>
        {projectsData.slice(5).map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};


export default Projects;
