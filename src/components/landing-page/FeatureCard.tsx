// components/FeatureCard.tsx

'use client';

import { motion } from "framer-motion";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05, rotate: 3 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-center mb-4">
        <span className="text-orange-500 text-4xl">{icon}</span>
      </div>
      <h3 className="text-2xl font-semibold text-black dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-gray-700 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
