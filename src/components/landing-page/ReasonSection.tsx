import { motion } from "framer-motion";
import ReasonCard from "../ReasonCard";

const ReasonSection = () => {
    return (
        <>
            <section className="relative py-24 dark:bg-gray-900">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-7xl mx-auto px-6"
            >
                <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-black dark:text-white">
                    Why <span className="text-yellow-500">GameHub</span>?
                </h2>
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                    Join the ultimate platform where gaming enthusiasts, developers, and creators come together.
                </p>
                </div>

                <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                        staggerChildren: 0.2,
                    },
                    },
                }}
                className="grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                <ReasonCard
                    icon="🎮"
                    title="A Gaming Community Like No Other"
                    description="GameHub is a thriving space for gamers who are passionate about discovering new games and sharing their own experiences."
                />
                <ReasonCard
                    icon="🛠️"
                    title="Build and Collaborate"
                    description="Whether you’re a developer or designer, collaborate with others to create amazing games and projects."
                />
                <ReasonCard
                    icon="💡"
                    title="Learn and Grow"
                    description="Access a wealth of tutorials, guides, and resources to hone your skills and become a better creator or developer."
                />
                <ReasonCard
                    icon="🌍"
                    title="Discover New Horizons"
                    description="Find and explore new games, ideas, and innovations from creative minds all over the world."
                />
                <ReasonCard
                    icon="🎉"
                    title="Compete & Challenge Yourself"
                    description="Participate in exciting competitions, coding challenges, and game jams to test your limits."
                />
                <ReasonCard
                    icon="🚀"
                    title="Shape the Future of Gaming"
                    description="Be part of a movement that's pushing the boundaries of what's possible in gaming and technology."
                />
                </motion.div>
            </motion.div>
            </section>

        </>
    );
};

export default ReasonSection;