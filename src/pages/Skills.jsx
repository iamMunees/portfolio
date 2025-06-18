import React from 'react';
import {
  Code,
  Palette,
  FileCode,
  Atom,
  GitBranch,
  MonitorSmartphone,
  PenTool,
  GaugeCircle,
} from 'lucide-react';
import { FaJava } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { BsFiletypeSql } from "react-icons/bs";
import { SiPostman,SiTailwindcss  } from "react-icons/si";

const skillsData = [
  {
    title: 'HTML5',
    description: 'Semantic & Accessible Markup',
    icon: <FileCode size={32} className="mx-auto text-primary" />,
  },
  {
    title: 'CSS3',
    description: 'Tailwind CSS, Responsive Layouts',
    icon: <Palette size={32} className="mx-auto text-primary" />,
  },
  {
    title: 'JavaScript',
    description: 'ES6+, DOM Manipulation, Events',
    icon: <AiOutlineJavaScript size={32} className="mx-auto text-primary" />,
  },
  {
    title: 'Tailwind CSS',
    description: 'Utility-First CSS Framework',
    icon: <SiTailwindcss size={32} className="mx-auto text-primary" />,
  },
  {
    title: 'Java',
    description: 'OOP, Data Structures, Backend Logic',
    icon: <FaJava size={32} className="mx-auto text-primary" />,
  },
  {
    title: 'SQL',
    description: 'Database Queries, Joins, DDL/DML',
    icon: <BsFiletypeSql size={32} className="mx-auto text-primary" />,
  },
  {
    title: 'Postman',
    description: 'API Testing, RESTful Services',
    icon: <SiPostman size={32} className="mx-auto text-primary" />,
  },
  {
    title: 'React.js',
    description: 'Components, Hooks, State Management',
    icon: <Atom size={32} className="mx-auto text-primary" />,
  },
  {
    title: 'Git & GitHub',
    description: 'Version Control, Branching, Collaboration',
    icon: <GitBranch size={32} className="mx-auto text-primary" />,
  },
  {
    title: 'Responsive Design',
    description: 'Mobile-First, Cross-Browser Compatibility',
    icon: <MonitorSmartphone size={32} className="mx-auto text-primary" />,
  },
  {
    title: 'Figma',
    description: 'UI Design, Wireframing, Prototyping',
    icon: <PenTool size={32} className="mx-auto text-primary" />,
  },
  {
    title: 'Performance Optimization',
    description: 'Lazy Loading, Code Splitting, Web Vitals',
    icon: <GaugeCircle size={32} className="mx-auto text-primary" />,
  },
];

const Skills = () => {
  return (
    <div>
      <section id="skills" className="bg-darkCard rounded-xl my-8 py-12 px-6 shadow-xl max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-8">My Skills</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              {skill.icon}
              <h3 className="text-2xl font-semibold text-white mt-3 mb-2">{skill.title}</h3>
              <p className="text-darkText">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
