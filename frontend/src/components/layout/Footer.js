import { Phone, Mail, MapPin, Clock, Zap, Monitor, Apple } from 'lucide-react';
import { Link } from 'react-router-dom';

const COMPANY = {
  name: "Allo PC Dépannage",
  phone: "01 40 88 30 30",
  phoneLink: "tel:0140883030",
  email: "contact@allopcdepannage.com",
  address: "235 Bld Pereire, 75017 Paris"
};

const SERVICES_LINKS = [
  { name: "Dépannage PC", path: "/#services" },
  { name: "Dépannage Mac", path: "/#services" },
  { name: "Suppression Virus", path: "/#services" },
  { name: "Récupération Données", path: "/#services" },
  { name: "Télé-assistance", path: "/#teleassistance" }
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
    <footer className="bg-tech-dark border-t border-tech-cyan/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-tech-gold to-tech-orange flex items-center justify-center">
                <Zap className="w-6 h-6 text-tech-dark" />
              </div>
              <span className="font-heading font-black text-xl">
                <span className="text-white">ALLO</span>
                <span className="text-tech-cyan">PC</span>
              </span>
            </div>
            <p className="font-body text-gray-400 text-sm leading-relaxed mb-6">
              Depuis 2002, votre partenaire informatique de confiance à Paris. 
              Dépannage PC et Mac 7j/7.
            </p>
            
            {/* PC & Mac */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1 text-tech-cyan">
                <Monitor className="w-4 h-4" />
                <span className="text-xs font-semibold">PC</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-400">
                <Apple className="w-4 h-4" />
                <span className="text-xs font-semibold">Mac</span>
              </div>
            </div>

            <div className="space-y-3">
              <a href={COMPANY.phoneLink} className="flex items-center space-x-3 text-gray-400 hover:text-tech-gold transition-colors" data-testid="footer-phone">
                <Phone className="w-4 h-4 text-tech-gold" />
                <span className="font-body text-sm">{COMPANY.phone}</span>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center space-x-3 text-gray-400 hover:text-tech-cyan transition-colors" data-testid="footer-email">
                <Mail className="w-4 h-4 text-tech-cyan" />
                <span className="font-body text-sm">{COMPANY.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-tech-gold" />
                <span className="font-body text-sm">{COMPANY.address}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path} 
                    className="font-body text-sm text-gray-400 hover:text-tech-cyan transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-6">Localités</h3>
            <ul className="space-y-3">
              {LOCATIONS_LINKS.map((location) => (
                <li key={location.name}>
                  <Link 
                    to={location.path} 
                    className="font-body text-sm text-gray-400 hover:text-tech-cyan transition-colors"
                    data-testid={`footer-loc-${location.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-6">Besoin d'aide ?</h3>
            <p className="font-body text-gray-400 text-sm mb-6 leading-relaxed">
              Un technicien peut intervenir chez vous en moins de 30 minutes.
            </p>
            <a
              href={COMPANY.phoneLink}
              className="btn-tech inline-flex items-center space-x-2 text-sm"
              data-testid="footer-cta"
            >
              <Phone className="w-4 h-4" />
              <span>Appelez maintenant</span>
            </a>
            <div className="mt-6 p-4 tech-card rounded-xl">
              <p className="font-heading font-semibold text-sm text-tech-gold mb-1">+ de 20 ans d'expérience</p>
              <p className="font-body text-xs text-gray-500">Des milliers de clients satisfaits depuis 2002</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-tech-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-body text-xs text-gray-600">
              © {currentYear} {COMPANY.name}. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link to="/mentions-legales" className="font-body text-xs text-gray-600 hover:text-tech-cyan transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="font-body text-xs text-gray-600 hover:text-tech-cyan transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
