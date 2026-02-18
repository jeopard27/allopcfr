import { MapPin, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const LOCATIONS = [
  {
    name: "Paris 16ème",
    slug: "paris-16",
    path: "/depannage-pc-paris-16",
    neighborhoods: ["Auteuil", "Passy", "Trocadéro"],
    postalCode: "75016"
  },
  {
    name: "Paris 17ème",
    slug: "paris-17",
    path: "/depannage-pc-paris-17",
    neighborhoods: ["Batignolles", "Ternes", "Pereire"],
    postalCode: "75017",
    featured: true
  },
  {
    name: "Paris 8ème",
    slug: "paris-8",
    path: "/depannage-pc-paris-8",
    neighborhoods: ["Champs-Élysées", "Madeleine", "Saint-Lazare"],
    postalCode: "75008"
  },
  {
    name: "Neuilly-sur-Seine",
    slug: "neuilly",
    path: "/depannage-pc-neuilly-sur-seine",
    neighborhoods: ["Ile de la Jatte", "Sablons", "Bagatelle"],
    postalCode: "92200"
  },
  {
    name: "Levallois-Perret",
    slug: "levallois",
    path: "/depannage-informatique-levallois-perret",
    neighborhoods: ["Front de Seine", "Louise Michel", "Président Wilson"],
    postalCode: "92300"
  }
];

export default function Zones() {
  return (
    <section id="zones" className="py-20 md:py-28 bg-tech-dark relative" data-testid="zones-section">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-dark via-tech-blue/10 to-tech-dark"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-2 bg-tech-cyan/20 text-tech-cyan px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4" />
            <span className="font-heading font-semibold text-sm uppercase tracking-widest">Zones d'intervention</span>
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-6">
            Dépannage <span className="text-tech-cyan">PC & Mac</span> près de chez vous
          </h2>
          <p className="font-body text-lg text-gray-400 max-w-2xl mx-auto">
            Nous intervenons rapidement dans l'Ouest parisien et les communes limitrophes
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {LOCATIONS.map((location) => (
            <Link
              key={location.slug}
              to={location.path}
              className={`block p-5 rounded-xl transition-all duration-300 ${
                location.featured 
                  ? 'bg-gradient-to-br from-tech-gold/20 to-tech-orange/10 glow-border' 
                  : 'tech-card'
              }`}
              data-testid={`zone-${location.slug}`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className={`font-heading font-bold text-lg ${
                  location.featured ? 'text-tech-gold' : 'text-white'
                }`}>
                  {location.name}
                </h3>
                <span className={`text-xs font-body px-2 py-1 rounded ${
                  location.featured 
                    ? 'bg-tech-gold/20 text-tech-gold' 
                    : 'bg-tech-cyan/20 text-tech-cyan'
                }`}>
                  {location.postalCode}
                </span>
              </div>
              <p className="font-body text-sm text-gray-400 mb-3">
                {location.neighborhoods.join(" • ")}
              </p>
              {location.featured && (
                <span className="inline-flex items-center space-x-1 text-xs font-heading font-semibold bg-tech-gold/20 text-tech-gold px-3 py-1 rounded">
                  <Zap className="w-3 h-3" />
                  <span>SIÈGE SOCIAL</span>
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
