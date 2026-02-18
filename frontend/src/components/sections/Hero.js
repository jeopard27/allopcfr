import { Phone, Clock, CheckCircle, Monitor, Apple, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Animated PC Component with tech theme
function AnimatedPC() {
  const [stage, setStage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-72 h-72 mx-auto">
      <div className="absolute inset-0 bg-tech-cyan/20 rounded-full blur-3xl animate-glow"></div>
      <div className={`relative transition-all duration-700 ${
        stage === 0 ? 'animate-shake' : stage === 1 ? '' : 'animate-float'
      }`}>
        <div className={`relative w-56 h-40 mx-auto rounded-lg transition-all duration-500 ${
          stage === 0 ? 'bg-gray-900 glow-border' : stage === 1 ? 'bg-tech-blue glow-border' : 'bg-gradient-to-br from-tech-blue to-tech-cyan glow-border-cyan'
        }`}>
          <div className="absolute inset-2 rounded bg-tech-dark/80 flex items-center justify-center overflow-hidden">
            {stage === 0 && (
              <div className="text-center">
                <div className="text-5xl mb-2">😢</div>
                <div className="text-red-500 text-sm font-bold animate-pulse">ERREUR SYSTÈME</div>
                <div className="mt-2 flex justify-center space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-red-500 rounded-full animate-ping" style={{ animationDelay: `${i * 0.2}s` }}></div>
                  ))}
                </div>
              </div>
            )}
            {stage === 1 && (
              <div className="text-center">
                <div className="text-4xl mb-2 animate-spin" style={{ animationDuration: '2s' }}>🔧</div>
                <div className="text-tech-gold text-sm font-bold">RÉPARATION...</div>
                <div className="w-32 h-2 bg-tech-dark rounded-full mt-3 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-tech-gold to-tech-orange rounded-full animate-progress"></div>
                </div>
              </div>
            )}
            {stage === 2 && (
              <div className="text-center relative">
                <div className="text-5xl mb-2 animate-bounce">😄</div>
                <div className="text-tech-cyan text-sm font-bold text-glow">RÉPARÉ !</div>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="absolute text-tech-gold text-xs animate-particle"
                    style={{ top: `${20 + Math.random() * 60}%`, left: `${10 + Math.random() * 80}%`, animationDelay: `${i * 0.15}s` }}>✨</div>
                ))}
              </div>
            )}
          </div>
          <div className={`absolute bottom-2 right-3 w-2 h-2 rounded-full transition-colors ${
            stage === 0 ? 'bg-red-500 animate-pulse' : stage === 1 ? 'bg-tech-gold animate-pulse' : 'bg-green-400 shadow-lg shadow-green-400/50'
          }`}></div>
        </div>
        <div className="w-10 h-8 bg-gradient-to-b from-gray-600 to-gray-800 mx-auto"></div>
        <div className="w-24 h-3 bg-gradient-to-r from-tech-gold via-tech-orange to-tech-gold mx-auto rounded-b-lg shadow-lg shadow-tech-gold/30"></div>
        <div className={`w-44 h-10 mx-auto mt-3 rounded-lg transition-all duration-500 ${
          stage === 2 ? 'bg-gradient-to-r from-tech-blue via-tech-cyan/30 to-tech-blue glow-border-cyan' : 'bg-gray-800 border border-gray-700'
        }`}>
          <div className="flex justify-center items-center h-full gap-1 px-3">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`w-2 h-5 rounded-sm ${stage === 2 ? 'bg-tech-cyan/50' : 'bg-gray-700'}`}></div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-10 left-0 right-0 text-center">
        <span className={`font-heading font-bold text-sm ${
          stage === 0 ? 'text-red-400' : stage === 1 ? 'text-tech-gold text-glow-gold' : 'text-tech-cyan text-glow'
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
    <section className="relative overflow-hidden" data-testid="hero-section">
      {/* Banner Image — full width with overflow */}
      <div className="relative w-full bg-tech-dark">
        <img 
          src="/banner-hero.png" 
          alt="Allo PC Dépannage - Service de dépannage informatique PC et Mac"
          className="w-full h-auto block"
          data-testid="hero-banner-image"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-tech-dark/30 via-transparent to-tech-dark"></div>
        {/* Side blending gradients */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-tech-dark/60 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-tech-dark/60 to-transparent"></div>
      </div>

      {/* Overflow zone — content bleeds over the banner image */}
      <div className="relative bg-tech-dark">
        {/* Pulled-up content overlapping the banner */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-28 md:-mt-36 lg:-mt-44">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pb-16 md:pb-20">
            {/* Left Content */}
            <div className="bg-tech-dark/80 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-tech-cyan/10">
              {isLocationPage && (
                <div className="inline-flex items-center space-x-2 bg-tech-gold/20 text-tech-gold px-4 py-2 rounded-full mb-6 glow-border">
                  <span className="w-2 h-2 bg-tech-gold rounded-full animate-pulse"></span>
                  <span className="font-body text-sm font-medium">Zone : {location.name} ({location.postal_code})</span>
                </div>
              )}
              
              <h1 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-5" data-testid="hero-title">
                {title.split('?')[0]}
                {title.includes('?') && <span className="text-tech-cyan">?</span>}
              </h1>
              
              <p className="font-body text-lg text-gray-300 mb-6 leading-relaxed max-w-xl">
                {subtitle}
              </p>

              {/* PC & Mac badge */}
              <div className="flex items-center space-x-4 mb-6 p-3 tech-card rounded-xl inline-flex">
                <div className="flex items-center space-x-2">
                  <Monitor className="w-5 h-5 text-tech-cyan" />
                  <span className="font-body font-semibold text-white text-sm">PC</span>
                </div>
                <span className="text-tech-gold text-xl">+</span>
                <div className="flex items-center space-x-2">
                  <Apple className="w-5 h-5 text-white" />
                  <span className="font-body font-semibold text-white text-sm">Mac</span>
                </div>
                <span className="text-gray-600">|</span>
                <span className="font-body text-xs text-gray-400">Fixes & Portables</span>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="flex items-center space-x-2 tech-card px-3 py-1.5 rounded-lg">
                  <Clock className="w-4 h-4 text-tech-gold" />
                  <span className="font-body text-xs text-white">Intervention &lt; 30 min</span>
                </div>
                <div className="flex items-center space-x-2 tech-card px-3 py-1.5 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="font-body text-xs text-white">7j/7</span>
                </div>
                <div className="flex items-center space-x-2 tech-card px-3 py-1.5 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-tech-cyan" />
                  <span className="font-body text-xs text-white">Depuis 2002</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:0140883030"
                  className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-tech-gold to-tech-orange text-tech-dark px-7 py-3.5 rounded-full font-heading font-bold text-base transition-all duration-300 shadow-lg shadow-tech-gold/40 hover:shadow-tech-gold/60 hover:scale-105"
                  data-testid="hero-call-button"
                >
                  <Phone className="w-5 h-5" />
                  <span>01 40 88 30 30</span>
                </a>
              </div>

              <p className="mt-5 font-body text-xs text-gray-500">
                Siège : 235 Bld Pereire, 75017 Paris
              </p>
            </div>

            {/* Right - Animated PC */}
            <div className="relative hidden lg:flex items-center justify-center pt-8">
              <AnimatedPC />
              
              <div className="absolute -top-4 right-10 tech-card rounded-xl px-4 py-2 animate-float">
                <div className="flex items-center space-x-2">
                  <Apple className="w-5 h-5 text-white" />
                  <span className="font-heading font-semibold text-sm text-white">Mac aussi !</span>
                </div>
              </div>
              
              <div className="absolute bottom-20 -left-4 bg-gradient-to-r from-tech-gold to-tech-orange text-tech-dark rounded-xl px-4 py-2 animate-float-delayed shadow-lg shadow-tech-gold/30">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-heading font-bold text-sm">+10 000 clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle circuit background behind content area */}
        <div className="absolute inset-0 circuit-bg opacity-30"></div>
      </div>
    </section>
  );
}
