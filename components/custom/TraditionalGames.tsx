import Image from "next/image";

const traditionalGames = [
  {
    id: "luksong-tinik",
    name: "Luksong Tinik",
    image: "/images/games/game1.jpg",
    description:
      "A jumping game where players leap over other players' backs in increasingly difficult positions.",
  },
  {
    id: "tumbang-preso",
    name: "Tumbang Preso",
    image: "/images/games/game2.jpg",
    description:
      "Players take turns trying to knock down a can while avoiding being tagged by the guard who must first retrieve the can.",
  },
  {
    id: "patintero",
    name: "Patintero",
    image: "/images/games/game4.jpg",
    description:
      "A strategic team game played on a grid where players try to cross lines while avoiding being tagged by defenders.",
  },
  {
    id: "saranggola",
    name: "Pagpapalipad ng Saranggola",
    image: "/images/games/game3.jpg",
    description:
      "A traditional outdoor game where players fly kites, often competing to keep theirs in the air the longest or skillfully maneuver them in the wind.",
  },
];

export default function TraditionalGames() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-600 via-red-500 to-yellow-600 text-transparent bg-clip-text font-display">
          Larong Pinoy
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover the beloved traditional street games that have been passed
          down through generations of Filipino children.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {traditionalGames.map((game) => (
            <div
              key={game.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Game Image */}
              <Image
                src={game.image}
                alt={game.name}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Gradient Overlay - Always visible but stronger on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content Container */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Game Title */}
                <h3 className="text-white text-2xl font-bold mb-2 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                  {game.name}
                </h3>

                {/* Game Description */}
                <p className="text-white/0 group-hover:text-white/90 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {game.description}
                </p>
              </div>

              {/* Mobile Tap Hint */}
              <div className="md:hidden absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-white/80 text-sm">Tap to reveal</span>
              </div>
            </div>
          ))}
        </div>

        {/* A short Quoate*/}

        <div className="text-center mt-8">
          <p className="text-gray-800 italic">
            &quot;Ang kabataan ang pag-asa ng bayan.&quot;
          </p>
        </div>

        {/* Optional: "Learn More" Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl">
            Learn More About Filipino Games
          </button>
        </div>
      </div>
    </section>
  );
}
