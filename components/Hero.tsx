"use client";

export default function Hero() {
  return (
    <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center">
  Operations Pacific Center
  <span className="block text-3xl md:text-5xl text-blue-400 mt-2">
    Integrated Flight Ops, Training & Aviation Services
  </span>
</h1>

      <p className="text-lg md:text-xl text-gray-300 mb-10">
        Expertise, Formation & Innovation au service des opérations aériennes.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/formations" className="btn-pfotc">
          Découvrir les formations
        </a>
        <a href="/services" className="btn-pfotc">
          Voir les services
        </a>
      </div>
    </section>
  );
}
