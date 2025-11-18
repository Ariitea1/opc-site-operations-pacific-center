"use client";

import { motion } from "framer-motion";

// Animation container : ULTRA SLOW + VERY SOFT
const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2.4,      // ← encore plus lent
      ease: "easeOut",
      staggerChildren: 0.45, // ← éléments espacés comme une intro premium
    },
  },
};

// Animation des éléments : long, fluide, aérien
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.9,                  // ← animation lente et douce
      ease: [0.16, 1, 0.3, 1],        // ← easing expo style "haut de gamme"
    },
  },
};

export default function Hero() {
  return (
    <section className="max-w-5xl text-center pt-28 mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Titre principal */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Operations Pacific Center
        </motion.h1>

        {/* Slogan bleu */}
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold text-gradient mt-3 leading-normal pb-1"
        >
          Integrated Flight Ops, Training & Aviation Services
        </motion.h2>

        {/* Sous-texte */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-gray-300 mt-6 mb-10"
        >
          Expertise, Formation & Innovation au service des opérations aériennes.
        </motion.p>

        {/* Boutons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a href="/formations" className="btn-pfotc">
            Découvrir les formations
          </a>
          <a href="/services" className="btn-pfotc">
            Voir les services
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
