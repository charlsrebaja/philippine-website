import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroBanner() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/herobg2.jpg"
          alt="Beautiful Philippine Landscape"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover the Beauty of the{" "}
            <span className="text-yellow-400">Philippines</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Explore pristine beaches, historic landmarks, and vibrant culture in
            this breathtaking archipelago of over 7,600 islands
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/attractions">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black min-w-[160px]"
              >
                Explore Now
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/20 min-w-[160px]"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
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
    </section>
  );
}
