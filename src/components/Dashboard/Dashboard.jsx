import React from 'react';
import ProgressChart from './ProgressChart';
import SessionNotes from './SessionNotes';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProgressChart />
        <SessionNotes />
      </div>
    </div>
  );
};

export default Dashboard;