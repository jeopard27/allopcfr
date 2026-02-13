import { Zap, Shield, HardDrive, Wifi, Wrench, GraduationCap, Monitor, Apple } from 'lucide-react';

const SERVICES = [
  {
    id: "depannage-urgent",
    name: "Dépannage Urgent PC & Mac",
    description: "Intervention rapide en moins de 30 minutes pour tous vos problèmes informatiques urgents. PC Windows et Mac Apple.",
    icon: Zap,
    featured: true
  },
  {
    id: "virus-securite",
    name: "Virus & Sécurité",
    description: "Suppression de virus, spywares et malwares. Installation d'antivirus et sécurisation de votre système PC ou Mac.",
    icon: Shield
  },
  {
    id: "recuperation-donnees",
    name: "Récupération Données",
    description: "Récupération de fichiers perdus sur disque dur, SSD, clé USB ou carte mémoire. Compatible PC et Mac.",
    icon: HardDrive
  },
  {
    id: "installation-reseau",
    name: "Installation Réseau WiFi",
    description: "Configuration de votre réseau WiFi, routeur, répéteur. Partage de connexion et optimisation du signal.",
    icon: Wifi
  },
  {
    id: "reparation-materiel",
    name: "Réparation Matériel",
    description: "Remplacement de composants défectueux, upgrade mémoire RAM, installation SSD sur PC et Mac.",
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
    <section id="services" className="py-16 md:py-24 bg-white" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-heading font-semibold text-brand-blue text-sm uppercase tracking-widest mb-4">
            Nos Services
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-navy mb-4">
            Expertise PC & Mac
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions professionnelles pour tous vos besoins informatiques, 
            sur PC Windows et Mac Apple.
          </p>
          
          {/* PC & Mac icons */}
          <div className="flex items-center justify-center space-x-6 mt-6">
            <div className="flex items-center space-x-2 text-brand-blue">
              <Monitor className="w-6 h-6" />
              <span className="font-heading font-semibold">PC Windows</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Apple className="w-6 h-6" />
              <span className="font-heading font-semibold">Mac Apple</span>
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
                className={`p-6 rounded-xl border transition-all hover:shadow-lg hover:-translate-y-1 ${
                  service.featured 
                    ? 'bg-brand-blue text-white border-brand-blue' 
                    : 'bg-white border-gray-200 hover:border-brand-blue'
                }`}
                data-testid={`service-${service.id}`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  service.featured ? 'bg-white/20' : 'bg-brand-sky'
                }`}>
                  <Icon className={`w-6 h-6 ${service.featured ? 'text-white' : 'text-brand-blue'}`} />
                </div>
                <h3 className={`font-heading font-bold text-xl mb-3 ${
                  service.featured ? 'text-white' : 'text-brand-navy'
                }`}>
                  {service.name}
                </h3>
                <p className={`font-body text-sm leading-relaxed ${
                  service.featured ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
                {service.featured && (
                  <a 
                    href="tel:0140883030" 
                    className="inline-flex items-center mt-4 font-heading font-semibold text-white hover:underline"
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
