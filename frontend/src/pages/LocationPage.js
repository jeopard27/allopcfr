import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { MapPin, Phone, CheckCircle, Clock, Zap, Shield, HardDrive, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/sections/CTA';
import FAQ from '../components/sections/FAQ';

const LOCATIONS_DATA = {
  "paris-16": {
    name: "Paris 16ème",
    slug: "paris-16",
    title: "Dépannage PC Paris 16 | Allo PC Dépannage",
    meta_description: "Dépannage informatique à Paris 16ème (75016). Intervention rapide 7j/7 à domicile. Réparation PC, suppression virus, récupération données. Appelez le 01 40 88 30 30",
    h1: "Dépannage PC Paris 16ème",
    neighborhoods: ["Auteuil", "Passy", "Chaillot", "Muette", "Porte Dauphine", "Trocadéro"],
    postal_code: "75016",
    description: "Le 16ème arrondissement de Paris, réputé pour ses quartiers résidentiels huppés comme Auteuil, Passy et le Trocadéro, compte de nombreux particuliers et professionnels ayant besoin d'assistance informatique rapide et fiable."
  },
  "paris-17": {
    name: "Paris 17ème",
    slug: "paris-17",
    title: "Dépannage PC Paris 17 | Allo PC Dépannage - Siège Social",
    meta_description: "Dépannage informatique à Paris 17ème (75017). Notre siège au 235 Bld Pereire. Intervention 7j/7, moins de 30 min. Appelez le 01 40 88 30 30",
    h1: "Dépannage PC Paris 17ème",
    neighborhoods: ["Batignolles", "Épinettes", "Ternes", "Plaine Monceau", "Pereire"],
    postal_code: "75017",
    description: "Le 17ème arrondissement accueille notre siège social au 235 Boulevard Pereire. Nous connaissons parfaitement les quartiers des Batignolles, Ternes et Plaine Monceau pour intervenir chez vous en quelques minutes.",
    featured: true
  },
  "paris-8": {
    name: "Paris 8ème",
    slug: "paris-8",
    title: "Dépannage PC Paris 8 | Allo PC Dépannage",
    meta_description: "Dépannage informatique à Paris 8ème (75008). Champs-Élysées, Madeleine, Saint-Lazare. Intervention rapide 7j/7. Appelez le 01 40 88 30 30",
    h1: "Dépannage PC Paris 8ème",
    neighborhoods: ["Champs-Élysées", "Madeleine", "Saint-Lazare", "Europe", "Faubourg du Roule"],
    postal_code: "75008",
    description: "Le 8ème arrondissement, cœur économique de Paris avec les Champs-Élysées et le quartier de la Madeleine, concentre de nombreuses entreprises et professionnels nécessitant un dépannage informatique réactif."
  },
  "neuilly-sur-seine": {
    name: "Neuilly-sur-Seine",
    slug: "neuilly-sur-seine",
    title: "Dépannage PC Neuilly-sur-Seine | Allo PC Dépannage",
    meta_description: "Dépannage informatique à Neuilly-sur-Seine (92200). Intervention rapide à domicile 7j/7. Réparation PC, Mac, suppression virus. Appelez le 01 40 88 30 30",
    h1: "Dépannage PC Neuilly-sur-Seine",
    neighborhoods: ["Ile de la Jatte", "Sablons", "Bagatelle", "Saint-James", "Château"],
    postal_code: "92200",
    description: "Neuilly-sur-Seine, commune limitrophe du 17ème arrondissement, bénéficie de notre proximité immédiate. Nous intervenons rapidement dans tous les quartiers : Ile de la Jatte, Sablons, Bagatelle et Saint-James."
  },
  "levallois-perret": {
    name: "Levallois-Perret",
    slug: "levallois-perret",
    title: "Dépannage Informatique Levallois-Perret | Allo PC Dépannage",
    meta_description: "Dépannage informatique à Levallois-Perret (92300). Intervention rapide 7j/7 pour particuliers et entreprises. Appelez le 01 40 88 30 30",
    h1: "Dépannage Informatique Levallois-Perret",
    neighborhoods: ["Front de Seine", "Louise Michel", "Président Wilson", "Gustave Eiffel"],
    postal_code: "92300",
    description: "Levallois-Perret, ville dynamique aux nombreuses entreprises et start-ups, est à quelques minutes de notre siège. Nous y intervenons quotidiennement pour dépanner particuliers et professionnels."
  }
};

const SERVICES = [
  { icon: Zap, name: "Dépannage Urgent", desc: "Intervention < 30 min" },
  { icon: Shield, name: "Virus & Sécurité", desc: "Suppression malwares" },
  { icon: HardDrive, name: "Récupération Données", desc: "Fichiers perdus" },
  { icon: Wifi, name: "Réseau WiFi", desc: "Installation & config" }
];

export default function LocationPage() {
  const { slug } = useParams();
  
  // Map URL slugs to data keys
  const slugMap = {
    'paris-16': 'paris-16',
    'paris-17': 'paris-17',
    'paris-8': 'paris-8',
    'neuilly-sur-seine': 'neuilly-sur-seine',
    'levallois-perret': 'levallois-perret'
  };
  
  const dataKey = slugMap[slug];
  const location = LOCATIONS_DATA[dataKey];

  useEffect(() => {
    if (location) {
      document.title = location.title;
      // Update meta description
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-outfit font-bold text-2xl text-deep-navy mb-4">Page non trouvée</h1>
          <Link to="/" className="text-tech-blue hover:underline">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  return (
    <main data-testid={`location-page-${location.slug}`}>
      {/* Hero Section */}
      <section className="relative bg-clinical-white overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-tech-blue transform skew-x-12"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 font-ibm text-sm text-gray-500">
              <li><Link to="/" className="hover:text-tech-blue">Accueil</Link></li>
              <li>/</li>
              <li className="text-deep-navy font-medium">{location.name}</li>
            </ol>
          </nav>

          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 bg-tech-blue/10 text-tech-blue px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4" />
            <span className="font-ibm text-sm font-medium">Zone d'intervention : {location.name} ({location.postal_code})</span>
          </div>

          <h1 className="font-outfit font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-deep-navy leading-none mb-6" data-testid="location-h1">
            {location.h1}
          </h1>

          <p className="font-ibm text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
            {location.description}
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded shadow-sm">
              <Clock className="w-5 h-5 text-alert-orange" />
              <span className="font-ibm text-sm text-gray-700">Intervention rapide</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded shadow-sm">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-ibm text-sm text-gray-700">7j/7</span>
            </div>
            {location.featured && (
              <div className="flex items-center space-x-2 bg-alert-orange text-white px-4 py-2 rounded shadow-sm">
                <MapPin className="w-5 h-5" />
                <span className="font-ibm text-sm">Notre siège social</span>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:0140883030"
              className="inline-flex items-center justify-center space-x-3 bg-alert-orange text-white px-8 py-4 rounded font-outfit font-bold text-lg btn-primary pulse-phone"
              data-testid="location-call-button"
            >
              <Phone className="w-6 h-6" />
              <span>01 40 88 30 30</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-deep-navy text-white px-8 py-4 rounded font-outfit font-semibold text-lg btn-primary"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit font-bold text-2xl md:text-3xl text-deep-navy mb-8">
            Quartiers desservis à {location.name}
          </h2>
          <div className="flex flex-wrap gap-3">
            {location.neighborhoods.map((neighborhood, index) => (
              <span
                key={index}
                className="inline-flex items-center px-4 py-2 bg-gray-100 rounded font-ibm text-gray-700"
              >
                <MapPin className="w-4 h-4 mr-2 text-tech-blue" />
                {neighborhood}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-clinical-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-outfit font-bold text-2xl md:text-3xl text-deep-navy mb-8">
            Nos services à {location.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-tech-blue/10 rounded flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-tech-blue" />
                  </div>
                  <h3 className="font-outfit font-bold text-lg text-deep-navy mb-2">{service.name}</h3>
                  <p className="font-ibm text-sm text-gray-600">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <h2 className="font-outfit font-bold text-2xl md:text-3xl text-deep-navy mb-6">
              Votre expert en dépannage informatique à {location.name}
            </h2>
            <div className="font-ibm text-gray-600 space-y-4 leading-relaxed">
              <p>
                <strong>Allo PC Dépannage</strong> intervient à {location.name} ({location.postal_code}) depuis 2002. 
                Notre équipe de techniciens qualifiés se déplace à votre domicile ou sur votre lieu de travail 
                pour résoudre tous vos problèmes informatiques.
              </p>
              <p>
                Que vous soyez confronté à un <strong>ordinateur qui ne démarre plus</strong>, une 
                <strong> infection virale</strong>, une <strong>perte de données</strong> ou besoin 
                d'installer un <strong>réseau WiFi</strong>, nous avons la solution.
              </p>
              <p>
                Nos forfaits incluent une <strong>obligation de résultat</strong> : vous ne payez que si 
                le problème est résolu. C'est notre engagement qualité depuis plus de 20 ans.
              </p>
              <p>
                Nous intervenons dans tous les quartiers de {location.name} : {location.neighborhoods.join(', ')}.
              </p>
            </div>
          </article>
        </div>
      </section>

      <FAQ />
      <CTA />
    </main>
  );
}
