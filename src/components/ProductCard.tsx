import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, CheckCircle } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  benefits: string[];
  image: string;
  link: string;
  featured?: boolean;
}

export function ProductCard({ title, description, benefits, image, link, featured = false }: ProductCardProps) {
  return (
    <Card className={`group hover:shadow-strong transition-all duration-300 ${featured ? 'ring-2 ring-success shadow-medium' : ''}`}>
      <CardContent className="p-6">
        <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {featured && (
            <div className="absolute top-3 right-3 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold">
              Mais Vendido
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-success transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-2 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{benefit}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          asChild
          variant={featured ? "cta" : "hero"}
          size="lg"
          className="w-full"
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            Quero Garantir Agora
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}