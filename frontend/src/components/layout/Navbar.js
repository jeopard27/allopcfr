import { Phone, Menu, X, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const COMPANY = {
  name: "Allo PC Dépannage",
  phone: "01 40 88 30 30",
  phoneLink: "tel:0140883030",
  address: "235 Bld Pereire, 75017 Paris"
};

const NAV_LINKS = [
  { name: "Accueil", path: "/" },
  { name: "Services", path: "/#services" },
  { name: "Zones d'intervention", path: "/#zones" },
  { name: "Contact", path: "/contact" }
];

const LOCATION_LINKS = [
  { name: "Paris 16", path: "/depannage-pc-paris-16" },
  { name: "Paris 17", path: "/depannage-pc-paris-17" },
  { name: "Paris 8", path: "/depannage-pc-paris-8" },
  { name: "Neuilly", path: "/depannage-pc-neuilly-sur-seine" },
  { name: "Levallois", path: "/depannage-informatique-levallois-perret" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" data-testid="logo-link">
            <img 
              src="https://allopcdepannage.fr/img/AlloPC_04.gif" 
              alt="Allo PC Dépannage" 
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-body text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-brand-blue' : 'text-gray-700 hover:text-brand-blue'
                }`}
                data-testid={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Locations Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowLocations(true)}
              onMouseLeave={() => setShowLocations(false)}
            >
              <button 
                className="flex items-center space-x-1 font-body text-sm font-medium text-gray-700 hover:text-brand-blue"
                data-testid="locations-dropdown"
              >
                <MapPin className="w-4 h-4" />
                <span>Localités</span>
              </button>
              
              {showLocations && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  {LOCATION_LINKS.map((loc) => (
                    <Link
                      key={loc.name}
                      to={loc.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-sky hover:text-brand-blue"
                      data-testid={`loc-${loc.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Phone CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={COMPANY.phoneLink}
              className="flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue-dark text-white px-5 py-2.5 rounded-lg font-heading font-semibold text-sm transition-all shadow-md"
              data-testid="call-button"
            >
              <Phone className="w-4 h-4" />
              <span>{COMPANY.phone}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-button"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block py-2 font-body text-gray-700 hover:text-brand-blue"
                onClick={() => setIsOpen(false)}
                data-testid={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-2 font-semibold uppercase">Zones d'intervention</p>
              {LOCATION_LINKS.map((loc) => (
                <Link
                  key={loc.name}
                  to={loc.path}
                  className="block py-1.5 text-sm text-gray-600 hover:text-brand-blue"
                  onClick={() => setIsOpen(false)}
                >
                  {loc.name}
                </Link>
              ))}
            </div>

            {/* Mobile call button */}
            <a
              href={COMPANY.phoneLink}
              className="block w-full text-center bg-brand-blue text-white px-4 py-3 rounded-lg font-heading font-semibold mt-4"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
