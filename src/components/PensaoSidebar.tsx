import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Clock, 
  ExternalLink,
  DollarSign,
  Calendar
} from "lucide-react";

interface PensaoMes {
  mes: string;
  mesNum: number;
  status: "pago" | "aberto" | "futuro";
  valor?: string;
  link?: string;
}

interface PensaoSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function PensaoSidebar({ isOpen, onToggle }: PensaoSidebarProps) {
  const [selectedYear, setSelectedYear] = useState(2026);
  const [showWolf, setShowWolf] = useState(false);

  // Animação do lobo que aparece periodicamente
  useEffect(() => {
    if (isOpen) return; // Não mostrar quando o painel está aberto
    
    const interval = setInterval(() => {
      setShowWolf(true);
      setTimeout(() => setShowWolf(false), 3000); // Lobo fica visível por 3 segundos
    }, 8000); // A cada 8 segundos

    // Mostrar na primeira vez após 2 segundos
    const initialTimeout = setTimeout(() => {
      setShowWolf(true);
      setTimeout(() => setShowWolf(false), 3000);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, [isOpen]);

  // Dados das pensões - depois você atualiza com os links do Google Drive
  const pensoes2025: PensaoMes[] = [
    { mes: "Jan", mesNum: 1, status: "pago", valor: "R$ 4.000", link: "#" },
    { mes: "Fev", mesNum: 2, status: "pago", valor: "R$ 4.000", link: "#" },
    { mes: "Mar", mesNum: 3, status: "pago", valor: "R$ 4.000", link: "#" },
    { mes: "Abr", mesNum: 4, status: "pago", valor: "R$ 4.000", link: "#" },
    { mes: "Mai", mesNum: 5, status: "pago", valor: "R$ 4.000", link: "#" },
    { mes: "Jun", mesNum: 6, status: "pago", valor: "R$ 4.000", link: "#" },
    { mes: "Jul", mesNum: 7, status: "pago", valor: "R$ 4.000", link: "#" },
    { mes: "Ago", mesNum: 8, status: "pago", valor: "R$ 4.000", link: "#" },
    { mes: "Set", mesNum: 9, status: "pago", valor: "R$ 4.000", link: "#" },
    { mes: "Out", mesNum: 10, status: "pago", valor: "R$ 4.000", link: "#" },
    { mes: "Nov", mesNum: 11, status: "pago", valor: "R$ 4.000", link: "#" },
    { mes: "Dez", mesNum: 12, status: "pago", valor: "R$ 4.000", link: "#" },
  ];

  const pensoes2026: PensaoMes[] = [
    { mes: "Jan", mesNum: 1, status: "pago", valor: "R$ 4.000", link: "#" },
    { mes: "Fev", mesNum: 2, status: "aberto", valor: "R$ 4.000" },
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pago": return "bg-green-500/20 border-green-500/50 text-green-400";
      case "aberto": return "bg-amber-500/20 border-amber-500/50 text-amber-400 animate-pulse";
      case "futuro": return "bg-slate-700/30 border-slate-600/30 text-slate-500";
      default: return "bg-slate-700/30 border-slate-600/30 text-slate-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pago": return <Check className="w-3 h-3" />;
      case "aberto": return <Clock className="w-3 h-3" />;
      default: return null;
    }
  };

  return (
    <>
      {/* Lobo animado que caminha em direção ao botão */}
      <AnimatePresence>
        {showWolf && !isOpen && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ 
              duration: 2,
              ease: "easeOut"
            }}
            className="fixed right-16 top-1/2 -translate-y-1/2 z-40 pointer-events-none"
          >
            <motion.div
              animate={{ 
                y: [0, -3, 0],
              }}
              transition={{ 
                duration: 0.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex items-center gap-2"
            >
              {/* Lobo minimalista */}
              <motion.img 
                src="/mascote-lobo.png" 
                alt="Lobo" 
                className="w-10 h-10 drop-shadow-lg"
                animate={{ 
                  rotate: [0, -5, 5, 0],
                }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Seta apontando para o botão */}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-emerald-400"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button - sempre visível */}
      <motion.button
        onClick={onToggle}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-gradient-to-l from-emerald-600 to-emerald-700 text-white px-2 py-6 rounded-l-xl shadow-lg hover:from-emerald-500 hover:to-emerald-600 transition-all overflow-hidden"
        whileHover={{ x: -4 }}
        animate={{ 
          x: isOpen ? -280 : 0,
          boxShadow: isOpen ? "0 0 0 rgba(16, 185, 129, 0)" : [
            "0 0 0 rgba(16, 185, 129, 0)",
            "0 0 20px rgba(16, 185, 129, 0.5)",
            "0 0 0 rgba(16, 185, 129, 0)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-emerald-400/0 via-emerald-400/30 to-emerald-400/0"
          animate={{
            y: ["-100%", "100%"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="relative flex flex-col items-center gap-2">
          {isOpen ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          <span className="text-xs font-bold" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            PENSÕES
          </span>
          <motion.div
            animate={!isOpen ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <DollarSign className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.button>

      {/* Sidebar Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-72 bg-slate-900/95 backdrop-blur-xl border-l border-slate-700 z-40 shadow-2xl"
          >
            <div className="p-6 h-full flex flex-col">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-emerald-400" />
                  <h2 className="text-lg font-bold text-white">Controle de Pensões</h2>
                </div>
                <p className="text-xs text-slate-400">Clique no mês para ver o comprovante</p>
              </div>

              {/* Year Selector */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <button
                  onClick={() => setSelectedYear(2025)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedYear === 2025 
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50" 
                      : "bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  2025
                </button>
                <button
                  onClick={() => setSelectedYear(2026)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedYear === 2026 
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50" 
                      : "bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  2026
                </button>
              </div>

              {/* Months Grid */}
              <div className="grid grid-cols-3 gap-2 flex-1">
                {pensoes.map((pensao) => (
                  <motion.button
                    key={pensao.mes}
                    whileHover={{ scale: pensao.status !== "futuro" ? 1.05 : 1 }}
                    whileTap={{ scale: pensao.status !== "futuro" ? 0.95 : 1 }}
                    onClick={() => {
                      if (pensao.link && pensao.status === "pago") {
                        window.open(pensao.link, "_blank");
                      }
                    }}
                    className={`relative p-3 rounded-lg border transition-all ${getStatusColor(pensao.status)} ${
                      pensao.status === "pago" ? "cursor-pointer hover:shadow-lg hover:shadow-green-500/20" : 
                      pensao.status === "aberto" ? "cursor-default" : "cursor-not-allowed"
                    }`}
                    disabled={pensao.status === "futuro"}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-bold">{pensao.mes}</span>
                      {getStatusIcon(pensao.status)}
                      {pensao.status === "pago" && (
                        <ExternalLink className="w-3 h-3 opacity-50" />
                      )}
                    </div>
                    {pensao.status === "aberto" && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full animate-ping" />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 pt-4 border-t border-slate-700">
                <p className="text-xs text-slate-500 mb-3">Legenda:</p>
                <div className="flex flex-wrap gap-3 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-green-500/50"></div>
                    <span className="text-slate-400">Pago</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-amber-500/50 animate-pulse"></div>
                    <span className="text-slate-400">Em aberto</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-slate-600/50"></div>
                    <span className="text-slate-400">Futuro</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-4 p-4 bg-slate-800/50 rounded-xl">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Total {selectedYear}:</span>
                  <span className="text-lg font-bold text-emerald-400">
                    {selectedYear === 2025 ? "R$ 48.000" : "R$ 4.000"}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-slate-500">Meses pagos:</span>
                  <span className="text-sm text-green-400">
                    {pensoes.filter(p => p.status === "pago").length}/12
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
