import { content } from '../data/content'

export default function Perolas({ language = 'pt' }) {
  const t = content[language]

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#FAFAF8] via-[#F5F3F0] to-[#FAFAF8]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-[#8B5CF6] mb-4">
            {t.perolas.title}
          </h1>
          <h2 className="text-3xl text-[#10B981] font-light italic">
            {t.perolas.subtitle}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#8B5CF6] to-[#10B981] mx-auto mt-6"></div>
        </div>
      </section>

      {/* Pearls Grid */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {t.perolas.pearls.map((pearl, index) => (
              <div 
                key={index}
                className="group rounded-2xl p-8 bg-white/50 border-2 border-[#10B981]/20 hover:border-[#8B5CF6]/50 transition-all duration-300 hover:shadow-lg"
              >
                {/* Pearl Number */}
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#10B981] text-white font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#8B5CF6] mb-4 group-hover:text-[#10B981] transition">
                      {pearl.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {pearl.text}
                    </p>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="mt-6 flex justify-end">
                  <span className="text-3xl opacity-20 group-hover:opacity-40 transition">✨</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="py-20 px-6 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-12 bg-gradient-to-r from-[#8B5CF6]/10 to-[#10B981]/10 border-2 border-[#8B5CF6]/30">
            <h2 className="text-4xl font-bold text-[#8B5CF6] text-center mb-8">
              {language === 'pt' ? 'Uma Reflexão Para Você' : 'Une Réflexion Pour Vous'}
            </h2>
            <p className="text-xl text-gray-700 text-center leading-relaxed italic">
              {language === 'pt'
                ? '"A verdadeira transformação não acontece quando mudamos o mundo externo, mas quando mudamos a forma como vemos a nós mesmos. E essa mudança é sempre possível, agora mesmo, neste exato momento."'
                : '"La véritable transformation ne se produit pas quand nous changeons le monde extérieur, mais quand nous changeons la façon dont nous nous voyons. Et ce changement est toujours possible, maintenant même, en ce moment précis."'}
            </p>
            <p className="text-center text-[#10B981] font-semibold mt-6">
              — Magga Ju
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#8B5CF6]/10 via-[#10B981]/10 to-[#D4AF37]/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#8B5CF6] mb-6">
            {language === 'pt' ? 'Aprofunde Essas Reflexões' : 'Approfondissez Ces Réflexions'}
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            {language === 'pt'
              ? 'Participe de nossas sessões de mentoría para explorar essas pérolas de sabedoria em profundidade.'
              : 'Participez à nos séances de mentorat pour explorer ces perles de sagesse en profondeur.'}
          </p>
        </div>
      </section>
    </div>
  )
}
