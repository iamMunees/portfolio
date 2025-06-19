import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/hero.png';

const Home = () => {
  return (
    <div>
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-darkBg to-gray-900 px-4"
      >
        <img
          src={HeroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-10 sm:opacity-20 md:opacity-30 lg:opacity-40 z-0"
        />
        <div className="relative z-10 max-w-3xl mx-auto p-8 bg-darkCard bg-opacity-80 rounded-xl shadow-2xl backdrop-blur-sm text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  font-extrabold text-primary mb-4 leading-tight">
            Hi, I'm <span className="bg-clip-text italic bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent animate-pulse">MUNEESWARAN</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-darkText mb-8">
            A <span className="font-semibold text-primary">passionate Frontend Developer</span> building captivating web experiences.
          </p>
          <Link
            to="/projects"
            className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
