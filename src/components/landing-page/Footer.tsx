'use client';

import Image from "next/image";
import { FaGithub, FaTwitter } from "react-icons/fa"; // Icônes pour les réseaux sociaux
import ThemeToggle from "../ThemeToggle";
import { motion } from 'framer-motion'; // Import de Framer Motion
import src from '../../public/img/gamehub.svg';


const Footer = () => {
  return (
    <motion.footer 
      className="bg-white dark:bg-gray-900 py-10"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-start">
          
          {/* Section Logo */}
          <motion.div 
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.2 }}
          >
            <Image src= {src} alt="GameHub Logo" width={250} height={200} />
            <p className="text-gray-600 dark:text-gray-400 mt-2">GameHub &copy; 2024</p>
          </motion.div>

          {/* Section Ressources */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><a href="/Games" className="text-orange-600 hover:underline">DGame</a></li>
              <li><a href="/blog" className="text-orange-600 hover:underline">Blog</a></li>
            </ul>
          </motion.div>

          {/* Section Communauté */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Communauté</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/GameHub" className="flex items-center space-x-2 text-orange-600 hover:underline">
                  <FaGithub /> <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/GameHub" className="flex items-center space-x-2 text-orange-600 hover:underline">
                  <FaTwitter /> <span>Twitter</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Section Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.8 }}
            className="relative" // Pour positionner le toggle
          >
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Subscribe to the Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Stay informed about the latest news, releases, and updates from GameHub.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="yourname@domain.com"
                className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
              />
              <button className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-500">
                Subscribe
              </button>
            </form>

            {/* Section du toggle de thème */}
            <div className="mt-4"> {/* Utilisation de margin top pour espacer */}
              <ThemeToggle /> {/* Le bouton toggle de thème */}
            </div>
          </motion.div>
        </div>

        {/* Section Bas du Footer */}
        <motion.div 
          className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6 text-center"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1 }}
        >
          <p className="text-gray-600 dark:text-gray-400">
            Crafted with love by the GameHub team.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
