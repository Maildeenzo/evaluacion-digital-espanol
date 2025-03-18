
import { Check, FileText, Brain, Briefcase, Target, Users, Rocket, Zap, Clock, Calendar, Send } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="servicios" className="section-padding" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-primary uppercase rounded-full bg-primary/10">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Evaluaciones psicolaborales a la medida de tus necesidades
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos soluciones personalizadas para evaluar a tus candidatos y colaboradores, adaptándonos a los requerimientos específicos de tu empresa.
          </p>
        </div>

        {/* Planes de servicio que coinciden con los precios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Plan Básico */}
          <div 
            className="reveal-animation bg-white rounded-2xl p-8 border border-border shadow-sm transition-all duration-300"
            ref={(el) => (elementsRef.current[0] = el)}
            style={{ animationDelay: '0ms' }}
          >
            <h3 className="text-2xl font-bold mb-2">Plan Básico</h3>
            <p className="text-muted-foreground mb-6">
              Ideal para pequeñas empresas y contrataciones puntuales
            </p>
            <div className="mb-6">
              <span className="text-3xl font-bold">
                $55.000
              </span>
              <span className="text-muted-foreground"> CLP + IVA</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>Evaluación de competencias básicas</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>Informe estandarizado</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>Test psicométrico simple</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>Entrega en 3 días hábiles</span>
              </li>
            </ul>
            <a
              href="#contacto"
              className="w-full flex justify-center items-center h-12 font-medium rounded-lg transition-colors bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Solicitar evaluación básica
            </a>
          </div>

          {/* Plan Premium */}
          <div 
            className="reveal-animation bg-white rounded-2xl p-8 border border-primary shadow-lg md:-translate-y-4 transition-all duration-300"
            ref={(el) => (elementsRef.current[1] = el)}
            style={{ animationDelay: '100ms' }}
          >
            <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
              Más popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Plan Premium</h3>
            <p className="text-muted-foreground mb-6">
              Evaluaciones psicolaborales precisas y accionables
            </p>
            <div className="mb-6">
              <span className="text-3xl font-bold">
                $75.000
              </span>
              <span className="text-muted-foreground"> CLP + IVA</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>Resumen ejecutivo detallado</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>Evaluación de competencias conductuales</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>Análisis de inteligencia emocional</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>Evaluación de adaptabilidad y resiliencia</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>Evaluación de fit cultural</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>Entrega en 24 horas</span>
              </li>
            </ul>
            <a
              href="#contacto"
              className="w-full flex justify-center items-center h-12 font-medium rounded-lg transition-colors bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Solicitar evaluación premium
            </a>
          </div>

          {/* Plan AM-PM */}
          <div 
            className="reveal-animation bg-white rounded-2xl p-8 border border-border shadow-sm transition-all duration-300"
            ref={(el) => (elementsRef.current[2] = el)}
            style={{ animationDelay: '200ms' }}
          >
            <h3 className="text-2xl font-bold mb-2">Plan AM-PM</h3>
            <p className="text-muted-foreground mb-6">
              Para procesos urgentes con evaluación y resultados el mismo día
            </p>
            <div className="mb-6">
              <span className="text-3xl font-bold">
                $99.000
              </span>
              <span className="text-muted-foreground"> CLP + IVA</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>Disponible lunes y viernes</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>Evaluación en la mañana</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>Entrega de informe en la tarde</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>Incluye todas las características del plan Premium</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>Análisis en tiempo real</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>Resultados accionables inmediatos</span>
              </li>
            </ul>
            <a
              href="#contacto"
              className="w-full flex justify-center items-center h-12 font-medium rounded-lg transition-colors bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Solicitar evaluación AM-PM
            </a>
          </div>
        </div>

        {/* Descripción detallada del servicio */}
        <div 
          className="reveal-animation bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 shadow-sm mb-16"
          ref={(el) => (elementsRef.current[5] = el)}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-800">
            Evaluaciones Psicolaborales Precisas y Accionables <Rocket className="inline h-6 w-6 text-orange-500" />
          </h2>
          
          <p className="text-lg mb-8">
            Nuestro informe de <strong>evaluación psicodiagnóstica de competencias</strong> te proporciona un análisis detallado y fácil de interpretar, ayudándote a tomar decisiones de contratación con confianza.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-700">¿Qué incluye el informe?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">🔹</span>
                  <span><strong>Resumen Ejecutivo</strong> – Síntesis clara con los aspectos más relevantes del candidato.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">🔹</span>
                  <span><strong>Idoneidad para el Cargo</strong> – Evaluación del ajuste del candidato al perfil requerido.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">🔹</span>
                  <span><strong>Evaluación de Competencias</strong> – Análisis basado en metodologías psicodinámicas y pruebas aplicadas online mediante <strong>Google Forms</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">🔹</span>
                  <span><strong>Conclusión y Sugerencias</strong> – Recomendaciones prácticas para potenciar el desempeño del candidato.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-700">¿Qué medimos?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                  <span><strong>Competencias Conductuales</strong> – Liderazgo, trabajo en equipo y resolución de problemas.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                  <span><strong>Inteligencia Emocional (EQ)</strong> – Manejo del estrés, empatía y toma de decisiones.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                  <span><strong>Adaptabilidad y Resiliencia</strong> – Capacidad de enfrentar cambios y nuevos desafíos.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                  <span><strong>Fit Cultural</strong> – Alineación con la cultura y valores de tu empresa.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 mb-10">
            <h3 className="text-xl font-bold mb-4 text-blue-700 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-orange-500" />
              Opciones de Entrega
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start p-4 rounded-lg bg-blue-50 border border-blue-100">
                <Clock className="h-8 w-8 text-blue-600 mr-3 shrink-0" />
                <div>
                  <h4 className="font-bold">Plan Básico</h4>
                  <p>Informe entregado en <strong className="text-blue-700">3 días hábiles.</strong></p>
                </div>
              </div>
              <div className="flex items-start p-4 rounded-lg bg-indigo-50 border border-indigo-100">
                <Rocket className="h-8 w-8 text-indigo-600 mr-3 shrink-0" />
                <div>
                  <h4 className="font-bold">Plan Premium</h4>
                  <p>Informe entregado en <strong className="text-indigo-700">24 horas.</strong></p>
                </div>
              </div>
              <div className="flex items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                <Zap className="h-8 w-8 text-orange-500 mr-3 shrink-0" />
                <div>
                  <h4 className="font-bold">Plan AM-PM</h4>
                  <p>Disponible <strong className="text-orange-600">lunes y viernes</strong>. Evaluamos en la mañana y entregamos en la tarde.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-blue-700">¿Por qué elegirnos?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-100 flex items-center">
                <Clock className="h-6 w-6 text-primary mr-2" />
                <span><strong>Evaluaciones online rápidas y precisas</strong> 📊</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-100 flex items-center">
                <Target className="h-6 w-6 text-primary mr-2" />
                <span><strong>Análisis en tiempo real y resultados accionables</strong> 🎯</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-100 flex items-center">
                <FileText className="h-6 w-6 text-primary mr-2" />
                <span><strong>Informes estructurados para facilitar la toma de decisiones</strong> ✅</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg font-medium mb-4">
              <Send className="inline h-5 w-5 mr-2 text-primary" />
              <strong>Optimiza tu proceso de selección ahora. Contáctanos para una prueba gratuita.</strong>
            </p>
            <a 
              href="#contacto" 
              className="inline-block px-6 py-3 bg-orange-500 text-white rounded-full font-medium shadow-md hover:bg-orange-600 transition-colors"
            >
              Solicitar demostración
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
