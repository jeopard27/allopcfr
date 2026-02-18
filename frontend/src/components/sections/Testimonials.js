import { Star, Quote, Zap } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Marie L.",
    location: "Paris 17",
    rating: 5,
    text: "Intervention rapide et efficace ! Mon PC ne démarrait plus et le technicien a tout réparé en moins d'une heure.",
    service: "Dépannage PC"
  },
  {
    name: "Jean-Pierre D.",
    location: "Neuilly-sur-Seine",
    rating: 5,
    text: "Mon MacBook avait un problème de disque dur. Ils ont récupéré toutes mes données. Équipe très professionnelle.",
    service: "Réparation Mac"
  },
  {
    name: "Sophie M.",
    location: "Paris 16",
    rating: 5,
    text: "Depuis 2002 ils dépannent ma famille. PC comme Mac, ils savent tout faire. Toujours disponibles !",
    service: "Fidèle cliente"
  },
  {
    name: "Laurent B.",
    location: "Levallois-Perret",
    rating: 5,
    text: "Installation de mon réseau WiFi impeccable. Le technicien a connecté mon iMac et mes PC sans problème.",
    service: "Installation réseau"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-tech-dark relative" data-testid="testimonials-section">
      <div className="absolute inset-0 bg-gradient-to-r from-tech-dark via-tech-blue/20 to-tech-dark"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-2 bg-tech-gold/20 text-tech-gold px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4" />
            <span className="font-heading font-semibold text-sm uppercase tracking-widest">Témoignages</span>
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-6">
            Ils nous font <span className="text-tech-gold text-glow-gold">confiance</span>
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
              className="tech-card rounded-xl p-6"
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-8 h-8 text-tech-cyan opacity-50" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-tech-gold fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="font-body text-gray-300 leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-tech-cyan/20">
                <div>
                  <p className="font-heading font-semibold text-white">{testimonial.name}</p>
                  <p className="font-body text-sm text-gray-500">{testimonial.location}</p>
                </div>
                <span className="font-body text-xs text-tech-cyan bg-tech-cyan/20 px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="tech-card rounded-xl p-6">
            <p className="font-heading font-black text-4xl text-white">+20</p>
            <p className="font-body text-sm text-gray-400 mt-2">Années d'expérience</p>
          </div>
          <div className="tech-card rounded-xl p-6">
            <p className="font-heading font-black text-4xl text-tech-gold">+10K</p>
            <p className="font-body text-sm text-gray-400 mt-2">Clients satisfaits</p>
          </div>
          <div className="tech-card rounded-xl p-6">
            <p className="font-heading font-black text-4xl text-white">&lt;30</p>
            <p className="font-body text-sm text-gray-400 mt-2">Min d'intervention</p>
          </div>
          <div className="tech-card rounded-xl p-6">
            <p className="font-heading font-black text-4xl text-tech-cyan">7/7</p>
            <p className="font-body text-sm text-gray-400 mt-2">Jours disponibles</p>
          </div>
        </div>
      </div>
    </section>
  );
}
