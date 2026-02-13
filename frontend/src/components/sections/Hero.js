import { Phone, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero({ location = null }) {
  const isLocationPage = !!location;
  
  const title = isLocationPage 
    ? location.h1 
    : "URGENCE PC ?";
  
  const subtitle = isLocationPage
    ? `Intervention rapide à ${location.name} et ses environs`
    : "Dépannage informatique à domicile depuis 2002";

  return (
    <section className="relative bg-clinical-white overflow-hidden" data-testid="hero-section">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-tech-blue transform skew-x-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 md:py-24 lg:py-32">
          {/* Left Content */}
          <div className="relative z-10">
            {isLocationPage && (
              <div className="inline-flex items-center space-x-2 bg-tech-blue/10 text-tech-blue px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-tech-blue rounded-full animate-pulse"></span>
                <span className="font-ibm text-sm font-medium">Zone : {location.name} ({location.postal_code})</span>
              </div>
            )}
            
            <h1 className="font-outfit font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tight text-deep-navy leading-none mb-6" data-testid="hero-title">
              {title}
            </h1>
            
            <p className="font-ibm text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              {subtitle}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded shadow-sm">
                <Clock className="w-5 h-5 text-alert-orange" />
                <span className="font-ibm text-sm text-gray-700">Intervention &lt; 30 min</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-ibm text-sm text-gray-700">7j/7</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded shadow-sm">
                <CheckCircle className="w-5 h-5 text-tech-blue" />
                <span className="font-ibm text-sm text-gray-700">+20 ans d'expérience</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0140883030"
                className="inline-flex items-center justify-center space-x-3 bg-alert-orange text-white px-8 py-4 rounded font-outfit font-bold text-lg btn-primary pulse-phone"
                data-testid="hero-call-button"
              >
                <Phone className="w-6 h-6" />
                <span>01 40 88 30 30</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-deep-navy text-white px-8 py-4 rounded font-outfit font-semibold text-lg btn-primary"
                data-testid="hero-contact-button"
              >
                Demander un devis gratuit
              </Link>
            </div>

            {/* Address */}
            <p className="mt-8 font-ibm text-sm text-gray-500">
              Siège : 235 Bld Pereire, 75017 Paris
            </p>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-tech-blue/10 rounded-lg transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1768633647910-7e6fb53e5b0f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHJlcGFpciUyMHRlY2huaWNpYW4lMjBzb2xkZXJpbmclMjBoYXJkd2FyZXxlbnwwfHx8fDE3NzEwMTUxNjV8MA&ixlib=rb-4.1.0&q=85"
                alt="Technicien réparant un ordinateur"
                className="relative rounded-lg shadow-2xl w-full h-auto object-cover"
                loading="eager"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 float-animation">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-outfit font-bold text-deep-navy">+10 000</p>
                    <p className="font-ibm text-sm text-gray-500">clients satisfaits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
