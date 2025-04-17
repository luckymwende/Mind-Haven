import React, { useState } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Therapist', text: 'Hello! How can I assist you today?', timestamp: '2025-04-17 10:00 AM' },
    { id: 2, sender: 'You', text: 'I’ve been feeling stressed lately.', timestamp: '2025-04-17 10:02 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: 'You',
          text: newMessage,
          timestamp: new Date().toLocaleString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          }),
        },
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-[500px] flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Chat</h2>
      <div className="flex-1 overflow-y-auto mb-4 p-4 bg-gray-100 rounded-md">
        {messages.length > 0 ? (
          messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.sender === 'You' ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block p-3 rounded-lg ${
                  message.sender === 'You'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-300 text-gray-800'
                }`}
              >
                <p className="font-semibold">{message.sender}</p>
                <p>{message.text}</p>
                <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No messages yet.</p>
        )}
      </div>
      <form onSubmit={handleSendMessage} className="flex gap-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBox;