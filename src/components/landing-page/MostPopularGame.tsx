import GameCard from '../GameCard'; 

import img1 from '../../app/img/Epic_Adventure.jpeg';
import img2 from '../../app/img/Futuristic_Racing.jpeg';
import img3 from '../../app/img/Mystic_Strategy.jpeg'; 

const MostPopularGames = () => {
  const games = [
    {
      image: img1, 
      title: "Epic Adventure",
      description: "A journey through the most immersive world of all time."
    },
    {
      image: img2, 
      title: "Futuristic Racing",
      description: "High-speed races across futuristic landscapes."
    },
    {
      image: img3,
      title: "Mystic Strategy",
      description: "Command your troops and conquer mystical lands."
    },
  ];

  return (
    <section className="py-20 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black dark:text-white">
            Most Popular <span className="text-yellow-500">Games</span>
          </h2>
        </div>

        <div className="space-y-8">
          {games.map((game, index) => (
            <GameCard
              key={index}
              image={game.image}
              title={game.title}
              description={game.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostPopularGames;
