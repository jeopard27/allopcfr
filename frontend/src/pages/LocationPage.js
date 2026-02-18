import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { MapPin, Phone, CheckCircle, Clock, Zap, Shield, HardDrive, Wifi, Monitor, Apple } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/sections/CTA';

const LOCATIONS_DATA = {
  "paris-16": {
    name: "Paris 16ème",
    slug: "paris-16",
    title: "Dépannage PC et Mac Paris 16 | Allo PC Dépannage",
    meta_description: "Dépannage informatique PC et Mac à Paris 16ème (75016). Intervention rapide 7j/7 à domicile. Réparation, suppression virus, récupération données. Appelez le 01 40 88 30 30",
    h1: "Dépannage PC et Mac Paris 16ème",
    neighborhoods: ["Auteuil", "Passy", "Chaillot", "Muette", "Porte Dauphine", "Trocadéro"],
    postal_code: "75016",
    description: "Le 16ème arrondissement de Paris, réputé pour ses quartiers résidentiels comme Auteuil, Passy et le Trocadéro, compte de nombreux particuliers et professionnels ayant besoin d'assistance informatique PC et Mac rapide et fiable."
  },
  "paris-17": {
    name: "Paris 17ème",
    slug: "paris-17",
    title: "Dépannage PC et Mac Paris 17 | Allo PC Dépannage - Siège Social",
    meta_description: "Dépannage informatique PC et Mac à Paris 17ème (75017). Notre siège au 235 Bld Pereire. Intervention 7j/7, moins de 30 min. Appelez le 01 40 88 30 30",
    h1: "Dépannage PC et Mac Paris 17ème",
    neighborhoods: ["Batignolles", "Épinettes", "Ternes", "Plaine Monceau", "Pereire"],
    postal_code: "75017",
    description: "Le 17ème arrondissement accueille notre siège social au 235 Boulevard Pereire. Nous connaissons parfaitement les quartiers des Batignolles, Ternes et Plaine Monceau pour intervenir chez vous en quelques minutes sur PC Windows et Mac Apple.",
    featured: true
  },
  "paris-8": {
    name: "Paris 8ème",
    slug: "paris-8",
    title: "Dépannage PC et Mac Paris 8 | Allo PC Dépannage",
    meta_description: "Dépannage informatique PC et Mac à Paris 8ème (75008). Champs-Élysées, Madeleine, Saint-Lazare. Intervention rapide 7j/7. Appelez le 01 40 88 30 30",
    h1: "Dépannage PC et Mac Paris 8ème",
    neighborhoods: ["Champs-Élysées", "Madeleine", "Saint-Lazare", "Europe", "Faubourg du Roule"],
    postal_code: "75008",
    description: "Le 8ème arrondissement, cœur économique de Paris avec les Champs-Élysées et le quartier de la Madeleine, concentre de nombreuses entreprises utilisant PC et Mac nécessitant un dépannage informatique réactif."
  },
  "neuilly-sur-seine": {
    name: "Neuilly-sur-Seine",
    slug: "neuilly-sur-seine",
    title: "Dépannage PC et Mac Neuilly-sur-Seine | Allo PC Dépannage",
    meta_description: "Dépannage informatique PC et Mac à Neuilly-sur-Seine (92200). Intervention rapide à domicile 7j/7. Réparation PC, Mac, suppression virus. Appelez le 01 40 88 30 30",
    h1: "Dépannage PC et Mac Neuilly-sur-Seine",
    neighborhoods: ["Ile de la Jatte", "Sablons", "Bagatelle", "Saint-James", "Château"],
    postal_code: "92200",
    description: "Neuilly-sur-Seine, commune limitrophe du 17ème arrondissement, bénéficie de notre proximité immédiate. Nous intervenons rapidement sur tous vos équipements PC et Mac : iMac, MacBook, PC fixes et portables."
  },
  "levallois-perret": {
    name: "Levallois-Perret",
    slug: "levallois-perret",
    title: "Dépannage Informatique PC et Mac Levallois-Perret | Allo PC Dépannage",
    meta_description: "Dépannage informatique PC et Mac à Levallois-Perret (92300). Intervention rapide 7j/7 pour particuliers et entreprises. Appelez le 01 40 88 30 30",
    h1: "Dépannage PC et Mac Levallois-Perret",
    neighborhoods: ["Front de Seine", "Louise Michel", "Président Wilson", "Gustave Eiffel"],
    postal_code: "92300",
    description: "Levallois-Perret, ville dynamique aux nombreuses entreprises et start-ups équipées de PC et Mac, est à quelques minutes de notre siège. Nous y intervenons quotidiennement."
  }
};

const SERVICES = [
  { icon: Zap, name: "Dépannage Urgent", desc: "Intervention < 30 min" },
  { icon: Shield, name: "Virus & Sécurité", desc: "PC et Mac" },
  { icon: HardDrive, name: "Récupération Données", desc: "Tous supports" },
  { icon: Wifi, name: "Réseau WiFi", desc: "Installation & config" }
];

export default function LocationPage() {
  const browserLocation = useLocation();
  
  const pathname = browserLocation.pathname;
  const slugMap = {
    '/depannage-pc-paris-16': 'paris-16',
    '/depannage-pc-paris-17': 'paris-17',
    '/depannage-pc-paris-8': 'paris-8',
    '/depannage-pc-neuilly-sur-seine': 'neuilly-sur-seine',
    '/depannage-informatique-levallois-perret': 'levallois-perret'
  };
  
  const dataKey = slugMap[pathname];
  const location = LOCATIONS_DATA[dataKey];

  useEffect(() => {
    if (location) {
      document.title = location.title;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = location.meta_description;
    }
    window.scrollTo(0, 0);
  }, [location]);

  if (!location) {
    return (
      <div className="min-h-screen bg-tech-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading font-bold text-2xl text-white mb-4">Page non trouvée</h1>
          <Link to="/" className="text-tech-cyan hover:underline">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-tech-dark" data-testid={`location-page-${location.slug}`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-tech-radial"></div>
        <div className="absolute inset-0 circuit-bg opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 font-body text-sm text-gray-500">
              <li><Link to="/" className="hover:text-tech-cyan transition-colors">Accueil</Link></li>
              <li className="text-gray-600">/</li>
              <li className="text-tech-cyan font-medium">{location.name}</li>
            </ol>
          </nav>

          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 bg-tech-gold/20 text-tech-gold px-4 py-2 rounded-full mb-6 glow-border">
            <span className="w-2 h-2 bg-tech-gold rounded-full animate-pulse"></span>
            <span className="font-body text-sm font-medium">Zone : {location.name} ({location.postal_code})</span>
          </div>

          <h1 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6" data-testid="location-h1">
            {location.h1}
          </h1>

          <p className="font-body text-lg text-gray-300 mb-6 max-w-3xl leading-relaxed">
            {location.description}
          </p>

          {/* PC & Mac badge */}
          <div className="flex items-center space-x-4 mb-8 p-4 tech-card rounded-xl inline-flex">
            <div className="flex items-center space-x-2">
              <Monitor className="w-5 h-5 text-tech-cyan" />
              <span className="font-body font-semibold text-white">PC Windows</span>
            </div>
            <span className="text-tech-gold text-xl">+</span>
            <div className="flex items-center space-x-2">
              <Apple className="w-5 h-5 text-white" />
              <span className="font-body font-semibold text-white">Mac Apple</span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="flex items-center space-x-2 tech-card px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5 text-tech-gold" />
              <span className="font-body text-sm text-white">Intervention rapide</span>
            </div>
            <div className="flex items-center space-x-2 tech-card px-4 py-2 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="font-body text-sm text-white">7j/7</span>
            </div>
            {location.featured && (
              <div className="flex items-center space-x-2 bg-tech-gold/20 text-tech-gold px-4 py-2 rounded-lg glow-border">
                <MapPin className="w-5 h-5" />
                <span className="font-body text-sm font-semibold">Notre siège social</span>
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="tel:0140883030"
            className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-tech-gold to-tech-orange text-tech-dark px-8 py-4 rounded-full font-heading font-bold text-lg transition-all duration-300 shadow-lg shadow-tech-gold/40 hover:shadow-tech-gold/60 hover:scale-105"
            data-testid="location-call-button"
          >
            <Phone className="w-5 h-5" />
            <span>01 40 88 30 30</span>
          </a>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-12 bg-tech-dark border-t border-tech-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl text-white mb-6">
            Quartiers desservis à {location.name}
          </h2>
          <div className="flex flex-wrap gap-3">
            {location.neighborhoods.map((neighborhood, index) => (
              <span
                key={index}
                className="inline-flex items-center px-4 py-2 tech-card rounded-lg font-body text-gray-300"
              >
                <MapPin className="w-4 h-4 mr-2 text-tech-gold" />
                {neighborhood}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-tech-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-tech-blue/10 to-tech-dark"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-heading font-bold text-2xl text-white mb-6">
            Nos services PC et Mac à {location.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="tech-card p-5 rounded-xl">
                  <div className="w-10 h-10 bg-tech-cyan/10 rounded-lg flex items-center justify-center mb-3 border border-tech-cyan/30">
                    <Icon className="w-5 h-5 text-tech-cyan" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-1">{service.name}</h3>
                  <p className="font-body text-sm text-gray-400">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-12 bg-tech-dark border-t border-tech-cyan/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            <h2 className="font-heading font-bold text-2xl text-white mb-6">
              Votre expert en dépannage PC et Mac à {location.name}
            </h2>
            <div className="font-body text-gray-400 space-y-4 leading-relaxed">
              <p>
                <strong className="text-white">Allo PC Dépannage</strong> intervient à {location.name} ({location.postal_code}) depuis 2002. 
                Notre équipe de techniciens qualifiés se déplace à votre domicile ou sur votre lieu de travail 
                pour résoudre tous vos problèmes informatiques sur <strong className="text-tech-cyan">PC Windows et Mac Apple</strong>.
              </p>
              <p>
                Que vous ayez un <strong className="text-white">ordinateur qui ne démarre plus</strong>, une 
                <strong className="text-white"> infection virale</strong>, une <strong className="text-white">perte de données</strong> ou besoin 
                d'installer un <strong className="text-white">réseau WiFi</strong>, nous avons la solution pour votre PC comme pour votre Mac.
              </p>
              <p>
                Nous intervenons sur tous les modèles : <strong className="text-white">iMac, MacBook, MacBook Pro, MacBook Air, Mac Mini</strong>, 
                ainsi que tous les <strong className="text-white">PC fixes et portables</strong> de toutes marques.
              </p>
              <p>
                Nos forfaits incluent une <strong className="text-tech-gold">obligation de résultat</strong> : vous ne payez que si 
                le problème est résolu. C'est notre engagement qualité depuis plus de 20 ans.
              </p>
            </div>
          </article>
        </div>
      </section>

      <CTA />
    </main>
  );
}
