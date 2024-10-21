// components/GameCard.tsx

'use client';

import { motion } from "framer-motion";
import Link from "next/link";

type GameCardProps = {
  title: string;
  description: string;
  link: string;
  previewImage: string; // URL de l'image d'aperçu
};

const GameCard: React.FC<GameCardProps> = ({ title, description, link, previewImage }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <img src={previewImage} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-gray-700 dark:text-gray-400">{description}</p>
      <Link href={link} className="text-blue-500 mt-4 inline-block">
        View Game
      </Link>
    </motion.div>
  );
};

export default GameCard;
