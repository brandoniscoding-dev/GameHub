import { HiMenu } from 'react-icons/hi';
import { motion } from 'framer-motion';

const MobileMenuButton = () => {
  return (
    <motion.button
      className="p-2 rounded-lg bg-transparent border border-transparent hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300 ease-in-out"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Open menu"
    >
      <HiMenu 
        className="text-black dark:text-white transition-colors duration-300 ease-in-out" 
        size={30} 
      />
    </motion.button>
  );
};

export default MobileMenuButton;
