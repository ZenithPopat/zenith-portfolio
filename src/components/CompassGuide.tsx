export default function CompassGuide() {
    return (
      <div className="fixed bottom-6 left-6 z-20">
        <button className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition">
          <span className="text-2xl">🧭</span>
        </button>
        <div className="mt-2 text-center text-white text-sm">
          <p>Guided Journey</p>
        </div>
      </div>
    );
  }