import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const SERVICES_OPTIONS = [
  "Dépannage urgent",
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    message: ''
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
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          service: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-clinical-white" data-testid="contact-page">
      {/* Header */}
      <section className="bg-deep-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-outfit font-extrabold text-4xl md:text-5xl text-white tracking-tight mb-6">
            CONTACTEZ-NOUS
          </h1>
          <p className="font-ibm text-lg text-gray-400 max-w-2xl mx-auto">
            Une question ? Besoin d'un devis ? Notre équipe est à votre disposition
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="font-outfit font-bold text-2xl text-deep-navy mb-8">
              Informations
            </h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-alert-orange rounded flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-outfit font-semibold text-deep-navy">Téléphone</h3>
                  <a href="tel:0140883030" className="font-ibm text-lg text-tech-blue hover:text-alert-orange transition-colors" data-testid="contact-phone">
                    01 40 88 30 30
                  </a>
                  <p className="font-ibm text-sm text-gray-500 mt-1">Disponible 7j/7</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-tech-blue rounded flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-outfit font-semibold text-deep-navy">Email</h3>
                  <a href="mailto:contact@allopcdepannage.com" className="font-ibm text-tech-blue hover:text-alert-orange transition-colors" data-testid="contact-email">
                    contact@allopcdepannage.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-deep-navy rounded flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-outfit font-semibold text-deep-navy">Adresse</h3>
                  <p className="font-ibm text-gray-600">
                    Allo PC Dépannage<br />
                    235 Bld Pereire<br />
                    75017 Paris
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-outfit font-semibold text-deep-navy">Disponibilité</h3>
                  <p className="font-ibm text-gray-600">
                    7 jours sur 7<br />
                    Intervention rapide
                  </p>
                </div>
              </div>
            </div>

            {/* Quick call CTA */}
            <div className="mt-10 p-6 bg-alert-orange/10 rounded border border-alert-orange/20">
              <h3 className="font-outfit font-bold text-deep-navy mb-2">Urgence ?</h3>
              <p className="font-ibm text-sm text-gray-600 mb-4">
                Pour une intervention rapide, appelez-nous directement.
              </p>
              <a
                href="tel:0140883030"
                className="inline-flex items-center space-x-2 bg-alert-orange text-white px-6 py-3 rounded font-outfit font-semibold btn-primary"
                data-testid="contact-urgent-call"
              >
                <Phone className="w-5 h-5" />
                <span>Appeler maintenant</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="font-outfit font-bold text-2xl text-deep-navy mb-2">
                Demande de devis gratuit
              </h2>
              <p className="font-ibm text-gray-600 mb-8">
                Décrivez votre problème et nous vous recontacterons rapidement.
              </p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded flex items-center space-x-3" data-testid="success-message">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <p className="font-ibm text-green-700">
                    Votre message a été envoyé avec succès. Nous vous recontacterons rapidement.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded" data-testid="error-message">
                  <p className="font-ibm text-red-700">
                    Une erreur s'est produite. Veuillez réessayer ou nous appeler directement.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block font-ibm font-medium text-deep-navy mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-tech-blue focus:border-tech-blue font-ibm"
                      placeholder="Jean Dupont"
                      data-testid="input-name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block font-ibm font-medium text-deep-navy mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-tech-blue focus:border-tech-blue font-ibm"
                      placeholder="jean@exemple.fr"
                      data-testid="input-email"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block font-ibm font-medium text-deep-navy mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-tech-blue focus:border-tech-blue font-ibm"
                      placeholder="06 12 34 56 78"
                      data-testid="input-phone"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="location" className="block font-ibm font-medium text-deep-navy mb-2">
                      Votre localisation
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-tech-blue focus:border-tech-blue font-ibm"
                      data-testid="input-location"
                    >
                      <option value="">Sélectionnez</option>
                      {LOCATION_OPTIONS.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block font-ibm font-medium text-deep-navy mb-2">
                    Type de service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-tech-blue focus:border-tech-blue font-ibm"
                    data-testid="input-service"
                  >
                    <option value="">Sélectionnez</option>
                    {SERVICES_OPTIONS.map(svc => (
                      <option key={svc} value={svc}>{svc}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-ibm font-medium text-deep-navy mb-2">
                    Décrivez votre problème *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-tech-blue focus:border-tech-blue font-ibm resize-none"
                    placeholder="Mon ordinateur ne démarre plus depuis ce matin..."
                    data-testid="input-message"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-tech-blue text-white px-8 py-4 rounded font-outfit font-semibold text-lg btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="submit-button"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
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
