import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Clock, 
  ExternalLink,
  DollarSign,
  Calendar,
  AlertCircle,
  Heart
} from "lucide-react";

interface PensaoMes {
  mes: string;
  mesNum: number;
  status: "pago" | "aberto" | "futuro" | "parcial";
  valor?: string;
  link?: string;
  detalhes?: string[];
}

interface PensaoSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function PensaoSidebar({ isOpen, onToggle }: PensaoSidebarProps) {
  const [selectedYear, setSelectedYear] = useState(2026);
  const [showPlanoSaude, setShowPlanoSaude] = useState(false);

  // Dados REAIS das pensões extraídos dos comprovantes
  const pensoes2025: PensaoMes[] = [
    { 
      mes: "Jan", 
      mesNum: 1, 
      status: "pago", 
      valor: "R$ 450,00", 
      link: "#",
      detalhes: ["27/01: R$ 450,00 (BTG)"]
    },
    { 
      mes: "Fev", 
      mesNum: 2, 
      status: "pago", 
      valor: "R$ 750,00", 
      link: "#",
      detalhes: ["07/02: R$ 200,00 (BTG)", "24/02: R$ 300,00 (BTG)", "27/02: R$ 250,00 (BTG)"]
    },
    { 
      mes: "Mar", 
      mesNum: 3, 
      status: "pago", 
      valor: "R$ 949,46", 
      link: "#",
      detalhes: ["11/03: R$ 200,00 (BTG)", "25/03: R$ 250,00 (BTG)", "31/03: R$ 499,46 (BTG)"]
    },
    { 
      mes: "Abr", 
      mesNum: 4, 
      status: "pago", 
      valor: "R$ 600,00", 
      link: "#",
      detalhes: ["04/04: R$ 200,00 (BTG)", "17/04: R$ 200,00 (BTG)", "24/04: R$ 200,00 (BTG)"]
    },
    { 
      mes: "Mai", 
      mesNum: 5, 
      status: "pago", 
      valor: "R$ 600,00", 
      link: "#",
      detalhes: ["02/05: R$ 200,00 (BTG)", "02/05: R$ 200,00 (BTG)", "02/05: R$ 200,00 (BTG) - devolução reenviada"]
    },
    { 
      mes: "Jun", 
      mesNum: 6, 
      status: "parcial", 
      valor: "R$ 0,00",
      detalhes: ["Sem comprovantes encontrados"]
    },
    { 
      mes: "Jul", 
      mesNum: 7, 
      status: "pago", 
      valor: "R$ 600,00", 
      link: "#",
      detalhes: ["17/07: R$ 200,00 (PicPay)", "24/07: R$ 200,00 (PicPay)", "31/07: R$ 200,00 (PicPay)"]
    },
    { 
      mes: "Ago", 
      mesNum: 8, 
      status: "pago", 
      valor: "R$ 800,18", 
      link: "#",
      detalhes: ["09/08: R$ 200,00 (PicPay)", "14/08: R$ 200,00 (PicPay)", "22/08: R$ 200,00 (PicPay)", "29/08: R$ 200,18 (InfinityPay)"]
    },
    { 
      mes: "Set", 
      mesNum: 9, 
      status: "pago", 
      valor: "R$ 800,00", 
      link: "#",
      detalhes: ["05/09: R$ 200,00 (PicPay)", "12/09: R$ 200,00 (PicPay)", "20/09: R$ 200,00 (InfinityPay)", "28/09: R$ 200,00 (InfinityPay)"]
    },
    { 
      mes: "Out", 
      mesNum: 10, 
      status: "pago", 
      valor: "R$ 1.000,00", 
      link: "#",
      detalhes: ["04/10: R$ 200,00 (InfinityPay)", "10/10: R$ 800,00 (PicPay)"]
    },
    { 
      mes: "Nov", 
      mesNum: 11, 
      status: "pago", 
      valor: "R$ 800,00", 
      link: "#",
      detalhes: ["10/11: R$ 800,00 (InfinityPay)"]
    },
    { 
      mes: "Dez", 
      mesNum: 12, 
      status: "parcial", 
      valor: "R$ 0,00",
      detalhes: ["Sem comprovantes encontrados"]
    },
  ];

  const pensoes2026: PensaoMes[] = [
    { 
      mes: "Jan", 
      mesNum: 1, 
      status: "pago", 
      valor: "R$ 1.621,00", 
      link: "#",
      detalhes: ["22/01: R$ 1.621,00 (PicPay)"]
    },
    { mes: "Fev", mesNum: 2, status: "aberto", valor: "Pendente" },
    { mes: "Mar", mesNum: 3, status: "futuro" },
    { mes: "Abr", mesNum: 4, status: "futuro" },
    { mes: "Mai", mesNum: 5, status: "futuro" },
    { mes: "Jun", mesNum: 6, status: "futuro" },
    { mes: "Jul", mesNum: 7, status: "futuro" },
    { mes: "Ago", mesNum: 8, status: "futuro" },
    { mes: "Set", mesNum: 9, status: "futuro" },
    { mes: "Out", mesNum: 10, status: "futuro" },
    { mes: "Nov", mesNum: 11, status: "futuro" },
    { mes: "Dez", mesNum: 12, status: "futuro" },
  ];

  const pensoes = selectedYear === 2025 ? pensoes2025 : pensoes2026;

  // Cálculo dos totais REAIS
  const total2025 = 7349.64; // R$ 450 + 750 + 949.46 + 600 + 600 + 0 + 600 + 800.18 + 800 + 1000 + 800 + 0
  const total2026 = 1621.00;
  const totalGeral = total2025 + total2026;

  // Plano de Saúde - valores reais
  const planoSaudeTomas = 395.43; // mensal
  const planoSaudeInicio = "Nov/2024";
  const mesesPlanoSaude = 15; // Nov/2024 até Jan/2026
  const totalPlanoSaude = planoSaudeTomas * mesesPlanoSaude;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pago": return "bg-green-500/20 border-green-500/50 text-green-400";
      case "aberto": return "bg-amber-500/20 border-amber-500/50 text-amber-400 animate-pulse";
      case "parcial": return "bg-orange-500/20 border-orange-500/50 text-orange-400";
      case "futuro": return "bg-slate-700/30 border-slate-600/30 text-slate-500";
      default: return "bg-slate-700/30 border-slate-600/30 text-slate-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pago": return <Check className="w-3 h-3" />;
      case "aberto": return <Clock className="w-3 h-3" />;
      case "parcial": return <AlertCircle className="w-3 h-3" />;
      default: return null;
    }
  };

  const [hoveredMonth, setHoveredMonth] = useState<PensaoMes | null>(null);

  return (
    <>
      {/* Toggle Button - Profissional e Minimalista */}
      <motion.button
        onClick={onToggle}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 group"
        animate={{ x: isOpen ? -320 : 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        {/* Container principal do botão */}
        <div className="relative bg-gradient-to-l from-emerald-600 to-emerald-700 text-white px-3 py-8 rounded-l-2xl shadow-xl hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300">
          
          {/* Indicador de notificação - bolinha pulsante */}
          {!isOpen && (
            <motion.div
              className="absolute -top-1 -left-1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
            </motion.div>
          )}
          
          {/* Borda luminosa sutil */}
          <div className="absolute inset-0 rounded-l-2xl border border-emerald-400/30 pointer-events-none" />
          
          {/* Conteúdo do botão */}
          <div className="relative flex flex-col items-center gap-3">
            <motion.div
              animate={!isOpen ? { rotate: [0, -10, 10, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {isOpen ? (
                <ChevronRight className="w-5 h-5" />
              ) : (
                <ChevronLeft className="w-5 h-5" />
              )}
            </motion.div>
            
            <div className="flex flex-col items-center">
              <span 
                className="text-xs font-bold tracking-wider"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                PENSÕES
              </span>
            </div>
            
            <motion.div
              className="p-1.5 bg-white/10 rounded-lg"
              animate={!isOpen ? { 
                boxShadow: [
                  "0 0 0 0 rgba(255,255,255,0)",
                  "0 0 0 4px rgba(255,255,255,0.2)",
                  "0 0 0 0 rgba(255,255,255,0)"
                ]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <DollarSign className="w-4 h-4" />
            </motion.div>
          </div>
          
          {/* Linha de destaque na borda esquerda */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-transparent via-emerald-300 to-transparent rounded-full"
            animate={!isOpen ? { 
              opacity: [0.3, 1, 0.3],
              height: ["30%", "60%", "30%"]
            } : { opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.button>

      {/* Sidebar Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 350, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 350, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-l border-slate-700 z-40 shadow-2xl overflow-y-auto"
          >
            <div className="p-5 h-full flex flex-col">
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-emerald-400" />
                  <h2 className="text-lg font-bold text-white">Controle de Pensões</h2>
                </div>
                <p className="text-xs text-slate-400">Valores reais extraídos dos comprovantes</p>
              </div>

              {/* Year Selector */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <button
                  onClick={() => setSelectedYear(2025)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
                    selectedYear === 2025 
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50" 
                      : "bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  2025
                </button>
                <button
                  onClick={() => setSelectedYear(2026)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
                    selectedYear === 2026 
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50" 
                      : "bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  2026
                </button>
              </div>

              {/* Months Grid */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {pensoes.map((pensao) => (
                  <motion.div
                    key={pensao.mes}
                    className="relative"
                    onMouseEnter={() => setHoveredMonth(pensao)}
                    onMouseLeave={() => setHoveredMonth(null)}
                  >
                    <motion.button
                      whileHover={{ scale: pensao.status !== "futuro" ? 1.05 : 1 }}
                      whileTap={{ scale: pensao.status !== "futuro" ? 0.95 : 1 }}
                      onClick={() => {
                        if (pensao.link && pensao.status === "pago") {
                          window.open(pensao.link, "_blank");
                        }
                      }}
                      className={`w-full relative p-2 rounded-lg border transition-all ${getStatusColor(pensao.status)} ${
                        pensao.status === "pago" ? "cursor-pointer hover:shadow-lg hover:shadow-green-500/20" : 
                        pensao.status === "aberto" ? "cursor-default" : 
                        pensao.status === "parcial" ? "cursor-help" : "cursor-not-allowed"
                      }`}
                      disabled={pensao.status === "futuro"}
                    >
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="text-xs font-bold">{pensao.mes}</span>
                        {getStatusIcon(pensao.status)}
                        {pensao.valor && (
                          <span className="text-[10px] opacity-80">{pensao.valor}</span>
                        )}
                        {pensao.status === "pago" && pensao.link && (
                          <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                        )}
                      </div>
                      {pensao.status === "aberto" && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full animate-ping" />
                      )}
                    </motion.button>
                    
                    {/* Tooltip com detalhes */}
                    {hoveredMonth === pensao && pensao.detalhes && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute z-50 left-0 top-full mt-1 w-48 p-2 bg-slate-800 border border-slate-600 rounded-lg shadow-xl"
                      >
                        <p className="text-xs font-semibold text-white mb-1">{pensao.mes}/{selectedYear}</p>
                        {pensao.detalhes.map((detalhe, idx) => (
                          <p key={idx} className="text-[10px] text-slate-300">{detalhe}</p>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Legend */}
              <div className="mb-4 pt-3 border-t border-slate-700">
                <p className="text-xs text-slate-500 mb-2">Legenda:</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-2.5 h-2.5 rounded bg-green-500/50"></div>
                    <span className="text-slate-400">Pago</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2.5 h-2.5 rounded bg-amber-500/50 animate-pulse"></div>
                    <span className="text-slate-400">Em aberto</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2.5 h-2.5 rounded bg-orange-500/50"></div>
                    <span className="text-slate-400">Sem comprovante</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2.5 h-2.5 rounded bg-slate-600/50"></div>
                    <span className="text-slate-400">Futuro</span>
                  </div>
                </div>
              </div>

              {/* Summary - Pensão */}
              <div className="p-3 bg-slate-800/50 rounded-xl mb-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Total {selectedYear}:</span>
                  <span className="text-base font-bold text-emerald-400">
                    R$ {selectedYear === 2025 ? total2025.toLocaleString('pt-BR', {minimumFractionDigits: 2}) : total2026.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-slate-500">Meses pagos:</span>
                  <span className="text-sm text-green-400">
                    {pensoes.filter(p => p.status === "pago").length}/12
                  </span>
                </div>
              </div>

              {/* Plano de Saúde Toggle */}
              <button
                onClick={() => setShowPlanoSaude(!showPlanoSaude)}
                className="w-full p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl mb-3 hover:bg-rose-500/20 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-rose-400" />
                    <span className="text-sm font-semibold text-rose-400">Plano de Saúde Tomás</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-rose-400 transition-transform ${showPlanoSaude ? 'rotate-90' : ''}`} />
                </div>
              </button>

              {/* Plano de Saúde Details */}
              <AnimatePresence>
                {showPlanoSaude && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-3 bg-rose-500/5 border border-rose-500/20 rounded-xl mb-3">
                      <p className="text-xs text-slate-400 mb-2">Amil S380 QP NAC R - Dependente</p>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-xs text-slate-500">Valor mensal:</span>
                          <span className="text-xs font-semibold text-rose-400">R$ {planoSaudeTomas.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-slate-500">Início:</span>
                          <span className="text-xs text-slate-300">{planoSaudeInicio}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-slate-500">Meses pagos:</span>
                          <span className="text-xs text-slate-300">{mesesPlanoSaude}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-rose-500/20">
                          <span className="text-xs font-semibold text-slate-400">Total pago:</span>
                          <span className="text-sm font-bold text-rose-400">R$ {totalPlanoSaude.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Grand Total */}
              <div className="mt-auto p-4 bg-gradient-to-r from-emerald-500/10 to-rose-500/10 border border-emerald-500/30 rounded-xl">
                <p className="text-xs text-slate-400 mb-2 text-center">TOTAL GERAL COMPROVADO</p>
                <div className="text-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-rose-400 bg-clip-text text-transparent">
                    R$ {(totalGeral + totalPlanoSaude).toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                  </span>
                </div>
                <div className="flex justify-between mt-2 text-xs">
                  <span className="text-slate-500">Pensão: R$ {totalGeral.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                  <span className="text-slate-500">Saúde: R$ {totalPlanoSaude.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
