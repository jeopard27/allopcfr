import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "Combien de temps pour une intervention ?",
    answer: "Nous pouvons intervenir chez vous en moins de 30 minutes dans Paris et les communes limitrophes (Neuilly, Levallois). Pour les zones plus éloignées, comptez généralement 1 heure maximum."
  },
  {
    question: "Réparez-vous les Mac Apple ?",
    answer: "Oui absolument ! Nos techniciens sont formés sur PC Windows ET Mac Apple. Nous intervenons sur tous types d'ordinateurs : iMac, MacBook, MacBook Pro, MacBook Air, Mac Mini, ainsi que tous les PC fixes et portables."
  },
  {
    question: "Quels sont vos tarifs ?",
    answer: "Nous proposons différents forfaits avec obligation de résultat. Le forfait ALLOPC1 couvre le dépannage logiciel (virus, bugs, lenteur), le forfait ALLOPC2 inclut les réparations matérielles, et le forfait ALLOPC3 concerne l'installation réseau. Contactez-nous pour un devis gratuit."
  },
  {
    question: "Intervenez-vous le week-end ?",
    answer: "Oui, nous intervenons 7 jours sur 7, y compris les week-ends et jours fériés pour les urgences. Notre équipe est toujours disponible pour résoudre vos problèmes informatiques PC ou Mac."
  },
  {
    question: "Proposez-vous du matériel de prêt ?",
    answer: "Oui, si votre ordinateur (PC ou Mac) nécessite une réparation en atelier, nous pouvons vous prêter du matériel de remplacement pour que vous puissiez continuer à travailler."
  },
  {
    question: "Comment se passe le paiement ?",
    answer: "Le paiement s'effectue à la fin de l'intervention, une fois le problème résolu. Nous acceptons les espèces, chèques et cartes bancaires. Nos forfaits sont transparents et sans surprise."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-brand-sky" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-heading font-semibold text-brand-blue text-sm uppercase tracking-widest mb-4">
            Questions fréquentes
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-navy mb-4">
            FAQ
          </h2>
          <p className="font-body text-lg text-gray-600">
            Les réponses à vos questions les plus courantes
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              data-testid={`faq-${index}`}
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
                data-testid={`faq-button-${index}`}
              >
                <span className="font-heading font-semibold text-brand-navy pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-brand-blue flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openIndex === index ? '500px' : '0' }}
              >
                <div className="px-6 pb-4 pt-0">
                  <p className="font-body text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="font-body text-gray-600 mb-3">
            Vous avez une autre question ?
          </p>
          <a
            href="tel:0140883030"
            className="inline-flex items-center space-x-2 font-heading font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors"
            data-testid="faq-call-link"
          >
            <span>Appelez-nous au 01 40 88 30 30</span>
          </a>
        </div>
      </div>
    </section>
  );
}
