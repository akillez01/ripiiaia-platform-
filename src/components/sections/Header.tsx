
import { Leaf } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 soft-shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">
                Ripiiaia
              </h1>
              <p className="text-sm text-muted-foreground">Plataforma Multifacetada</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6">
              <a href="#sobre" className="text-foreground/80 hover:text-emerald-600 transition-colors duration-200 font-medium">Sobre</a>
              <a href="#espacos" className="text-foreground/80 hover:text-emerald-600 transition-colors duration-200 font-medium">Espaços</a>
              <a href="#valores" className="text-foreground/80 hover:text-emerald-600 transition-colors duration-200 font-medium">Valores</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
