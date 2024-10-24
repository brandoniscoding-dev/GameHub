import { motion } from "framer-motion";
import Image from "next/image"; // Importer Image de Next.js
import { StaticImageData } from 'next/image';

// GameCard Component - Avec des animations et interactions améliorées
interface GameCardProps {
  image: StaticImageData; // Type pour une image importée
  title: string;
  description: string;
}

const GameCard: React.FC<GameCardProps> = ({ image, title, description }) => {
  return (
    <motion.div
      className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-2xl mb-12 cursor-pointer group"
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      whileHover={{ scale: 1.02, rotate: 2 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 120,
      }}
    >
      {/* Image avec Next.js et effet de zoom dynamique */}
      <motion.div className="w-full h-full overflow-hidden">
        <Image
          src={image} // Utilisation de l'image importée
          alt={title}
          layout="fill" // Occupe tout l'espace de son conteneur parent
          objectFit="cover" // L'image occupe tout l'espace de manière proportionnelle
          className="transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </motion.div>

      {/* Overlay interactif avec animations */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {/* Contenu avec animation */}
        <motion.div
          className="absolute bottom-0 p-8 text-white"
          initial={{ translateY: 50 }}
          whileHover={{ translateY: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-bold mb-2">{title}</h3>
          <p className="text-lg">{description}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GameCard;
