
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";

const CallToActionSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto text-center max-w-4xl">
        <h3 className="text-4xl font-bold mb-6 text-gray-800">Junte-se a Nós!</h3>
        <p className="text-xl text-gray-600 mb-8">
          Explore, participe e colabore nessa jornada de transformação coletiva
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
            <Link to="/portal">
              Conhecer Projetos
              <Users className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50" asChild>
            <Link to="/portal">Fazer Parte da Equipe</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
