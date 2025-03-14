"use client"; // Required for interactive components

import { useState } from "react";

export default function CompassGuide() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-10 flex flex-col items-end">
      {/* Button to Open Journal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition"
      >
        📜 Open Journal
      </button>

      {/* Journal Content (Toggles Open/Close) */}
      {isOpen && (
        <div className="mt-2 w-56 p-3 bg-gray-900 text-white rounded-lg shadow-lg">
          <p className="text-sm">Welcome to your journey!</p>
        </div>
      )}
    </div>
  );
}
// "use client"; // Ensures it runs only on the client side

// import { useState } from "react";

// export default function CompassGuide() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="fixed bottom-10 right-10 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
//       <button onClick={() => setIsOpen(!isOpen)} className="font-bold">
//         📜 Open Journal
//       </button>

//       {isOpen && (
//         <div className="mt-2 p-2 bg-gray-700 rounded">
//           <p>Welcome to your journey!</p>
//         </div>
//       )}
//     </div>
//   );
// }