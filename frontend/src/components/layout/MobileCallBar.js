import { Phone, Zap } from 'lucide-react';

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-tech-gold to-tech-orange md:hidden shadow-lg shadow-tech-gold/30">
      <a
        href="tel:0140883030"
        className="flex items-center justify-center space-x-3 text-tech-dark font-heading font-bold text-lg py-4"
        data-testid="mobile-call-bar"
      >
        <Phone className="w-5 h-5" />
        <span>01 40 88 30 30</span>
        <span className="text-sm font-normal opacity-80">- Appeler</span>
      </a>
    </div>
  );
}
