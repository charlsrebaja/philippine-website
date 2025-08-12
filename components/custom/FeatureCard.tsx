import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { IconType } from "react-icons";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconType;
  href?: string;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  href = "/",
}: FeatureCardProps) {
  const CardWrapper = href ? Link : "div";

  return (
    <CardWrapper href={href}>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 mb-4">
            <Icon size={24} color="#ca8a04" />
          </div>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </CardWrapper>
  );
}
