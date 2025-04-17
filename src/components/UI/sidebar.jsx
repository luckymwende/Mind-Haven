import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`bg-gray-800 text-white h-screen p-4 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        {isOpen && (
          <h2 className="text-xl font-semibold">WellnessHub</h2>
        )}
        <button
          onClick={toggleSidebar}
          className="text-white hover:text-gray-300 focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </button>
      </div>
      <nav className={`space-y-2 ${isOpen ? 'block' : 'hidden'}`}>
        <Link
          to="/dashboard"
          className="block p-2 rounded hover:bg-gray-700"
        >
          Dashboard
        </Link>
        <Link
          to="/resources"
          className="block p-2 rounded hover:bg-gray-700"
        >
          Resources
        </Link>
        <Link
          to="/appointments"
          className="block p-2 rounded hover:bg-gray-700"
        >
          Appointments
        </Link>
        <Link
          to="/chat"
          className="block p-2 rounded hover:bg-gray-700"
        >
          Chat
        </Link>
        <Link
          to="/journal"
          className="block p-2 rounded hover:bg-gray-700"
        >
          Journal
        </Link>
        <Link
          to="/meditation"
          className="block p-2 rounded hover:bg-gray-700"
        >
          Meditation
        </Link>
        <Link
          to="/payments"
          className="block p-2 rounded hover:bg-gray-700"
        >
          Payments
        </Link>
        <Link
          to="/video"
          className="block p-2 rounded hover:bg-gray-700"
        >
          Video
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;