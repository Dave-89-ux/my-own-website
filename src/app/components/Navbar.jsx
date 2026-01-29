"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-black text-white sticky top-0 z-50 p-5 shadow-lg font-semibold">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold">
          David<span className="text-orange-500">Dev</span>
        </a>

        <ul className="hidden md:flex gap-8 items-center ">
          <li>
            <a href="#about" className="hover:text-orange-500">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-orange-500">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-500">
              Contact
            </a>
          </li>
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? "X" : "="}
        </button>
      </div>

      {open && (
        <ul className="md:hidden bg-black px-6 pb-6 space-y-4">
          <li>
            <Link onClick={() => setOpen(false)} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} href="#about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} href="#services">
              Services
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} href="#contact">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
