import { motion } from "framer-motion";

const JoinNowButton = () => {
  return (
    <motion.a
      href="/join"
      className="relative flex justify-center items-center px-4 py-2 rounded-lg text-black dark:text-white border border-black dark:border-white hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg w-full md:w-auto text-center text-sm md:text-base"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      Join Now
    </motion.a>
  );
};

export default JoinNowButton;
