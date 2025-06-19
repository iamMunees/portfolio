import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../public/logoImg.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark'); 

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#1e293b'; 
      document.body.style.color = '#ffffff'; 
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f1f5f9'; 
      document.body.style.color = '#1e293b'; 
    }
  }, [theme]); 
  const navStyles = {
    backgroundColor: theme === 'dark' ? '#1e293b' : '#f1f5f9', 
    color: theme === 'dark' ? '#ffffff' : '#1e293b',
  };

  const spanTextColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-900';


  return (
    <nav style={navStyles} className="px-6 py-2 shadow-md bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="h-12 w-auto bg-amber-50 rounded-full" />
          <span className="text-xl font-semibold  hidden sm:inline">Muneeswaran</span>
        </div>

        <div className="hidden md:flex gap-8 text-lg font-medium">
          <Link to="/" className="hover:text-sky-300 transition">Home</Link>
          <Link to="/about" className="hover:text-sky-300 transition">About</Link>
          <Link to="/projects" className="hover:text-sky-300 transition">Projects</Link>
          <Link to="/contact" className="hover:text-sky-300 transition">Contact</Link>
        </div>

        <div className="block">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={theme === 'dark'} 
              onChange={handleToggleTheme}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
            <span className={`ms-3 text-sm font-medium ${spanTextColor}`}>
                {theme === 'dark' ? 'Dark mode' : 'Light mode'}
            </span>
          </label>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-4 pl-4 text-base font-medium">
          <Link to="/" onClick={toggleMenu} className="hover:text-sky-300">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="hover:text-sky-300">About</Link>
          <Link to="/projects" onClick={toggleMenu} className="hover:text-sky-300">Projects</Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:text-sky-300">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;