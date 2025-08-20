import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ProductCard } from '@/components/ProductCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, Heart, Zap, Shield, Trophy, CheckCircle2 } from 'lucide-react';

// Import images
import newDetoxHero from '@/assets/new-detox-hero.jpg';
import sb2Black from '@/assets/sb2-black.jpg';
import fignarLiver from '@/assets/fignar-liver.jpg';
import weightLoss from '@/assets/weight-loss.jpg';
import skinCare from '@/assets/skin-care.jpg';
import hairGrowth from '@/assets/hair-growth.jpg';

const Index = () => {
  const healthProducts = [
    {
      title: "New Detox",
      description: "Quer emagrecer com saúde, de forma natural e sem gastar uma fortuna? O método NEW DETOX que está mudando a vida de milhares de pessoas agora pode ser seu!",
      benefits: [
        "Emagrecimento natural e saudável",
        "Sem gastar uma fortuna",
        "Método comprovado",
        "Milhares de pessoas transformadas"
      ],
      image: newDetoxHero,
      link: "https://app.monetizze.com.br/r/ALW20871672",
      featured: true
    },
    {
      title: "SB2 Black",
      description: "TRANSFORME SEU CORPO NESTE VERÃO. ENTRE EM FORMA COM SB2 BLACK E APROVEITE AO MÁXIMO!",
      benefits: [
        "Transformação corporal rápida",
        "Ideal para o verão",
        "Resultados visíveis",
        "Fórmula avançada"
      ],
      image: sb2Black,
      link: "https://app.monetizze.com.br/r/ASS25503415"
    },
    {
      title: "Fignar",
      description: "Melhore a saúde do seu fígado com apenas 20 gotas! Cuide da sua saúde de forma prática e eficaz.",
      benefits: [
        "Apenas 20 gotas por dia",
        "Melhora a saúde do fígado",
        "Fácil de usar",
        "Resultados comprovados"
      ],
      image: fignarLiver,
      link: "https://app.monetizze.com.br/r/APP25503419"
    },
    {
      title: "Slim Gota Black",
      description: "Descubra o poder em cada gota do nosso tratamento revolucionário! Adeus, gordura teimosa! Seu caminho para a melhor versão do seu corpo começa agora!",
      benefits: [
        "Tratamento revolucionário",
        "Elimina gordura teimosa",
        "Resultados rápidos",
        "Fácil aplicação"
      ],
      image: weightLoss,
      link: "https://app.monetizze.com.br/r/AUZ21258214"
    },
    {
      title: "Clareador Nutralfit",
      description: "Acabe de vez com as manchas escuras da sua pele com nosso clareador revolucionário.",
      benefits: [
        "Elimina manchas escuras",
        "Fórmula revolucionária",
        "Resultados visíveis",
        "Pele renovada"
      ],
      image: skinCare,
      link: "https://app.monetizze.com.br/r/AJX25503066"
    },
    {
      title: "Kit S.O.S Crescimento",
      description: "Descubra o kit Nº 1 mais potente em crescimento e no combate à queda capilar!",
      benefits: [
        "Kit nº 1 do mercado",
        "Combate queda capilar",
        "Estimula crescimento",
        "Resultados comprovados"
      ],
      image: hairGrowth,
      link: "https://app.monetizze.com.br/r/ACS21486499"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      testimonial: "Perdi 15kg em 3 meses com o New Detox! Nunca me senti tão bem e confiante. Recomendo para todas as minhas amigas!",
      rating: 5
    },
    {
      name: "João Santos",
      location: "Rio de Janeiro, RJ",
      testimonial: "O SB2 Black me ajudou a ficar em forma para o verão. Resultados incríveis em pouco tempo!",
      rating: 5
    },
    {
      name: "Ana Costa",
      location: "Belo Horizonte, MG",
      testimonial: "Minha pele ficou lisa e sem manchas com o Clareador Nutralfit. Produto fantástico!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <title>Produtos Naturais para Saúde e Bem-Estar | Transforme sua Vida</title>
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Article Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Descubra o Método que Está Revolucionando o Emagrecimento
              </h2>
              <p className="text-xl text-muted-foreground">
                Milhares de pessoas já transformaram suas vidas. Agora é a sua vez!
              </p>
            </div>
            
            <div className="bg-card-gradient rounded-2xl p-8 shadow-medium">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src={newDetoxHero} 
                    alt="New Detox - Método Natural"
                    className="w-full rounded-xl shadow-soft"
                  />
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    NEW DETOX: O Segredo do Emagrecimento Natural
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">100% Natural</h4>
                        <p className="text-muted-foreground text-sm">Ingredientes selecionados da natureza</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">Sem Efeitos Colaterais</h4>
                        <p className="text-muted-foreground text-sm">Fórmula segura e testada</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">Resultados Comprovados</h4>
                        <p className="text-muted-foreground text-sm">Milhares de clientes satisfeitos</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    asChild
                    variant="cta"
                    size="xl" 
                    className="w-full"
                  >
                    <a href="https://app.monetizze.com.br/r/ALW20871672" target="_blank" rel="noopener noreferrer">
                      Quero Começar Agora
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Produtos que Transformam Vidas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubra nossa seleção de produtos naturais para saúde, beleza e bem-estar
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthProducts.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-muted-foreground">
              Histórias reais de transformação e sucesso
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Não Perca Mais Tempo!
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90">
              Sua transformação começa hoje. Junte-se a milhares de pessoas que já mudaram suas vidas!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                variant="cta"
                size="xl"
              >
                <a href="https://app.monetizze.com.br/r/ALW20871672" target="_blank" rel="noopener noreferrer">
                  Começar Minha Transformação
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
            </div>
            
            <div className="flex justify-center gap-8 text-sm pt-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Garantia de Satisfação</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>Milhares de Clientes Satisfeitos</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                <span>Produtos Aprovados</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Produtos Naturais Premium</h3>
            <p className="text-primary-foreground/80">
              Transformando vidas através de produtos naturais de qualidade
            </p>
            <Separator className="my-6 bg-primary-foreground/20" />
            <p className="text-sm text-primary-foreground/60">
              © 2024 Produtos Naturais Premium. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
