import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "PFOTC – Pacific Flight Operations & Training Center",
  description:
    "Expertise, Formation & Innovation au service des opérations aériennes.",
};

export default function Layout({ children }) {
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
        {/* Halo */}
        <div className="hero-halo"></div>

        {/* 🎯 Header FIXE */}
        <Header />

        {/* CONTENU */}
        <main>{children}</main>

        {/* FOOTER */}
        <Footer />

        {/* Horizon Soft */}
        <div className="opc-horizon"></div>
      </body>
    </html>
  );
}
