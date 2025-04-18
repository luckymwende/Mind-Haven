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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-pink-700 mb-6 text-center">My Journal</h1>

        {/* Journal Entry Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md mb-8">
          <label className="block text-gray-700 font-semibold mb-2">Write your thoughts:</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="5"
            className="w-full p-4 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-pink-300"
            placeholder="Today I feel..."
          ></textarea>
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition"
          >
            Save Entry
          </button>
        </form>

        {/* Display Entries */}
        <div className="space-y-4">
          {entries.length === 0 ? (
            <p className="text-gray-600 text-center">No journal entries yet. Start writing today 📝</p>
          ) : (
            entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-white p-4 rounded-md shadow-sm border-l-4 border-pink-400"
              >
                <div className="text-sm text-gray-500 mb-1">{entry.date}</div>
                <p className="text-gray-800 whitespace-pre-line">{entry.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Journal;
