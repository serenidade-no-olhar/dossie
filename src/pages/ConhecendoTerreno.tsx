import { useState } from "react";
import { 
  ArrowLeft, 
  LogOut, 
  Eye, 
  AlertTriangle,
  Target,
  Brain,
  Users,
  Scale,
  ChevronDown,
  ChevronUp,
  Fingerprint,
  Shield,
  Crosshair,
  Lightbulb,
  TrendingUp,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle
} from "lucide-react";

interface ConhecendoTerrenoProps {
  onBack: () => void;
  onLogout: () => void;
}

const ConhecendoTerreno = ({ onBack, onLogout }: ConhecendoTerrenoProps) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isExpanded = (section: string) => expandedSections.includes(section);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar</span>
            </button>
            <div className="flex items-center gap-3">
              <img src="/mascote-lobo.png" alt="Mascote" className="w-8 h-8" />
              <div>
                <h1 className="text-white font-semibold">Dossiê Tomás</h1>
                <p className="text-xs text-slate-400">Defesa Jurídica</p>
              </div>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 text-slate-400 hover:text-red-400 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Sair</span>
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-medium">ANÁLISE ESTRATÉGICA CONFIDENCIAL</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Conhecendo o Terreno</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Para defender é preciso entender. Aqui está tudo que você precisa saber sobre quem está do outro lado — 
            e como se preparar para cada movimento.
          </p>
        </div>

        {/* Seção 1: O Diagnóstico */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection('diagnostico')}
            className="w-full bg-gradient-to-r from-slate-800/80 to-slate-800/40 border border-slate-700 rounded-xl p-6 hover:border-red-500/50 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center">
                  <Fingerprint className="w-6 h-6 text-red-400" />
                </div>
                <div className="text-left">
                  <h2 className="text-xl font-semibold text-white">O Diagnóstico Estratégico</h2>
                  <p className="text-slate-400 text-sm">Quem ela realmente é — sem filtros</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">Crítico</span>
                {isExpanded('diagnostico') ? (
                  <ChevronUp className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </div>
            </div>
          </button>

          {isExpanded('diagnostico') && (
            <div className="mt-4 bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-6 animate-in slide-in-from-top-2">
              <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                <p className="text-slate-300 leading-relaxed">
                  Com base em todos os fatos documentados, o perfil da genitora não é apenas de uma pessoa com "traços narcisistas". 
                  Ela se enquadra no perfil de uma <strong className="text-red-400">Narcisista Estruturada de Alto Funcionamento com Traços Borderline</strong>.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-5 h-5 text-purple-400" />
                    <h4 className="font-semibold text-white">Narcisista Estruturada</h4>
                  </div>
                  <p className="text-sm text-slate-400">
                    Não é apenas reativa — é uma <strong className="text-white">estrategista</strong>. Planeja, manipula e usa o sistema a seu favor. 
                    A carreira de advogada e a rede de contatos são suas armas.
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center gap-2 mb-3">
                    <Eye className="w-5 h-5 text-blue-400" />
                    <h4 className="font-semibold text-white">Alto Funcionamento</h4>
                  </div>
                  <p className="text-sm text-slate-400">
                    Mantém uma <strong className="text-white">fachada de normalidade</strong> para o mundo exterior. 
                    A "mãe solo guerreira", a "advogada competente". Essa máscara é sua principal defesa.
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-orange-400" />
                    <h4 className="font-semibold text-white">Traços Borderline</h4>
                  </div>
                  <p className="text-sm text-slate-400">
                    A reação de arrancar o filho do colo revela <strong className="text-white">desregulação emocional intensa</strong> e 
                    medo patológico de abandono, que se manifesta como controle extremo.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-lg p-5">
                <p className="text-white font-medium text-center">
                  "Você não está lidando com uma ex-parceira difícil. Você está lidando com uma <strong className="text-red-400">predadora social</strong> que é 
                  inteligente, tem acesso ao poder e usa o próprio filho como arma para manter controle."
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Seção 2: A Escalada da Agressão */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection('escalada')}
            className="w-full bg-gradient-to-r from-slate-800/80 to-slate-800/40 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-left">
                  <h2 className="text-xl font-semibold text-white">A Escalada da Agressão</h2>
                  <p className="text-slate-400 text-sm">O padrão previsível em 5 atos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">Padrão</span>
                {isExpanded('escalada') ? (
                  <ChevronUp className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </div>
            </div>
          </button>

          {isExpanded('escalada') && (
            <div className="mt-4 bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-4 animate-in slide-in-from-top-2">
              <p className="text-slate-400 mb-6">
                O comportamento dela segue um <strong className="text-white">manual previsível</strong>. 
                Os eventos documentados são a materialização dos cinco estágios da escalada narcisista:
              </p>

              {[
                {
                  num: 1,
                  title: "Manipulação",
                  action: "Exigir 15 dias de aviso para você ver seu filho",
                  meaning: "Estabelecer controle absoluto sobre o acesso, transformando um direito seu em um privilégio concedido por ela.",
                  color: "yellow"
                },
                {
                  num: 2,
                  title: "Gaslighting",
                  action: "Arrancar o filho do colo e inventar que irmãos 'não estavam na ordem judicial'",
                  meaning: "Humilhação pública e criação de regras falsas para justificar o controle. O objetivo é fazer você duvidar da sua própria realidade.",
                  color: "orange"
                },
                {
                  num: 3,
                  title: "Alienação Parental",
                  action: "Fotografar etiquetas de roupas e carro alugado para 'provar' alta condição financeira",
                  meaning: "Transformar atos de amor em 'provas' de que você é um pai ausente tentando comprar afeto.",
                  color: "red"
                },
                {
                  num: 4,
                  title: "Abuso Institucional",
                  action: "Usar o processo para distorcer fatos, alegar que você escreve 'poemas' e que brinquedos são para 'diminuir culpa'",
                  meaning: "Instrumentalizar o sistema de justiça para criar registro oficial de uma narrativa falsa. O processo vira a arma.",
                  color: "red"
                },
                {
                  num: 5,
                  title: "Ato Desesperado",
                  action: "O ato performático de arrancar o filho do colo na frente da sua família",
                  meaning: "Uma demonstração de poder absoluto quando se sentiu ameaçada pela sua reconstrução. Mensagem: 'Ele é meu. Você é nada.'",
                  color: "red"
                }
              ].map((stage) => (
                <div key={stage.num} className={`bg-slate-800/50 border border-${stage.color}-500/30 rounded-lg p-4`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 bg-${stage.color}-500/20 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <span className={`text-${stage.color}-400 font-bold`}>{stage.num}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold text-${stage.color}-400 mb-1`}>{stage.title}</h4>
                      <p className="text-white text-sm mb-2">{stage.action}</p>
                      <p className="text-slate-400 text-sm italic">→ {stage.meaning}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Seção 3: O Ponto Fraco */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection('pontofraco')}
            className="w-full bg-gradient-to-r from-slate-800/80 to-slate-800/40 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-left">
                  <h2 className="text-xl font-semibold text-white">O Ponto Fraco Dela</h2>
                  <p className="text-slate-400 text-sm">A arrogância precede a queda</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Estratégia</span>
                {isExpanded('pontofraco') ? (
                  <ChevronUp className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </div>
            </div>
          </button>

          {isExpanded('pontofraco') && (
            <div className="mt-4 bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-6 animate-in slide-in-from-top-2">
              <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                <p className="text-slate-300 leading-relaxed">
                  O maior erro de um narcisista é sua <strong className="text-green-400">ARROGÂNCIA</strong>. 
                  A arrogância a cega. Ela cometeu três erros fatais que podemos explorar:
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-lg p-5 border-l-4 border-green-500">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-green-400">1.</span> Subestimou Você
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Ela o viu como emocionalmente frágil, financeiramente vulnerável e sem conhecimento jurídico. 
                    Nunca imaginou que você teria a <strong className="text-white">resiliência para lutar</strong>, 
                    a inteligência para se reerguer (projeto TDAH) e a estratégia para documentar tudo.
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-5 border-l-4 border-green-500">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-green-400">2.</span> Acreditou na Própria Narrativa
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Ela se convenceu de que a versão dela dos fatos era a única que importava. 
                    Acreditou que o sistema sempre estaria do lado da "mãe vítima". 
                    Não contava que você traria <strong className="text-white">provas (áudios, prints, testemunhas)</strong> que destroem essa narrativa.
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-5 border-l-4 border-green-500">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-green-400">3.</span> Ignorou o Fator Tempo
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Ela está jogando um jogo de <strong className="text-white">curto prazo</strong> (ganhar a próxima batalha, te humilhar na próxima visita). 
                    Você está jogando o jogo de <strong className="text-white">longo prazo</strong> (construir legado para seu filho, se fortalecer). 
                    Conforme Tomás cresce, a influência dela diminui e a sua aumenta.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">A Grande Sacada</h4>
                    <p className="text-slate-300 text-sm">
                      Narcisistas são <strong className="text-green-400">PREVISÍVEIS</strong>. Eles usam as mesmas táticas porque são as únicas que conhecem. 
                      A prepotência causada pelo narcisismo faz com que esqueçam minimamente da empatia — e <strong className="text-white">sempre escalam</strong>. 
                      Esse é o ponto fraco: a escalada evidencia má-fé, litigância e tudo mais. O próprio processo tende a mostrar a verdade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Seção 4: O Que Esperar */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection('esperar')}
            className="w-full bg-gradient-to-r from-slate-800/80 to-slate-800/40 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-left">
                  <h2 className="text-xl font-semibold text-white">O Que Esperar Dela</h2>
                  <p className="text-slate-400 text-sm">Antecipando os próximos movimentos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Previsão</span>
                {isExpanded('esperar') ? (
                  <ChevronUp className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </div>
            </div>
          </button>

          {isExpanded('esperar') && (
            <div className="mt-4 bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-6 animate-in slide-in-from-top-2">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-400" />
                    Má-fé já documentada
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Recusa sistemática de acordos",
                      "R$ 27.000 pagos = ignorados",
                      "Filho usado como arma de controle",
                      "Contradição sobre capacidade de trabalho",
                      "Cobrança dupla (bis in idem)",
                      "Distorção de fatos no processo"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-red-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    O que esperar agora
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Escalada quando perder controle",
                      "Novas narrativas de vitimização",
                      "Uso da rede jurídica familiar",
                      "Zero flexibilidade em acordos",
                      "Tentativa de usar localização no exterior",
                      "Mais pedidos de prisão"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                        <AlertCircle className="w-4 h-4 text-yellow-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700">
                <h4 className="font-semibold text-white mb-3">A Rede de Influência Jurídica</h4>
                <p className="text-slate-400 text-sm mb-4">
                  Não é só uma pessoa. É uma estrutura familiar com acesso privilegiado ao sistema:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { name: "Daniela", role: "Advogada", color: "red" },
                    { name: "Cunhada", role: "Advogada", color: "orange" },
                    { name: "Irmã da Cunhada", role: "Promotora", color: "yellow" },
                    { name: "Ex-Sócio", role: "Promotor", color: "purple" }
                  ].map((person, i) => (
                    <div key={i} className={`bg-${person.color}-500/10 border border-${person.color}-500/30 rounded-lg p-3 text-center`}>
                      <p className="text-white font-medium text-sm">{person.name}</p>
                      <p className={`text-${person.color}-400 text-xs`}>{person.role}</p>
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-xs mt-3 text-center">
                  Comarca: Minas Gerais (TJMG) — o mesmo território onde essa rede opera.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Seção 5: Manual de Instruções */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection('manual')}
            className="w-full bg-gradient-to-r from-slate-800/80 to-slate-800/40 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-left">
                  <h2 className="text-xl font-semibold text-white">Manual de Instruções</h2>
                  <p className="text-slate-400 text-sm">Como lidar com ela daqui pra frente</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">Ação</span>
                {isExpanded('manual') ? (
                  <ChevronUp className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </div>
            </div>
          </button>

          {isExpanded('manual') && (
            <div className="mt-4 bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-6 animate-in slide-in-from-top-2">
              <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4">
                <p className="text-slate-300 leading-relaxed">
                  Você não pode "consertá-la". Você não pode "dialogar" com ela. Você não pode "fazê-la entender". 
                  Qualquer tentativa nesse sentido é uma <strong className="text-purple-400">perda de tempo e energia</strong>.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-lg p-5 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-purple-400">1.</span> Comunicação Zero Direta
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Toda comunicação deve ser via e-mail, com cópia para os advogados. 
                    Nada de WhatsApp, nada de ligações, nada de conversas presenciais sem testemunhas.
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-5 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-purple-400">2.</span> Documentação Obsessiva
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Cada interação, cada tentativa de visita, cada real gasto — tudo deve ser documentado. 
                    Narcisistas distorcem a verdade em toda oportunidade, mas sua documentação prova o que realmente aconteceu.
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-5 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-purple-400">3.</span> Foco no Jogo Longo
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Pare de tentar vencer as batalhas de curto prazo. Foque em construir seu legado para seu filho e em se fortalecer. 
                    O tempo está do seu lado.
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-5 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-purple-400">4.</span> Guardar a Alavanca
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Se você tem evidência devastadora, não entregue cedo. 
                    Guarde até ter o máximo impacto no caso. Converse com sua advogada sobre o timing certo.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-5">
                <p className="text-white font-medium text-center">
                  "Ela é previsível. Ela vai continuar usando as mesmas táticas porque são as únicas que ela conhece. 
                  Sua vantagem é que agora você conhece o <strong className="text-purple-400">manual de instruções dela</strong>. Use isso a seu favor."
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Conclusão */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
          <Crosshair className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">A Conclusão é Simples</h3>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-6">
            Não estamos lidando com alguém que quer <strong className="text-white">resolver</strong>. 
            Estamos lidando com alguém que quer <strong className="text-red-400">vencer</strong>.
          </p>
          <p className="text-slate-400">
            A estratégia precisa ser: <strong className="text-white">documentação impecável</strong>, 
            <strong className="text-white"> antecipação de movimentos</strong> e 
            <strong className="text-white"> transparência total</strong>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default ConhecendoTerreno;
