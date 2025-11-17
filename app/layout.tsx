import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReactNode } from "react";

export default function RootLayout({ children }) {
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
        <div className="hero-halo"></div>

        {/* plus de relative/z-index ici */}
        <div>
          <Header />

          {/* plus de z-index/relative ici */}
          <main>{children}</main>

          <Footer />
        </div>

        <div className="opc-horizon"></div>
      </body>
    </html>
  );
}
