'use client';

import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import HeroSection from "./HeroSection";
import FAQAccordion from "../FAQAccordion"; 
import ReasonSection from "./ReasonSection";
import MostPopularGame from "./MostPopularGame";

const Main: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isIdle, setIsIdle] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsIdle(false);
    };
    window.addEventListener("scroll", handleScroll);

    const idleTimeout = setTimeout(() => {
      setIsIdle(true);
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(idleTimeout);
    };
  }, [scrollY]);

  return (
    <main className="relative bg-white dark:bg-gray-900 transition-colors duration-300">

      {/* Hero section */}
      <HeroSection />

      <Separator/>

      {/* Reason section  */}
      <ReasonSection />
      
      <Separator/>

      {/* Section Most Popular Games */}
      <MostPopularGame />

      <Separator />

      {/* Section FAQ */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <Separator />
    </main>
  );
};


const faqs = [
  { 
    question: "What is GameHub?", 
    answer: "GameHub is a community-driven platform where gamers can discover, share, and collaborate on games." 
  },
  { 
    question: "How can I contribute?", 
    answer: "You can contribute by sharing your own games, giving feedback to other creators, or collaborating on game development projects." 
  },
  { 
    question: "Is GameHub free to use?", 
    answer: "Yes, GameHub is completely free to use for both players and developers." 
  },
  { 
    question: "What types of games are available on GameHub?", 
    answer: "GameHub hosts a wide variety of games, including indie games, multiplayer games, and community-created content across various genres." 
  },
  { 
    question: "Do I need an account to use GameHub?", 
    answer: "Yes, creating an account is required to access all features, such as saving progress, contributing, and interacting with the community." 
  },
  { 
    question: "How do I report a bug or issue with a game?", 
    answer: "To report a bug, you can use the 'Report Issue' button available on each game’s page, or reach out to the community forum." 
  },
  { 
    question: "Can I monetize my games on GameHub?", 
    answer: "Currently, GameHub does not support direct monetization. However, developers can include donation links or share their Patreon for support." 
  },
  { 
    question: "Is there a mobile version of GameHub?", 
    answer: "Yes, GameHub is available on both iOS and Android, with full access to all the platform’s features." 
  },
  { 
    question: "How can I collaborate with other developers?", 
    answer: "You can collaborate by joining game development projects, participating in discussions, and using the built-in tools for team collaboration." 
  },
  { 
    question: "Is GameHub only for game developers?", 
    answer: "No, GameHub is for everyone! Whether you're a gamer, game developer, or simply curious about games, you'll find something to enjoy." 
  }
];

export default Main;
