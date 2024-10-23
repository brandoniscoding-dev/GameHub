'use client';

import { useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHome, FaBlog, FaInfoCircle } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { HiMenu } from 'react-icons/hi';
import { BiUser } from 'react-icons/bi';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import dynamic from 'next/dynamic';
import logo from '../../src/public/img/gamehub.svg';

const UserAvatar = dynamic(() => import('./UserAvatar'), { ssr: false });
const JoinNowButton = dynamic(() => import('./JoinButton'), { ssr: false });

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const NavLink = memo(({ href, children, icon }: NavLinkProps) => (
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
));

const Header = ({ isAuthenticated, user }: { isAuthenticated: boolean; user?: { name: string; avatarUrl: string } }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 bg-transparent backdrop-blur-lg ${isScrolled ? "shadow-lg" : "shadow-none"} transition-shadow duration-500`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div className="flex items-center">
          <Image
            src={logo}
            alt="Game Hub Logo"
            width={120}
            height={80}
            priority
          />
        </motion.div>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-10 items-center ml-auto">
          <>
            <NavLink href="/home" icon={<FaHome />}>Home</NavLink>
            <NavLink href="/games" icon={<IoGameController />}>Games</NavLink>
            <NavLink href="/blog" icon={<FaBlog />}>Blog</NavLink>
            <NavLink href="/about" icon={<FaInfoCircle />}>About</NavLink>

            {!isAuthenticated && <JoinNowButton />}

            {isAuthenticated && user && <UserAvatar user={user} />}
          </>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <motion.button
                className="p-2 rounded-lg bg-transparent border border-transparent hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300 ease-in-out"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Open menu"
              >
                <HiMenu className="text-black dark:text-white" size={30} />
              </motion.button>
            </SheetTrigger>
            <SheetContent className="bg-white dark:bg-gray-900 text-black dark:text-white">
              <SheetHeader>
                <SheetTitle className="text-black dark:text-white text-3xl">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4 space-y-6">
                <NavLink href="/home" icon={<FaHome />}>Home</NavLink>
                <NavLink href="/games" icon={<IoGameController />}>Games</NavLink>
                <NavLink href="/blog" icon={<FaBlog />}>Blog</NavLink>
                <NavLink href="/about" icon={<FaInfoCircle />}>About</NavLink>

                {!isAuthenticated && (
                  <div className="flex justify-center w-full">
                    <JoinNowButton />
                  </div>
                )}

                {isAuthenticated && user && (
                  <div className="flex justify-center w-full">
                    <NavLink href="/profile" icon={<BiUser />}>Profile</NavLink>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default memo(Header);
