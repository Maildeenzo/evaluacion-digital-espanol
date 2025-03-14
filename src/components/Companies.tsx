
import { useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";

// Lista de empresas con sus logos
const companyLogos = [
  { name: 'Concha y Toro', alt: 'Logo de Concha y Toro' },
  { name: 'Movistar', alt: 'Logo de Movistar' },
  { name: 'DUOC', alt: 'Logo de DUOC' },
  { name: 'Oncovida', alt: 'Logo de Oncovida' },
  { name: 'MSC', alt: 'Logo de MSC' },
  { name: 'Sitrans', alt: 'Logo de Sitrans' },
];

// Duplicamos los logos para crear un efecto infinito
const allLogos = [...companyLogos, ...companyLogos];

const Companies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="clientes" className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10 reveal-animation">
          <Badge className="mb-4 px-4 py-1.5 text-xs font-semibold bg-blue-600 text-white">
            Clientes Satisfechos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Empresas que confían en nosotros
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Nos respaldan organizaciones líderes en diversos sectores que valoran nuestro servicio económico y de calidad
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-8">
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-blue-50 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-blue-50 to-transparent z-10"></div>
        
        {/* Primera fila de logos, moviéndose de derecha a izquierda */}
        <div className="flex logo-slider">
          {allLogos.slice(0, allLogos.length / 2).map((company, index) => (
            <div 
              key={index} 
              className="mx-8 flex items-center justify-center h-16 min-w-[160px]"
            >
              <div className="bg-white p-4 rounded-lg shadow-md border border-blue-100 flex items-center justify-center h-full w-full transform transition-transform hover:scale-105">
                <div className="text-blue-600 font-semibold">{company.name}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Segunda fila de logos, moviéndose de izquierda a derecha */}
        <div className="flex logo-slider-reverse mt-8">
          {allLogos.slice(allLogos.length / 2).map((company, index) => (
            <div 
              key={index} 
              className="mx-8 flex items-center justify-center h-16 min-w-[160px]"
            >
              <div className="bg-white p-4 rounded-lg shadow-md border border-blue-100 flex items-center justify-center h-full w-full transform transition-transform hover:scale-105">
                <div className="text-blue-600 font-semibold">{company.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container px-4 mx-auto text-center mt-8">
        <div className="inline-block px-6 py-3 bg-orange-500 text-white rounded-full font-medium text-base shadow-lg transform hover:scale-105 transition-transform">
          ¡Servicio de alta calidad a precio inmejorable!
        </div>
      </div>
    </section>
  );
};

export default Companies;
