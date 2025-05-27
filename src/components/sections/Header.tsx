
import { Leaf } from "lucide-react";

const Header = () => {
  return (
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
  );
};

export default Header;
