import { Phone, Menu, X, MapPin, ChevronDown, Monitor } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const COMPANY = {
  name: "Allo PC Dépannage",
  phone: "01 40 88 30 30",
  phoneLink: "tel:0140883030",
};

const NAV_LINKS = [
  { name: "Accueil", path: "/", hash: null },
  { name: "Services", path: "/", hash: "#services" },
  { name: "Assistance informatique", path: "/", hash: "#teleassistance" },
  { name: "Contact", path: "/contact", hash: null }
];

const LOCATION_LINKS = [
  { name: "Paris 16ème", path: "/depannage-pc-paris-16" },
  { name: "Paris 17ème", path: "/depannage-pc-paris-17" },
  { name: "Paris 8ème", path: "/depannage-pc-paris-8" },
  { name: "Neuilly-sur-Seine", path: "/depannage-pc-neuilly-sur-seine" },
  { name: "Levallois-Perret", path: "/depannage-informatique-levallois-perret" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Handle navigation with hash
  const handleNavClick = (e, link) => {
    if (link.hash) {
      e.preventDefault();
      if (location.pathname !== '/') {
        // Navigate to home first, then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(link.hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home, just scroll
        const element = document.querySelector(link.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className="sticky top-0 z-40">
      {/* Top Banner - Full Width with original logo style */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 w-full">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="block" data-testid="logo-link">
            <img 
              src="https://allopcdepannage.fr/img/AlloPC_04.gif" 
              alt="Allo PC Dépannage" 
              className="w-full max-w-3xl h-auto mx-auto"
            />
          </Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b-4 border-blue-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.hash ? link.path : link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative px-5 py-2 font-heading font-semibold text-sm uppercase tracking-wide transition-all duration-300 rounded-md group ${
                    isActive(link.path) && !link.hash
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                  data-testid={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {!(isActive(link.path) && !link.hash) && (
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
                  )}
                </Link>
              ))}
              
              {/* Locations Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowLocations(true)}
                onMouseLeave={() => setShowLocations(false)}
              >
                <button 
                  className="flex items-center space-x-1 px-5 py-2 font-heading font-semibold text-sm uppercase tracking-wide text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 rounded-md group"
                  data-testid="locations-dropdown"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Localités</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showLocations ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-2xl border border-gray-100 py-2 transition-all duration-300 origin-top ${
                  showLocations ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                }`}>
                  {LOCATION_LINKS.map((loc, index) => (
                    <Link
                      key={loc.name}
                      to={loc.path}
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-blue-600 transition-all duration-200 group"
                      style={{ animationDelay: `${index * 50}ms` }}
                      data-testid={`loc-${loc.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <MapPin className="w-4 h-4 mr-3 text-blue-400 group-hover:text-blue-600 transition-colors" />
                      <span className="font-medium">{loc.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Phone CTA */}
            <div className="hidden md:flex items-center">
              <a
                href={COMPANY.phoneLink}
                className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2.5 rounded-full font-heading font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-subtle"
                data-testid="call-button"
              >
                <Phone className="w-4 h-4 animate-wiggle" />
                <span>{COMPANY.phone}</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="mobile-menu-button"
            >
              {isOpen ? <X className="w-6 h-6 text-blue-600" /> : <Menu className="w-6 h-6 text-blue-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-4 space-y-2">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-3 px-4 font-heading font-semibold rounded-lg transition-all duration-200 ${
                  isActive(link.path) 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
                data-testid={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-2 px-4 font-semibold uppercase">Zones d'intervention</p>
              {LOCATION_LINKS.map((loc) => (
                <Link
                  key={loc.name}
                  to={loc.path}
                  className="flex items-center py-2 px-4 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                  {loc.name}
                </Link>
              ))}
            </div>

            {/* Mobile call button */}
            <a
              href={COMPANY.phoneLink}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 rounded-full font-heading font-bold mt-4"
            >
              <Phone className="w-5 h-5" />
              <span>{COMPANY.phone}</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
