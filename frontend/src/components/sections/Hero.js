import { Phone, Clock, CheckCircle, Monitor, Apple } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero({ location = null }) {
  const isLocationPage = !!location;
  
  const title = isLocationPage 
    ? location.h1 
    : "Votre PC vous fait des misères ?";
  
  const subtitle = isLocationPage
    ? `Intervention rapide à ${location.name} et ses environs pour PC et Mac`
    : "Votre machine ne répond plus ? Alors plus une minute à perdre !";

  return (
    <section className="relative bg-gradient-to-br from-brand-sky via-white to-blue-50 overflow-hidden" data-testid="hero-section">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 transform skew-x-12 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 md:py-20 lg:py-24">
          {/* Left Content */}
          <div className="relative z-10">
            {isLocationPage && (
              <div className="inline-flex items-center space-x-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse"></span>
                <span className="font-body text-sm font-medium">Zone : {location.name} ({location.postal_code})</span>
              </div>
            )}
            
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-brand-navy leading-tight mb-6" data-testid="hero-title">
              {title}
            </h1>
            
            <p className="font-body text-lg md:text-xl text-gray-600 mb-6 leading-relaxed max-w-xl">
              {subtitle}
            </p>

            {/* PC & Mac badge */}
            <div className="flex items-center space-x-4 mb-8 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center space-x-2">
                <Monitor className="w-6 h-6 text-brand-blue" />
                <span className="font-body font-semibold text-gray-700">PC</span>
              </div>
              <span className="text-gray-300">|</span>
              <div className="flex items-center space-x-2">
                <Apple className="w-6 h-6 text-gray-700" />
                <span className="font-body font-semibold text-gray-700">Mac</span>
              </div>
              <span className="text-gray-300">|</span>
              <span className="font-body text-sm text-gray-500">Fixes & Portables</span>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                <Clock className="w-5 h-5 text-brand-blue" />
                <span className="font-body text-sm text-gray-700">Intervention &lt; 30 min</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-body text-sm text-gray-700">7j/7</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle className="w-5 h-5 text-brand-blue" />
                <span className="font-body text-sm text-gray-700">Depuis 2002</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0140883030"
                className="inline-flex items-center justify-center space-x-3 bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
                data-testid="hero-call-button"
              >
                <Phone className="w-5 h-5" />
                <span>01 40 88 30 30</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg transition-all"
                data-testid="hero-contact-button"
              >
                Demander un devis gratuit
              </Link>
            </div>

            {/* Address */}
            <p className="mt-6 font-body text-sm text-gray-500">
              Siège : 235 Bld Pereire, 75017 Paris
            </p>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-blue/10 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80&w=800"
                alt="Technicien réparant un ordinateur PC et Mac"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                loading="eager"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-brand-navy">+10 000</p>
                    <p className="font-body text-sm text-gray-500">clients satisfaits</p>
                  </div>
                </div>
              </div>

              {/* Mac badge */}
              <div className="absolute -top-4 -right-4 bg-brand-blue text-white rounded-xl shadow-xl px-4 py-2">
                <div className="flex items-center space-x-2">
                  <Apple className="w-5 h-5" />
                  <span className="font-heading font-semibold text-sm">PC & Mac</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
