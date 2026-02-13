import { Phone, Monitor, Apple } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-16 md:py-20 bg-brand-blue" data-testid="cta-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <Monitor className="w-8 h-8 text-white/80" />
          <span className="text-white/60">+</span>
          <Apple className="w-8 h-8 text-white/80" />
        </div>
        
        <h2 className="font-heading font-bold text-2xl md:text-4xl text-white mb-4">
          Un problème avec votre PC ou Mac ?
        </h2>
        <p className="font-body text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Ne perdez plus de temps. Appelez-nous maintenant et un technicien 
          intervient chez vous en moins de 30 minutes.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:0140883030"
            className="inline-flex items-center justify-center space-x-3 bg-white text-brand-blue px-10 py-4 rounded-lg font-heading font-bold text-xl hover:bg-gray-100 transition-all shadow-lg"
            data-testid="cta-call-button"
          >
            <Phone className="w-6 h-6" />
            <span>01 40 88 30 30</span>
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-brand-blue-dark text-white px-10 py-4 rounded-lg font-heading font-semibold text-xl hover:bg-brand-navy transition-all border border-white/20"
            data-testid="cta-contact-button"
          >
            Demander un devis
          </Link>
        </div>

        <p className="mt-6 font-body text-sm text-white/70">
          Diagnostic téléphonique gratuit • Intervention 7j/7 • Obligation de résultat
        </p>
      </div>
    </section>
  );
}
