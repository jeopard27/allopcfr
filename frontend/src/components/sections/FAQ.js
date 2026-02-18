import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "Combien de temps pour une intervention ?",
    answer: "Nous pouvons intervenir chez vous en moins de 30 minutes dans Paris et les communes limitrophes (Neuilly, Levallois). Pour les zones plus éloignées, comptez généralement 1 heure maximum."
  },
  {
    question: "Réparez-vous les Mac Apple ?",
    answer: "Oui absolument ! Nos techniciens sont formés sur PC Windows ET Mac Apple. Nous intervenons sur tous types d'ordinateurs : iMac, MacBook, MacBook Pro, MacBook Air, Mac Mini, ainsi que tous les PC."
  },
  {
    question: "Quels sont vos tarifs ?",
    answer: "Nous proposons différents forfaits avec obligation de résultat. Le forfait ALLOPC1 couvre le dépannage logiciel, le forfait ALLOPC2 inclut les réparations matérielles, et le forfait ALLOPC3 concerne l'installation réseau. Contactez-nous pour un devis gratuit."
  },
  {
    question: "Intervenez-vous le week-end ?",
    answer: "Oui, nous intervenons 7 jours sur 7, y compris les week-ends et jours fériés pour les urgences."
  },
  {
    question: "Comment fonctionne la télé-assistance ?",
    answer: "Appelez-nous, téléchargez notre module de connexion sécurisé, puis communiquez le code à notre technicien. Il prendra le contrôle de votre PC à distance (sous vos yeux) pour résoudre le problème."
  },
  {
    question: "Comment se passe le paiement ?",
    answer: "Le paiement s'effectue à la fin de l'intervention, une fois le problème résolu. Nous acceptons les espèces, chèques et cartes bancaires."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-tech-dark relative" data-testid="faq-section">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-blue/10 to-tech-dark"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-2 bg-tech-cyan/20 text-tech-cyan px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-4 h-4" />
            <span className="font-heading font-semibold text-sm uppercase tracking-widest">FAQ</span>
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-6">
            Questions <span className="text-tech-cyan">fréquentes</span>
          </h2>
          <p className="font-body text-lg text-gray-400">
            Les réponses à vos questions les plus courantes
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="tech-card rounded-xl overflow-hidden"
              data-testid={`faq-${index}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-tech-cyan/5 transition-colors"
                onClick={() => toggleFaq(index)}
                data-testid={`faq-button-${index}`}
              >
                <span className="font-heading font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-tech-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openIndex === index ? '500px' : '0' }}
              >
                <div className="px-6 pb-5 pt-0">
                  <p className="font-body text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="font-body text-gray-400 mb-4">
            Vous avez une autre question ?
          </p>
          <a
            href="tel:0140883030"
            className="inline-flex items-center space-x-2 font-heading font-semibold text-tech-gold hover:text-tech-cyan transition-colors"
            data-testid="faq-call-link"
          >
            <span>Appelez-nous au 01 40 88 30 30</span>
          </a>
        </div>
      </div>
    </section>
  );
}
