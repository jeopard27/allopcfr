import { Phone, Monitor, Apple, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-20 md:py-24 bg-tech-dark relative overflow-hidden" data-testid="cta-section">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-tech-blue via-tech-cyan/20 to-tech-blue"></div>
      <div className="absolute inset-0 circuit-bg opacity-30"></div>
      
      {/* Golden borders */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-tech-gold to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-tech-gold to-transparent"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <Monitor className="w-8 h-8 text-tech-cyan" />
          <Zap className="w-6 h-6 text-tech-gold" />
          <Apple className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="font-heading font-black text-3xl md:text-5xl text-white mb-6">
          Un problème avec votre <span className="text-tech-cyan">PC</span> ou <span className="text-white">Mac</span> ?
        </h2>
        <p className="font-body text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Ne perdez plus de temps. Appelez-nous maintenant et un technicien 
          intervient chez vous en moins de 30 minutes.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:0140883030"
            className="btn-tech inline-flex items-center justify-center space-x-3 text-xl px-10 py-5"
            data-testid="cta-call-button"
          >
            <Phone className="w-6 h-6" />
            <span>01 40 88 30 30</span>
          </a>
        </div>

        <p className="mt-8 font-body text-sm text-gray-500">
          Diagnostic gratuit • Intervention 7j/7 • Obligation de résultat
        </p>
      </div>
    </section>
  );
}
