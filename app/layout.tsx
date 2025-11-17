import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "OPC – Operations Pacific Center",
  description: "Expertise, Formation & Innovation au service des opérations aériennes.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
     <body
  className="
    relative
    overflow-x-hidden
    text-white 
    min-h-screen 
    bg-[#0b1220] 
    bg-[url('/background_horizon.png')] 
    bg-no-repeat 
    bg-cover 
    bg-center 
    bg-fixed 
    bg-bottom
  "
>
        
        {/* 👇 WRAPPER ISOLÉ — effets visuels NON parents du header */}
        <div className="pointer-events-none fixed inset-0 z-[1]">
          <div className="hero-halo absolute inset-0"></div>
          <div className="opc-horizon absolute inset-0"></div>
        </div>

        {/* 👇 HEADER collant visible en permanence */}
        <Header />

        {/* 👇 CONTENU */}
        <main className="relative z-[50]">{children}</main>

        {/* 👇 FOOTER */}
        <Footer />

      </body>
    </html>
  );
}
