import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-20 md:py-24 bg-tech-blue" data-testid="cta-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-outfit font-extrabold text-3xl md:text-5xl text-white tracking-tight mb-6">
          UN PROBLÈME INFORMATIQUE ?
        </h2>
        <p className="font-ibm text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Ne perdez plus de temps. Appelez-nous maintenant et un technicien 
          intervient chez vous en moins de 30 minutes.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:0140883030"
            className="inline-flex items-center justify-center space-x-3 bg-alert-orange text-white px-10 py-5 rounded font-outfit font-bold text-xl btn-primary"
            data-testid="cta-call-button"
          >
            <Phone className="w-6 h-6" />
            <span>01 40 88 30 30</span>
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-white text-tech-blue px-10 py-5 rounded font-outfit font-semibold text-xl btn-primary"
            data-testid="cta-contact-button"
          >
            Demander un devis
          </Link>
        </div>

        <p className="mt-8 font-ibm text-sm text-white/70">
          Diagnostic téléphonique gratuit • Intervention 7j/7 • Obligation de résultat
        </p>
      </div>
    </section>
  );
}
