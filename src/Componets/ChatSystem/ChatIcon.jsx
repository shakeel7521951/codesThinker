import React, { useState } from 'react';
import { FaHome, FaCommentDots, FaRegWindowMinimize } from 'react-icons/fa';
import { BsChatRightDots } from 'react-icons/bs';
import LiveChatForm from './LiveChatForm';
import { Link } from 'react-router-dom';

const ChatIcon = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatNow, setChatNow] = useState(false);

  const chatHandle = () => {
    setChatOpen(true);
    setChatNow(false);
  };

  const cancelHandler = () => {
    setChatOpen(false);
    setChatNow(false);
  };



  return (
    <div>
      <div className='fixed bottom-20 right-4 p-2 rounded-full z-30'>
        {!chatOpen && (
          <button
            className='text-[#fcbc1a] px-3 rounded-lg'
            onClick={chatHandle}
          >
            <BsChatRightDots size={55} />
          </button>
        )}

        {chatOpen && !chatNow && (
          <div className='w-[100%] sm:mt-10 font-ui-sans-serif'>
            <div className="w-full p-14 flex flex-col bg-gradient-to-b py-5 from-[#121225] to-[#0f0f1d] border rounded-t-2xl sm:rounded-2xl shadow-lg">
              <div className="flex justify-end">
                <FaRegWindowMinimize onClick={cancelHandler} className="h-10 cursor-pointer text-gray-300" />
              </div>
              <h1 className="text-4xl p-5 font-bold text-white">Live Chat</h1>
              <div className="flex flex-col bg-[#0f0f1d] border p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  <img
                    src="https://via.placeholder.com/40" 
                    alt="Bot"
                    className="rounded-full w-10 h-10 mr-2 "
                  />
                  <div>
                    <p className="font-semibold text-gray-300">Monster Bot</p>
                    <p className='text-gray-300'>Hello!</p>
                  </div>
                </div>
                <Link to="https://wa.me/qr/DJ3CNPETN6RWP1">
                <button className="bg-[#EFA41C] text-white px-6 py-2 rounded-lg shadow-md">
                  Chat now &gt;
                </button>
                </Link>
              </div>
              <footer className="flex justify-between bg-[#0f0f1d] border p-5 mt-6 rounded-full shadow-md">
                <div className="flex flex-col items-center">
                 
                  <a href="/">
                  <FaHome size={24} className="text-gray-300 hover:text-[#EFA41C]" />
                  <span className="text-xs text-gray-300 hover:text-[#EFA41C]">Home</span>
                  </a>
                </div>
                <div className="flex flex-col items-center">
                 
                  <a href="https://wa.me/qr/DJ3CNPETN6RWP1">
                  <FaCommentDots size={24} className="text-gray-300 hover:text-[#EFA41C]" />
                  <span className="text-xs text-gray-300 hover:text-[#EFA41C]">Chat</span>
                  </a>
                </div>
              </footer>
              <div className="text-center text-xs text-gray-300 mt-2">
                Powered by <span className="text-[#EFA41C]">LiveChat</span>
              </div>
            </div>
          </div>
        )}

        {chatNow && (
          <div className='fixed bottom-20 right-4 w-[90%]'>
            <LiveChatForm Cancel={cancelHandler}  chatNow={setChatNow}/>
            <button onClick={cancelHandler} className="mt-2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-md">
              Close Chat
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatIcon;
