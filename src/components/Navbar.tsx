"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-between items-center bg-black p-5">
      <h1>
        <Link href="/" className="text-[#f0a500] text-[20px] md:text-[40px] font-verdana font-semibold hover:cursor-pointer ml-12">
          Portfolio
        </Link>
      </h1>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-[#f0a500]">
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      <ul className={`flex-col md:flex md:flex-row md:justify-center gap-28 font-verdana text-[#f0a500] font-bold items-center mr-10 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        <li>
          <Link href="/" className="transition-colors duration-300 hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="transition-colors duration-300 hover:text-blue-500">
            About
          </Link>
        </li>
        <li>
          <Link href="/project" className="transition-colors duration-300 hover:text-blue-500">
            Project
          </Link>
        </li>
        <li>
          <Link href="/contact" className="transition-colors duration-300 hover:text-blue-500">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}