import { motion } from "framer-motion";

interface ReasonCardProps {
  icon: string;
  title: string;
  description: string;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className="bg-white dark:bg-gray-800 text-black dark:text-white p-8 rounded-lg shadow-lg cursor-pointer hover:bg-yellow-500 hover:text-white transition-colors duration-500"
    >
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-lg">{description}</p>
    </motion.div>
  );
};

export default ReasonCard;
