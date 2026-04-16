import { content } from '../data/content'

export default function About({ language = 'pt' }) {
  const t = content[language]

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#FAFAF8] via-[#F5F3F0] to-[#FAFAF8]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-[#8B5CF6] mb-4">
            {t.about.title}
          </h1>
          <h2 className="text-3xl text-[#10B981] font-light italic">
            {t.about.subtitle}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#8B5CF6] to-[#10B981] mx-auto mt-6"></div>
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {t.about.sections.map((section, index) => (
            <div key={index} className="mb-16">
              <div className="flex items-start gap-6">
                {/* Circle Indicator */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#10B981]">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-[#8B5CF6] mb-4">
                    {section.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {section.text}
                  </p>
                </div>
              </div>

              {/* Divider */}
              {index < t.about.sections.length - 1 && (
                <div className="mt-12 ml-6 h-12 border-l-2 border-[#10B981]/30"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#8B5CF6] text-center mb-12">
            {language === 'pt' ? 'Meus Valores' : 'Mes Valeurs'}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                pt: 'Autenticidade',
                fr: 'Authenticité',
                icon: '🌿'
              },
              {
                pt: 'Compaixão',
                fr: 'Compassion',
                icon: '💜'
              },
              {
                pt: 'Transformação',
                fr: 'Transformation',
                icon: '✨'
              }
            ].map((value, idx) => (
              <div key={idx} className="text-center p-8 rounded-xl bg-white/50 border border-[#10B981]/20">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-[#8B5CF6]">
                  {language === 'pt' ? value.pt : value.fr}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#8B5CF6]/10 via-[#10B981]/10 to-[#D4AF37]/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#8B5CF6] mb-6">
            {language === 'pt' ? 'Vamos Começar Juntos?' : 'Commençons Ensemble?'}
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            {language === 'pt'
              ? 'Estou aqui para ajudá-lo em sua jornada de transformação.'
              : 'Je suis ici pour vous aider dans votre voyage de transformation.'
            }
          </p>
        </div>
      </section>
    </div>
  )
}
