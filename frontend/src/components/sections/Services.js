import { Zap, Shield, HardDrive, Wifi, Wrench, GraduationCap, Monitor, Apple } from 'lucide-react';

const SERVICES = [
  {
    id: "depannage-urgent",
    name: "Dépannage Urgent PC & Mac",
    description: "Intervention rapide en moins de 30 minutes pour tous vos problèmes informatiques urgents.",
    icon: Zap,
    featured: true
  },
  {
    id: "virus-securite",
    name: "Virus & Sécurité",
    description: "Suppression de virus, spywares et malwares. Installation d'antivirus et sécurisation.",
    icon: Shield
  },
  {
    id: "recuperation-donnees",
    name: "Récupération Données",
    description: "Récupération de fichiers perdus sur disque dur, SSD, clé USB ou carte mémoire.",
    icon: HardDrive
  },
  {
    id: "installation-reseau",
    name: "Installation Réseau WiFi",
    description: "Configuration de votre réseau WiFi, routeur, répéteur et optimisation du signal.",
    icon: Wifi
  },
  {
    id: "reparation-materiel",
    name: "Réparation Matériel",
    description: "Remplacement de composants défectueux, upgrade mémoire RAM, installation SSD.",
    icon: Wrench
  },
  {
    id: "formation",
    name: "Formation Informatique",
    description: "Initiation et perfectionnement adaptés à votre niveau sur Windows ou macOS.",
    icon: GraduationCap
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-tech-dark circuit-bg relative" data-testid="services-section">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-tech-dark via-tech-blue/20 to-tech-dark"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-2 bg-tech-gold/20 text-tech-gold px-4 py-2 rounded-full mb-6 glow-border">
            <Zap className="w-4 h-4" />
            <span className="font-heading font-semibold text-sm uppercase tracking-widest">Nos Services</span>
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-6">
            Expertise <span className="text-tech-cyan">PC & Mac</span>
          </h2>
          <p className="font-body text-lg text-gray-400 max-w-2xl mx-auto">
            Des solutions professionnelles pour tous vos besoins informatiques
          </p>
          
          {/* PC & Mac icons */}
          <div className="flex items-center justify-center space-x-8 mt-8">
            <div className="flex items-center space-x-2 text-tech-cyan">
              <Monitor className="w-8 h-8" />
              <span className="font-heading font-bold text-lg">PC Windows</span>
            </div>
            <div className="w-px h-8 bg-tech-gold"></div>
            <div className="flex items-center space-x-2 text-white">
              <Apple className="w-8 h-8" />
              <span className="font-heading font-bold text-lg">Mac Apple</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`p-6 rounded-xl transition-all duration-300 ${
                  service.featured 
                    ? 'bg-gradient-to-br from-tech-gold/20 to-tech-orange/10 glow-border' 
                    : 'tech-card'
                }`}
                data-testid={`service-${service.id}`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  service.featured 
                    ? 'bg-gradient-to-br from-tech-gold to-tech-orange shadow-lg shadow-tech-gold/30' 
                    : 'bg-tech-cyan/10 border border-tech-cyan/30'
                }`}>
                  <Icon className={`w-7 h-7 ${service.featured ? 'text-tech-dark' : 'text-tech-cyan'}`} />
                </div>
                <h3 className={`font-heading font-bold text-xl mb-3 ${
                  service.featured ? 'text-tech-gold' : 'text-white'
                }`}>
                  {service.name}
                </h3>
                <p className="font-body text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                {service.featured && (
                  <a 
                    href="tel:0140883030" 
                    className="inline-flex items-center mt-5 font-heading font-semibold text-tech-gold hover:text-tech-cyan transition-colors"
                  >
                    Appeler maintenant →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
