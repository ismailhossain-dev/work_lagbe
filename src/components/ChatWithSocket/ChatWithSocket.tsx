"use client"
import React, { useState } from 'react';

const ChatWithSocket = () => {
  const [message, setMessage] = useState('');
  // পাঠানো মেসেজগুলো জমা রাখার জন্য array state
  const [messagesList, setMessagesList] = useState([
    { id: 1, text: "Hello! Welcome to the group chat.", sender: "System" }
  ]);

  // মেসেজ সাবমিট করার ফাংশন
  const handleSendMessage = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // পেজ রিফ্রেশ হওয়া বন্ধ করবে
    if (message.trim() === '') return; // ফাঁকা মেসেজ পাঠানো যাবে না

    // নতুন মেসেজ অবজেক্ট
    const newMessage = {
      id: Date.now(),
      text: message,
      sender: "Rakesh" // যেহেতু আপনি Rakesh হিসেবে সাইন ইন আছেন
    };

    // আগের মেসেজগুলোর সাথে নতুন মেসেজ যোগ করা
    setMessagesList([...messagesList, newMessage]);
    setMessage(''); // ইনপুট ফিল্ড খালি করা
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {/* Main Container */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md flex flex-col h-[600px] border border-gray-200 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-3">
            {/* Avatar Circle */}
            <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center text-white font-semibold">
              R
            </div>
            {/* Title & Typing Status */}
            <div>
              <h2 className="text-sm font-semibold text-gray-800">Realtime group chat</h2>
              <p className="text-xs text-gray-400 italic">Someone is typing...</p>
            </div>
          </div>
          {/* User Status */}
          <div className="text-xs text-gray-500">
            Signed in as <span className="font-bold text-gray-800">Rakesh</span>
          </div>
        </div>

        {/* Message Area */}
        <div className="flex-1 bg-gray-50 p-4 overflow-y-auto flex flex-col gap-3">
          {messagesList.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex flex-col max-w-[75%] ${
                msg.sender === "Rakesh" ? "self-end items-end" : "self-start items-start"
              }`}
            >
              {/* প্রেরকের নাম (যদি নিজের মেসেজ না হয়) */}
              {msg.sender !== "Rakesh" && (
                <span className="text-[10px] text-gray-400 ml-1 mb-0.5">{msg.sender}</span>
              )}
              {/* মেসেজ বাবল */}
              <div className={`text-sm px-4 py-2 rounded-2xl ${
                msg.sender === "Rakesh" 
                  ? "bg-emerald-500 text-white rounded-tr-none" 
                  : "bg-white text-gray-800 border border-gray-200 rounded-tl-none"
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Footer */}
        {/* ইনপুট ফিল্ডকে form ট্যাগে নেওয়া হয়েছে যেন Enter চাপলেও মেসেজ সেন্ড হয় */}
        <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-100 bg-white flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 bg-transparent py-2 px-3 text-sm text-gray-800 outline-none placeholder-gray-400"
          />
          <button 
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm px-5 py-2 rounded-full transition-colors"
          >
            Send
          </button>
        </form>

      </div>
    </div>
  );
};

export default ChatWithSocket;