import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Zenith Portfolio. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="https://github.com/ZenithPopat" target="_blank" className="text-white hover:text-blue-400">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/zenith-popat" target="_blank" className="text-white hover:text-blue-400">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}