import React, { useState } from 'react';

const SessionNotes = () => {
  const [notes, setNotes] = useState([
    { id: 1, date: '2025-04-10', content: 'Discussed stress management techniques.' },
    { id: 2, date: '2025-04-03', content: 'Focused on mindfulness exercises.' },
  ]);
  const [newNote, setNewNote] = useState('');

  const handleAddNote = (e) => {
    e.preventDefault();
    if (newNote.trim()) {
      setNotes([
        {
          id: notes.length + 1,
          date: new Date().toISOString().split('T')[0],
          content: newNote,
        },
        ...notes,
      ]);
      setNewNote('');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Session Notes</h2>
      <form onSubmit={handleAddNote} className="mb-6">
        <textarea
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Add a new session note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add Note
        </button>
      </form>
      <div className="space-y-4">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div key={note.id} className="border-b pb-2">
              <p className="text-sm text-gray-500">{note.date}</p>
              <p>{note.content}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No notes available.</p>
        )}
      </div>
    </div>
  );
};

export default SessionNotes;