import React from 'react';
import ProgressChart from './ProgressChart';
import SessionNotes from './SessionNotes';

const Dashboard = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-xl p-6 shadow-2xl max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center drop-shadow-sm">
          Your Wellness Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md">
            <ProgressChart />
          </div>
          <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md">
            <SessionNotes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
