import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "Combien de temps pour une intervention ?",
    answer: "Nous pouvons intervenir chez vous en moins de 30 minutes dans Paris et les communes limitrophes (Neuilly, Levallois). Pour les zones plus éloignées, comptez généralement 1 heure maximum."
  },
  {
    question: "Quels sont vos tarifs ?",
    answer: "Nous proposons différents forfaits avec obligation de résultat. Le forfait ALLOPC1 couvre le dépannage logiciel (virus, bugs, lenteur), le forfait ALLOPC2 inclut les réparations matérielles, et le forfait ALLOPC3 concerne l'installation réseau. Contactez-nous pour un devis gratuit adapté à votre situation."
  },
  {
    question: "Intervenez-vous le week-end ?",
    answer: "Oui, nous intervenons 7 jours sur 7, y compris les week-ends et jours fériés pour les urgences. Notre équipe est toujours disponible pour résoudre vos problèmes informatiques."
  },
  {
    question: "Réparez-vous les Mac ?",
    answer: "Oui, nos techniciens sont formés sur PC et Mac. Nous intervenons sur tous types d'ordinateurs, fixes ou portables, quelle que soit la marque."
  },
  {
    question: "Proposez-vous du matériel de prêt ?",
    answer: "Oui, si votre ordinateur nécessite une réparation en atelier, nous pouvons vous prêter du matériel de remplacement pour que vous puissiez continuer à travailler pendant la durée de l'immobilisation."
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
    <section className="py-20 md:py-32 bg-clinical-white" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-outfit font-semibold text-tech-blue text-sm uppercase tracking-widest mb-4">
            Questions fréquentes
          </span>
          <h2 className="font-outfit font-extrabold text-4xl md:text-5xl text-deep-navy tracking-tight mb-6">
            FAQ
          </h2>
          <p className="font-ibm text-lg text-gray-600">
            Les réponses à vos questions les plus courantes
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded border border-gray-200 overflow-hidden"
              data-testid={`faq-${index}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
                data-testid={`faq-button-${index}`}
              >
                <span className="font-outfit font-semibold text-deep-navy pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-tech-blue flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`faq-content ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                style={{ maxHeight: openIndex === index ? '500px' : '0' }}
              >
                <div className="px-6 pb-5 pt-0">
                  <p className="font-ibm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="font-ibm text-gray-600 mb-4">
            Vous avez une autre question ?
          </p>
          <a
            href="tel:0140883030"
            className="inline-flex items-center space-x-2 font-outfit font-semibold text-tech-blue hover:text-alert-orange transition-colors"
            data-testid="faq-call-link"
          >
            <span>Appelez-nous au 01 40 88 30 30</span>
          </a>
        </div>
      </div>
    </section>
  );
}
