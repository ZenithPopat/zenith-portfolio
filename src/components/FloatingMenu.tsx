"use client"; // Ensures interactivity

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
        whileTap={{ scale: 0.9 }}
      >
        ☰ {/* Icon */}
      </motion.button>

      {/* Menu Items */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-16 right-0 bg-white shadow-lg rounded-lg p-4 w-48"
        >
          <ul className="space-y-2">
            <li>
              <Link href="/" className="block p-2 hover:bg-gray-200 rounded text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block p-2 hover:bg-gray-200 rounded text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="block p-2 hover:bg-gray-200 rounded text-blue-600">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/travel" className="block p-2 hover:bg-gray-200 rounded text-blue-600">
                Travel Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block p-2 hover:bg-gray-200 rounded text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}