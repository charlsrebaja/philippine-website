"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [

   {
    image: "/images/herobg1.png",
    title: "Palawan Islands",
    description: "Crystal clear waters and limestone cliffs of El Nido",
  },
    {
    image: "/images/herobg2.png",
    title: "Banaue Rice Terraces",
    description: "Ancient terraces carved into the mountains of Ifugao",
  },

  {
    image: "/images/herobg3.jpg",
    title: "Mayon Volcano",
    description: "Perfect cone-shaped active volcano in Albay",
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-80" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            It&apos;s more fun in the {" "}
            <span className="text-yellow-400">Philippines</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/attractions">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl text-white min-w-[160px]"
              >
                Explore Now
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-black  hover:bg-white/20 min-w-[160px]"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-4" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-10 left-0 right-0">
          <div className="flex justify-center gap-8 text-white text-center">
            <div>
              <p className="text-3xl font-bold text-yellow-400">7,640+</p>
              <p className="text-sm">Islands</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-400">81</p>
              <p className="text-sm">Provinces</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-400">145+</p>
              <p className="text-sm">Languages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
