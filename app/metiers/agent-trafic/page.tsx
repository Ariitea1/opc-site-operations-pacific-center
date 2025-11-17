"use client";

export default function AgentTraficPage() {
  return (
    <main className="relative overflow-hidden bg-[#071021] text-white min-h-screen">
      
      {/* === IMAGE DE FOND === */}
      <img
      src="/images/lm_opc.png"
      alt="Agent de Trafic / Loadsheet"
      className="absolute inset-0 w-full h-full object-cover brightness-95 z-0 scale-90"
    style={{ transformOrigin: "center" }}
    />

      {/* === DÉGRADÉ DE CONTRASTE === */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071021]/60 via-[#071021]/30 to-[#071021]/80 z-10" />

      {/* === CONTENU === */}
      <div className="relative z-20 px-6 py-24 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">
          Agent de Trafic – Loadsheet & Masses
        </h1>

        <p className="text-gray-300 mb-6 leading-relaxed">
          <strong>À l’interface du sol et du vol, il calcule, équilibre et sécurise.</strong>{' '}
          L’Agent de Trafic élabore le plan de chargement et la feuille de centrage (Loadsheet)
          en fonction des passagers, du fret et du carburant.  
          Il assure l’équilibre de l’avion pour garantir un vol sûr, conforme et optimisé.
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed">
          En lien constant avec le Flight Dispatcher, les équipes de piste et les équipages,
          il est le garant du bon déroulement des opérations de préparation au départ.
          Sa précision influence directement la sécurité et les performances de chaque vol.
        </p>

        <blockquote className="mt-10 text-cyan-400 text-lg italic border-l-4 border-cyan-400 pl-4">
          PFOTC forme ces spécialistes du poids et de l’équilibre, artisans invisibles
          de la sécurité du vol.
        </blockquote>

        <footer className="mt-20 text-sm text-gray-500 text-center">
          © PFOTC — <span className="text-cyan-400">Pacific Hub Tahiti</span>
        </footer>
      </div>
    </main>
  );
}
