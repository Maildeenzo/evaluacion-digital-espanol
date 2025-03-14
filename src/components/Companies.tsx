
import { useEffect, useRef } from 'react';

// Estos son placeholders. En una implementación real, importarías las imágenes de los logos reales
const companyLogos = [
  { name: 'Microsoft', alt: 'Logo de Microsoft' },
  { name: 'Google', alt: 'Logo de Google' },
  { name: 'Amazon', alt: 'Logo de Amazon' },
  { name: 'IBM', alt: 'Logo de IBM' },
  { name: 'Oracle', alt: 'Logo de Oracle' },
  { name: 'Samsung', alt: 'Logo de Samsung' },
  { name: 'Sony', alt: 'Logo de Sony' },
  { name: 'Telefónica', alt: 'Logo de Telefónica' },
  { name: 'Banco Santander', alt: 'Logo de Banco Santander' },
  { name: 'BBVA', alt: 'Logo de BBVA' },
  { name: 'Falabella', alt: 'Logo de Falabella' },
  { name: 'Latam', alt: 'Logo de Latam' },
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
    <section id="clientes" className="py-16" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 reveal-animation">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-primary uppercase rounded-full bg-primary/10">
            Clientes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Han confiado en nosotros
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-10">
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
        
        {/* Primera fila de logos, moviéndose de derecha a izquierda */}
        <div className="flex logo-slider">
          {allLogos.slice(0, allLogos.length / 2).map((company, index) => (
            <div 
              key={index} 
              className="mx-8 flex items-center justify-center h-16 min-w-[160px]"
            >
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-full w-full">
                {/* En una implementación real, usarías imágenes reales */}
                <div className="text-gray-400 font-semibold">{company.name}</div>
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
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-full w-full">
                {/* En una implementación real, usarías imágenes reales */}
                <div className="text-gray-400 font-semibold">{company.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
