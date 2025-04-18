import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaChartLine,
  FaBook,
  FaCalendarAlt,
  FaComments,
  FaPenFancy,
  FaSpa,
  FaVideo,
  FaBars,
  FaChevronLeft,
} from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { pathname } = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: 'Dashboard', icon: <FaChartLine />, path: '/dashboard' },
    { label: 'Resources', icon: <FaBook />, path: '/resources' },
    { label: 'Appointments', icon: <FaCalendarAlt />, path: '/appointments' },
    { label: 'Chat', icon: <FaComments />, path: '/chat' },
    { label: 'Journal', icon: <FaPenFancy />, path: '/journal' },
    { label: 'Meditation', icon: <FaSpa />, path: '/meditation' },
    { label: 'Video', icon: <FaVideo />, path: '/payments' },
  ];

  return (
    <aside
      className={`bg-gradient-to-b from-gray-800 to-gray-900 text-white h-screen p-4 transition-all duration-300 ${
        isOpen ? 'w-72' : 'w-20'
      } flex flex-col justify-between shadow-xl`}
    >
      {/* Top: Logo & Toggle */}
      <div>
        <div className="flex items-center justify-between mb-8">
          {isOpen && (
            <h2 className="text-2xl font-extrabold tracking-wide text-white transition-all duration-300">
              Wellness<span className="text-green-400">Hub</span>
            </h2>
          )}
          <button
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white transition"
          >
            {isOpen ? <FaChevronLeft size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Nav Links */}
        <nav className="space-y-2">
          {menuItems.map(({ label, icon, path }) => (
            <Link
              key={label}
              to={path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg group transition-all duration-200 ${
                pathname === path
                  ? 'bg-gradient-to-r from-green-500 to-teal-400 text-white shadow-md'
                  : 'hover:bg-gray-700'
              }`}
            >
              <span className="text-lg text-green-400 group-hover:text-green-300">{icon}</span>
              {isOpen && <span className="text-white">{label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 mt-4">
        {isOpen && <p>&copy; {new Date().getFullYear()} WellnessHub</p>}
      </div>
    </aside>
  );
};

export default Sidebar;
