import { content } from '../data/content'
import Button from '../components/Button'

export default function Home({ language = 'pt' }) {
  const t = content[language]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-[#FAFAF8] via-[#F5F3F0] to-[#FAFAF8]">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="inline-block">
              <div className="w-20 h-20 rounded-full border-4 border-[#8B5CF6] flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-[#8B5CF6]">✨</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#10B981] to-[#D4AF37]">
            {t.home.title}
          </h1>

          {/* Subtitle */}
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#8B5CF6]">
            {t.home.subtitle}
          </h2>

          {/* Tagline */}
          <p className="text-2xl text-[#10B981] font-semibold mb-8 italic">
            {t.home.tagline}
          </p>

          {/* Description */}
          <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
            {t.home.description}
          </p>

          {/* Hero Message */}
          <div className="mb-12 p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#10B981]/20">
            <h3 className="text-3xl font-bold text-[#8B5CF6] mb-4">
              {t.home.hero.main}
            </h3>
            <p className="text-lg text-gray-700">
              {t.home.hero.sub}
            </p>
          </div>

          {/* CTA Button */}
          <Button variant="primary" className="text-lg px-10 py-4">
            {t.home.cta}
          </Button>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-20 px-6 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#8B5CF6] mb-4">
              {language === 'pt' ? 'O Chamado da Bússola Interna' : 'L\'Appel de la Boussole Interne'}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#8B5CF6] to-[#10B981] mx-auto"></div>
          </div>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            {language === 'pt' ? (
              <>
                <p className="text-center text-2xl font-semibold text-[#10B981] italic mb-8">
                  "Eu nunca estou transtornada pelas razões que eu acredito."
                </p>

                <p>
                  Em minha jornada, um dos aprendizados mais libertadores que recebi de <em>Um Curso em Milagres</em> ecoa profundamente em minha alma de roceira e terapeuta. Essa frase, simples e revolucionária, desvenda o véu da ilusão que muitas vezes nos aprisiona.
                </p>

                <p>
                  Vivemos imersos em filtros emocionais, mentais e sociais. Somos absorvidos por crenças e preconceitos que nos fazem rotular o desconforto como "ruim" e a alegria como "bom". Mas e se essa percepção fosse apenas uma lente embaçada, distorcendo a realidade?
                </p>

                <div className="bg-[#8B5CF6]/10 border-l-4 border-[#8B5CF6] p-6 rounded-lg my-8">
                  <p className="text-[#8B5CF6] font-semibold mb-4">E se você fosse totalmente livre?</p>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Qual seria a sua realidade hoje, sem os pesos do passado?</li>
                    <li>• Como você olharia para o mundo e para si mesmo?</li>
                    <li>• O que realmente importa para você, quando o medo não dita as regras?</li>
                    <li>• Como você deseja que seja sua vida se você se torna um Ser completamente Livre?</li>
                  </ul>
                </div>

                <p>
                  A verdadeira paz não vem de fora. Ela já existe dentro de você. Quando nos permitimos descer suficientemente fundo em nós mesmos, quando ousamos questionar essas "falsas verdades", atingimos um lugar onde elas se tornam desnecessárias.
                </p>
              </>
            ) : (
              <>
                <p className="text-center text-2xl font-semibold text-[#10B981] italic mb-8">
                  "Je ne suis jamais perturbée pour les raisons que je crois."
                </p>

                <p>
                  Dans mon parcours, l'un des apprentissages les plus libérateurs que j'ai reçus d'<em>Un Cours en Miracles</em> résonne profondément dans mon âme de paysanne et de thérapeute. Cette phrase, simple et révolutionnaire, dévoile le voile de l'illusion qui nous emprisonne souvent.
                </p>

                <p>
                  Nous vivons immergés dans des filtres émotionnels, mentaux et sociaux. Nous sommes absorbés par des croyances et des préjugés qui nous font étiqueter l'inconfort comme "mauvais" et la joie comme "bonne". Mais et si cette perception n'était qu'une lentille trouble, déformant la réalité?
                </p>

                <div className="bg-[#8B5CF6]/10 border-l-4 border-[#8B5CF6] p-6 rounded-lg my-8">
                  <p className="text-[#8B5CF6] font-semibold mb-4">Et si vous étiez totalement libre?</p>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Quelle serait votre réalité aujourd'hui, sans les poids du passé?</li>
                    <li>• Comment regarderiez-vous le monde et vous-même?</li>
                    <li>• Qu'est-ce qui compte vraiment pour vous quand la peur ne dicte pas les règles?</li>
                    <li>• Comment désirez-vous que soit votre vie si vous devenez un Être complètement Libre?</li>
                  </ul>
                </div>

                <p>
                  La véritable paix ne vient pas de l'extérieur. Elle existe déjà en vous. Quand nous nous permettons de descendre suffisamment profondément en nous-mêmes, quand nous osons remettre en question ces "fausses vérités", nous atteignons un endroit où elles deviennent inutiles.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#8B5CF6]/10 via-[#10B981]/10 to-[#D4AF37]/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#8B5CF6] mb-6">
            {language === 'pt' ? 'Pronto para sua Jornada?' : 'Prêt pour votre Voyage?'}
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            {language === 'pt' 
              ? 'Descubra como a Alquimia Emocional pode transformar sua vida.'
              : 'Découvrez comment l\'Alchimie Émotionnelle peut transformer votre vie.'
            }
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="primary">
              {language === 'pt' ? 'Saiba Mais' : 'En Savoir Plus'}
            </Button>
            <Button variant="secondary">
              {language === 'pt' ? 'Contato' : 'Contact'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
