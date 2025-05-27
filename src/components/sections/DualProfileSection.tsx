
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Heart } from "lucide-react";

const DualProfileSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-emerald-400 via-emerald-500 to-amber-500 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h3 className="text-4xl font-bold mb-6">Por Que Dois Perfis?</h3>
        <p className="text-xl mb-8 opacity-95 leading-relaxed">
          Respeitamos a pluralidade e garantimos que nossos projetos sociais e profissionais sejam acessíveis a todos, 
          independentemente de crenças ou orientações.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/15 backdrop-blur-md border-white/30 text-white hover:bg-white/20 transition-all duration-300">
            <CardHeader>
              <Building className="w-8 h-8 mb-2" />
              <CardTitle>Portal Profissional</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="opacity-95">
                No portal.ripiiaia.org, atuamos como profissionais técnicos e ONG, 
                mantendo neutralidade religiosa para ampliar diálogos e parcerias.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/15 backdrop-blur-md border-white/30 text-white hover:bg-white/20 transition-all duration-300">
            <CardHeader>
              <Heart className="w-8 h-8 mb-2" />
              <CardTitle>Universo Espiritual</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="opacity-95">
                No daime.ripiiaia.org, celebramos nossa identidade espiritual, 
                honrando tradições e compartilhando ensinamentos sagrados.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DualProfileSection;
