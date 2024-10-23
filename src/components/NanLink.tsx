import { motion } from "framer-motion";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
  }

const NavLink = ({ href, children, icon }: NavLinkProps) => {
    return (
      <motion.a
        href={href}
        className="flex items-center gap-2 relative group text-lg font-semibold tracking-wider transition-colors duration-300"
        whileHover={{ scale: 1.1, color: "#FFA500" }}  
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ color: "inherit" }}
      >
        {icon}
        {children}
        <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-orange-500 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
      </motion.a>
    );
  }

export default NavLink;