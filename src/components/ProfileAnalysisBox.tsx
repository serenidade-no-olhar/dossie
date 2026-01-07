import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  AlertTriangle, 
  Fingerprint, 
  Shield, 
  Scale, 
  Users, 
  Brain, 
  ChevronDown,
  Gavel,
  Network,
  Heart,
  Target,
  Clock,
  Baby,
  FileX,
  Handshake,
  Ban,
  TrendingUp
} from "lucide-react";

export default function ProfileAnalysisBox() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-red-950 via-slate-900 to-red-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/20 rounded-full mb-6 animate-pulse">
            <AlertTriangle className="h-5 w-5 text-red-400" />
            <span className="text-red-300 font-bold">⚠️ ANÁLISE ESTRATÉGICA</span>
            <AlertTriangle className="h-5 w-5 text-red-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Conhecendo o Terreno
          </h2>
          <p className="text-xl text-red-200/80 max-w-3xl mx-auto">
            Prima, para defender é preciso entender. Cada fato abaixo é uma peça do quebra-cabeça.
          </p>
        </div>

        {/* Main Expandable Card */}
        <div className="max-w-5xl mx-auto">
          <Card 
            className={`
              cursor-pointer transition-all duration-500 
              border-2 border-red-500/50 
              bg-gradient-to-br from-slate-900 to-red-950
              hover:border-red-400 hover:shadow-2xl hover:shadow-red-500/20
              ${isExpanded ? 'shadow-2xl shadow-red-500/30' : ''}
            `}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {/* Header Redesenhado */}
            <CardHeader className="relative py-6">
              <div className={`absolute inset-0 bg-red-500/5 rounded-t-lg ${!isExpanded ? 'animate-pulse' : ''}`}></div>
              <div className="relative flex items-center justify-between gap-4">
                <div className="flex items-center gap-5">
                  {/* Ícone redesenhado - mais integrado */}
                  <div className={`
                    relative w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/30 to-red-600/20 
                    flex items-center justify-center border border-red-500/30
                    ${!isExpanded ? 'animate-pulse' : ''}
                  `}>
                    <Fingerprint className="h-7 w-7 text-red-400" />
                    {!isExpanded && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl text-white leading-tight">
                      O Perfil por Trás dos Fatos
                    </CardTitle>
                    <p className="text-red-300/70 text-sm mt-1">
                      {isExpanded ? 'Clique para recolher' : '🔍 Clique para expandir a análise'}
                    </p>
                  </div>
                </div>
                <div className={`text-red-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                  <ChevronDown className="h-7 w-7" />
                </div>
              </div>
            </CardHeader>

            {/* Expandable Content */}
            <div className={`
              overflow-hidden transition-all duration-700 ease-in-out
              ${isExpanded ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0'}
            `}>
              <CardContent className="space-y-8 pt-6">
                
                {/* Conclusão Principal - Curta e Direta */}
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <p className="text-lg text-red-100/90 leading-relaxed text-center">
                    Os comportamentos abaixo são <strong className="text-red-300">consistentes com 
                    Transtorno de Personalidade Narcisista (TPN)</strong>. Não é opinião — são fatos 
                    documentados que formam um padrão previsível.
                  </p>
                </div>

                {/* SEÇÃO 1: O Acordo Quebrado */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <Handshake className="h-6 w-6 text-amber-400" />
                    O Acordo Bilateral Quebrado
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Minha Parte */}
                    <div className="bg-green-900/20 rounded-xl p-5 border border-green-500/30">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                          <span className="text-green-400 font-bold">✓</span>
                        </div>
                        <span className="font-bold text-green-300">O que EU fiz</span>
                      </div>
                      <ul className="space-y-2 text-sm text-green-100/80">
                        <li>• Me mudei para MG por ela (acordo)</li>
                        <li>• Estive ao lado na perda da filha aos 6 meses</li>
                        <li>• Paguei plano de saúde, aluguel, tudo</li>
                        <li>• Acordava 5h para cuidar do Tomás</li>
                        <li>• Comprei enxoval, ar-condicionado, geladeira</li>
                        <li>• Paguei diarista para ela ter exclusividade com o filho</li>
                      </ul>
                    </div>

                    {/* Parte Dela */}
                    <div className="bg-red-900/20 rounded-xl p-5 border border-red-500/30">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                          <span className="text-red-400 font-bold">✗</span>
                        </div>
                        <span className="font-bold text-red-300">O que ELA fez</span>
                      </div>
                      <ul className="space-y-2 text-sm text-red-100/80">
                        <li>• <strong>1 ano e 5 meses depois:</strong> não cumpriu a parte dela</li>
                        <li>• O acordo era ir para o Sul</li>
                        <li>• Nunca foi</li>
                        <li>• Nunca mencionou</li>
                        <li>• Nunca se desculpou</li>
                      </ul>
                      <div className="mt-3 pt-3 border-t border-red-500/20">
                        <p className="text-xs text-red-300/70 italic">
                          "Acordos são unilaterais para quem só enxerga a si mesmo."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SEÇÃO 2: Fatos que Provam o Padrão */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <Target className="h-6 w-6 text-red-400" />
                    Fatos Concretos = Padrão Narcisista
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Fato 1: 15 dias */}
                    <div className="bg-slate-800/50 rounded-xl p-5 border-l-4 border-amber-500">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-amber-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">15 dias de antecedência para ver o filho</h4>
                          <p className="text-slate-300 text-sm mb-2">
                            Para ver Tomás por 1 ou 2 dias, preciso avisar com 15 dias de antecedência 
                            e ter presença de terceiros. Para o próprio filho.
                          </p>
                          <div className="bg-amber-900/30 rounded px-3 py-2">
                            <p className="text-xs text-amber-200">
                              <strong>Padrão:</strong> Controle absoluto. O filho é usado como instrumento de poder.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Fato 2: Arrancou do colo */}
                    <div className="bg-slate-800/50 rounded-xl p-5 border-l-4 border-red-500">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                          <Baby className="h-6 w-6 text-red-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">Arrancou Tomás do meu colo — sob ordem judicial</h4>
                          <p className="text-slate-300 text-sm mb-2">
                            Junho/2025: Minha mãe, irmão e irmã foram conhecer o sobrinho/neto pela primeira vez. 
                            Eu tinha ordem judicial para a visita. Ela arrancou Tomás do meu colo e encerrou 
                            a visita alegando que "eles não estavam na ordem".
                          </p>
                          <p className="text-slate-400 text-xs mb-2">
                            Ironicamente, o pai dela e a cunhada advogada estavam presentes do lado dela.
                          </p>
                          <div className="bg-red-900/30 rounded px-3 py-2">
                            <p className="text-xs text-red-200">
                              <strong>Padrão:</strong> Crueldade calculada. Privou a criança de conhecer a família paterna 
                              usando uma tecnicidade como desculpa.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Fato 3: Recusa de acordos */}
                    <div className="bg-slate-800/50 rounded-xl p-5 border-l-4 border-purple-500">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <Ban className="h-6 w-6 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">Todas as propostas de acordo: NÃO</h4>
                          <p className="text-slate-300 text-sm mb-2">
                            Proposta: R$ 2.300 + plano de saúde + "sendo amigos, o que meu filho precisasse". 
                            Resposta: Não. Paguei 2 meses de aluguel para ela ficar. Resposta: Não. 
                            Durante a prisão, advogado tentou acordo. Respostas demoravam dias. Sempre: Não.
                          </p>
                          <div className="bg-purple-900/30 rounded px-3 py-2">
                            <p className="text-xs text-purple-200">
                              <strong>Padrão:</strong> Inflexibilidade patológica. O objetivo não é resolver — é punir.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Fato 4: Valores não considerados */}
                    <div className="bg-slate-800/50 rounded-xl p-5 border-l-4 border-blue-500">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <FileX className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">R$ 27.000 pagos = ignorados na prisão</h4>
                          <p className="text-slate-300 text-sm mb-2">
                            Paguei R$ 27.000 (PIX + plano de saúde). Na hora da prisão, cobraram R$ 70.000 
                            sem abater nada. Ela alegou que eu "nunca ajudei".
                          </p>
                          <div className="bg-blue-900/30 rounded px-3 py-2">
                            <p className="text-xs text-blue-200">
                              <strong>Padrão:</strong> Distorção da realidade (gaslighting). Fatos não importam — 
                              a narrativa de vítima precisa ser mantida.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Fato 5: Contradição inicial */}
                    <div className="bg-slate-800/50 rounded-xl p-5 border-l-4 border-orange-500">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                          <Gavel className="h-6 w-6 text-orange-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">Advogada que "não podia trabalhar"</h4>
                          <p className="text-slate-300 text-sm mb-2">
                            Ela é advogada. Advogou em causa própria alegando impossibilidade de trabalhar 
                            para receber R$ 4.000 de pensão para ela mesma. O juiz identificou a contradição 
                            e derrubou o pedido.
                          </p>
                          <div className="bg-orange-900/30 rounded px-3 py-2">
                            <p className="text-xs text-orange-200">
                              <strong>Padrão:</strong> Manipulação do sistema desde o início. Se não funcionou, 
                              passa para a cunhada advogada.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SEÇÃO 3: A Rede de Influência */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <Network className="h-6 w-6 text-purple-400" />
                    A Rede de Influência Jurídica
                  </h3>
                  
                  <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-5">
                    <p className="text-purple-100/90 mb-4">
                      Prima, não é só uma pessoa. É uma estrutura familiar com acesso privilegiado ao sistema:
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="bg-purple-900/40 rounded-lg p-3 text-center">
                        <Users className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                        <p className="text-sm font-bold text-purple-200">Daniela</p>
                        <p className="text-xs text-purple-300/70">Advogada</p>
                      </div>
                      <div className="bg-purple-900/40 rounded-lg p-3 text-center">
                        <Gavel className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                        <p className="text-sm font-bold text-purple-200">Cunhada</p>
                        <p className="text-xs text-purple-300/70">Advogada</p>
                      </div>
                      <div className="bg-purple-900/40 rounded-lg p-3 text-center">
                        <Scale className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                        <p className="text-sm font-bold text-purple-200">Irmã da Cunhada</p>
                        <p className="text-xs text-purple-300/70">Promotora</p>
                      </div>
                      <div className="bg-purple-900/40 rounded-lg p-3 text-center">
                        <Scale className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                        <p className="text-sm font-bold text-purple-200">Ex-Sócio</p>
                        <p className="text-xs text-purple-300/70">Promotor</p>
                      </div>
                    </div>
                    
                    <p className="text-xs text-purple-300/60 mt-4 text-center">
                      Comarca: Minas Gerais (TJMG) — o mesmo território onde essa rede opera.
                    </p>
                  </div>
                </div>

                {/* SEÇÃO 4: Por que isso importa */}
                <div className="bg-gradient-to-r from-amber-900/30 to-red-900/30 border border-amber-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-amber-400" />
                    Por que isso importa para a defesa?
                  </h3>
                  
                  <div className="space-y-3">
                    <p className="text-amber-100/90">
                      <strong className="text-amber-300">O perfil explica o passado e prevê o futuro.</strong>
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-black/20 rounded-lg p-4">
                        <p className="text-sm text-amber-200 font-semibold mb-2">Má-fé já documentada:</p>
                        <ul className="text-xs text-amber-100/80 space-y-1">
                          <li>✓ Recusa sistemática de acordos</li>
                          <li>✓ Valores pagos ignorados</li>
                          <li>✓ Filho usado como arma</li>
                          <li>✓ Contradição sobre capacidade de trabalho</li>
                        </ul>
                      </div>
                      <div className="bg-black/20 rounded-lg p-4">
                        <p className="text-sm text-amber-200 font-semibold mb-2">O que esperar:</p>
                        <ul className="text-xs text-amber-100/80 space-y-1">
                          <li>→ Escalada quando perder controle</li>
                          <li>→ Novas narrativas de vitimização</li>
                          <li>→ Uso da rede jurídica familiar</li>
                          <li>→ Zero flexibilidade em acordos</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conclusão Final */}
                <div className="bg-slate-800/80 rounded-xl p-6 text-center">
                  <p className="text-lg text-white mb-2">
                    💡 <strong>Prima, a conclusão é simples:</strong>
                  </p>
                  <p className="text-slate-300">
                    Não estamos lidando com alguém que quer resolver. Estamos lidando com alguém que quer vencer. 
                    A estratégia precisa ser <strong className="text-amber-300">documentação impecável</strong>, 
                    <strong className="text-amber-300"> antecipação de movimentos</strong> e 
                    <strong className="text-amber-300"> transparência total</strong>.
                  </p>
                  <p className="text-xs text-slate-400 mt-4">
                    Cada fato acima é uma prova. Cada prova fortalece a tese de má-fé processual.
                  </p>
                </div>

              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
