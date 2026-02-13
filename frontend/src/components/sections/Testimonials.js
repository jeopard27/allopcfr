import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Marie L.",
    location: "Paris 17",
    rating: 5,
    text: "Intervention rapide et efficace ! Mon PC ne démarrait plus et le technicien a tout réparé en moins d'une heure. Je recommande vivement !",
    service: "Dépannage PC"
  },
  {
    name: "Jean-Pierre D.",
    location: "Neuilly-sur-Seine",
    rating: 5,
    text: "Excellent service ! Mon MacBook avait un problème de disque dur. Ils ont récupéré toutes mes données. Équipe très professionnelle.",
    service: "Réparation Mac"
  },
  {
    name: "Sophie M.",
    location: "Paris 16",
    rating: 5,
    text: "Depuis 2002 ils dépannent ma famille. PC comme Mac, ils savent tout faire. Toujours disponibles, même le dimanche.",
    service: "Fidèle cliente"
  },
  {
    name: "Laurent B.",
    location: "Levallois-Perret",
    rating: 5,
    text: "Installation de mon réseau WiFi impeccable. Le technicien a connecté mon iMac et mes PC sans problème. Rapport qualité/prix excellent.",
    service: "Installation réseau"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-brand-navy" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-heading font-semibold text-brand-blue-light text-sm uppercase tracking-widest mb-4">
            Témoignages
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Ils nous font confiance
          </h2>
          <p className="font-body text-lg text-gray-400 max-w-2xl mx-auto">
            Des milliers de clients PC et Mac satisfaits depuis 2002
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-8 h-8 text-brand-blue-light opacity-50" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="font-body text-white/90 leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <p className="font-heading font-semibold text-white">{testimonial.name}</p>
                  <p className="font-body text-sm text-gray-400">{testimonial.location}</p>
                </div>
                <span className="font-body text-xs text-brand-blue-light bg-brand-blue/20 px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/5 rounded-xl p-4">
            <p className="font-heading font-bold text-3xl md:text-4xl text-white">+20</p>
            <p className="font-body text-sm text-gray-400 mt-1">Années d'expérience</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="font-heading font-bold text-3xl md:text-4xl text-brand-blue-light">+10K</p>
            <p className="font-body text-sm text-gray-400 mt-1">Clients satisfaits</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="font-heading font-bold text-3xl md:text-4xl text-white">&lt;30</p>
            <p className="font-body text-sm text-gray-400 mt-1">Min d'intervention</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <p className="font-heading font-bold text-3xl md:text-4xl text-brand-blue-light">7/7</p>
            <p className="font-body text-sm text-gray-400 mt-1">Jours disponibles</p>
          </div>
        </div>
      </div>
    </section>
  );
}
