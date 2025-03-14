"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaUser, FaProjectDiagram, FaPlane, FaEnvelope } from "react-icons/fa";

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 left-10 z-50 flex flex-col items-start space-y-2">
      {/* Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-start space-y-2"
          >
            {/* Menu Buttons */}
            <FloatingMenuItem href="/" icon={<FaHome />} label="Home" />
            <FloatingMenuItem href="/about" icon={<FaUser />} label="About" />
            <FloatingMenuItem href="/projects" icon={<FaProjectDiagram />} label="Projects" />
            <FloatingMenuItem href="/travel" icon={<FaPlane />} label="Travel" />
            <FloatingMenuItem href="/contact" icon={<FaEnvelope />} label="Contact" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button (FAB) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 text-xl flex items-center justify-center rounded-full bg-gray-800 text-white shadow-xl hover:bg-blue-700 transition transform hover:scale-105"
      >
        {/* Animated Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ➕
        </motion.div>
      </button>
    </div>
  );
}

// Menu Item Component
function FloatingMenuItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      className="flex items-center space-x-3 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700 transition transform hover:scale-105"
    >
      <span className="text-lg">{icon}</span>
      <span className="text-sm">{label}</span>
    </a>
  );
}

// "use client"; // Ensures interactivity

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function FloatingMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="fixed bottom-8 left-8 z-50">
//       {/* Floating Button */}
//       <motion.button
//         onClick={() => setIsOpen(!isOpen)}
//         className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
//         whileTap={{ scale: 0.9 }}
//       >
//         ☰ {/* Icon */}
//       </motion.button>

//       {/* Menu Items */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.3 }}
//           className="absolute bottom-16 left-0 bg-white shadow-lg rounded-lg p-4 w-48"
//         >
//           <ul className="space-y-2">
//             <li>
//               <Link href="/" className="block p-2 hover:bg-gray-200 rounded text-blue-600">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" className="block p-2 hover:bg-gray-200 rounded text-blue-600">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link href="/projects" className="block p-2 hover:bg-gray-200 rounded text-blue-600">
//                 Projects
//               </Link>
//             </li>
//             <li>
//               <Link href="/travel" className="block p-2 hover:bg-gray-200 rounded text-blue-600">
//                 Travel Blog
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" className="block p-2 hover:bg-gray-200 rounded text-blue-600">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </motion.div>
//       )}
//     </div>
//   );
// }