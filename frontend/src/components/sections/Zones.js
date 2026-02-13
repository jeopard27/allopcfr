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
    <section id="zones" className="py-20 md:py-32 bg-white" data-testid="zones-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-outfit font-semibold text-tech-blue text-sm uppercase tracking-widest mb-4">
            Zones d'intervention
          </span>
          <h2 className="font-outfit font-extrabold text-4xl md:text-5xl text-deep-navy tracking-tight mb-6">
            PRÈS DE CHEZ VOUS
          </h2>
          <p className="font-ibm text-lg text-gray-600 max-w-2xl mx-auto">
            Nous intervenons rapidement dans l'Ouest parisien et les communes limitrophes
          </p>
        </div>

        {/* Map placeholder + Locations */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Map */}
          <div className="lg:col-span-2 relative rounded overflow-hidden h-64 lg:h-auto min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
              alt="Carte de Paris"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-deep-navy/60 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-alert-orange" />
                <p className="font-outfit font-bold text-2xl mb-2">Paris Ouest</p>
                <p className="font-ibm text-sm opacity-90">& communes limitrophes</p>
              </div>
            </div>
          </div>

          {/* Location Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LOCATIONS.map((location) => (
              <Link
                key={location.slug}
                to={location.path}
                className={`block p-6 rounded border transition-all hover:shadow-lg hover:-translate-y-1 ${
                  location.featured 
                    ? 'bg-tech-blue text-white border-tech-blue' 
                    : 'bg-white border-gray-200 hover:border-tech-blue'
                }`}
                data-testid={`zone-${location.slug}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`font-outfit font-bold text-lg ${location.featured ? 'text-white' : 'text-deep-navy'}`}>
                    {location.name}
                  </h3>
                  <span className={`text-xs font-ibm px-2 py-1 rounded ${
                    location.featured ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {location.postalCode}
                  </span>
                </div>
                <p className={`font-ibm text-sm ${location.featured ? 'text-white/80' : 'text-gray-500'}`}>
                  {location.neighborhoods.join(" • ")}
                </p>
                {location.featured && (
                  <span className="inline-block mt-3 text-xs font-outfit font-semibold bg-alert-orange px-3 py-1 rounded">
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
