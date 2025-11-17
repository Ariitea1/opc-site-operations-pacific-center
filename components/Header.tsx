"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-md bg-[#0a0f1f]/90 border-b border-white/10 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2.5">

        {/* LOGO */}
        <div className="flex items-center space-x-3">
          <Image
            src="/favicon_bleu_nuit.png"
            alt="PFOTC Logo"
            width={44}
            height={44}
            className="select-none"
          />
          <span className="text-white font-semibold tracking-wide text-lg">PFOTC</span>
        </div>

        {/* MENU */}
        <nav className="hidden md:flex space-x-8 text-white/80">
          <Link href="/" className="hover:text-white transition">Accueil</Link>
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <Link href="/formation" className="hover:text-white transition">Formations</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </nav>

      </div>
    </header>
  );
}
