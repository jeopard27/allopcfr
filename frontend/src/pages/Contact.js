import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Monitor, Apple, MessageCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const WHATSAPP_NUMBER = "33140883030";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour, j'ai besoin d'un dépannage informatique.`;

const SERVICES_OPTIONS = [
  "Dépannage PC",
  "Dépannage Mac",
  "Suppression virus",
  "Récupération données",
  "Installation réseau",
  "Réparation matériel",
  "Formation",
  "Autre"
];

const LOCATION_OPTIONS = [
  "Paris 16ème",
  "Paris 17ème",
  "Paris 8ème",
  "Neuilly-sur-Seine",
  "Levallois-Perret",
  "Autre"
];

const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Téléphone",
    content: <a href="tel:0140883030" className="font-body text-lg text-tech-cyan hover:text-tech-gold transition-colors" data-testid="contact-phone">01 40 88 30 30</a>,
    sub: "Disponible 7j/7",
    color: "from-tech-cyan/30 to-tech-blue"
  },
  {
    icon: Mail,
    title: "Email",
    content: <a href="mailto:contact@allopcdepannage.com" className="font-body text-tech-cyan hover:text-tech-gold transition-colors" data-testid="contact-email">contact@allopcdepannage.com</a>,
    sub: null,
    color: "from-tech-gold/30 to-tech-blue"
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: <p className="font-body text-gray-300">Allo PC Dépannage<br />235 Bld Pereire<br />75017 Paris</p>,
    sub: null,
    color: "from-tech-blue to-tech-dark"
  },
  {
    icon: Clock,
    title: "Disponibilité",
    content: <p className="font-body text-gray-300">7 jours sur 7<br />Intervention rapide</p>,
    sub: null,
    color: "from-green-500/30 to-tech-blue"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-body text-[#25D366] hover:text-green-300 transition-colors" data-testid="contact-whatsapp">+33 1 40 88 30 30</a>,
    sub: "Réponse rapide",
    color: "from-[#25D366]/30 to-tech-blue"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', location: '', service: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await axios.post(`${API}/contact`, formData);
      if (response.data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', location: '', service: '', message: '' });
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-tech-dark" data-testid="contact-page">
      {/* Header */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-tech-radial"></div>
        <div className="absolute inset-0 circuit-bg opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Monitor className="w-6 h-6 text-tech-cyan" />
            <Apple className="w-6 h-6 text-white/80" />
          </div>
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            Contactez<span className="text-tech-cyan">-nous</span>
          </h1>
          <p className="font-body text-lg text-gray-400 max-w-2xl mx-auto">
            Une question ? Besoin d'un devis pour votre PC ou Mac ? Notre équipe est à votre disposition
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-5">
            <h2 className="font-heading font-bold text-xl text-white mb-6">Informations</h2>

            {CONTACT_INFO.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start space-x-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white">{item.title}</h3>
                    {item.content}
                    {item.sub && <p className="font-body text-sm text-gray-500 mt-1">{item.sub}</p>}
                  </div>
                </div>
              );
            })}

            {/* Urgence CTA */}
            <div className="mt-8 p-5 tech-card rounded-xl">
              <h3 className="font-heading font-bold text-tech-gold mb-2">Urgence PC ou Mac ?</h3>
              <p className="font-body text-sm text-gray-400 mb-4">
                Pour une intervention rapide, appelez-nous ou contactez-nous sur WhatsApp.
              </p>
              <div className="flex flex-col space-y-3">
                <a
                  href="tel:0140883030"
                  className="btn-tech flex items-center justify-center space-x-2 text-sm"
                  data-testid="contact-urgent-call"
                >
                  <Phone className="w-4 h-4" />
                  <span>Appeler maintenant</span>
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-green-500 text-white px-5 py-3 rounded-full font-heading font-semibold text-sm transition-all shadow-lg shadow-[#25D366]/30"
                  data-testid="contact-whatsapp-btn"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="tech-card rounded-xl p-6 md:p-8">
              <h2 className="font-heading font-bold text-xl text-white mb-2">
                Demande de devis gratuit
              </h2>
              <p className="font-body text-gray-400 mb-6">
                Décrivez votre problème PC ou Mac et nous vous recontacterons rapidement.
              </p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center space-x-3" data-testid="success-message">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <p className="font-body text-green-300">
                    Votre message a été envoyé avec succès. Nous vous recontacterons rapidement.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg" data-testid="error-message">
                  <p className="font-body text-red-300">
                    Une erreur s'est produite. Veuillez réessayer ou nous appeler directement.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block font-body font-medium text-gray-300 mb-2">Nom complet *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-3 bg-tech-dark border border-tech-cyan/20 rounded-lg focus:ring-2 focus:ring-tech-cyan focus:border-tech-cyan font-body text-white placeholder-gray-500"
                      placeholder="Jean Dupont" data-testid="input-name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-body font-medium text-gray-300 mb-2">Email *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-3 bg-tech-dark border border-tech-cyan/20 rounded-lg focus:ring-2 focus:ring-tech-cyan focus:border-tech-cyan font-body text-white placeholder-gray-500"
                      placeholder="jean@exemple.fr" data-testid="input-email" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-body font-medium text-gray-300 mb-2">Téléphone</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-3 bg-tech-dark border border-tech-cyan/20 rounded-lg focus:ring-2 focus:ring-tech-cyan focus:border-tech-cyan font-body text-white placeholder-gray-500"
                      placeholder="06 12 34 56 78" data-testid="input-phone" />
                  </div>
                  <div>
                    <label htmlFor="location" className="block font-body font-medium text-gray-300 mb-2">Votre localisation</label>
                    <select id="location" name="location" value={formData.location} onChange={handleChange}
                      className="w-full px-4 py-3 bg-tech-dark border border-tech-cyan/20 rounded-lg focus:ring-2 focus:ring-tech-cyan focus:border-tech-cyan font-body text-white"
                      data-testid="input-location">
                      <option value="">Sélectionnez</option>
                      {LOCATION_OPTIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block font-body font-medium text-gray-300 mb-2">Type de service</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange}
                    className="w-full px-4 py-3 bg-tech-dark border border-tech-cyan/20 rounded-lg focus:ring-2 focus:ring-tech-cyan focus:border-tech-cyan font-body text-white"
                    data-testid="input-service">
                    <option value="">Sélectionnez</option>
                    {SERVICES_OPTIONS.map(svc => <option key={svc} value={svc}>{svc}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-body font-medium text-gray-300 mb-2">Décrivez votre problème *</label>
                  <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-3 bg-tech-dark border border-tech-cyan/20 rounded-lg focus:ring-2 focus:ring-tech-cyan focus:border-tech-cyan font-body text-white placeholder-gray-500 resize-none"
                    placeholder="Mon ordinateur (PC ou Mac) ne démarre plus depuis ce matin..."
                    data-testid="input-message" />
                </div>

                <button type="submit" disabled={isSubmitting}
                  className="w-full md:w-auto btn-tech inline-flex items-center justify-center space-x-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="submit-button">
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin w-5 h-5 border-2 border-tech-dark border-t-transparent rounded-full"></span>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer ma demande</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
