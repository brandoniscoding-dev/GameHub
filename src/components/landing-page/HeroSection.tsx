import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-center transition-colors duration-300">
            <span className="text-gray-900 dark:text-gray-100">Welcome to</span> <span className="text-yellow-500">GameHUB</span>
          </h1>
          <p className="mt-6 text-2xl md:text-3xl text-gray-700 dark:text-gray-300 text-center transition-colors duration-300">
            The open-source gaming community where creativity meets collaboration.
          </p>

          <div className="mt-8 text-center space-x-4 flex justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/explore"
                className="relative inline-block px-8 py-4 bg-yellow-500 text-white text-lg md:text-xl font-bold rounded-full shadow-lg transition-transform duration-200 hover:scale-105"
              >
                Explore Games
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/push"
                className="relative inline-block px-8 py-4 bg-transparent text-yellow-500 border-2 border-yellow-500 text-lg md:text-xl font-bold rounded-full shadow-2xl transition-transform duration-200 hover:scale-105"
              >
                Push Your Games
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute -bottom-20 -left-16 w-40 h-40 bg-blue-500 rounded-full opacity-30 z-0"
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div
        className="absolute top-16 right-16 w-24 h-24 bg-yellow-500 rounded-full opacity-30 z-0"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity, repeatDelay: 1 }} 
        className="absolute top-20 left-10 text-6xl z-0"
      >
        🎮
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.7, duration: 1.5, repeat: Infinity, repeatDelay: 1 }} 
        className="absolute bottom-20 right-10 text-6xl z-0"
      >
        ⭐
      </motion.div>

      <motion.div
        className="absolute top-36 left-1/2 transform -translate-x-1/2 text-6xl z-0"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 1.9, duration: 1 }} 
      >
        👥
      </motion.div>

      <motion.div
        className="absolute top-3/4 left-1/4 text-6xl z-0"
        initial={{ opacity: 0, rotate: 15 }} 
        animate={{ opacity: 1, rotate: 0 }} 
        transition={{ delay: 2.1, duration: 1 }} 
      >
        🌍
      </motion.div>
    </section>
  );
};

export default HeroSection;
