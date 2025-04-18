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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-300 mb-6 text-center">
          Manage Appointments
        </h1>

        {/* Upcoming Appointments */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Upcoming</h2>
          {appointments.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">No appointments scheduled.</p>
          ) : (
            <ul className="space-y-3">
              {appointments.map((appt) => (
                <li key={appt.id} className="border-b border-gray-200 dark:border-gray-700 pb-2">
                  <div className="text-lg text-gray-700 dark:text-gray-200 font-medium">{appt.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{appt.date} at {appt.time}</div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Booking Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Book a New Appointment</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">Appointment Type</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="e.g. Therapy, Meditation"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">Time</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
