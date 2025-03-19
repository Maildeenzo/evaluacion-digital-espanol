
import { useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8" ref={footerRef}>
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 reveal-animation">
          <div>
            <h3 className="text-xl font-display font-semibold mb-6">EvaluaPro</h3>
            <p className="text-primary-foreground/80 mb-6">
              Servicios profesionales de evaluación psicolaboral para la selección de personal y desarrollo organizacional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Planes</h3>
            <ul className="space-y-3">
              <li>
                <a href="#precios" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Plan Básico
                </a>
              </li>
              <li>
                <a href="#precios" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Plan Premium
                </a>
              </li>
              <li>
                <a href="#precios" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Plan AM-PM
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#precios" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#clientes" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Clientes
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">enzobrugueras@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">+56951982970</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60 text-sm reveal-animation">
          <p>© {new Date().getFullYear()} EvaluaPro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
