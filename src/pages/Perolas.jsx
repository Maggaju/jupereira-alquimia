export default function Perolas() {
  const perolas = [
    {
      numero: 1,
      titulo: "A Lei da Preparação",
      conteudo: "A primeira Lei Universal do sucesso é a preparação. Se preparar para o sucesso aumenta e potencializa sua conexão com ele. Fomos criados para nos preparar para o pior, mas alguém já lhe ensinou a se preparar para o Sucesso? Quando você está preparado para receber, as vitórias vem naturalmente, sem que precise correr atrás delas. Comece hoje: separe a roupa que deseja usar no dia da sua conquista, brinde à sua intenção. Você é co-criador junto com o Criador."
    },
    {
      numero: 2,
      titulo: "Eu não sou vítima do mundo que vejo",
      conteudo: "O mundo que você vê é um espelho do que você planta. Se você se prepara para a falta, a falta o encontrará. Se você se prepara para o milagre, o milagre se manifestará. Você não é vítima das circunstâncias; você é o mestre da sua percepção. A abundância está dentro de você, pois é o que você É. Não somos vítimas do mundo que vemos, e há sempre uma outra forma de ver."
    }
  ]

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-title">Pérolas Diárias de Milagres</h1>
        
        <div className="bg-[#1a0f2e] p-8 rounded-lg border-l-4 border-[#d4af37] mb-12">
          <p className="text-lg text-gray-200 leading-relaxed">
            Um espaço sagrado para pílulas de sabedoria baseadas em <span className="text-[#d4af37] font-bold">Um Curso em Milagres</span> e na <span className="text-[#d4af37] font-bold">Alquimia Emocional</span>. Cada pérola é uma reflexão profunda que toca diretamente ao inconsciente, convidando você a despertar para a sua própria luz.
          </p>
        </div>

        {/* Pérolas */}
        <div className="space-y-8">
          {perolas.map((perola) => (
            <div key={perola.numero} className="bg-gradient-to-br from-[#3d1a5c] via-[#1a0f2e] to-[#1a7c6b] p-8 rounded-lg border-t-4 border-[#d4af37] hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#e8c547] rounded-full flex items-center justify-center mr-6 shadow-lg">
                  <span className="text-[#3d1a5c] font-bold text-2xl">✨</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#d4af37]">Pérola #{perola.numero}</h3>
                  <h4 className="text-xl text-[#2ba896] font-semibold mt-1">{perola.titulo}</h4>
                </div>
              </div>
              <p className="text-gray-200 leading-relaxed text-lg italic border-l-4 border-[#2ba896] pl-6">
                "{perola.conteudo}"
              </p>
            </div>
          ))}
        </div>

        {/* Convite */}
        <div className="mt-12 bg-[#1a7c6b] bg-opacity-20 p-8 rounded-lg text-center border-l-4 border-[#1a7c6b]">
          <h3 className="text-2xl font-bold text-[#2ba896] mb-4">Novas Pérolas a Cada Semana</h3>
          <p className="text-gray-200 text-lg mb-6">
            Acompanhe as reflexões semanais que irão transformar a forma como você vê o mundo e a si mesmo.
          </p>
          <button className="px-8 py-3 bg-[#2ba896] text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300">
            Receber Pérolas no WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}
