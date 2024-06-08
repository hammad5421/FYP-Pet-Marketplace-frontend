import React from 'react';

const Messages = ({ messages }) => {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Messages</h2>
      <div className="space-y-4">
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg">
              <h3 className="text-xl font-semibold">{message.title}</h3>
              <p>{message.body}</p>
              <span className="text-gray-500 text-sm">{message.date}</span>
            </div>
          ))
        ) : (
          <p>No messages to display.</p>
        )}
      </div>
    </div>
  );
};

export default Messages;
