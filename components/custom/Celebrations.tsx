import Image from "next/image";
import { FaCalendar } from "react-icons/fa";

const festivals = [
  {
    id: "sinulog",
    name: "Sinulog Festival",
    location: "Cebu City",
    month: "January",
    image: "/images/festivals/sinulog.jpg",
    description:
      "A grand celebration honoring the Santo Niño (Child Jesus), featuring colorful street dancing, vibrant parades, and traditional rituals.",
  },
  {
    id: "ati-atihan",
    name: "Ati-Atihan Festival",
    location: "Kalibo, Aklan",
    month: "January",
    image: "/images/festivals/ati-atihan.jpg",
    description:
      "Known as the 'Mother of All Philippine Festivals,' celebrating the indigenous Ati people with tribal dances and music.",
  },
  {
    id: "panagbenga",
    name: "Panagbenga Festival",
    location: "Baguio City",
    month: "February",
    image: "/images/festivals/panagbenga.jpg",
    description:
      "A month-long flower festival showcasing Baguio's finest blooms with grand parades and street dancing competitions.",
  },
  {
    id: "pahiyas",
    name: "Pahiyas Festival",
    location: "Lucban, Quezon",
    month: "May",
    image: "/images/festivals/pahiyas.jpg",
    description:
      "A colorful harvest festival where houses are decorated with vibrant rice wafers (kiping) and fresh produce.",
  },
];

export default function Celebrations() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-600 via-red-500 to-yellow-600 text-transparent bg-clip-text font-display">
            Festivals & Celebrations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the vibrant spirit of the Philippines through its
            colorful festivals, where tradition, culture, and celebration come
            alive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {festivals.map((festival) => (
            <div
              key={festival.id}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
            >
              {/* Festival Image */}
              <div className="aspect-[3/4] relative">
                <Image
                  src={festival.image}
                  alt={festival.name}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {festival.name}
                    </h3>
                    <div className="flex items-center text-yellow-400 text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaCalendar className="mr-2" />
                      <span>{festival.month}</span>
                      <span className="mx-2">•</span>
                      <span>{festival.location}</span>
                    </div>
                    <p className="text-white/0 group-hover:text-white/90 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm">
                      {festival.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Tap Hint */}
              <div className="md:hidden absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-white/80 text-sm">Tap to reveal</span>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: View All Festivals Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl">
            Explore More Festivals
          </button>
        </div>
      </div>
    </section>
  );
}
