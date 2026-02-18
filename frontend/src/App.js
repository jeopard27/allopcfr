import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import MobileCallBar from "./components/layout/MobileCallBar";

// Pages
import Home from "./pages/Home";
import LocationPage from "./pages/LocationPage";
import Contact from "./pages/Contact";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// SEO Helmet replacement
function SEOHead() {
  const location = useLocation();
  
  useEffect(() => {
    const setMeta = (name, content, prop = 'name') => {
      let el = document.querySelector(`meta[${prop}="${name}"]`);
      if (!el) { el = document.createElement('meta'); el[prop === 'name' ? 'name' : 'setAttribute'](prop === 'name' ? 'name' : prop, name); document.head.appendChild(el); }
      if (prop !== 'name') el.setAttribute(prop, name);
      el.content = content;
    };

    if (location.pathname === '/') {
      document.title = "Allo PC Dépannage | Dépannage Informatique PC & Mac Paris - Depuis 2002";
      setMeta('description', "Dépannage informatique à domicile à Paris et région parisienne. Intervention rapide 7j/7 en moins de 30 min. Réparation PC et Mac, suppression virus, récupération données. Appelez le 01 40 88 30 30");
    } else if (location.pathname === '/contact') {
      document.title = "Contact | Allo PC Dépannage - Dépannage Informatique Paris";
      setMeta('description', "Contactez Allo PC Dépannage pour un dépannage informatique PC ou Mac à Paris. Téléphone, email, WhatsApp. Intervention rapide 7j/7. 01 40 88 30 30");
    }
  }, [location]);
  
  return null;
}

function AppContent() {
  return (
    <div className="App min-h-screen flex flex-col">
      <ScrollToTop />
      <SEOHead />
      <Navbar />
      <div className="flex-1 pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* SEO Location Pages */}
          <Route path="/depannage-pc-paris-16" element={<LocationPage />} />
          <Route path="/depannage-pc-paris-17" element={<LocationPage />} />
          <Route path="/depannage-pc-paris-8" element={<LocationPage />} />
          <Route path="/depannage-pc-neuilly-sur-seine" element={<LocationPage />} />
          <Route path="/depannage-informatique-levallois-perret" element={<LocationPage />} />
          
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
      <MobileCallBar />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
