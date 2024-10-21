import { motion } from "framer-motion";

const JoinNowButton = () => {
    return (
      <motion.a
        href="/join"
        className="relative px-6 py-6  rounded-lg text-white bg-black dark:bg-gray-800 transition-all duration-300 ease-in-out transform hover:bg-orange-500 shadow-md hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        Join Now
      </motion.a>
    );
  };

  export default JoinNowButton;