import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Clock, 
  FolderOpen, 
  ChevronRight, 
  LogOut, 
  Shield,
  FileText,
  Mic,
  MessageSquare,
  AlertTriangle,
  Heart,
  ArrowLeft,
  Download,
  ExternalLink,
  Play,
  Image as ImageIcon,
  Eye,
  Scale,
  Receipt
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PensaoSidebar from "@/components/PensaoSidebar";

type View = "dashboard" | "jornada" | "provas";
type ProvaCategoria = "comprovantes" | "dialogos" | "ma-fe" | "boa-fe" | "audios" | "despesas";
type Page = "login" | "dashboard" | "conhecendo-terreno" | "estrategia-juridica";

interface DashboardProps {
  onLogout: () => void;
  onNavigate?: (page: Page) => void;
}

export default function Dashboard({ onLogout, onNavigate }: DashboardProps) {
  const [currentView, setCurrentView] = useState<View>("dashboard");
  const [selectedCategoria, setSelectedCategoria] = useState<ProvaCategoria | null>(null);
  const [pensaoSidebarOpen, setPensaoSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("dossie_auth");
    onLogout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {currentView !== "dashboard" && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setCurrentView("dashboard");
                  setSelectedCategoria(null);
                }}
                className="text-slate-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            )}
            <div className="flex items-center gap-3">
              <img src="/mascote-lobo.png" alt="Logo" className="w-10 h-10" />
              <div>
                <h1 className="font-bold text-lg">Dossiê Tomás</h1>
                <p className="text-xs text-slate-400">Defesa Jurídica</p>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="text-slate-400 hover:text-red-400"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4">
        <AnimatePresence mode="wait">
          {currentView === "dashboard" && (
            <DashboardHome 
              onNavigate={setCurrentView}
              onNavigatePage={onNavigate}
            />
          )}
          {currentView === "jornada" && (
            <JornadaView />
          )}
          {currentView === "provas" && (
            <ProvasView 
              selectedCategoria={selectedCategoria}
              onSelectCategoria={setSelectedCategoria}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Painel Lateral de Pensões */}
      <PensaoSidebar 
        isOpen={pensaoSidebarOpen} 
        onToggle={() => setPensaoSidebarOpen(!pensaoSidebarOpen)} 
      />
    </div>
  );
}

// Dashboard Home - As quatro "portas"
function DashboardHome({ onNavigate, onNavigatePage }: { onNavigate: (view: View) => void; onNavigatePage?: (page: Page) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto max-w-5xl"
    >
      {/* Saudação */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
        >
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Área Protegida</span>
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bem-vinda, <span className="text-primary">Prima</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Aqui está tudo que você precisa saber. Cristalino, organizado e pronto pra usar.
        </p>
      </div>

      {/* As quatro portas - Grid 2x2 */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Porta 1: A Jornada */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Card 
            className="group cursor-pointer bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-primary/50 transition-all duration-300 overflow-hidden h-full"
            onClick={() => onNavigate("jornada")}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                  <Clock className="w-10 h-10 text-primary" />
                </div>
                <ChevronRight className="w-6 h-6 text-slate-500 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                A Jornada
              </h2>
              <p className="text-slate-400 mb-6">
                Entenda como chegamos aqui. A cronologia completa, do início até hoje.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="px-3 py-1 bg-slate-800 rounded-full">Cronologia</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full">Contexto</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full">Fatos</span>
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Card>
        </motion.div>

        {/* Porta 2: As Provas */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Card 
            className="group cursor-pointer bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-amber-500/50 transition-all duration-300 overflow-hidden h-full"
            onClick={() => onNavigate("provas")}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-amber-500/10 rounded-2xl group-hover:bg-amber-500/20 transition-colors">
                  <FolderOpen className="w-10 h-10 text-amber-500" />
                </div>
                <ChevronRight className="w-6 h-6 text-slate-500 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
              </div>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-amber-500 transition-colors">
                As Provas
              </h2>
              <p className="text-slate-400 mb-6">
                Veja com seus próprios olhos. Documentos, áudios, conversas — tudo aqui.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="px-3 py-1 bg-slate-800 rounded-full">PDFs</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full">Áudios</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full">Prints</span>
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Card>
        </motion.div>

        {/* Porta 3: Conhecendo o Terreno */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Card 
            className="group cursor-pointer bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-red-500/50 transition-all duration-300 overflow-hidden h-full"
            onClick={() => onNavigatePage?.("conhecendo-terreno")}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-red-500/10 rounded-2xl group-hover:bg-red-500/20 transition-colors relative">
                  <Eye className="w-10 h-10 text-red-500" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                </div>
                <ChevronRight className="w-6 h-6 text-slate-500 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
              </div>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                Conhecendo o Terreno
              </h2>
              <p className="text-slate-400 mb-6">
                Quem está do outro lado? Perfil, comportamento e o que esperar.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="px-3 py-1 bg-slate-800 rounded-full">Perfil</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full">Padrões</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full">Estratégia</span>
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-red-500/0 via-red-500 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Card>
        </motion.div>

        {/* Porta 4: Estratégia Jurídica */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Card 
            className="group cursor-pointer bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden h-full"
            onClick={() => onNavigatePage?.("estrategia-juridica")}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-blue-500/10 rounded-2xl group-hover:bg-blue-500/20 transition-colors">
                  <Scale className="w-10 h-10 text-blue-500" />
                </div>
                <ChevronRight className="w-6 h-6 text-slate-500 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </div>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                Estratégia Jurídica
              </h2>
              <p className="text-slate-400 mb-6">
                O plano de ação. As três teses e a Bala de Prata.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="px-3 py-1 bg-slate-800 rounded-full">Teses</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full">Revisional</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full">TDAH</span>
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Card>
        </motion.div>
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-12 grid grid-cols-3 gap-4"
      >
        <div className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-800">
          <p className="text-3xl font-bold text-red-400">R$ 70k</p>
          <p className="text-sm text-slate-500 mt-1">Cobrado</p>
        </div>
        <div className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-800">
          <p className="text-3xl font-bold text-green-400">R$ 27k</p>
          <p className="text-sm text-slate-500 mt-1">Pago</p>
        </div>
        <div className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-800">
          <p className="text-3xl font-bold text-amber-400">R$ 43k</p>
          <p className="text-sm text-slate-500 mt-1">Diferença</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Jornada View - Cronologia
function JornadaView() {
  const eventos = [
    {
      data: "Janeiro 2023",
      titulo: "O Encontro",
      descricao: "Rafael (27) e Daniela (35) se conhecem. Início do relacionamento com desejo mútuo de constituir família.",
      tipo: "neutro"
    },
    {
      data: "Outubro 2023",
      titulo: "A Perda",
      descricao: "Mudança para MG. Perda da primeira filha aos 6 meses (trombofilia). Rafael permanece ao lado, cuidando e apoiando. Pagamento de todas as despesas.",
      tipo: "triste"
    },
    {
      data: "Junho 2024",
      titulo: "Nascimento de Tomás",
      descricao: "Tomás nasce após tratamento. Rafael acorda às 5h diariamente para cuidar do bebê. Compra enxoval, ar-condicionado, geladeira, máquina de lavar. Paga diarista.",
      tipo: "positivo"
    },
    {
      data: "Janeiro 2025",
      titulo: "Separação",
      descricao: "Saída de casa após desgaste. Proposta de R$ 2.300 + plano de saúde + 'sendo amigos, o que meu filho precisasse'. Todas as formas de acordo recusadas.",
      tipo: "negativo"
    },
    {
      data: "Junho 2025",
      titulo: "Visita Interrompida",
      descricao: "Após ordem judicial, Rafael leva família para conhecer Tomás. Daniela arranca o filho do colo alegando que 'eles não estavam na ordem'. Pai e cunhada advogada presentes do lado dela.",
      tipo: "critico"
    },
    {
      data: "Dezembro 2025",
      titulo: "Prisão",
      descricao: "Rafael é preso por dívida de pensão. R$ 70.000 cobrados sem considerar os R$ 27.000 já pagos (PIX + plano de saúde). Má-fé processual evidente.",
      tipo: "critico"
    }
  ];

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case "positivo": return "bg-green-500";
      case "negativo": return "bg-orange-500";
      case "critico": return "bg-red-500";
      case "triste": return "bg-purple-500";
      default: return "bg-slate-500";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto max-w-3xl"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">A Jornada</h1>
        <p className="text-slate-400">
          Sem rodeios, sem enfeites — só a verdade. Do início até hoje.
        </p>
      </div>

      <div className="relative">
        {/* Linha vertical */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 transform md:-translate-x-1/2"></div>

        {/* Eventos */}
        <div className="space-y-12">
          {eventos.map((evento, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Marcador */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                <div className={`w-4 h-4 rounded-full ${getTipoColor(evento.tipo)} ring-4 ring-slate-900`}></div>
              </div>

              {/* Conteúdo */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <Card className="bg-slate-800/50 border-slate-700 p-6">
                  <p className="text-sm text-primary font-medium mb-2">{evento.data}</p>
                  <h3 className="text-xl font-bold mb-3">{evento.titulo}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{evento.descricao}</p>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Provas View
function ProvasView({ 
  selectedCategoria, 
  onSelectCategoria 
}: { 
  selectedCategoria: ProvaCategoria | null;
  onSelectCategoria: (cat: ProvaCategoria | null) => void;
}) {
  const categorias = [
    {
      id: "comprovantes" as ProvaCategoria,
      titulo: "Comprovantes de Pagamento",
      descricao: "PIX, plano de saúde, transferências",
      icon: FileText,
      color: "green",
      count: 12
    },
    {
      id: "dialogos" as ProvaCategoria,
      titulo: "Diálogos e Conversas",
      descricao: "WhatsApp, mensagens, comunicações",
      icon: MessageSquare,
      color: "blue",
      count: 8
    },
    {
      id: "ma-fe" as ProvaCategoria,
      titulo: "Má-Fé Processual",
      descricao: "Documentos que comprovam má-fé",
      icon: AlertTriangle,
      color: "red",
      count: 5
    },
    {
      id: "boa-fe" as ProvaCategoria,
      titulo: "Boa-Fé do Pai",
      descricao: "Visitas, presentes, cuidados",
      icon: Heart,
      color: "pink",
      count: 6
    },
    {
      id: "audios" as ProvaCategoria,
      titulo: "Áudios e Gravações",
      descricao: "Gravações de conversas e eventos",
      icon: Mic,
      color: "purple",
      count: 3
    },
    {
      id: "despesas" as ProvaCategoria,
      titulo: "Despesas",
      descricao: "Plano de saúde, aluguel, medicamentos e outros custos pessoais",
      icon: Receipt,
      color: "cyan",
      count: 0
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      green: { bg: "bg-green-500/10", text: "text-green-500", border: "border-green-500/30" },
      blue: { bg: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/30" },
      red: { bg: "bg-red-500/10", text: "text-red-500", border: "border-red-500/30" },
      pink: { bg: "bg-pink-500/10", text: "text-pink-500", border: "border-pink-500/30" },
      purple: { bg: "bg-purple-500/10", text: "text-purple-500", border: "border-purple-500/30" },
      cyan: { bg: "bg-cyan-500/10", text: "text-cyan-500", border: "border-cyan-500/30" }
    };
    return colors[color] || colors.blue;
  };

  if (selectedCategoria) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="container mx-auto max-w-4xl"
      >
        <Button
          variant="ghost"
          onClick={() => onSelectCategoria(null)}
          className="mb-6 text-slate-400 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar às categorias
        </Button>

        <h2 className="text-2xl font-bold mb-6">
          {categorias.find(c => c.id === selectedCategoria)?.titulo}
        </h2>

        <div className="grid gap-4">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="bg-slate-800/50 border-slate-700 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-slate-700 rounded-lg">
                    {selectedCategoria === "audios" ? (
                      <Play className="w-5 h-5 text-purple-400" />
                    ) : selectedCategoria === "dialogos" ? (
                      <ImageIcon className="w-5 h-5 text-blue-400" />
                    ) : (
                      <FileText className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">Arquivo {item}</p>
                    <p className="text-sm text-slate-500">Descrição do arquivo</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto max-w-4xl"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">As Provas</h1>
        <p className="text-slate-400">
          Tudo organizado por categoria. Clique para explorar.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {categorias.map((cat, index) => {
          const colors = getColorClasses(cat.color);
          const Icon = cat.icon;
          
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card 
                className={`cursor-pointer bg-slate-800/50 border-slate-700 hover:${colors.border} transition-all p-6`}
                onClick={() => onSelectCategoria(cat.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 ${colors.bg} rounded-xl`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <span className={`px-2 py-1 ${colors.bg} ${colors.text} text-xs font-medium rounded-full`}>
                    {cat.count} arquivos
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{cat.titulo}</h3>
                <p className="text-sm text-slate-400">{cat.descricao}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
