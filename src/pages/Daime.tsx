import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Download, Heart, Music, Star, Video } from "lucide-react";
import { Link } from "react-router-dom";

const Daime = () => {
  const hinarios = [
    {
      title: "O Cruzeiro",
      author: "Mestre Irineu",
      songs: 132,
      type: "Tradicional"
    },
    {
      title: "Lua Branca",
      author: "Padrinho Alfredo",
      songs: 24,
      type: "Alto Santo"
    },
    {
      title: "Nova Jerusalém",
      author: "Padrinho Sebastião",
      songs: 90,
      type: "CEFLURIS"
    }
  ];

  const multimedia = [
    {
      title: "Documentário: Juramidam",
      type: "Vídeo",
      duration: "45 min",
      description: "A história do Mestre Irineu"
    },
    {
      title: "Hinários Gravados",
      type: "Áudio",
      duration: "6 horas",
      description: "Coletânea de trabalhos tradicionais"
    },
    {
      title: "Fotografias Históricas",
      type: "Galeria",
      duration: "100+ fotos",
      description: "Acervo visual da doutrina"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-amber-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-2 text-amber-600 hover:text-amber-700">
                <ArrowLeft className="w-5 h-5" />
                <span>Voltar</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Heart className="w-8 h-8 text-amber-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-800">Universo Daime</h1>
                <p className="text-sm text-gray-600">Espiritualidade e Tradição</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex flex-col items-center gap-2 mb-6">
            <span className="text-2xl text-amber-700"><span role="img" aria-label="estrela">🌟</span></span>
            <span className="text-base font-serif text-amber-700">Sagrado e Eterno</span>
          </div>
          <a
            href="https://akillez01.github.io/Ripi-Iaia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 mb-8 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-base font-semibold rounded-lg shadow transition-colors"
          >
            Clique para entrar no universo Daime
          </a>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Hinários, Tradição e Ensinamentos
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Espaço sagrado dedicado aos ensinamentos do Mestre Irineu e da doutrina do Daime. 
            Aqui preservamos e compartilhamos a musicalidade sagrada, hinários, acervo histórico 
            e a memória viva da floresta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Music className="mr-2 w-5 h-5" />
              Explorar Hinários
            </Button>
            <Button size="lg" variant="outline" className="border-amber-600 text-amber-600">
              <BookOpen className="mr-2 w-5 h-5" />
              Acervo Histórico
            </Button>
          </div>
        </div>
      </section>

      {/* Hinários */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Hinários Sagrados</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {hinarios.map((hinario, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg group-hover:text-amber-600 transition-colors">
                      {hinario.title}
                    </CardTitle>
                    <Badge variant="secondary">{hinario.type}</Badge>
                  </div>
                  <CardDescription className="text-amber-700 font-medium">
                    {hinario.author}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <Music className="w-4 h-4 mr-2" />
                      {hinario.songs} hinos
                    </div>
                    <Button size="sm" variant="outline" className="border-amber-600 text-amber-600">
                      <Download className="w-4 h-4 mr-2" />
                      Baixar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Multimídia */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Acervo Multimídia</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {multimedia.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    {item.type === "Vídeo" && <Video className="w-6 h-6 text-amber-600" />}
                    {item.type === "Áudio" && <Music className="w-6 h-6 text-amber-600" />}
                    {item.type === "Galeria" && <BookOpen className="w-6 h-6 text-amber-600" />}
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                  <Badge variant="outline" className="w-fit">{item.duration}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Acessar Conteúdo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tradições */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h3 className="text-3xl font-bold mb-6">Tradições Respeitadas</h3>
          <p className="text-xl mb-8 opacity-90">
            Honramos todas as expressões da doutrina: Alto Santo, Barquinha, linha do Saturnino e demais ramificações, 
            preservando a diversidade e riqueza dos ensinamentos da floresta.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {["Alto Santo", "Barquinha", "CEFLURIS", "Outras Linhas"].map((tradicao, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8" />
                </div>
                <h4 className="font-semibold">{tradicao}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Daime;
