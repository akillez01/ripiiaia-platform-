import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, Heart, Radio, Wrench, Leaf, Users, Music, Building } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const subdomains = [
    {
      title: "Portal Ripiiaia",
      subtitle: "A Plataforma Profissional",
      description: "ONG e startup colaborativa com equipe multidisciplinar. Projetos sociais, parcerias institucionais e transparência organizacional.",
      url: "portal.ripiiaia.org",
      route: "/portal",
      icon: Building,
      color: "bg-emerald-500",
      hoverColor: "hover:bg-emerald-600",
      features: ["Projetos Sociais", "Equipe Multidisciplinar", "Parcerias Globais", "Transparência"]
    },
    {
      title: "Universo Daime",
      subtitle: "Espiritualidade e Tradição",
      description: "Espaço sagrado dedicado aos ensinamentos do Mestre Irineu e da doutrina do Daime. Hinários, acervo histórico e musicalidade sagrada.",
      url: "daime.ripiiaia.org",
      route: "/daime",
      icon: Heart,
      color: "bg-amber-500",
      hoverColor: "hover:bg-amber-600",
      features: ["Hinários Sagrados", "Acervo Histórico", "Vídeos & Áudios", "Memória Viva"]
    },
    {
      title: "Rádio Ripiiaia",
      subtitle: "Música e Cultura Amazônica",
      description: "Rádio online com programação voltada à música espiritual, cultura amazônica e conteúdos autorais. Conectando corações através do som.",
      url: "radio.ripiiaia.org",
      route: "/radio",
      icon: Radio,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      features: ["Música Espiritual", "Cultura Amazônica", "Programação Autoral", "Transmissão 24h"]
    },
    {
      title: "Ripiiaia Serviços",
      subtitle: "Soluções Tecnológicas",
      description: "Braço comercial oferecendo serviços profissionais: hospedagem, domínios, criação de sites e suporte técnico especializado.",
      url: "ripiiaia.com.br",
      route: "/servicos",
      icon: Wrench,
      color: "bg-slate-600",
      hoverColor: "hover:bg-slate-700",
      features: ["Hospedagem Web", "Registro de Domínios", "Desenvolvimento", "Suporte Técnico"]
    }
  ];

  const values = [
    {
      icon: Leaf,
      title: "Saberes Ancestrais",
      description: "Respeitamos tradições e abrimos diálogos contemporâneos"
    },
    {
      icon: Users,
      title: "Diversidade & Inclusão",
      description: "Acolhemos todas as expressões culturais e espirituais"
    },
    {
      icon: Globe,
      title: "Ação Coletiva",
      description: "Unindo tecnologia, arte e espiritualidade"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                  Ripiiaia
                </h1>
                <p className="text-sm text-gray-600">Plataforma Multifacetada</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#sobre" className="text-gray-700 hover:text-emerald-600 transition-colors">Sobre</a>
              <a href="#espacos" className="text-gray-700 hover:text-emerald-600 transition-colors">Espaços</a>
              <a href="#valores" className="text-gray-700 hover:text-emerald-600 transition-colors">Valores</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Nossos Espaços */}
      <section id="espacos" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-gray-800">Nossos Espaços</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada subdomínio com sua especialidade, unidos pela missão de transformação social e espiritual
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {subdomains.map((subdomain, index) => {
              const IconComponent = subdomain.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 ${subdomain.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {subdomain.url}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-gray-800">{subdomain.title}</CardTitle>
                    <CardDescription className="text-emerald-600 font-medium">
                      {subdomain.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      {subdomain.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {subdomain.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      className={`w-full mt-4 ${subdomain.color} ${subdomain.hoverColor} text-white`}
                      asChild
                    >
                      <Link to={subdomain.route}>
                        Acessar {subdomain.title}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section id="valores" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-gray-800">Nosso Propósito</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A Ripiiaia é um mosaico existencial que entrelaça saberes, culturas e tecnologias para um mundo mais conectado
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Por Que Dois Perfis */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 to-green-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-bold mb-6">Por Que Dois Perfis?</h3>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Respeitamos a pluralidade e garantimos que nossos projetos sociais e profissionais sejam acessíveis a todos, 
            independentemente de crenças ou orientações.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <Building className="w-8 h-8 mb-2" />
                <CardTitle>Portal Profissional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">
                  No portal.ripiiaia.org, atuamos como profissionais técnicos e ONG, 
                  mantendo neutralidade religiosa para ampliar diálogos e parcerias.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <Heart className="w-8 h-8 mb-2" />
                <CardTitle>Universo Espiritual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">
                  No daime.ripiiaia.org, celebramos nossa identidade espiritual, 
                  honrando tradições e compartilhando ensinamentos sagrados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Ripiiaia</span>
              </div>
              <p className="text-gray-400 text-sm">
                Plataforma multifacetada unindo espiritualidade, cultura e inovação social.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Nossos Espaços</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/portal" className="hover:text-white transition-colors">Portal Ripiiaia</Link></li>
                <li><Link to="/daime" className="hover:text-white transition-colors">Universo Daime</Link></li>
                <li><Link to="/radio" className="hover:text-white transition-colors">Rádio Ripiiaia</Link></li>
                <li><Link to="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Sobre</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#valores" className="hover:text-white transition-colors">Nossa Missão</a></li>
                <li><Link to="/portal" className="hover:text-white transition-colors">Equipe</Link></li>
                <li><Link to="/portal" className="hover:text-white transition-colors">Transparência</Link></li>
                <li><Link to="/portal" className="hover:text-white transition-colors">Parcerias</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>🌿 ripiiaia.org</li>
                <li>📧 contato@ripiiaia.org</li>
                <li>🌍 Acre, Brasil</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Ripiiaia. Todos os direitos reservados. Feito com 💚 na Floresta Amazônica.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
