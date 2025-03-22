import { useEffect } from "react";
import { motion } from "framer-motion";

const education = [
  {
    category: "UNIVERSITY",
    school: "Technical University of Kenya – Bachelors Degree",
    year: "September 2023 - Present",
  },
  {
    category: "HIGH SCHOOL",
    school: "OLC Mugoiri Girls – High School Diploma",
    year: "2019 – 2022",
  },
  {
    category: "PRIMARY EDUCATION",
    schools: [
      { name: "Little Friends Academy", year: "2017 – 2018" },
      { name: "Lizar School", year: "2007 - 2016" },
    ],
  },
  {
    category: "PROFESSIONAL CERTIFICATION",
    schools: [
      { name: "Moringa School Software Engineer", year: "September  2024 to date"},
      { name: "Power Learn Project Full-Stack Development ", year: "2024 to date" },
    ],
  },
];

const projects = [
  {
    title: "Recipe Search App",
    description:
      "A web app that allows users to search, add, update, and delete recipes using both a personal recipe collection and the MealDB API.",
    tech: ["JavaScript", "HTML", "CSS", "API Integration"],
    link: "https://github.com/sheena849/Project-1.git",
  },
  {
    title: "Investment Portfolio Management System",
    description:
      "A command-line app using Python and SQLAlchemy for tracking investments, portfolios, and transactions within a company.",
    tech: ["Python", "SQLAlchemy"],
    link: "https://github.com/sheena849/Investment-Portfolio.git",
  },
  {
    title: "Care-Connect",
    description:
      "A web-based hospital management system with patient tracking and appointment scheduling, using React and Flask.",
    tech: ["React", "Flask", "JWT Authentication"],
    link: "https://github.com/sheena849/Care-Connect.git",
  },
  {
    title: "MyDuka – E-Commerce System",
    description:
      "An online store management platform with user authentication, admin dashboard, and business insights reporting.",
    tech: ["Flask", "PostgreSQL", "React", "Tailwind CSS"],
    link: "https://github.com/Maslah-mohamed1789/My-Duka-Project.git",
  },
];

const EducationProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.section 
      className="py-16 px-6 bg-gray-900 text-white pt-32"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
        {/* Education Section */}
        <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
          <h2 className="text-3xl font-semibold text-center mb-6 text-teal-400">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="space-y-4 mt-8">
              <h3 className="text-xl font-bold uppercase underline text-white">{edu.category}</h3>
              {edu.schools ? (
                edu.schools.map((school, i) => (
                  <p key={i} className="text-lg text-white">{school.name} <span className="text-teal-300 text-sm">({school.year})</span></p>
                ))
              ) : (
                <p className="text-lg text-white">{edu.school} <span className="text-teal-300 text-sm">({edu.year})</span></p>
              )}
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="w-full lg:w-1/2 pl-0 lg:pl-8">
          <h2 className="text-3xl font-semibold text-center mb-6 text-teal-400">Projects</h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-white">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-teal-500 text-gray-900 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="mt-4 inline-block text-teal-400 hover:underline hover:text-teal-300 transition duration-300"
                >
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default EducationProjects;