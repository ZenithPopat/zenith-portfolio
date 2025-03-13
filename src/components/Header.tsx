import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold text-black">
          Zenith
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-black hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-black hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-black hover:text-blue-500">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/travel" className="text-black hover:text-blue-500">
                Travels
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-black hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}