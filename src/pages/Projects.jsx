import React from 'react';
import { motion } from 'framer-motion';
import projectDetails from '../scripts/projectDetails.js';
import CardBg from '../assets/card.jpg';

const Projects = () => {
  return (
    <div>
      <section
        id="projects"
        className="my-8 py-12 px-6 max-w-7xl mx-auto rounded-xl shadow-inner bg-gray-700"
      >
        <span className="text-4xl font-bold text-black flex justify-center text-center mb-8">
          My Projects
        </span>

        {/* HORIZONTAL SCROLL CONTAINER */}
        <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scroll-smooth">
          {projectDetails.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: project.id * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[320px] md:min-w-[380px] lg:min-w-[420px] rounded-lg p-6 shadow-lg hover:shadow-2xl relative group bg-cover bg-center transition duration-700 flex-shrink-0"
              style={{
                backgroundImage: `url(${CardBg})`,
              }}
            >
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-all duration-300 rounded-lg z-0"></div>

              <div className="relative z-10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-slate-700 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-full font-semibold transition"
                  >
                    View Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-400 hover:bg-indigo-500 text-white px-3 py-1 rounded-full font-semibold transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
