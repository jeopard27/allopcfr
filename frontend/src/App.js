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
    // Default SEO
    if (location.pathname === '/') {
      document.title = "Allo PC Dépannage | Dépannage Informatique Paris - Depuis 2002";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.content = "Dépannage informatique à domicile à Paris et région parisienne depuis 2002. Intervention rapide 7j/7. Réparation PC, suppression virus, récupération données. Appelez le 01 40 88 30 30";
      }
    } else if (location.pathname === '/contact') {
      document.title = "Contact | Allo PC Dépannage - Devis Gratuit";
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
