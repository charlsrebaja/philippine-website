import Image from "next/image";
import { FaLandmark, FaMap, FaBook, FaFlag } from "react-icons/fa";
import HeroBanner from "@/components/custom/HeroBanner";
import FeatureCard from "@/components/custom/FeatureCard";
import DestinationCard from "@/components/custom/DestinationCard";
import Footer from "@/components/custom/Footer";
import CultureSection from "@/components/custom/CultureSection";
import TraditionalGames from "@/components/custom/TraditionalGames";
import Celebrations from "@/components/custom/Celebrations";

const features = [
  {
    title: "Provinces",
    description: "Explore the diverse regions and provinces of the Philippines",
    icon: FaMap,
    href: "/provinces",
  },
  {
    title: "Tourist Attractions",
    description: "Discover breathtaking destinations and hidden gems",
    icon: FaLandmark,
    href: "/attractions",
  },
  {
    title: "Culture",
    description: "Experience rich Filipino traditions and heritage",
    icon: FaBook,
    href: "/culture",
  },
  {
    title: "National Symbols",
    description: "Learn about the symbols that represent the Philippines",
    icon: FaFlag,
    href: "/symbols",
  },
];

const popularDestinations = [
  {
    title: "Boracay",
    description: "World-famous white sand beaches and crystal-clear waters",
    imageUrl: "/images/image1.jpg",
  },
  {
    title: "Chocolate Hills",
    description: "Unique geological formation in Bohol",
    imageUrl: "/images/image2.png",
  },
  {
    title: "Rice Terraces",
    description: "Ancient terraces carved into the mountains of Ifugao",
    imageUrl: "/images/image3.png",
  },
  {
    title: "El Nido",
    description: "Stunning limestone cliffs and lagoons in Palawan",
    imageUrl: "/images/image4.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroBanner />

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore the Philippines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDestinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-yellow-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl font-bold mb-4">About the Philippines</h2>
            <p className="text-lg text-gray-700 mb-6">
              The Philippines is an archipelagic country composed of over 7,600
              islands. With its rich history, diverse culture, and natural
              beauty, it offers unforgettable experiences for every traveler.
            </p>
          </div>
          <div className="w-full md:w-1/2 aspect-[4/3] relative">
            <Image
              src="/images/about-ph.jpg"
              alt="About Philippines"
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <CultureSection />
      <TraditionalGames />
      <Celebrations />

      <Footer />
    </main>
  );
}
