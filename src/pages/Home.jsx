import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaComments, FaSpa, FaBook, FaCalendarAlt, FaPenFancy } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 p-6">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-sm">
          Welcome to <span className="text-green-600">WellnessHub</span>
        </h1>
        <p className="text-lg text-gray-700">
          Start your journey to better mental health. Everything you need is here — supportive, safe, and personalized just for you.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <FeatureCard to="/dashboard" title="Dashboard" icon={<FaChartLine />} text="Track your mood and progress visually." />
        <FeatureCard to="/chat" title="Chat" icon={<FaComments />} text="Talk with a therapist or support group." />
        <FeatureCard to="/meditation" title="Meditation" icon={<FaSpa />} text="Listen to calming meditations anytime." />
        <FeatureCard to="/resources" title="Resources" icon={<FaBook />} text="Read, watch, and learn for your wellness." />
        <FeatureCard to="/appointments" title="Appointments" icon={<FaCalendarAlt />} text="Book and manage your therapy sessions." />
        <FeatureCard to="/journal" title="Journal" icon={<FaPenFancy />} text="Write privately and reflect on your feelings." />
      </div>
    </div>
  );
};

const FeatureCard = ({ to, title, icon, text }) => {
  return (
    <Link
      to={to}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
    >
      <div className="text-4xl text-blue-500 mb-3">{icon}</div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{text}</p>
    </Link>
  );
};

export default Home;
