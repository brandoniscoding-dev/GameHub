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
            <Avatar className="px-6 bg-yellow-500 w-10 h-10 flex items-center justify-center rounded-full text-white" >
                <AvatarImage src={user.avatarUrl} alt={user.name}/>
                <AvatarFallback className="dark:text-white-500">
                    {user.name.charAt(0)}
                </AvatarFallback>
            </Avatar>
            <span className="text-lg font-semibold text-black dark:text-white">{user.name}</span>
        </motion.a>
    );
};

export default UserAvatar;
