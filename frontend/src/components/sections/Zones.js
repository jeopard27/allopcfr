import { MapPin } from 'lucide-react';
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
    <section id="zones" className="py-16 md:py-24 bg-white" data-testid="zones-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-heading font-semibold text-brand-blue text-sm uppercase tracking-widest mb-4">
            Zones d'intervention
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-navy mb-4">
            Dépannage PC & Mac près de chez vous
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Nous intervenons rapidement dans l'Ouest parisien et les communes limitrophes
          </p>
        </div>

        {/* Map + Locations */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Map */}
          <div className="lg:col-span-2 relative rounded-xl overflow-hidden h-64 lg:h-auto min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
              alt="Carte de Paris"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-navy/70 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-brand-blue-light" />
                <p className="font-heading font-bold text-2xl mb-2">Paris Ouest</p>
                <p className="font-body text-sm opacity-90">& communes limitrophes</p>
              </div>
            </div>
          </div>

          {/* Location Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LOCATIONS.map((location) => (
              <Link
                key={location.slug}
                to={location.path}
                className={`block p-5 rounded-xl border transition-all hover:shadow-lg hover:-translate-y-1 ${
                  location.featured 
                    ? 'bg-brand-blue text-white border-brand-blue' 
                    : 'bg-white border-gray-200 hover:border-brand-blue'
                }`}
                data-testid={`zone-${location.slug}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className={`font-heading font-bold text-lg ${location.featured ? 'text-white' : 'text-brand-navy'}`}>
                    {location.name}
                  </h3>
                  <span className={`text-xs font-body px-2 py-1 rounded ${
                    location.featured ? 'bg-white/20 text-white' : 'bg-brand-sky text-brand-blue'
                  }`}>
                    {location.postalCode}
                  </span>
                </div>
                <p className={`font-body text-sm ${location.featured ? 'text-white/80' : 'text-gray-500'}`}>
                  {location.neighborhoods.join(" • ")}
                </p>
                {location.featured && (
                  <span className="inline-block mt-3 text-xs font-heading font-semibold bg-white/20 px-3 py-1 rounded">
                    SIÈGE SOCIAL
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
