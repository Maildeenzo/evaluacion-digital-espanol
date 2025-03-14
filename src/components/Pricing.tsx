
import { Check, HelpCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Básico',
    description: 'Ideal para pequeñas empresas y contrataciones puntuales',
    price: '45.000',
    features: [
      'Evaluación de competencias básicas',
      'Informe estandarizado',
      'Test psicométrico simple',
      'Entrega en 3 días hábiles',
      'Sin entrevista personal',
    ],
    cta: 'Elegir plan Básico',
    popular: false,
  },
  {
    name: 'Premium',
    description: 'Solución completa para procesos de selección rigurosos',
    price: '85.000',
    features: [
      'Evaluación completa de competencias',
      'Informe detallado con recomendaciones',
      'Batería completa de test psicométricos',
      'Entrevista por videoconferencia',
      'Entrega en 2 días hábiles',
      'Seguimiento post-contratación',
    ],
    cta: 'Elegir plan Premium',
    popular: true,
  },
  {
    name: 'Empresarial',
    description: 'Para procesos de selección masivos y evaluaciones ejecutivas',
    price: 'Personalizado',
    features: [
      'Evaluación adaptada a necesidades específicas',
      'Informes personalizados por cargo',
      'Entrevistas presenciales o virtuales',
      'Assessment Center para equipos',
      'Asesoría continua en el proceso',
      'Seguimiento mensual',
    ],
    cta: 'Solicitar cotización',
    popular: false,
  },
];

const paymentMethods = [
  'Transferencia bancaria',
  'Tarjeta de crédito/débito',
  'WebPay',
  'Mercado Pago',
  'Facturación a 30 días (empresas)',
];

const Pricing = () => {
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
    <section id="precios" className="section-padding relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50 z-0" />
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-primary uppercase rounded-full bg-primary/10">
            Precios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Planes adaptados a tus necesidades
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos diferentes opciones de evaluación según el nivel de profundidad y complejidad que requieras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => (elementsRef.current[index] = el)}
              className={cn(
                "reveal-animation bg-white rounded-2xl p-8 border transition-all duration-300",
                plan.popular
                  ? "border-primary shadow-lg md:-translate-y-4"
                  : "border-border shadow-sm"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Más popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-3xl font-bold">
                  {plan.price === 'Personalizado' ? '' : '$'}
                  {plan.price}
                </span>
                {plan.price !== 'Personalizado' && (
                  <span className="text-muted-foreground"> CLP + IVA</span>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={cn(
                  "w-full flex justify-center items-center h-12 font-medium rounded-lg transition-colors",
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                )}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div 
          ref={(el) => (elementsRef.current[3] = el)}
          className="reveal-animation max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 border border-border"
        >
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Formas de pago</h3>
              <p className="text-muted-foreground mb-4">
                Ofrecemos múltiples opciones de pago para facilitar la contratación de nuestros servicios según las preferencias de tu empresa.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {paymentMethods.map((method, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
