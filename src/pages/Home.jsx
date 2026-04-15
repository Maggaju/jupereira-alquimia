export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-[#3d1a5c] to-[#1a0f2e]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Sua dor não é um acaso
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8">
            É a bússola que te leva de volta à sua própria luz
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Bem-vindo ao Jardim Alquímico. Um espaço sagrado onde a limitação se transforma em oportunidade de paz.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#e8c547] text-[#3d1a5c] font-bold rounded-lg hover:shadow-2xl transition-all duration-300">
            Conhecer a Mentoria
          </button>
        </div>
      </section>

      {/* Manifesto Preview */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">O Chamado da Bússola Interna</h2>
          <div className="bg-[#1a0f2e] p-8 rounded-lg border-l-4 border-[#d4af37]">
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Em minha jornada, um dos aprendizados mais libertadores que recebi de Um Curso em Milagres ecoa profundamente em minha alma de roceira e terapeuta: <span className="text-[#d4af37] font-bold">"Eu nunca estou transtornado pelas razões que eu acredito."</span>
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Essa frase, simples e revolucionária, desvenda o véu da ilusão que muitas vezes nos aprisiona. Vivemos imersos em filtros emocionais, mentais e sociais que nos fazem rotular o desconforto como "ruim" e a alegria como "bom".
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1a7c6b] to-[#2ba896]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para começar sua jardinagem interior?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Descubra como transformar suas limitações em oportunidades de paz através da Alquimia Emocional.
          </p>
          <button className="px-8 py-4 bg-white text-[#1a7c6b] font-bold rounded-lg hover:shadow-2xl transition-all duration-300">
            Agendar Consulta
          </button>
        </div>
      </section>
    </div>
  )
}
