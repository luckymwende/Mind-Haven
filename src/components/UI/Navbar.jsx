import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          WellnessHub
        </Link>
        <Link to="/" className="text-white hover:text-blue-200">
          Home
        </Link>
        <div className="space-x-4">
          <Link to="/dashboard" className="text-white hover:text-blue-200">
            Dashboard
          </Link>
          <Link to="/resources" className="text-white hover:text-blue-200">
            Resources
          </Link>
          <Link to="/appointments" className="text-white hover:text-blue-200">
            Appointments
          </Link>
          <Link to="/chat" className="text-white hover:text-blue-200">
            Chat
          </Link>
          <Link to="/journal" className="text-white hover:text-blue-200">
            Journal
          </Link>
          <Link to="/meditation" className="text-white hover:text-blue-200">
            Meditation
          </Link>
          <Link to="/login" className="text-white hover:text-blue-200">
            Login
          </Link>
          <Link to="/signup" className="text-white hover:text-blue-200">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;