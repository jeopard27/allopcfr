import { Clock, Award, Users, ThumbsUp, Phone, Truck } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-brand-sky" data-testid="advantages-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-heading font-semibold text-brand-blue text-sm uppercase tracking-widest mb-4">
            Pourquoi nous choisir
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-navy mb-4">
            Vos Avantages
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
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
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                data-testid={`advantage-${index}`}
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">
                  {advantage.title}
                </h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">
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
