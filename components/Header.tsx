"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-[100] backdrop-blur-md bg-[#0a0f1f]/90 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="flex items-center space-x-3">
          <Image
            src="/favicon_bleu_nuit.png"
            alt="PFOTC Logo"
            width={44}
            height={44}
            className="drop-shadow-[0_0_6px_rgba(0,180,255,0.4)]"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-white text-lg">OPC</span>
            <span className="text-sm text-gray-300">Operations Pacific Center</span>
            <span className="text-xs text-cyan-400">Integrated Flight Operations</span>
          </div>
        </div>

        {/* NAV */}
        <nav className="flex space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-cyan-400">Accueil</Link>
          <Link href="/formations" className="hover:text-cyan-400">Formations</Link>
          <Link href="/services" className="hover:text-cyan-400">Services</Link>
          <Link href="/metiers" className="hover:text-cyan-400">Métiers</Link>
          <Link href="/contact" className="hover:text-cyan-400">Contact</Link>
        </nav>

      </div>
    </header>
  );
}
