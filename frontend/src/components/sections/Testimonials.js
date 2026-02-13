import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Marie L.",
    location: "Paris 17",
    rating: 5,
    text: "Intervention rapide et efficace ! Mon PC ne démarrait plus et le technicien a tout réparé en moins d'une heure. Je recommande vivement !",
    service: "Dépannage urgent"
  },
  {
    name: "Jean-Pierre D.",
    location: "Neuilly-sur-Seine",
    rating: 5,
    text: "Excellent service ! J'ai récupéré toutes mes photos de famille que je croyais perdues. Équipe très professionnelle et tarifs transparents.",
    service: "Récupération données"
  },
  {
    name: "Sophie M.",
    location: "Paris 16",
    rating: 5,
    text: "Depuis 2002 ils dépannent ma famille. Toujours disponibles, même le dimanche. Un vrai partenaire de confiance pour l'informatique.",
    service: "Fidèle cliente"
  },
  {
    name: "Laurent B.",
    location: "Levallois-Perret",
    rating: 5,
    text: "Installation de mon réseau WiFi impeccable. Le technicien a pris le temps de tout m'expliquer. Rapport qualité/prix excellent.",
    service: "Installation réseau"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-deep-navy" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-outfit font-semibold text-alert-orange text-sm uppercase tracking-widest mb-4">
            Témoignages
          </span>
          <h2 className="font-outfit font-extrabold text-4xl md:text-5xl text-white tracking-tight mb-6">
            ILS NOUS FONT CONFIANCE
          </h2>
          <p className="font-ibm text-lg text-gray-400 max-w-2xl mx-auto">
            Des milliers de clients satisfaits depuis 2002
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded p-8"
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-10 h-10 text-tech-blue opacity-50" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="font-ibm text-white/90 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <p className="font-outfit font-bold text-white">{testimonial.name}</p>
                  <p className="font-ibm text-sm text-gray-400">{testimonial.location}</p>
                </div>
                <span className="font-ibm text-xs text-tech-blue bg-tech-blue/20 px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="font-outfit font-extrabold text-4xl md:text-5xl text-white">+20</p>
            <p className="font-ibm text-gray-400 mt-2">Années d'expérience</p>
          </div>
          <div>
            <p className="font-outfit font-extrabold text-4xl md:text-5xl text-alert-orange">+10K</p>
            <p className="font-ibm text-gray-400 mt-2">Clients satisfaits</p>
          </div>
          <div>
            <p className="font-outfit font-extrabold text-4xl md:text-5xl text-white">&lt;30</p>
            <p className="font-ibm text-gray-400 mt-2">Minutes d'intervention</p>
          </div>
          <div>
            <p className="font-outfit font-extrabold text-4xl md:text-5xl text-tech-blue">7/7</p>
            <p className="font-ibm text-gray-400 mt-2">Jours disponibles</p>
          </div>
        </div>
      </div>
    </section>
  );
}
