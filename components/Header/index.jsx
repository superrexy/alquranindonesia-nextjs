import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="w-full h-14 bg-gradient-to-r from-light-blue-500 to-teal-600 flex items-center justify-center shadow-lg p-5">
      <div className="nav-brand">
        <Link href="/">
          <a className="text-white font-bold font text-xl">Quran App</a>
        </Link>
      </div>
    </nav>
  );
}
