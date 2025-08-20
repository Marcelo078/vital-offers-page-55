import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, Shield, Star } from "lucide-react";
import newDetoxHero from "@/assets/new-detox-hero.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#22c55e,transparent)]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <Zap className="w-4 h-4" />
                <span>Método Natural Revolucionário</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Emagreça com
                <span className="bg-gradient-to-r from-warning to-warning-light bg-clip-text text-transparent">
                  {" "}Saúde Natural
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Descubra o método NEW DETOX que está mudando a vida de milhares de pessoas. 
                Emagrecimento natural, sem gastar uma fortuna!
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-warning" />
                <span>100% Natural</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-warning" />
                <span>Milhares de Clientes Satisfeitos</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-warning" />
                <span>Resultados Comprovados</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                variant="cta"
                size="xl"
                className="flex-1 sm:flex-none"
              >
                <a href="https://app.monetizze.com.br/r/ALW20871672" target="_blank" rel="noopener noreferrer">
                  Quero Emagrecer Agora
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline"
                size="xl"
                className="flex-1 sm:flex-none bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
              >
                Ver Depoimentos
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={newDetoxHero} 
                alt="New Detox - Emagrecimento Natural"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-strong"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-warning text-warning-foreground px-4 py-2 rounded-full font-bold text-sm animate-bounce">
              🔥 Em Alta!
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white text-primary px-4 py-2 rounded-full font-semibold text-sm shadow-medium">
              ✅ Aprovado
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}