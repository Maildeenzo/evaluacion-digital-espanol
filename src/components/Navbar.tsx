
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-effect py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-display font-semibold">
            EvaluaPro
          </a>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#servicios" className="text-sm font-medium hover:text-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#precios" className="text-sm font-medium hover:text-primary transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#clientes" className="text-sm font-medium hover:text-primary transition-colors">
                  Clientes
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="hidden md:block">
            <a href="#contacto" className="btn-primary">
              Solicitar Información
            </a>
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden focus:outline-none"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-50 bg-background bg-opacity-95 backdrop-blur-sm transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full pt-20 px-8">
          <nav className="flex-1">
            <ul className="space-y-6">
              <li>
                <a 
                  href="#servicios" 
                  className="text-lg font-medium block py-2 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a 
                  href="#precios" 
                  className="text-lg font-medium block py-2 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Precios
                </a>
              </li>
              <li>
                <a 
                  href="#clientes" 
                  className="text-lg font-medium block py-2 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Clientes
                </a>
              </li>
              <li>
                <a 
                  href="#contacto" 
                  className="text-lg font-medium block py-2 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
          <div className="py-6">
            <a 
              href="#contacto" 
              className="btn-primary w-full"
              onClick={() => setIsOpen(false)}
            >
              Solicitar Información
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
