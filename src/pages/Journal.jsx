import React, { useState } from 'react';

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      const newEntry = {
        id: entries.length + 1,
        content: text,
        date: new Date().toLocaleString(),
      };
      setEntries([newEntry, ...entries]);
      setText('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-yellow-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-pink-700 mb-8 drop-shadow-sm">
          My Journal
        </h1>

        {/* Journal Entry Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-3xl shadow-xl mb-10 transition duration-300"
        >
          <label className="block text-lg font-medium text-gray-700 mb-3">Write your thoughts:</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="5"
            className="w-full p-4 text-gray-800 border-2 border-pink-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            placeholder="Today I feel..."
          ></textarea>
          <button
            type="submit"
            className="mt-5 px-6 py-2 bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-md"
          >
            💾 Save Entry
          </button>
        </form>

        {/* Display Entries */}
        <div className="space-y-5">
          {entries.length === 0 ? (
            <p className="text-gray-600 text-center text-lg italic">
              No journal entries yet. Start writing today 📝
            </p>
          ) : (
            entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-white p-5 rounded-2xl shadow-md border-l-4 border-pink-400 hover:shadow-lg transition"
              >
                <div className="text-sm text-gray-500 mb-2">{entry.date}</div>
                <p className="text-gray-800 text-base whitespace-pre-line leading-relaxed">{entry.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Journal;
