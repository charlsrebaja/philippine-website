import Image from "next/image";

const cultureCards = [
  {
    id: "dance",
    title: "Traditional Dances",
    image: "/images/culture/culture1.jpg",
    description:
      "Experience the graceful Tinikling bamboo dance and vibrant festivals like Sinulog and Ati-Atihan, showcasing Filipino rhythm and storytelling through movement.",
  },
  {
    id: "music",
    title: "Filipino Music",
    image: "/images/culture/culture2.jpg",
    description:
      "From ancient Kulintang ensemble to modern OPM (Original Pinoy Music), discover the rich musical heritage that reflects the Filipino spirit.",
  },
  {
    id: "clothing",
    title: "Traditional Attire",
    image: "/images/culture/culture3.png",
    description:
      "The elegant Barong Tagalog and Maria Clara dress embody Filipino craftsmanship with intricate embroidery and delicate piña fabric.",
  },
  {
    id: "cuisine",
    title: "Filipino Cuisine",
    image: "/images/culture/culture4.png",
    description:
      "Savor the flavors of adobo, sinigang, and lechon - dishes that tell the story of Filipino history through its unique blend of indigenous, Spanish, and Asian influences.",
  },
];

export default function CultureSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-600 via-red-500 to-yellow-600 text-transparent bg-clip-text font-display">
          Culture & Traditions
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover the vibrant tapestry of Filipino culture through its
          traditional dances, music, clothing, and cuisine.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cultureCards.map((card) => (
            <div
              key={card.id}
              className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />

              {/* Gradient Overlay - Always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/* Title - Always visible */}
                <h3 className="text-white text-xl font-bold mb-2 z-10">
                  {card.title}
                </h3>

                {/* Description - Hidden by default, shown on hover/tap */}
                <p className="text-white/0 group-hover:text-white/90 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {card.description}
                </p>

                {/* Interactive hint for mobile */}
                <div className="md:hidden absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-sm">Tap to reveal</span>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
