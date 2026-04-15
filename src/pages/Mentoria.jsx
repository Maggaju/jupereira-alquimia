export default function Mentoria() {
  const etapas = [
    {
      numero: 1,
      titulo: "Escolha do Terreno",
      subtitulo: "Autoconhecimento",
      descricao: "Conhecer o espaço, a luminosidade, o tipo de solo. No nosso Jardim Alquímico, isso é o autoconhecimento – entender o terreno da sua alma."
    },
    {
      numero: 2,
      titulo: "Escolhas Conscientes",
      subtitulo: "Responsabilidade",
      descricao: "A euforia da novidade nos impulsiona, mas é preciso fazer escolhas conscientes, ciente dos custos e das responsabilidades."
    },
    {
      numero: 3,
      titulo: "Preparar o Solo",
      subtitulo: "Limpeza Interior",
      descricao: "A fase do mergulho em si mesmo. Desenterramos tudo que não nos serve mais e aprendemos a acolher com benevolência."
    },
    {
      numero: 4,
      titulo: "Germinação",
      subtitulo: "O Desabrochar da Paz",
      descricao: "Quando o solo está pronto, as sementes de paz germinam naturalmente. É o novo desabrochar onde a vida se torna uma escola de amor."
    }
  ]

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="section-title">Jardim Alquímico</h1>
        
        <div className="bg-[#1a0f2e] p-8 rounded-lg border-l-4 border-[#d4af37] mb-12">
          <p className="text-lg text-gray-200 leading-relaxed">
            A mentoria <span className="text-[#d4af37] font-bold">Jardim Alquímico</span> é um processo de transformação profunda onde você aprende a cultivar a paz interior através de quatro etapas essenciais de jardinagem emocional.
          </p>
        </div>

        {/* Etapas */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {etapas.map((etapa) => (
            <div key={etapa.numero} className="bg-gradient-to-br from-[#3d1a5c] to-[#1a0f2e] p-8 rounded-lg border-t-4 border-[#d4af37] hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#3d1a5c] font-bold text-xl">{etapa.numero}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#d4af37]">{etapa.titulo}</h3>
                  <p className="text-[#2ba896] font-semibold">{etapa.subtitulo}</p>
                </div>
              </div>
              <p className="text-gray-200 leading-relaxed">{etapa.descricao}</p>
            </div>
          ))}
        </div>

        {/* Benefícios */}
        <div className="bg-[#1a7c6b] bg-opacity-20 p-8 rounded-lg border-l-4 border-[#1a7c6b] mb-12">
          <h2 className="text-3xl font-bold text-[#2ba896] mb-6">O que você vai alcançar</h2>
          <ul className="space-y-4 text-gray-200 text-lg">
            <li className="flex items-start">
              <span className="text-[#d4af37] font-bold mr-4">✨</span>
              <span>Compreender a raiz dos seus padrões emocionais</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#d4af37] font-bold mr-4">✨</span>
              <span>Transformar limitações em oportunidades de crescimento</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#d4af37] font-bold mr-4">✨</span>
              <span>Retomar sua Bússola Interna e viver com propósito</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#d4af37] font-bold mr-4">✨</span>
              <span>Co-criar uma realidade onde a abundância é natural</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#d4af37] font-bold mr-4">✨</span>
              <span>Viver com paz, perdão e amor incondicional</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#e8c547] text-[#3d1a5c] font-bold rounded-lg hover:shadow-2xl transition-all duration-300 text-lg">
            Iniciar minha Jardinagem Interior
          </button>
        </div>
      </div>
    </div>
  )
}
