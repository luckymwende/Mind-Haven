import React, { useState } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Therapist',
      text: 'Hello! How can I assist you today?',
      timestamp: '2025-04-17 10:00 AM',
    },
    {
      id: 2,
      sender: 'You',
      text: 'I’ve been feeling stressed lately.',
      timestamp: '2025-04-17 10:02 AM',
    },
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
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1533616688417-b7a585564566?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-md dark:bg-gray-800 dark:bg-opacity-70 rounded-2xl shadow-2xl p-6 h-[550px] w-full max-w-2xl flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          💬 Wellness Chat
        </h2>

        <div className="flex-1 overflow-y-auto mb-4 p-4 bg-white dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-50 rounded-xl space-y-4">
          {messages.length > 0 ? (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'You' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl shadow-md ${
                    message.sender === 'You'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-none'
                  }`}
                >
                  <p className="text-sm font-semibold">{message.sender}</p>
                  <p>{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No messages yet.</p>
          )}
        </div>

        <form onSubmit={handleSendMessage} className="flex gap-3 mt-auto">
          <input
            type="text"
            className="flex-1 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition font-semibold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
