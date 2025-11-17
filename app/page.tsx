"use client";

import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-6 py-14 md:py-20 relative z-10">
      <Hero />
      <ServicesSection />
      <Footer />
    </main>
  );
}
