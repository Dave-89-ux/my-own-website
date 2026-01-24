import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex  items-center justify-around p-5 shadow-lg font-semibold">
      <Link href="/">Dcode</Link>

      <div className="flex gap-10 list-none ">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about">Skills</Link>
        </li>
        <li>
          <Link href="/about">Work</Link>
        </li>
        <li>
          <Link href="/about">Contact</Link>
        </li>
      </div>
    </nav>
  );
}
