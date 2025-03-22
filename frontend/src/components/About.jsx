import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const skills = ["React", "Tailwind CSS", "Flask", "PostgreSQL", "Machine Learning"];
  const careerGoals = [
    "Become an expert in AI & Machine Learning",
    "Build scalable & innovative tech solutions",
    "Contribute to open-source projects",
    "Start my own tech company in the future",
  ];

  // Scroll to top when About section is loaded
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const listItems = activeTab === "skills" ? skills : careerGoals;

  return (
    <section id="about" className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-6 md:px-16">
      {/* Left Side - Image */}
      <motion.div 
        className="w-full md:w-1/3 flex justify-center mt-24 md:mt-0"  
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <img
          src="/cat3.jpeg"
          alt="Sheena Wanjiru Mugo"
          className="w-72 md:w-80 lg:w-96 rounded-lg border-4 border-teal-400 shadow-lg object-cover"
          style={{ maxHeight: "400px" }}
        />
      </motion.div>

      {/* Right Side - About Me */}
      <motion.div 
        className="w-full md:w-2/3 text-center md:text-left mt-8 md:mt-0 md:pl-12"
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-teal-400 mb-4">
          About Me
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed">
          I am a <span className="font-semibold text-white">Software Engineer</span> with expertise in <span className="font-semibold text-white">full-stack development</span>.  
          I specialize in building scalable, high-performance applications  
          using <span className="font-semibold text-white">React, Tailwind CSS, Flask, and PostgreSQL</span>.
        </p>

        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          Currently, I'm <span className="font-semibold text-white">expanding my knowledge in Machine Learning</span>  
          to create intelligent and data-driven applications.
        </p>

        {/* Toggle Buttons */}
        <div className="mt-6 flex gap-4">
          {['skills', 'careerGoals'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              aria-pressed={activeTab === tab}
              className={`px-4 py-2 rounded-lg font-semibold transition focus:outline-none ${
                activeTab === tab
                  ? "bg-teal-500 text-gray-900"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {tab === "skills" ? "Skills" : "Career Goals"}
            </button>
          ))}
        </div>

        {/* Skills or Career Goals Content */}
        <motion.ul 
          key={activeTab}
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, staggerChildren: 0.1 }} 
          className="mt-4 space-y-2 text-lg text-gray-300"
        >
          {listItems.map((item, index) => (
            <motion.li 
              key={index} 
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: -5 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-teal-400">•</span> {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default About;
