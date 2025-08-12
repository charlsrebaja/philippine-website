import Image from "next/image";

interface DestinationCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function DestinationCard({
  title,
  description,
  imageUrl,
}: DestinationCardProps) {
  return (
    <div className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
      <div className="relative h-48">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
