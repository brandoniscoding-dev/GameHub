// components/Main.tsx

'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import FeatureCard from "./FeatureCard";
import GameCard from "./GameCard";
import FAQAccordion from "./FAQAccordion"; // Importer le composant FAQAccordion

const Main: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isIdle, setIsIdle] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsIdle(false);
    };
    window.addEventListener("scroll", handleScroll);

    const idleTimeout = setTimeout(() => {
      setIsIdle(true);
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(idleTimeout);
    };
  }, [scrollY]);

  return (
    <main className="relative bg-white dark:bg-gray-900">
      {/* Section Hero */}
      <section className="relative h-screen flex items-center justify-center bg-white">
        <div className="max-w-7xl mx-auto px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black text-center">
              Welcome to <span className="text-orange-500">GameHub</span>
            </h1>
            <p className="mt-4 text-xl text-gray-700 text-center">
              The open-source gaming community where creativity meets collaboration.
            </p>
            <motion.div
              className="mt-8 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                href="/explore"
                className="px-8 py-4 bg-orange-500 text-white text-lg font-bold rounded-full shadow-lg hover:bg-orange-600 transition-transform duration-300"
              >
                Explore Games
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Separator className="my-10" />

      {/* Section Features */}
      <section className="relative py-20 bg-white dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black dark:text-white">
              Why <span className="text-orange-500">GameHub</span>?
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              A community-driven platform for gamers, developers, and creators
              to share, contribute, and grow together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              title="Open-Source"
              description="Contribute to open-source projects and learn from fellow developers."
              icon="💻"
            />
            <FeatureCard
              title="Collaborate"
              description="Work together with other creators to build and improve games."
              icon="🤝"
            />
            <FeatureCard
              title="Explore"
              description="Discover new games created by the community and share your own."
              icon="🌍"
            />
          </div>
        </motion.div>
      </section>

      <Separator className="my-10" />

      {/* Section Most Popular Games */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black dark:text-white">
            Most Popular Games
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Discover the most loved games in our community!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {popularGames.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>
        </motion.div>
      </section>

      <Separator className="my-10" />

      {/* Section FAQ */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion faqs={faqs} /> {/* Utiliser le composant FAQAccordion ici */}
        </div>
      </section>

      {/* Idle message */}
      {isIdle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          You've been idle for a while. Explore more!
        </motion.div>
      )}
        <Separator className="my-10" />

    </main>
  );
};

// Simuler des jeux populaires et des FAQ pour démonstration
const popularGames = [
  { title: "Game 1", description: "Description of Game 1", link: "#", previewImage: "link_to_image_1" },
  { title: "Game 2", description: "Description of Game 2", link: "#", previewImage: "link_to_image_2" },
  { title: "Game 3", description: "Description of Game 3", link: "#", previewImage: "link_to_image_3" },
  // Ajoute plus de jeux ici
];

const faqs = [
  { question: "What is GameHub?", answer: "GameHub is a community-driven platform for gamers." },
  { question: "How can I contribute?", answer: "You can contribute by sharing your games and collaborating with others." },
  // Ajoute plus de questions ici
];

export default Main;
