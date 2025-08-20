import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface TestimonialProps {
  name: string;
  location: string;
  testimonial: string;
  rating: number;
}

export function TestimonialCard({ name, location, testimonial, rating }: TestimonialProps) {
  return (
    <Card className="bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-warning text-warning" />
          ))}
        </div>
        
        <div className="relative">
          <Quote className="w-6 h-6 text-success/30 absolute -top-2 -left-2" />
          <p className="text-muted-foreground italic mb-4 pl-4">
            {testimonial}
          </p>
        </div>
        
        <div className="text-sm">
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-muted-foreground">{location}</p>
        </div>
      </CardContent>
    </Card>
  );
}