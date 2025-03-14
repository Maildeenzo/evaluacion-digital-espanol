
import { Check, FileText, Brain, Briefcase, Target, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';

const services = [
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: 'Evaluación Completa',
    description: 'Análisis exhaustivo de competencias, personalidad y aptitudes para diversos cargos y niveles jerárquicos.',
    features: [
      'Informes detallados',
      'Evaluación de competencias técnicas y blandas',
      'Análisis de personalidad',
      'Recomendaciones específicas',
    ],
  },
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: 'Test Psicométricos',
    description: 'Aplicación de pruebas validadas internacionalmente para medir habilidades cognitivas y rasgos de personalidad.',
    features: [
      'Pruebas estandarizadas',
      'Medición de aptitudes cognitivas',
      'Evaluación de rasgos de personalidad',
      'Análisis comparativo con perfiles ideales',
    ],
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Assessment Center',
    description: 'Metodología de evaluación grupal que permite observar comportamientos en situaciones simuladas de trabajo.',
    features: [
      'Dinámicas grupales',
      'Casos de estudio',
      'Ejercicios de simulación',
      'Evaluación objetiva por competencias',
    ],
  },
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: 'Evaluación Ejecutiva',
    description: 'Proceso especializado para la evaluación de posiciones directivas y gerenciales.',
    features: [
      'Evaluación de liderazgo',
      'Análisis de potencial directivo',
      'Evaluación de capacidad estratégica',
      'Entrevistas en profundidad',
    ],
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Clima Organizacional',
    description: 'Evaluación del ambiente laboral y la satisfacción de los colaboradores en la organización.',
    features: [
      'Diagnóstico de clima laboral',
      'Medición de satisfacción',
      'Análisis de relaciones interpersonales',
      'Recomendaciones de mejora',
    ],
  },
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (elementsRef.current[index] = el)}
              className="reveal-animation bg-white rounded-2xl shadow-sm p-8 border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
