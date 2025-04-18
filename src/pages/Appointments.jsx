import React, { useState } from 'react';

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: 'Therapist Session',
      date: '2025-04-20',
      time: '10:00 AM',
    },
    {
      id: 2,
      name: 'Support Group',
      date: '2025-04-22',
      time: '5:00 PM',
    },
  ]);

  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.date && form.time) {
      setAppointments([
        ...appointments,
        { ...form, id: appointments.length + 1 },
      ]);
      setForm({ name: '', date: '', time: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-blue-800 dark:text-blue-300 mb-10 drop-shadow-sm">
          📅 Manage Appointments
        </h1>

        {/* Upcoming Appointments */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Upcoming</h2>
          {appointments.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">No appointments scheduled yet. 🕊️</p>
          ) : (
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {appointments.map((appt) => (
                <li key={appt.id} className="py-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-lg font-semibold text-blue-700 dark:text-blue-300">{appt.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {appt.date} at {appt.time}
                      </div>
                    </div>
                    <span className="text-sm bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-3 py-1 rounded-full shadow-sm">
                      Scheduled
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Booking Form */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Book a New Appointment</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-gray-700 dark:text-gray-300 mb-1">Appointment Type</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="e.g. Therapy, Meditation"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">Time</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-transform"
              >
                ➕ Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
