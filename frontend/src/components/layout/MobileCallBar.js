import { Phone } from 'lucide-react';

export default function MobileCallBar() {
  return (
    <div className="mobile-call-bar md:hidden">
      <a
        href="tel:0140883030"
        className="flex items-center space-x-3 text-white font-outfit font-bold text-lg"
        data-testid="mobile-call-bar"
      >
        <div className="relative">
          <Phone className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse-ring"></span>
        </div>
        <span>01 40 88 30 30</span>
        <span className="text-sm font-normal opacity-90">- Appeler</span>
      </a>
    </div>
  );
}
