import { Phone, Menu, X, MapPin, ChevronDown, Zap } from 'lucide-react';
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

  const handleNavClick = (e, link) => {
    if (link.hash) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(link.hash);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(link.hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40">
      {/* Logo Bar */}
      <div className="bg-tech-dark border-b border-tech-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link to="/" className="flex items-center justify-center space-x-3" data-testid="logo-link">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-tech-gold to-tech-orange flex items-center justify-center shadow-lg shadow-tech-gold/30">
              <Zap className="w-6 h-6 text-tech-dark" />
            </div>
            <span className="font-heading font-black text-2xl md:text-3xl tracking-tight">
              <span className="text-white">ALLO</span>
              <span className="text-tech-cyan ml-1">PC</span>
              <span className="text-tech-cyan ml-2 font-light tracking-wide">DÉPANNAGE</span>
            </span>
          </Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-tech-dark via-tech-blue/40 to-tech-dark backdrop-blur-md border-b border-tech-cyan/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`relative px-4 lg:px-5 py-2 font-heading font-semibold text-xs lg:text-sm uppercase tracking-wider transition-all duration-300 rounded group ${
                      isActive(link.path) && !link.hash
                        ? 'text-tech-cyan' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                    data-testid={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-tech-gold transition-all duration-300 ${
                      isActive(link.path) && !link.hash ? 'w-full' : 'w-0 group-hover:w-3/4'
                    }`}></span>
                  </Link>
                ))}
                
                {/* Separator */}
                <div className="w-px h-5 bg-tech-cyan/20 mx-1"></div>

                {/* Locations Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setShowLocations(true)}
                  onMouseLeave={() => setShowLocations(false)}
                >
                  <button 
                    className="flex items-center space-x-1.5 px-4 lg:px-5 py-2 font-heading font-semibold text-xs lg:text-sm uppercase tracking-wider text-gray-400 hover:text-white transition-all duration-300 rounded group"
                    data-testid="locations-dropdown"
                  >
                    <MapPin className="w-3.5 h-3.5 text-tech-gold" />
                    <span>Localités</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showLocations ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div className={`absolute top-full left-0 mt-1 w-56 bg-tech-dark/98 backdrop-blur-xl rounded-lg shadow-2xl shadow-black/50 border border-tech-cyan/20 py-1 transition-all duration-200 origin-top ${
                    showLocations ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                  }`}>
                    {LOCATION_LINKS.map((loc) => (
                      <Link
                        key={loc.name}
                        to={loc.path}
                        className="flex items-center px-4 py-2.5 text-sm text-gray-400 hover:bg-tech-cyan/10 hover:text-white transition-all duration-150"
                        data-testid={`loc-${loc.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <MapPin className="w-3.5 h-3.5 mr-3 text-tech-gold" />
                        <span className="font-body font-medium">{loc.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Phone CTA */}
            <div className="hidden md:flex items-center">
              <a
                href={COMPANY.phoneLink}
                className="flex items-center space-x-2 bg-gradient-to-r from-tech-gold to-tech-orange text-tech-dark px-5 py-2 rounded-full font-heading font-bold text-sm transition-all duration-300 shadow-md shadow-tech-gold/30 hover:shadow-tech-gold/50 hover:scale-105"
                data-testid="call-button"
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY.phone}</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center justify-between w-full">
              <span className="font-heading font-bold text-sm text-white">Menu</span>
              <button
                className="p-2 rounded-lg hover:bg-tech-cyan/10 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                data-testid="mobile-menu-button"
              >
                {isOpen ? <X className="w-6 h-6 text-tech-cyan" /> : <Menu className="w-6 h-6 text-tech-cyan" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-tech-dark/98 backdrop-blur-xl border-t border-tech-cyan/15 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => {
                  handleNavClick(e, link);
                  setIsOpen(false);
                }}
                className={`block py-3 px-4 font-heading font-semibold text-sm rounded-lg transition-all duration-200 ${
                  isActive(link.path) && !link.hash
                    ? 'bg-tech-cyan/10 text-tech-cyan border-l-2 border-tech-gold' 
                    : 'text-gray-400 hover:bg-tech-cyan/5 hover:text-white'
                }`}
                data-testid={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-3 border-t border-tech-cyan/10">
              <p className="text-xs text-tech-gold mb-2 px-4 font-heading font-semibold uppercase tracking-wider">Nos localités</p>
              {LOCATION_LINKS.map((loc) => (
                <Link
                  key={loc.name}
                  to={loc.path}
                  className="flex items-center py-2.5 px-4 text-sm text-gray-500 hover:text-white hover:bg-tech-cyan/5 rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <MapPin className="w-3.5 h-3.5 mr-2 text-tech-gold" />
                  {loc.name}
                </Link>
              ))}
            </div>

            <a
              href={COMPANY.phoneLink}
              className="btn-tech flex items-center justify-center space-x-2 w-full mt-4"
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
