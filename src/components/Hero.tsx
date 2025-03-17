
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 z-0" />
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            ref={(el) => (elementsRef.current[0] = el)} 
            className="reveal-animation"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-primary uppercase rounded-full bg-primary/10">
              Evaluaciones Psicolaborales Profesionales
            </span>
          </div>
          
          <h1 
            ref={(el) => (elementsRef.current[1] = el)} 
            className="reveal-animation text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Contrata mejor, más rápido y sin gastar de más
          </h1>
          
          <p 
            ref={(el) => (elementsRef.current[2] = el)} 
            className="reveal-animation text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
          >
            Porque contratar bien es vital. Te ofrecemos la solución inteligente y accesible para PYMES que buscan talento sin complicaciones
          </p>
          
          <div 
            ref={(el) => (elementsRef.current[3] = el)} 
            className="reveal-animation flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a href="#contacto" className="btn-primary">
              Solicitar evaluación
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#servicios" className="btn-secondary">
              Conocer nuestros servicios
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
