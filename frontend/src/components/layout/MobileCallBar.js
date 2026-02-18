import { Phone } from 'lucide-react';

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-blue md:hidden shadow-lg">
      <a
        href="tel:0140883030"
        className="flex items-center justify-center space-x-3 text-white font-heading font-bold text-lg py-4"
        data-testid="mobile-call-bar"
      >
        <div className="relative">
          <Phone className="w-5 h-5" />
        </div>
        <span>01 40 88 30 30</span>
        <span className="text-sm font-normal opacity-90">- Appeler</span>
      </a>
    </div>
  );
}
