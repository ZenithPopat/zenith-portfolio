"use client"; // Ensures it runs only on the client side

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import { Compass } from "lucide-react";

export default function CompassGuide() {
  const [isOpen, setIsOpen] = useState(false);
    return (
    <div className="fixed bottom-10 right-10 z-50">
        <motion.button
          onClick={() => setIsOpen(prev => !prev)}
          className="w-14 h-14 flex items-center justify-center text-2xl rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition relative"
        >
          <motion.div
            animate={{ rotate: isOpen ? 270 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* <Compass size={32} className="text-yellow-600" /> */}
            🧭
          </motion.div>
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute bottom-full right-0 mb-3 w-72 p-5 bg-[#fdf5e6] text-gray-800 shadow-xl border border-gray-400 rounded-lg pointer-events-auto"
              style={{
                fontFamily: "serif",
                backgroundImage: "url('/treasure-map.jpg')",
                backgroundSize: "cover",
                backgroundBlendMode: "multiply",
              }}
            >
              {/* Journal Header */}
              <div className="flex justify-between items-center border-b border-gray-400 pb-2">
                <h2 className="text-lg font-bold tracking-wide text-center w-full">📖 Explorer’s Log</h2>
                {/* <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  ✖
                </button> */}
              </div>

              {/* Journal Content */}
              <p className="text-sm leading-relaxed mt-3">
                Welcome, traveler! This is your **guide** to an exciting journey. Follow the compass, explore new places, and uncover hidden secrets! 🌍✨
              </p>

              {/* Journal Footer */}
              <div className="mt-3 text-xs italic text-gray-800 border-t border-gray-300 pt-2">
                &quot;Every great journey begins with a single step.&quot; – Lao Tzu
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

// <div className="fixed bottom-6 left-6 z-20">
// <div className="fixed bottom-10 left-10 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
{/* <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition"> */}
{/* <button onClick={() => setIsOpen(!isOpen)} className="font-bold">   */}
{/*

  <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isOpen ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`mt-3 w-72 p-5 bg-[#fdf5e6] text-gray-800 shadow-xl border border-gray-400 rounded-lg`}
              style={{
                fontFamily: "serif",
                backgroundImage: "url('/journal-texture.jpg')",
                backgroundSize: "cover",
                backgroundBlendMode: "multiply",
              }}
            >
              <div className="flex justify-between items-center border-b border-gray-400 pb-2">
                <h2 className="text-lg font-bold tracking-wide">📖 Explorer’s Log</h2>
                <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-900">
                  ✖
                </button>
              </div>

              <p className="text-sm leading-relaxed mt-3">
                Welcome, traveler! This is your **guide** to an exciting journey. Follow the compass, explore new places, and uncover hidden secrets! 🌍✨
              </p>

              <div className="mt-3 text-xs italic text-gray-600 border-t border-gray-300 pt-2">
                &quot;Every great journey begins with a single step.&quot; – Lao Tzu
              </div>
            </motion.div>
          )}
        </AnimatePresence>

*/}