import { useState } from "react";
import { 
  ArrowLeft, 
  LogOut, 
  Scale,
  FileText,
  DollarSign,
  TrendingDown,
  Clock,
  Target,
  Zap,
  Brain,
  Heart,
  Instagram,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  CheckCircle2,
  Sparkles
} from "lucide-react";

interface EstrategiaJuridicaProps {
  onBack: () => void;
  onLogout: () => void;
}

const EstrategiaJuridica = ({ onBack, onLogout }: EstrategiaJuridicaProps) => {
  const [expandedTese, setExpandedTese] = useState<number | null>(null);
  const [showBalaPrata, setShowBalaPrata] = useState(false);

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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <Scale className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">ESTRATÉGIA JURÍDICA</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">O Plano de Ação</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Três teses fundamentadas para reverter a injustiça e proteger o melhor interesse de Tomás.
          </p>
        </div>

        {/* Janela de Ouro */}
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-6 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-amber-400" />
            <h2 className="text-xl font-bold text-white">Janela de Ouro: Agora até Março 2026</h2>
          </div>
          <p className="text-slate-300 mb-6">
            Existe uma <strong className="text-amber-400">janela crítica de 3 meses</strong> para entrar com a Ação Revisional no Brasil 
            e se antecipar a qualquer novo pedido de prisão.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-slate-700">
              <p className="text-red-400 font-semibold">Abril 2026</p>
              <p className="text-slate-400 text-sm">Novo pedido de prisão possível</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-slate-700">
              <p className="text-yellow-400 font-semibold">Possível Ação Internacional</p>
              <p className="text-slate-400 text-sm">Ela pode usar informações sobre localização</p>
            </div>
            <div className="bg-green-500/20 rounded-lg p-4 text-center border border-green-500/30">
              <p className="text-green-400 font-bold">AGORA</p>
              <p className="text-slate-300 text-sm">Entrar com Revisional</p>
            </div>
          </div>
        </div>

        {/* As 3 Teses */}
        <div className="space-y-6 mb-12">
          {/* Tese 1 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
            <button
              onClick={() => setExpandedTese(expandedTese === 1 ? null : 1)}
              className="w-full p-6 flex items-center justify-between hover:bg-slate-800/70 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white">Tese 1: Compensação pela Má-Fé</h3>
                  <p className="text-slate-400 text-sm">Enriquecimento sem causa e bis in idem</p>
                </div>
              </div>
              {expandedTese === 1 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            
            {expandedTese === 1 && (
              <div className="px-6 pb-6 space-y-4 animate-in slide-in-from-top-2">
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Fatos:</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      R$ 27.000 pagos antes da prisão (PIX + Plano de Saúde)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      R$ 70.000 exigidos sem abatimento
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      Cobrança dupla pelo mesmo período
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">Fundamento Legal:</h4>
                  <p className="text-slate-300 text-sm">
                    Art. 884, CC (Enriquecimento sem causa) + Art. 80, CPC (Má-fé processual)
                  </p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Pedido:</h4>
                  <p className="text-slate-400 text-sm">
                    Compensação imediata dos R$ 27.000 + Tutela de Urgência para suspender exigibilidade das próximas parcelas
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Tese 2 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
            <button
              onClick={() => setExpandedTese(expandedTese === 2 ? null : 2)}
              className="w-full p-6 flex items-center justify-between hover:bg-slate-800/70 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white">Tese 2: Prestação de Contas</h3>
                  <p className="text-slate-400 text-sm">Transparência no uso da pensão</p>
                </div>
              </div>
              {expandedTese === 2 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            
            {expandedTese === 2 && (
              <div className="px-6 pb-6 space-y-4 animate-in slide-in-from-top-2">
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Argumento:</h4>
                  <p className="text-slate-400 text-sm">
                    A má-fé comprovada ao inflar a dívida levanta dúvidas sobre a veracidade das necessidades alegadas para o filho.
                  </p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-400 mb-2">Objetivo:</h4>
                  <p className="text-slate-300 text-sm">
                    Verificar se a pensão está sendo usada para o bem-estar da criança ou para outros fins, desvirtuando sua finalidade.
                  </p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Pedido:</h4>
                  <p className="text-slate-400 text-sm">
                    Intimação da genitora para apresentar prestação de contas detalhada com notas e recibos dos gastos com Tomás
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Tese 3 - CENTRAL */}
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-2 border-amber-500/50 rounded-xl overflow-hidden relative">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-amber-500/30 text-amber-400 text-xs font-bold rounded-full">
                TESE CENTRAL
              </span>
            </div>
            <button
              onClick={() => setExpandedTese(expandedTese === 3 ? null : 3)}
              className="w-full p-6 flex items-center justify-between hover:bg-slate-800/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-amber-400" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white">Tese 3: Revisão Imediata</h3>
                  <p className="text-slate-400 text-sm">A nova realidade exige adequação</p>
                </div>
              </div>
              {expandedTese === 3 ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            
            {expandedTese === 3 && (
              <div className="px-6 pb-6 space-y-4 animate-in slide-in-from-top-2">
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Situação Atual:</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-white">Renda atual:</span> R$ 15.000/mês
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-white">Custos essenciais:</span> R$ 8.704/mês
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-white">Medicamentos TDAH/TOC:</span> R$ 930/mês
                    </li>
                  </ul>
                </div>
                
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-400 mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Conectado à Bala de Prata:
                  </h4>
                  <p className="text-slate-300 text-sm mb-3">
                    O diagnóstico de TDAH (Dez/2024) não foi apenas médico — foi uma descoberta de propósito.
                  </p>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>→ Tecnologia saiu do propósito de vida</li>
                    <li>→ Novo MEI: Educação em saúde mental (@rafael.tdah)</li>
                    <li>→ Objetivo: ajudar quem vive com TDAH e não sabe</li>
                    <li>→ Renda em transição para nova carreira</li>
                  </ul>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Pedido:</h4>
                  <p className="text-slate-400 text-sm">
                    Liminar para revisão imediata da pensão com base no binômio necessidade/possibilidade atualizado — 
                    considerando a transição de carreira genuína e documentada motivada por questões de saúde mental.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg p-4 text-center">
                  <p className="text-white font-medium italic">
                    "Quero salvar vidas. Preciso das condições necessárias para isso."
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* A Bala de Prata */}
        <div className="mb-12">
          <button
            onClick={() => setShowBalaPrata(!showBalaPrata)}
            className="w-full bg-gradient-to-r from-red-500/10 via-orange-500/10 to-amber-500/10 border border-red-500/30 rounded-xl p-6 hover:border-red-500/50 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500/30 to-amber-500/30 rounded-xl flex items-center justify-center relative">
                  <Target className="w-7 h-7 text-red-400" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-red-400 font-medium">🎯 ESTRATÉGIA CONFIDENCIAL</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">A Bala de Prata</h2>
                  <p className="text-slate-400 text-sm">"A jogada que muda tudo"</p>
                </div>
              </div>
              {showBalaPrata ? (
                <ChevronUp className="w-6 h-6 text-slate-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-slate-400" />
              )}
            </div>
          </button>

          {showBalaPrata && (
            <div className="mt-4 bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-6 animate-in slide-in-from-top-2">
              <p className="text-slate-300 leading-relaxed">
                Uma estratégia genuína de reinvenção profissional por saúde mental que fortalece juridicamente 
                a revisão de pensão e desarma qualquer contra-ataque.
              </p>

              {/* A Descoberta */}
              <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-6 h-6 text-purple-400" />
                  <h4 className="font-semibold text-white text-lg">A Descoberta que Mudou Tudo</h4>
                </div>
                <p className="text-slate-400 mb-4">
                  Antes de descobrir o TDAH, eu vivia ouvindo "vozes" — críticas, cobranças, expectativas dos outros. 
                  Quando coloquei os "óculos do TDAH", essas vozes silenciaram e minha própria voz alcançou minha consciência.
                </p>
                <p className="text-slate-300">
                  Vi com clareza que meu propósito é ajudar outras pessoas na mesma condição — com TDAH/TOC — e empreender nessa área.
                </p>
              </div>

              {/* A Decisão Estratégica */}
              <div className="bg-slate-800/50 rounded-lg p-5 border border-slate-700">
                <h4 className="font-semibold text-white text-lg mb-4">A Decisão Estratégica</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs">1</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Desativar MEI antigo</p>
                      <p className="text-slate-400 text-sm">Não tenho mais interesse em atuar com tecnologia diretamente</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-400 text-xs">2</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Este projeto é o último</p>
                      <p className="text-slate-400 text-sm">Para honrar a dívida não conciliada</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-400 text-xs">3</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Abrir novo MEI</p>
                      <p className="text-slate-400 text-sm">Educação conectada ao perfil @rafael.tdah</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Por que essa decisão */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-5">
                <h4 className="font-semibold text-white text-lg mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                  Por que essa decisão?
                </h4>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-blue-400">4 milhões</p>
                    <p className="text-slate-400 text-xs">adultos com TDAH no Brasil</p>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-purple-400">+123%</p>
                    <p className="text-slate-400 text-xs">aumento diagnósticos adultos</p>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-green-400">Maioria</p>
                    <p className="text-slate-400 text-xs">não foi diagnosticada na infância</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <p className="text-slate-300">
                    <strong className="text-white">🧠 Minha Jornada:</strong> TOC (Pure O) desde os 14 anos — sofri décadas sem saber, descobri sozinho. 
                    TDAH descoberto tardiamente — era a condição primária, TOC era secundário.
                  </p>
                  <p className="text-slate-300">
                    <strong className="text-white">💡 O que descobri:</strong> Talento para empreender (saúde, estética, outras áreas) — inevitável. 
                    Tecnologia saiu do propósito — definitivamente. Facilidade para identificar padrões — quero usar para ajudar.
                  </p>
                </div>
              </div>

              {/* @rafael.tdah */}
              <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-lg p-5 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Instagram className="w-6 h-6 text-pink-400" />
                  <span className="text-xl font-bold text-white">@rafael.tdah</span>
                </div>
                <p className="text-slate-300 mb-4">
                  Mídia social como canal de comunicação. Milhões vivem com TDAH sem saber.
                </p>
                <p className="text-white font-medium italic">
                  "Quero salvar vidas. Preciso das condições necessárias para isso."
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Conclusão */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
          <Scale className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">A Estratégia é Clara</h3>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-6">
            Três teses que se complementam: <strong className="text-blue-400">compensação</strong> pelo que foi pago, 
            <strong className="text-purple-400"> transparência</strong> no uso da pensão e 
            <strong className="text-amber-400"> revisão</strong> baseada na nova realidade.
          </p>
          <p className="text-slate-400">
            A Bala de Prata — a transição de carreira por saúde mental — é o que dá <strong className="text-white">legitimidade</strong> e 
            <strong className="text-white"> autenticidade</strong> a toda a estratégia.
          </p>
        </div>
      </main>
    </div>
  );
};

export default EstrategiaJuridica;
