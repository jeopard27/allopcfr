import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const COMPANY = {
  name: "Allo PC Dépannage",
  phone: "01 40 88 30 30",
  phoneLink: "tel:0140883030",
  email: "contact@allopcdepannage.com",
  address: "235 Bld Pereire, 75017 Paris"
};

const SERVICES_LINKS = [
  { name: "Dépannage Urgent", path: "/#services" },
  { name: "Suppression Virus", path: "/#services" },
  { name: "Récupération Données", path: "/#services" },
  { name: "Installation Réseau", path: "/#services" },
  { name: "Formation", path: "/#services" }
];

const LOCATIONS_LINKS = [
  { name: "Paris 16ème", path: "/depannage-pc-paris-16" },
  { name: "Paris 17ème", path: "/depannage-pc-paris-17" },
  { name: "Paris 8ème", path: "/depannage-pc-paris-8" },
  { name: "Neuilly-sur-Seine", path: "/depannage-pc-neuilly-sur-seine" },
  { name: "Levallois-Perret", path: "/depannage-informatique-levallois-perret" }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-tech-blue rounded flex items-center justify-center">
                <span className="text-white font-outfit font-bold text-lg">A</span>
              </div>
              <span className="font-outfit font-bold text-xl">{COMPANY.name}</span>
            </div>
            <p className="font-ibm text-gray-400 text-sm leading-relaxed mb-6">
              Depuis 2002, votre partenaire informatique de confiance à Paris et région parisienne. 
              Intervention rapide 7j/7 pour particuliers et professionnels.
            </p>
            <div className="space-y-3">
              <a href={COMPANY.phoneLink} className="flex items-center space-x-3 text-gray-300 hover:text-alert-orange transition-colors" data-testid="footer-phone">
                <Phone className="w-4 h-4" />
                <span className="font-ibm text-sm">{COMPANY.phone}</span>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center space-x-3 text-gray-300 hover:text-tech-blue transition-colors" data-testid="footer-email">
                <Mail className="w-4 h-4" />
                <span className="font-ibm text-sm">{COMPANY.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="font-ibm text-sm">{COMPANY.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4" />
                <span className="font-ibm text-sm">7j/7 - Intervention rapide</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-outfit font-bold text-lg mb-6 uppercase tracking-wide">Nos Services</h3>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path} 
                    className="font-ibm text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones d'intervention */}
          <div>
            <h3 className="font-outfit font-bold text-lg mb-6 uppercase tracking-wide">Zones d'intervention</h3>
            <ul className="space-y-3">
              {LOCATIONS_LINKS.map((location) => (
                <li key={location.name}>
                  <Link 
                    to={location.path} 
                    className="font-ibm text-sm text-gray-400 hover:text-white transition-colors"
                    data-testid={`footer-loc-${location.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact rapide */}
          <div>
            <h3 className="font-outfit font-bold text-lg mb-6 uppercase tracking-wide">Besoin d'aide ?</h3>
            <p className="font-ibm text-gray-400 text-sm mb-6 leading-relaxed">
              Un technicien peut intervenir chez vous en moins de 30 minutes.
            </p>
            <a
              href={COMPANY.phoneLink}
              className="inline-flex items-center space-x-2 bg-alert-orange text-white px-6 py-3 rounded font-outfit font-semibold btn-primary"
              data-testid="footer-cta"
            >
              <Phone className="w-5 h-5" />
              <span>Appelez maintenant</span>
            </a>
            <div className="mt-8 p-4 bg-white/5 rounded border border-white/10">
              <p className="font-outfit font-semibold text-sm text-alert-orange mb-1">+ de 20 ans d'expérience</p>
              <p className="font-ibm text-xs text-gray-400">Des milliers de clients satisfaits depuis 2002</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-ibm text-sm text-gray-500">
              © {currentYear} {COMPANY.name}. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link to="/mentions-legales" className="font-ibm text-sm text-gray-500 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="font-ibm text-sm text-gray-500 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
