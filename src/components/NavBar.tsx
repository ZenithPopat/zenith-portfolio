"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavBar = () => {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4">
      <ul className="flex gap-4">
        <li className={pathname === "/" ? "font-bold" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === "/about/page.tsx" ? "font-bold" : ""}>
          <Link href="/about">About</Link>
        </li>
        <li className={pathname === "/projects" ? "font-bold" : ""}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={pathname === "/travel" ? "font-bold" : ""}>
          <Link href="/travel">Travel</Link>
        </li>
        <li className={pathname === "/contact" ? "font-bold" : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar