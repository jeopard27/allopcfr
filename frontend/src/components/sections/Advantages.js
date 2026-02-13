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
    description: "Depuis 2002, nous dépannons des milliers de clients avec expertise et professionnalisme."
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
    <section className="py-20 md:py-32 bg-clinical-white" data-testid="advantages-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-outfit font-semibold text-alert-orange text-sm uppercase tracking-widest mb-4">
            Pourquoi nous choisir
          </span>
          <h2 className="font-outfit font-extrabold text-4xl md:text-5xl text-deep-navy tracking-tight mb-6">
            VOS AVANTAGES
          </h2>
          <p className="font-ibm text-lg text-gray-600 max-w-2xl mx-auto">
            Une équipe de professionnels dédiée à vous simplifier l'informatique
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
                data-testid={`advantage-${index}`}
              >
                <div className="w-14 h-14 bg-tech-blue/10 rounded flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-tech-blue" />
                </div>
                <h3 className="font-outfit font-bold text-xl text-deep-navy mb-3">
                  {advantage.title}
                </h3>
                <p className="font-ibm text-gray-600 leading-relaxed">
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
