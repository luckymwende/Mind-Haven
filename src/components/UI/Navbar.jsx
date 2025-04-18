import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-green-500 p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold tracking-wide">
          <span className="text-white">Wellness</span>
          <span className="text-yellow-300">Hub</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white hover:text-yellow-200 transition duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4 bg-white rounded-md shadow-lg py-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-blue-700 hover:text-green-500 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const links = [
  { path: '/', label: 'Home' },
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/resources', label: 'Resources' },
  { path: '/appointments', label: 'Appointments' },
  { path: '/chat', label: 'Chat' },
  { path: '/journal', label: 'Journal' },
  { path: '/meditation', label: 'Meditation' },
  { path: '/login', label: 'Login' },
  { path: '/signup', label: 'Sign Up' },
];

export default Navbar;
