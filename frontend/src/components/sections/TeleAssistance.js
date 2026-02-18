import { Monitor, Download, Shield, Clock, CheckCircle, Headphones, Zap } from 'lucide-react';

const TEAMVIEWER_LINK = "https://get.teamviewer.com/mp9scqx";

const BENEFITS = [
  {
    icon: Clock,
    title: "Intervention immédiate",
    description: "Notre technicien se connecte en quelques secondes"
  },
  {
    icon: Shield,
    title: "100% sécurisé",
    description: "Connexion cryptée, vous gardez le contrôle total"
  },
  {
    icon: Headphones,
    title: "Accompagnement vocal",
    description: "On vous guide par téléphone pendant l'intervention"
  }
];

export default function TeleAssistance() {
  return (
    <section id="teleassistance" className="py-20 md:py-28 bg-tech-dark relative overflow-hidden" data-testid="teleassistance-section">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/30 via-tech-dark to-tech-cyan/10"></div>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-tech-gold via-tech-cyan to-tech-gold"></div>
      
      {/* Circuit pattern */}
      <div className="absolute inset-0 circuit-bg opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center space-x-2 bg-tech-cyan/20 text-tech-cyan px-4 py-2 rounded-full mb-6 glow-border-cyan">
              <Monitor className="w-4 h-4" />
              <span className="font-heading font-semibold text-sm uppercase tracking-widest">Nouveau</span>
            </span>
            
            <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Télé-assistance : <br/>
              <span className="text-tech-cyan text-glow">On répare votre PC à distance !</span>
            </h2>
            
            <p className="font-body text-lg text-gray-300 mb-8 leading-relaxed">
              Pas besoin de vous déplacer. Grâce à notre 
              <strong className="text-tech-gold"> prise en main à distance</strong>, nous résolvons 
              vos problèmes informatiques directement depuis chez vous.
            </p>

            {/* How it works */}
            <div className="tech-card rounded-xl p-6 mb-8">
              <h3 className="font-heading font-bold text-xl mb-4 flex items-center text-white">
                <span className="w-8 h-8 bg-tech-gold rounded-full flex items-center justify-center mr-3 text-tech-dark font-bold text-sm">?</span>
                Comment ça marche ?
              </h3>
              <ol className="space-y-3 font-body text-gray-300">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-tech-cyan/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold text-tech-cyan">1</span>
                  <span>Appelez-nous au <strong className="text-tech-gold">01 40 88 30 30</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-tech-cyan/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold text-tech-cyan">2</span>
                  <span>Téléchargez notre module de connexion</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-tech-cyan/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold text-tech-cyan">3</span>
                  <span>Communiquez le code à notre technicien</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-tech-cyan/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold text-tech-cyan">4</span>
                  <span>C'est tout ! On s'occupe du reste</span>
                </li>
              </ol>
            </div>

            {/* CTA Button */}
            <a
              href={TEAMVIEWER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tech inline-flex items-center space-x-3 text-lg"
              data-testid="teamviewer-download"
            >
              <Download className="w-6 h-6" />
              <span>Télécharger le module</span>
            </a>
            
            <p className="mt-4 font-body text-sm text-gray-500">
              Module sécurisé TeamViewer - Téléchargement gratuit
            </p>
          </div>

          {/* Right - Visual + Benefits */}
          <div>
            {/* Visual */}
            <div className="tech-card rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center space-x-6">
                {/* User PC */}
                <div className="text-center">
                  <div className="w-20 h-16 bg-tech-dark rounded-lg flex items-center justify-center mb-2 mx-auto border-2 border-tech-gold">
                    <span className="text-3xl">😟</span>
                  </div>
                  <p className="text-gray-400 text-sm font-body">Votre PC</p>
                </div>
                
                {/* Connection */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-tech-cyan rounded-full animate-ping"></div>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-tech-cyan to-tech-gold"></div>
                    <div className="w-3 h-3 bg-tech-gold rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  <p className="text-tech-cyan text-xs font-body mt-2">Connexion sécurisée</p>
                </div>
                
                {/* Tech */}
                <div className="text-center">
                  <div className="w-20 h-16 bg-tech-cyan/20 rounded-lg flex items-center justify-center mb-2 mx-auto border-2 border-tech-cyan">
                    <span className="text-3xl">👨‍💻</span>
                  </div>
                  <p className="text-gray-400 text-sm font-body">Notre expert</p>
                </div>
              </div>
              
              {/* Result */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-heading font-semibold text-sm">Problème résolu !</span>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {BENEFITS.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 tech-card rounded-xl p-4"
                  >
                    <div className="w-12 h-12 bg-tech-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-tech-gold" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white mb-1">{benefit.title}</h4>
                      <p className="font-body text-sm text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
