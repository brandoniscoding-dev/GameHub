// components/Header.tsx

'use client'; // Ligne ajoutée pour le rendu côté client

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiSun, HiMoon } from "react-icons/hi"; // Importation des icônes
import { BiGame, BiUser, BiHomeCircle } from "react-icons/bi"; 
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import src from '../../src/public/img/gamehub.svg';
import Image from "next/image";
import UserAvatar from "./UserAvatar";
import JoinNowButton from "./JoinButton";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const NavLink = ({ href, children, icon }: NavLinkProps) => {
  return (
    <motion.a
      href={href}
      className="flex items-center gap-2 text-black dark:text-white relative group text-lg font-semibold tracking-wider"
      whileHover={{ scale: 1.1, color: "#FFA500" }}  
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {icon}
      {children}
      <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-orange-500 transition-all duration-300 scale-x-0 group-hover:scale-x-100" />
    </motion.a>
  );
};





const Header = ({ isAuthenticated, user }: { isAuthenticated: boolean; user?: { name: string; avatarUrl: string } }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Récupérer la préférence de thème de localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 bg-transparent ${isScrolled ? "shadow-lg" : "shadow-none"} transition-shadow duration-500`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div className="flex items-center">
            <Image
              src={src}
              alt="Game Hub Logo"
              width={150}
              height={100}
            />
          </motion.div>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-10 items-center">
            {!isAuthenticated && (
              <>
                <NavLink href="/home" icon={<BiHomeCircle />}>Home</NavLink>
                <NavLink href="/about" icon={<BiUser />}>About</NavLink>
                <NavLink href="/games" icon={<BiGame />}>Games</NavLink>
                <NavLink href="/features">Features</NavLink>
                <JoinNowButton/>
              </>
            )}
            {isAuthenticated && user && (
              <>
                <NavLink href="/dashboard" icon={<BiHomeCircle />}>Dashboard</NavLink>
                <NavLink href="/mygames" icon={<BiGame />}>My Games</NavLink>
                <NavLink href="/community">Community</NavLink>
                <UserAvatar user={user} />
              </>
            )}
          </div>

          {/* Icône pour basculer le thème */}
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 ml-4 md:ml-6">
            {isDarkMode ? <HiSun className="text-yellow-500" size={24} /> : <HiMoon className="text-gray-800" size={24} />}
          </button>

          {/* Menu mobile */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost">
                  <HiMenu className="text-black dark:text-white" size={30} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-black dark:text-white text-3xl">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col p-4 space-y-6">
                  {!isAuthenticated && (
                    <>
                      <NavLink href="/home" icon={<BiHomeCircle />}>Home</NavLink>
                      <NavLink href="/about" icon={<BiUser />}>About</NavLink>
                      <NavLink href="/games" icon={<BiGame />}>Games</NavLink>
                      <NavLink href="/features">Features</NavLink>
                      <JoinNowButton />
                    </>
                  )}
                  {isAuthenticated && (
                    <>
                      <NavLink href="/dashboard" icon={<BiHomeCircle />}>Dashboard</NavLink>
                      <NavLink href="/mygames" icon={<BiGame />}>My Games</NavLink>
                      <NavLink href="/community">Community</NavLink>
                      <NavLink href="/profile" icon={<BiUser />}>Profile</NavLink>
                    </>
                  )}
                  {/* Icône pour basculer le thème mobile */}
                  <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 mt-4">
                    {isDarkMode ? <HiSun className="text-yellow-500" size={24} /> : <HiMoon className="text-gray-800" size={24} />}
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <hr className="border-t border-gray-300 dark:border-gray-700 mt-2" /> {/* Ligne de division sous le header */}
      </motion.nav>
    </>
  );
};

export default Header;
