import { Zap, Shield, HardDrive, Wifi, Wrench, GraduationCap } from 'lucide-react';

const SERVICES = [
  {
    id: "depannage-urgent",
    name: "Dépannage Urgent",
    description: "Intervention rapide en moins de 30 minutes pour tous vos problèmes informatiques urgents. Diagnostic immédiat et réparation sur place.",
    icon: Zap,
    span: "md:col-span-2 md:row-span-2",
    bgColor: "bg-alert-orange",
    textColor: "text-white",
    featured: true
  },
  {
    id: "virus-securite",
    name: "Virus & Sécurité",
    description: "Suppression de virus, spywares et malwares. Installation d'antivirus et sécurisation de votre système.",
    icon: Shield,
    span: "md:col-span-1 md:row-span-1",
    bgColor: "bg-gray-100",
    textColor: "text-deep-navy"
  },
  {
    id: "recuperation-donnees",
    name: "Récupération Données",
    description: "Récupération de fichiers perdus sur disque dur, SSD, clé USB ou carte mémoire.",
    icon: HardDrive,
    span: "md:col-span-1 md:row-span-1",
    bgColor: "bg-tech-blue",
    textColor: "text-white"
  },
  {
    id: "installation-reseau",
    name: "Installation Réseau WiFi",
    description: "Configuration de votre réseau WiFi, routeur, répéteur. Partage de connexion et optimisation du signal.",
    icon: Wifi,
    span: "md:col-span-2 md:row-span-1",
    bgColor: "bg-deep-navy",
    textColor: "text-white"
  },
  {
    id: "reparation-materiel",
    name: "Réparation Matériel",
    description: "Remplacement de composants défectueux, upgrade mémoire RAM, installation SSD.",
    icon: Wrench,
    span: "md:col-span-1 md:row-span-1",
    bgColor: "bg-gray-100",
    textColor: "text-deep-navy"
  },
  {
    id: "formation",
    name: "Formation Informatique",
    description: "Initiation et perfectionnement adaptés à votre niveau et vos besoins.",
    icon: GraduationCap,
    span: "md:col-span-1 md:row-span-1",
    bgColor: "bg-tech-blue/10",
    textColor: "text-deep-navy"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-outfit font-semibold text-tech-blue text-sm uppercase tracking-widest mb-4">
            Nos Services
          </span>
          <h2 className="font-outfit font-extrabold text-4xl md:text-5xl text-deep-navy tracking-tight mb-6">
            EXPERTISE COMPLÈTE
          </h2>
          <p className="font-ibm text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions professionnelles pour tous vos besoins informatiques, 
            des particuliers aux entreprises.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`${service.span} ${service.bgColor} ${service.textColor} p-6 md:p-8 rounded bento-item`}
                data-testid={`service-${service.id}`}
              >
                <div className={`w-12 h-12 rounded flex items-center justify-center mb-4 ${
                  service.featured ? 'bg-white/20' : service.bgColor === 'bg-gray-100' ? 'bg-tech-blue/10' : 'bg-white/10'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    service.bgColor === 'bg-gray-100' || service.bgColor === 'bg-tech-blue/10' ? 'text-tech-blue' : 'text-white'
                  }`} />
                </div>
                <h3 className={`font-outfit font-bold text-xl md:text-2xl mb-3 ${
                  service.featured ? 'uppercase' : ''
                }`}>
                  {service.name}
                </h3>
                <p className={`font-ibm text-sm md:text-base leading-relaxed ${
                  service.textColor === 'text-white' ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
                {service.featured && (
                  <a 
                    href="tel:0140883030" 
                    className="inline-flex items-center mt-6 font-outfit font-semibold text-white underline hover:no-underline"
                  >
                    Appeler maintenant
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
