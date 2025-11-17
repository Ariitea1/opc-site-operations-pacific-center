"use client";

export default function Hero() {
  return (
    <section className="max-w-5xl text-center pt-28 mx-auto">

      {/* Titre principal */}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Operations Pacific Center
      </h1>

      {/* Slogan bleu */}
       <h2 className="text-3xl md:text-4xl font-bold text-gradient mt-3 leading-normal pb-1">
      Integrated Flight Ops, Training & Aviation Services
      </h2>

      {/* Sous-texte */}
      <p className="text-lg md:text-xl text-gray-300 mt-6 mb-10">
        Expertise, Formation & Innovation au service des opérations aériennes.
      </p>

      {/* Boutons */}
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
