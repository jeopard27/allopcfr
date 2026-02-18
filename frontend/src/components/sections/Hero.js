import { Phone, Clock, CheckCircle, Monitor, Apple } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Animated PC Component
function AnimatedPC() {
  const [stage, setStage] = useState(0); // 0: broken/sad, 1: repairing, 2: fixed/happy
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-64 h-64 mx-auto">
      {/* PC Screen */}
      <div className={`absolute inset-0 transition-all duration-700 ${
        stage === 0 ? 'animate-shake' : stage === 1 ? 'animate-pulse' : 'animate-bounce-slow'
      }`}>
        {/* Monitor */}
        <div className={`relative w-48 h-36 mx-auto rounded-lg border-4 transition-all duration-500 ${
          stage === 0 
            ? 'border-gray-400 bg-gray-800' 
            : stage === 1 
              ? 'border-yellow-400 bg-yellow-900' 
              : 'border-green-400 bg-gradient-to-br from-blue-500 to-cyan-400'
        }`}>
          {/* Screen content */}
          <div className="absolute inset-2 rounded flex items-center justify-center overflow-hidden">
            {stage === 0 && (
              <div className="text-center animate-fade-in">
                {/* Sad face */}
                <div className="text-6xl mb-1">😢</div>
                <div className="text-red-400 text-xs font-bold animate-blink">ERREUR</div>
                {/* Error lines */}
                <div className="absolute inset-0 opacity-30">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-1 bg-red-500 my-2 animate-glitch" style={{ width: `${Math.random() * 100}%` }}></div>
                  ))}
                </div>
              </div>
            )}
            {stage === 1 && (
              <div className="text-center animate-fade-in">
                {/* Repairing */}
                <div className="text-5xl mb-1 animate-spin-slow">🔧</div>
                <div className="text-yellow-300 text-xs font-bold">RÉPARATION...</div>
                {/* Progress bar */}
                <div className="w-24 h-2 bg-yellow-900 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-yellow-400 animate-progress rounded-full"></div>
                </div>
              </div>
            )}
            {stage === 2 && (
              <div className="text-center animate-fade-in">
                {/* Happy face */}
                <div className="text-6xl mb-1 animate-bounce">😄</div>
                <div className="text-green-300 text-xs font-bold">RÉPARÉ !</div>
                {/* Sparkles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute text-yellow-300 animate-sparkle"
                      style={{ 
                        top: `${Math.random() * 100}%`, 
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    >✨</div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Power LED */}
          <div className={`absolute bottom-1 right-2 w-2 h-2 rounded-full transition-colors duration-300 ${
            stage === 0 ? 'bg-red-500 animate-blink' : stage === 1 ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'
          }`}></div>
        </div>
        
        {/* Monitor Stand */}
        <div className="w-8 h-6 bg-gray-600 mx-auto"></div>
        <div className="w-20 h-3 bg-gray-700 mx-auto rounded-b-lg"></div>
        
        {/* Keyboard */}
        <div className={`w-40 h-8 mx-auto mt-2 rounded transition-all duration-500 ${
          stage === 2 ? 'bg-gradient-to-r from-blue-400 to-cyan-400' : 'bg-gray-600'
        }`}>
          <div className="flex justify-center items-center h-full gap-1 px-2">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`w-3 h-4 rounded-sm transition-colors duration-300 ${
                stage === 2 ? 'bg-blue-200' : 'bg-gray-500'
              }`}></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Status text */}
      <div className="absolute -bottom-8 left-0 right-0 text-center">
        <span className={`font-heading font-bold text-sm transition-all duration-300 ${
          stage === 0 ? 'text-red-500' : stage === 1 ? 'text-yellow-500' : 'text-green-500'
        }`}>
          {stage === 0 && "PC en panne 😞"}
          {stage === 1 && "Allo PC intervient..."}
          {stage === 2 && "PC réparé ! 🎉"}
        </span>
      </div>
    </div>
  );
}

export default function Hero({ location = null }) {
  const isLocationPage = !!location;
  
  const title = isLocationPage 
    ? location.h1 
    : "Votre PC vous fait des misères ?";
  
  const subtitle = isLocationPage
    ? `Intervention rapide à ${location.name} et ses environs pour PC et Mac`
    : "Votre machine ne répond plus ? Alors plus une minute à perdre !";

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden" data-testid="hero-section">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/50 to-transparent hidden lg:block"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-10 md:py-16 lg:py-20">
          {/* Left Content */}
          <div className="relative z-10">
            {isLocationPage && (
              <div className="inline-flex items-center space-x-2 bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full mb-6 animate-fade-in">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="font-body text-sm font-medium">Zone : {location.name} ({location.postal_code})</span>
              </div>
            )}
            
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6" data-testid="hero-title">
              {title}
            </h1>
            
            <p className="font-body text-lg md:text-xl text-gray-600 mb-6 leading-relaxed max-w-xl">
              {subtitle}
            </p>

            {/* PC & Mac badge */}
            <div className="flex items-center space-x-4 mb-6 p-4 bg-white rounded-xl shadow-md border border-gray-100 inline-flex">
              <div className="flex items-center space-x-2">
                <Monitor className="w-6 h-6 text-blue-600" />
                <span className="font-body font-semibold text-gray-700">PC</span>
              </div>
              <span className="text-gray-300 text-2xl">+</span>
              <div className="flex items-center space-x-2">
                <Apple className="w-6 h-6 text-gray-700" />
                <span className="font-body font-semibold text-gray-700">Mac</span>
              </div>
              <span className="text-gray-300">|</span>
              <span className="font-body text-sm text-gray-500">Fixes & Portables</span>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Clock className="w-5 h-5 text-orange-500" />
                <span className="font-body text-sm text-gray-700">Intervention &lt; 30 min</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-body text-sm text-gray-700">7j/7</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="font-body text-sm text-gray-700">Depuis 2002</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0140883030"
                className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-heading font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                data-testid="hero-call-button"
              >
                <Phone className="w-5 h-5 animate-wiggle" />
                <span>01 40 88 30 30</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-heading font-semibold text-lg transition-all duration-300 hover:scale-105"
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

          {/* Right - Animated PC */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Animated PC */}
              <AnimatedPC />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl px-4 py-2 animate-float">
                <div className="flex items-center space-x-2">
                  <Apple className="w-5 h-5 text-gray-700" />
                  <span className="font-heading font-semibold text-sm text-gray-700">Mac aussi !</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white rounded-xl shadow-xl px-4 py-2 animate-float-delayed">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-heading font-semibold text-sm">+10 000 clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
