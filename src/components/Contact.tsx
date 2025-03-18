
import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
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

  const handleWhatsAppClick = () => {
    // Número de WhatsApp de la empresa (ejemplo)
    const phoneNumber = "+56951982970";
    // Mensaje predeterminado
    const message = "Hola, me gustaría obtener más información sobre los servicios de EvaluaPro.";
    // URL de WhatsApp con el número y mensaje
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contacto" className="section-padding bg-secondary" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div 
              ref={(el) => (elementsRef.current[0] = el)}
              className="reveal-animation"
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-primary uppercase rounded-full bg-primary/10">
                Contacto
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Listo para mejorar tu proceso de selección?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contáctanos ahora y nos pondremos en contacto contigo para discutir cómo podemos ayudarte con tus necesidades específicas.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">contacto@evalua-pro.cl</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">+56 2 2123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Dirección</h3>
                    <p className="text-muted-foreground">Av. Providencia 1234, Oficina 567, Providencia, Santiago</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              ref={(el) => (elementsRef.current[1] = el)}
              className="reveal-animation"
            >
              {/* Botón de WhatsApp con más prominencia */}
              <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
                <h3 className="text-2xl font-bold mb-6">Contacto directo</h3>
                <p className="text-muted-foreground mb-8">
                  La forma más rápida y económica de ponerte en contacto con nosotros. Respuesta garantizada en menos de 24 horas.
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium flex items-center justify-center gap-2 py-8 text-lg"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>Contáctanos por WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
