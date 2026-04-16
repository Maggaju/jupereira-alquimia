import { content } from '../data/content'
import Button from '../components/Button'

export default function Reiki({ language = 'pt' }) {
  const t = content[language]

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#FAFAF8] via-[#F5F3F0] to-[#FAFAF8]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-[#8B5CF6] mb-4">
            {t.reiki.title}
          </h1>
          <h2 className="text-3xl text-[#10B981] font-light italic">
            {t.reiki.subtitle}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#8B5CF6] to-[#10B981] mx-auto mt-6"></div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-8 bg-white/50 border-2 border-[#10B981]/20">
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              {t.reiki.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#8B5CF6] text-center mb-12">
            {language === 'pt' ? 'Nossos Serviços' : 'Nos Services'}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {t.reiki.services.map((service, index) => (
              <div 
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/50 border border-[#10B981]/20"
              >
                {/* Header */}
                <div className="h-2 bg-gradient-to-r from-[#10B981] to-[#D4AF37]"></div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#8B5CF6] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#10B981] font-semibold mb-4">
                    {service.duration}
                  </p>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 p-4 bg-[#D4AF37]/10 rounded-lg border border-[#D4AF37]/30">
                    <p className="text-[#D4AF37] font-bold text-lg">
                      {service.price}
                    </p>
                  </div>

                  {/* CTA */}
                  <Button variant="primary" className="w-full">
                    {language === 'pt' ? 'Agendar' : 'Réserver'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#8B5CF6] text-center mb-12">
            {language === 'pt' ? 'Benefícios do Reiki' : 'Bénéfices du Reiki'}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                pt: 'Alívio do Estresse',
                fr: 'Soulagement du Stress',
                icon: '🧘'
              },
              {
                pt: 'Equilíbrio Energético',
                fr: 'Équilibre Énergétique',
                icon: '⚡'
              },
              {
                pt: 'Cura Emocional',
                fr: 'Guérison Émotionnelle',
                icon: '💜'
              },
              {
                pt: 'Bem-estar Holístico',
                fr: 'Bien-être Holistique',
                icon: '🌿'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white/50 border border-[#10B981]/20">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-[#8B5CF6]">
                  {language === 'pt' ? benefit.pt : benefit.fr}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#8B5CF6]/10 via-[#10B981]/10 to-[#D4AF37]/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#8B5CF6] mb-4">
            {language === 'pt' ? 'Nos Encontramos em' : 'Nous Nous Rencontrons à'}
          </h2>
          <p className="text-2xl text-[#10B981] font-semibold mb-8">
            {t.reiki.location}
          </p>
          <Button variant="primary" className="text-lg px-10 py-4">
            {t.reiki.cta}
          </Button>
        </div>
      </section>
    </div>
  )
}
