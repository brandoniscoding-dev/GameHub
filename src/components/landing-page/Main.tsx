'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Exemple d'image
import homeImage from "../../src/public/img/gamehub-main.svg";

// Composant principal
const Main = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative bg-gray-100 dark:bg-gray-900">
      {/* Section Hero avec effet Parallax */}
      <section className="relative overflow-hidden h-screen flex items-center justify-center">
        <motion.div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url('/img/hero-bg.jpg')`, transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div className="max-w-7xl mx-auto px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white text-center">
              Welcome to <span className="text-orange-500">GameHub</span>
            </h1>
            <p className="mt-4 text-xl text-gray-300 text-center">
              Immerse yourself in the ultimate gaming experience
            </p>
            <motion.div
              className="mt-8 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link href="/explore" className="px-8 py-4 bg-orange-500 text-white text-lg font-bold rounded-full shadow-lg hover:bg-orange-600 transition-transform duration-300">
                  Explore Games
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-0 w-full text-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-white text-sm">Scroll down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto mt-1 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      {/* Section Features avec animations avancées */}
      <section className="relative py-20 bg-gray-50 dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Why <span className="text-orange-500">GameHub</span>?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Discover features that elevate your gaming journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              title="Immersive Worlds"
              description="Dive into 3D game worlds with stunning graphics and engaging gameplay."
              icon="🌍"
            />
            <FeatureCard
              title="Real-Time Tournaments"
              description="Compete with players globally in live tournaments with amazing rewards."
              icon="⚔️"
            />
            <FeatureCard
              title="Community Driven"
              description="Join our community and share strategies, tips, and your love for games."
              icon="💬"
            />
          </div>
        </motion.div>
      </section>

      {/* Section immersive avec 3D transform et interaction */}
      <section className="relative py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Join the Ultimate GameHub Experience</h2>
          <p className="mt-4 text-lg">Connect with gamers around the world and be part of something big.</p>

          <motion.div
            className="mt-8"
            initial={{ rotateY: -180 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Link href="/join" className="inline-block px-8 py-4 bg-orange-500 text-white text-lg font-bold rounded-full shadow-lg hover:bg-orange-600 transition-transform duration-300">
                Join Now
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

// Composant FeatureCard avec animations avancées
const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => {
  return (
    <motion.div
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105"
      whileHover={{ scale: 1.1, rotateZ: 3 }}
      whileTap={{ scale: 0.95, rotateZ: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center justify-center text-6xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

export default Main;
