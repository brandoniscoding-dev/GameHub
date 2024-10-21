import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const UserAvatar = ({ user }: { user: { name: string; avatarUrl: string } }) => {
    return (
      <motion.a
        href="/profile"
        className="flex items-center gap-2 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Avatar className="px-6">
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <span className="text-lg font-semibold text-black dark:text-white">{user.name}</span>
      </motion.a>
    );
  };

  export default UserAvatar;