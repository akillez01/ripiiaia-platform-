
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <Badge variant="outline" className="mb-6 border-emerald-200 text-emerald-700">
          🌐 Bem-vindos à Ripiiaia
        </Badge>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-green-600 to-amber-600 bg-clip-text text-transparent leading-tight">
          Conexão, Crescimento e Intercâmbio de Saberes
        </h2>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
          Uma plataforma multifacetada que une espiritualidade, cultura, inovação social e serviços profissionais. 
          Cada espaço com sua missão única, unidos pelo propósito de promover harmonia, inclusão e desenvolvimento humano.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
            <a href="#espacos">
              Explorar Espaços
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50" asChild>
            <a href="#valores">Nossa História</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
