import { Monitor, Download, Shield, Clock, CheckCircle, Headphones } from 'lucide-react';

const TEAMVIEWER_LINK = "https://get.teamviewer.com/mp9scqx";

const BENEFITS = [
  {
    icon: Clock,
    title: "Intervention immédiate",
    description: "Pas besoin d'attendre, notre technicien se connecte en quelques secondes"
  },
  {
    icon: Shield,
    title: "100% sécurisé",
    description: "Connexion cryptée, vous gardez le contrôle et voyez tout ce qui se passe"
  },
  {
    icon: Headphones,
    title: "Accompagnement vocal",
    description: "Notre technicien vous guide par téléphone pendant l'intervention"
  }
];

export default function TeleAssistance() {
  return (
    <section id="teleassistance" className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600" data-testid="teleassistance-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <span className="inline-flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6">
              <Monitor className="w-4 h-4" />
              <span className="font-body text-sm font-medium">Nouveau service</span>
            </span>
            
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Télé-assistance : <br/>
              <span className="text-cyan-300">On répare votre PC à distance !</span>
            </h2>
            
            <p className="font-body text-lg text-white/90 mb-8 leading-relaxed">
              Pas besoin de vous déplacer ni d'attendre un technicien. Grâce à notre service de 
              <strong> prise en main à distance</strong>, nous pouvons résoudre la plupart de vos 
              problèmes informatiques directement depuis votre domicile, en quelques minutes.
            </p>

            {/* How it works */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
              <h3 className="font-heading font-bold text-xl mb-4 flex items-center">
                <span className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center mr-3 text-blue-900 font-bold text-sm">?</span>
                Comment ça marche ?
              </h3>
              <ol className="space-y-3 font-body text-white/90">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">1</span>
                  <span>Appelez-nous au <strong>01 40 88 30 30</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">2</span>
                  <span>Téléchargez notre module de connexion sécurisée</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">3</span>
                  <span>Communiquez le code affiché à notre technicien</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">4</span>
                  <span>C'est tout ! On s'occupe du reste sous vos yeux</span>
                </li>
              </ol>
            </div>

            {/* CTA Button */}
            <a
              href={TEAMVIEWER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-white text-blue-700 hover:bg-cyan-100 px-8 py-4 rounded-full font-heading font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              data-testid="teamviewer-download"
            >
              <Download className="w-6 h-6" />
              <span>Télécharger le module de connexion</span>
            </a>
            
            <p className="mt-4 font-body text-sm text-white/70">
              Module sécurisé TeamViewer - Téléchargement gratuit
            </p>
          </div>

          {/* Right - Benefits + Visual */}
          <div>
            {/* Visual illustration */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
              <div className="flex items-center justify-center space-x-8">
                {/* User PC */}
                <div className="text-center">
                  <div className="w-24 h-20 bg-gray-700 rounded-lg flex items-center justify-center mb-2 mx-auto border-2 border-gray-500">
                    <span className="text-3xl">😟</span>
                  </div>
                  <p className="text-white/80 text-sm font-body">Votre PC</p>
                </div>
                
                {/* Connection animation */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-ping animation-delay-200"></div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400"></div>
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping animation-delay-400"></div>
                  </div>
                  <p className="text-cyan-300 text-xs font-body mt-2">Connexion sécurisée</p>
                </div>
                
                {/* Tech PC */}
                <div className="text-center">
                  <div className="w-24 h-20 bg-blue-500 rounded-lg flex items-center justify-center mb-2 mx-auto border-2 border-cyan-400">
                    <span className="text-3xl">👨‍💻</span>
                  </div>
                  <p className="text-white/80 text-sm font-body">Notre expert</p>
                </div>
              </div>
              
              {/* Result */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-heading font-semibold">Problème résolu en quelques minutes !</span>
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
                    className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/20 transition-all"
                  >
                    <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white mb-1">{benefit.title}</h4>
                      <p className="font-body text-sm text-white/70">{benefit.description}</p>
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
