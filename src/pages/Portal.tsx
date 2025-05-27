
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, Target, Globe, Award, Building, Heart, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Portal = () => {
  const projects = [
    {
      title: "Educação Amazônica",
      description: "Programa de capacitação digital para comunidades ribeirinhas",
      status: "Em andamento",
      impact: "500+ pessoas beneficiadas"
    },
    {
      title: "Sustentabilidade Digital",
      description: "Soluções tecnológicas para ONGs ambientais",
      status: "Concluído",
      impact: "15 organizações atendidas"
    },
    {
      title: "Intercâmbio Cultural",
      description: "Ponte entre saberes tradicionais e inovação",
      status: "Planejamento",
      impact: "Fase de captação"
    }
  ];

  const team = [
    { role: "Engenharia", count: 4 },
    { role: "Comunicação", count: 3 },
    { role: "Design", count: 2 },
    { role: "Economia", count: 2 },
    { role: "Produção", count: 3 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700">
                <ArrowLeft className="w-5 h-5" />
                <span>Voltar</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Building className="w-8 h-8 text-emerald-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-800">Portal Ripiiaia</h1>
                <p className="text-sm text-gray-600">ONG e Startup Colaborativa</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="outline" className="mb-6 border-emerald-200 text-emerald-700">
            🌍 Transformação Social
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Inovação Social e Tecnologia
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Somos uma equipe multidisciplinar dedicada a projetos que conectam tecnologia, 
            sustentabilidade e desenvolvimento humano. Nossa missão é promover transformação 
            social através da inovação e colaboração.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Users className="mr-2 w-5 h-5" />
              Conhecer Equipe
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600">
              <Target className="mr-2 w-5 h-5" />
              Nossos Projetos
            </Button>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Projetos em Destaque</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant={project.status === "Concluído" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-emerald-600">
                    <Award className="w-4 h-4 mr-2" />
                    {project.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-8 text-gray-800">Nossa Equipe Multidisciplinar</h3>
          <p className="text-lg text-gray-600 mb-12">
            Profissionais especializados trabalhando em colaboração para maximizar o impacto social
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {team.map((area, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="font-semibold text-gray-800">{area.role}</h4>
                <p className="text-emerald-600">{area.count} profissionais</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-emerald-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 className="text-3xl font-bold mb-6">Faça Parte da Transformação</h3>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a nós como voluntário, parceiro ou apoiador. Juntos podemos construir um futuro mais sustentável e inclusivo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Heart className="mr-2 w-5 h-5" />
              Ser Voluntário
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Globe className="mr-2 w-5 h-5" />
              Parcerias
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portal;
