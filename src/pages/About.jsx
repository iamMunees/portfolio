import React from 'react';
import { motion } from 'framer-motion';
import ProfileImage from '../assets/AboutImg.png';
import ResumePDF from '../assets/MUNEESWARAN.pdf';

const About = () => {
  return (
    <div className="relative overflow-hidden">
   
      <div className="relative z-10 max-w-6xl mx-auto py-20 px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
        
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <img
              src={ProfileImage}
              alt="Muneeswaran"
              className="w-96 h-96 rounded-lg  object-cover shadow-xl "
            />
          </motion.div>

        
          <motion.div
            className="text-center md:text-left text-white bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>

            <p className="text-lg mb-4 leading-relaxed">
              I'm <span className="text-yellow-400 animate- font-semibold">Muneeswaran S</span>, a passionate frontend developer
              with hands-on experience in building dynamic, responsive apps using React, JavaScript, and Tailwind CSS.
              I'm currently pursuing a B.Tech in IT at Sengunthar College of Engineering.
            </p>

            <p className="mb-4 leading-relaxed">
              I've created multiple real-world projects like college symposium and travel websites, applying intuitive UI
              and strong logic. I'm skilled in Git, Figma, and IntelliJ, and certified in Full Stack and UI/UX.
            </p>

            <p className="mb-6 leading-relaxed">
              I'm driven to improve user experiences with technology and always excited to grow as a developer.
            </p>

            <motion.a
              href={ResumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
