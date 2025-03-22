import { Link, useLocation } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-6 md:px-16">


      {/* Image on the Left */}
      <motion.div
        className="mt-8 md:mt-0 md:mr-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/cat3.jpeg"
          alt="Sheena Wanjiru Mugo"
          className="w-72 md:w-96 rounded-full border-4 border-teal-400 shadow-lg"
        />
      </motion.div>

      {/* Text on the Right */}
      <motion.div 
        className="text-center md:text-left"
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-teal-400">
          Hi, I'm Sheena Wanjiru Mugo
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold mt-4">
          <Typewriter
            words={["I am a Software Engineer.", "I build amazing web experiences."]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </h3>
        <p className="text-lg text-gray-300 mt-6 max-w-lg leading-relaxed">
          Passionate about creating intuitive, efficient, and visually appealing digital solutions.
          I specialize in crafting full-stack applications with modern technologies.
        </p>
        <div className="mt-8">
          <Link
            to="/cv"
            className="px-6 py-3 bg-teal-400 text-gray-900 text-lg rounded-lg shadow-md hover:bg-teal-500 transition transform hover:scale-105"
          >
            View My CV
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
