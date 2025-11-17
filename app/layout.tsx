import "./globals.css";
import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "OPC – Operations Pacific Center",
  description:
    "Expertise, Formation & Innovation au service des opérations aériennes.",
  icons: {
    icon: [
      { url: "/favicon_transparent.png", type: "image/png" },
      { url: "/favicon_bleu_nuit.png", type: "image/png" },
    ],
    shortcut: ["/favicon_transparent.png"],
    apple: ["/favicon_bleu_nuit.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body
        className="
          relative
          text-white
          min-h-screen
          overflow-x-hidden
          overflow-y-auto
          bg-[#0b1220]
          bg-[url('/background_horizon.png')]
          bg-no-repeat
          bg-cover
          bg-center
          bg-fixed
          bg-bottom
        "
      >
        {/* Halo central (background ambiance OPC) */}
        <div className="hero-halo"></div>

        {/* HEADER FIXE */}
        <Header />

        {/* CONTENU */}
        <main className="relative z-10">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

        {/* Horizon OPC Soft */}
        <div className="opc-horizon"></div>

        {/* Ancien horizon supprimé */}
        {/*
        <div className="horizon"></div>
        <div className="horizon-line"></div>
        */}
      </body>
    </html>
  );
}
