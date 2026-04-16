import { content } from '../data/content'
import Button from '../components/Button'

export default function Mentoria({ language = 'pt' }) {
  const t = content[language]

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#FAFAF8] via-[#F5F3F0] to-[#FAFAF8]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-[#8B5CF6] mb-4">
            {t.mentoria.title}
          </h1>
          <h2 className="text-3xl text-[#10B981] font-light italic">
            {t.mentoria.subtitle}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#8B5CF6] to-[#10B981] mx-auto mt-6"></div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {t.mentoria.programs.map((program, index) => (
              <div 
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/50 border border-[#10B981]/20"
              >
                {/* Header */}
                <div className="h-2 bg-gradient-to-r from-[#8B5CF6] to-[#10B981]"></div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#8B5CF6] mb-2">
                    {program.title}
                  </h3>
                  <p className="text-[#10B981] font-semibold mb-4">
                    {program.duration}
                  </p>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6 space-y-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="text-[#D4AF37]">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-6 p-4 bg-[#D4AF37]/10 rounded-lg border border-[#D4AF37]/30">
                    <p className="text-[#D4AF37] font-bold text-lg">
                      {program.price}
                    </p>
                  </div>

                  {/* CTA */}
                  <Button variant="primary" className="w-full">
                    {language === 'pt' ? 'Saber Mais' : 'En Savoir Plus'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#8B5CF6] text-center mb-12">
            {language === 'pt' ? 'O Que Você Vai Ganhar' : 'Ce Que Vous Allez Gagner'}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                pt: 'Autoconhecimento Profundo',
                fr: 'Connaissance de Soi Profonde',
                icon: '🔍'
              },
              {
                pt: 'Ferramentas Práticas',
                fr: 'Outils Pratiques',
                icon: '🛠️'
              },
              {
                pt: 'Paz Interior',
                fr: 'Paix Intérieure',
                icon: '☮️'
              },
              {
                pt: 'Comunidade de Apoio',
                fr: 'Communauté de Soutien',
                icon: '🤝'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white/50 border border-[#10B981]/20">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#8B5CF6]">
                  {language === 'pt' ? item.pt : item.fr}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#8B5CF6]/10 via-[#10B981]/10 to-[#D4AF37]/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#8B5CF6] mb-6">
            {language === 'pt' ? 'Pronto para Transformar?' : 'Prêt à Transformer?'}
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            {language === 'pt'
              ? 'Escolha o programa que mais ressoa com você e comece sua jornada.'
              : 'Choisissez le programme qui résonne le plus avec vous et commencez votre voyage.'
            }
          </p>
          <Button variant="primary" className="text-lg px-10 py-4">
            {language === 'pt' ? 'Agendar Consulta Gratuita' : 'Réserver une Consultation Gratuite'}
          </Button>
        </div>
      </section>
    </div>
  )
}
