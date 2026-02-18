import { Clock, Award, Users, ThumbsUp, Phone, Truck, Zap } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: Clock,
    title: "Intervention < 30 min",
    description: "Un technicien peut être chez vous en moins de 30 minutes dans Paris et proche banlieue."
  },
  {
    icon: Award,
    title: "+20 ans d'expérience",
    description: "Depuis 2002, nous dépannons des milliers de clients PC et Mac avec expertise."
  },
  {
    icon: Users,
    title: "7j/7 disponible",
    description: "Nous intervenons tous les jours, y compris le week-end, pour résoudre vos urgences."
  },
  {
    icon: ThumbsUp,
    title: "Obligation de résultat",
    description: "Nos forfaits incluent une garantie de résolution de votre problème informatique."
  },
  {
    icon: Phone,
    title: "Diagnostic gratuit",
    description: "Appelez-nous pour un premier diagnostic téléphonique sans engagement."
  },
  {
    icon: Truck,
    title: "Matériel de prêt",
    description: "Nous mettons à disposition du matériel de remplacement pendant la réparation."
  }
];

export default function Advantages() {
  return (
    <section className="py-20 md:py-28 bg-tech-dark relative" data-testid="advantages-section">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-tech-blue/10 to-tech-dark"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-2 bg-tech-gold/20 text-tech-gold px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            <span className="font-heading font-semibold text-sm uppercase tracking-widest">Pourquoi nous choisir</span>
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-6">
            Vos <span className="text-tech-gold text-glow-gold">Avantages</span>
          </h2>
          <p className="font-body text-lg text-gray-400 max-w-2xl mx-auto">
            Une équipe de professionnels dédiée à vous simplifier l'informatique
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="tech-card p-6 rounded-xl"
                data-testid={`advantage-${index}`}
              >
                <div className="w-14 h-14 bg-tech-cyan/10 rounded-xl flex items-center justify-center mb-5 border border-tech-cyan/30">
                  <Icon className="w-7 h-7 text-tech-cyan" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  {advantage.title}
                </h3>
                <p className="font-body text-gray-400 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
