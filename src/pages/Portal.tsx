import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Award, Building, Target, Users } from "lucide-react";
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
            <a href="#projetos" className="inline-block">
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600">
                <Target className="mr-2 w-5 h-5" />
                Nossos Projetos
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-16 px-4 bg-white/50">
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

      {/* Projetos Modernos */}
      <section id="projetos-modern" className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 7V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4"/><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M6 17v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2"/></svg>
            <h2 className="text-3xl font-bold text-gray-800">Nossos Projetos</h2>
          </div>
          <p className="text-xl text-gray-700 mb-12 text-center">
            Conheça as iniciativas que estamos desenvolvendo para promover transformação social e preservação ambiental.
          </p>
          <div className="grid gap-8">
            {/* Projetos cards */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img src="https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg" alt="Preservação da Floresta" className="w-full h-full object-cover" />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Ambiental</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Em andamento</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Preservação da Floresta</h3>
                  <p className="text-gray-600 mb-4">Projeto de conservação e manejo sustentável da floresta amazônica.</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Saiba mais</button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" alt="Educação Digital" className="w-full h-full object-cover" />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Educação</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Em andamento</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Educação Digital</h3>
                  <p className="text-gray-600 mb-4">Capacitação em tecnologia para comunidades tradicionais.</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Saiba mais</button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg" alt="Cultura Viva" className="w-full h-full object-cover" />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Cultural</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">Planejamento</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Cultura Viva</h3>
                  <p className="text-gray-600 mb-4">Documentação e preservação de saberes tradicionais.</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Saiba mais</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parcerias */}
      <section id="parcerias" className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>
            <h2 className="text-3xl font-bold text-gray-800">Parcerias</h2>
          </div>
          <p className="text-xl text-gray-700 mb-12 text-center">
            Conheça as organizações que colaboram conosco para ampliar nosso impacto e alcance social.
          </p>
          <div className="grid gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="md:flex items-center gap-6">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg" alt="Instituto Amazônia" className="w-full h-32 object-cover rounded-lg" />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Instituto Amazônia</h3>
                  <p className="text-blue-600 font-medium mb-3">ONG Ambiental</p>
                  <p className="text-gray-600">Parceria em projetos de conservação e desenvolvimento sustentável.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="md:flex items-center gap-6">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <img src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg" alt="Fundação Cultura Viva" className="w-full h-32 object-cover rounded-lg" />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Fundação Cultura Viva</h3>
                  <p className="text-blue-600 font-medium mb-3">Instituição Cultural</p>
                  <p className="text-gray-600">Colaboração em projetos de preservação cultural e artística.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="md:flex items-center gap-6">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" alt="Tech for Good" className="w-full h-32 object-cover rounded-lg" />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Tech for Good</h3>
                  <p className="text-blue-600 font-medium mb-3">Empresa de Tecnologia</p>
                  <p className="text-gray-600">Suporte tecnológico e desenvolvimento de soluções digitais.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparência */}
      <section id="transparencia" className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/><path d="M12 2v20"/></svg>
            <h2 className="text-3xl font-bold text-gray-800">Transparência</h2>
          </div>
          <p className="text-xl text-gray-700 mb-12 text-center">
            Acesse nossos relatórios e prestação de contas, demonstrando nosso compromisso com a transparência e responsabilidade social.
          </p>
          <div className="grid gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Relatório Anual - 2023</h3>
                <p className="text-gray-600">Prestação de contas e resultados dos projetos realizados em 2023.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-600 mb-1">Projetos Realizados</p>
                  <p className="text-2xl font-bold text-gray-800">12</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-600 mb-1">Pessoas Impactadas</p>
                  <p className="text-2xl font-bold text-gray-800">5000</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-600 mb-1">Investimento Total</p>
                  <p className="text-2xl font-bold text-gray-800">R$ 500.000</p>
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Baixar Relatório Completo</button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Relatório Anual - 2022</h3>
                <p className="text-gray-600">Prestação de contas e resultados dos projetos realizados em 2022.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-600 mb-1">Projetos Realizados</p>
                  <p className="text-2xl font-bold text-gray-800">10</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-600 mb-1">Pessoas Impactadas</p>
                  <p className="text-2xl font-bold text-gray-800">4000</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-600 mb-1">Investimento Total</p>
                  <p className="text-2xl font-bold text-gray-800">R$ 400.000</p>
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Baixar Relatório Completo</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe - agora no final */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex flex-col items-center gap-3 mb-8">
            <Users className="w-10 h-10 text-emerald-600" />
            <h3 className="text-3xl font-bold text-gray-800">Conheça o Time Ripiiaia</h3>
          </div>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Profissionais apaixonados por impacto social, inovação e sustentabilidade. Nosso time multidisciplinar une experiência, criatividade e propósito para transformar realidades.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Exemplo de membros do time - substitua pelos reais se desejar */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center hover:scale-105 transition-transform">
              <img src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg" alt="Ana Silva" className="w-full h-48 object-cover" />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h4 className="text-xl font-semibold text-gray-800 mb-1">Ana Silva</h4>
                <span className="text-emerald-600 font-medium mb-2">Diretora Executiva</span>
                <p className="text-gray-600 text-sm mb-2">Especialista em gestão de projetos sociais com mais de 15 anos de experiência.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center hover:scale-105 transition-transform">
              <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="João Santos" className="w-full h-48 object-cover" />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h4 className="text-xl font-semibold text-gray-800 mb-1">João Santos</h4>
                <span className="text-emerald-600 font-medium mb-2">Coordenador de Projetos</span>
                <p className="text-gray-600 text-sm mb-2">Engenheiro ambiental focado em sustentabilidade e desenvolvimento comunitário.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center hover:scale-105 transition-transform">
              <img src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg" alt="Maria Oliveira" className="w-full h-48 object-cover" />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h4 className="text-xl font-semibold text-gray-800 mb-1">Maria Oliveira</h4>
                <span className="text-emerald-600 font-medium mb-2">Comunicação</span>
                <p className="text-gray-600 text-sm mb-2">Jornalista especializada em comunicação social e projetos culturais.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portal;
