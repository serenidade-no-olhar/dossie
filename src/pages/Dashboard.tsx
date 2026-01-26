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
  Image as ImageIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type View = "dashboard" | "jornada" | "provas";
type ProvaCategoria = "comprovantes" | "dialogos" | "ma-fe" | "boa-fe" | "audios";

interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [currentView, setCurrentView] = useState<View>("dashboard");
  const [selectedCategoria, setSelectedCategoria] = useState<ProvaCategoria | null>(null);

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
    </div>
  );
}

// Dashboard Home - As duas "portas"
function DashboardHome({ onNavigate }: { onNavigate: (view: View) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto max-w-4xl"
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

      {/* As duas portas */}
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
            className="group cursor-pointer bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-primary/50 transition-all duration-300 overflow-hidden"
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
            {/* Decorative gradient */}
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
            className="group cursor-pointer bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-amber-500/50 transition-all duration-300 overflow-hidden"
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
            {/* Decorative gradient */}
            <div className="h-1 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Card>
        </motion.div>
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
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
      titulo: "Prisão Injusta",
      descricao: "Rafael é preso com dívida de R$ 70.000 sem abatimento dos R$ 27.000 pagos. Três dias antes, ela perguntou se plano de saúde estava ativo. Durante prisão, todas propostas de acordo: NÃO.",
      tipo: "critico"
    }
  ];

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case "positivo": return "border-green-500 bg-green-500/10";
      case "negativo": return "border-red-500 bg-red-500/10";
      case "critico": return "border-red-600 bg-red-600/10";
      case "triste": return "border-blue-500 bg-blue-500/10";
      default: return "border-slate-600 bg-slate-600/10";
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
        <h1 className="text-4xl font-bold mb-4">A Jornada</h1>
        <p className="text-xl text-slate-400">
          Cada passo que nos trouxe até aqui. Sem rodeios, sem enfeites — só a verdade.
        </p>
      </div>

      <div className="relative">
        {/* Linha vertical */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-slate-700 to-slate-800"></div>

        {/* Eventos */}
        <div className="space-y-8">
          {eventos.map((evento, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-20"
            >
              {/* Marcador */}
              <div className={`absolute left-4 w-8 h-8 rounded-full border-4 ${getTipoColor(evento.tipo)} flex items-center justify-center`}>
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>

              {/* Card do evento */}
              <Card className={`p-6 bg-slate-900/50 border-l-4 ${getTipoColor(evento.tipo)}`}>
                <span className="text-sm font-medium text-primary">{evento.data}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{evento.titulo}</h3>
                <p className="text-slate-400 leading-relaxed">{evento.descricao}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Provas View - Categorias de evidências
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
      descricao: "PIX, plano de saúde, extras — R$ 27.000 documentados",
      icon: FileText,
      cor: "green",
      quantidade: 12
    },
    {
      id: "dialogos" as ProvaCategoria,
      titulo: "Diálogos e Conversas",
      descricao: "Prints de WhatsApp mostrando tentativas de acordo",
      icon: MessageSquare,
      cor: "blue",
      quantidade: 8
    },
    {
      id: "ma-fe" as ProvaCategoria,
      titulo: "Má-Fé Processual",
      descricao: "Documentos que comprovam a má-fé e contradições",
      icon: AlertTriangle,
      cor: "red",
      quantidade: 5
    },
    {
      id: "boa-fe" as ProvaCategoria,
      titulo: "Boa-Fé do Pai",
      descricao: "Visitas, presentes, cuidados — tudo documentado",
      icon: Heart,
      cor: "pink",
      quantidade: 6
    },
    {
      id: "audios" as ProvaCategoria,
      titulo: "Áudios e Gravações",
      descricao: "Registros de momentos críticos",
      icon: Mic,
      cor: "purple",
      quantidade: 3
    }
  ];

  const getCorClasses = (cor: string) => {
    const cores: Record<string, string> = {
      green: "border-green-500 bg-green-500/10 text-green-500",
      blue: "border-blue-500 bg-blue-500/10 text-blue-500",
      red: "border-red-500 bg-red-500/10 text-red-500",
      pink: "border-pink-500 bg-pink-500/10 text-pink-500",
      purple: "border-purple-500 bg-purple-500/10 text-purple-500"
    };
    return cores[cor] || cores.blue;
  };

  if (selectedCategoria) {
    return <ProvaDetalhe categoria={selectedCategoria} onVoltar={() => onSelectCategoria(null)} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto max-w-4xl"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">As Provas</h1>
        <p className="text-xl text-slate-400">
          Cada documento conta uma parte da história. Clica e vê com seus próprios olhos.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {categorias.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card 
              className={`cursor-pointer p-6 bg-slate-900/50 border-l-4 hover:bg-slate-800/50 transition-all ${getCorClasses(cat.cor)}`}
              onClick={() => onSelectCategoria(cat.id)}
            >
              <div className="flex items-start justify-between">
                <div className={`p-3 rounded-xl ${getCorClasses(cat.cor)}`}>
                  <cat.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-slate-500">
                  {cat.quantidade} arquivos
                </span>
              </div>
              <h3 className="text-lg font-bold mt-4 mb-2">{cat.titulo}</h3>
              <p className="text-sm text-slate-400">{cat.descricao}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Detalhe de uma categoria de provas
function ProvaDetalhe({ categoria, onVoltar }: { categoria: ProvaCategoria; onVoltar: () => void }) {
  // Dados de exemplo - serão substituídos por links reais do Google Drive
  const provasData: Record<ProvaCategoria, { titulo: string; arquivos: { nome: string; tipo: string; link: string; descricao: string }[] }> = {
    comprovantes: {
      titulo: "Comprovantes de Pagamento",
      arquivos: [
        { nome: "PIX Janeiro 2025", tipo: "pdf", link: "#", descricao: "R$ 2.300 - Pensão" },
        { nome: "PIX Fevereiro 2025", tipo: "pdf", link: "#", descricao: "R$ 2.300 - Pensão" },
        { nome: "Plano de Saúde - Anual", tipo: "pdf", link: "#", descricao: "R$ 12.888 - Unimed" },
        // Adicionar mais...
      ]
    },
    dialogos: {
      titulo: "Diálogos e Conversas",
      arquivos: [
        { nome: "Proposta de Acordo - Jan/2025", tipo: "imagem", link: "#", descricao: "Proposta recusada" },
        { nome: "3 dias antes da prisão", tipo: "imagem", link: "#", descricao: "Ela pergunta sobre plano de saúde" },
        // Adicionar mais...
      ]
    },
    "ma-fe": {
      titulo: "Má-Fé Processual",
      arquivos: [
        { nome: "Cobrança sem abatimento", tipo: "pdf", link: "#", descricao: "R$ 70k cobrados ignorando R$ 27k pagos" },
        { nome: "Alegação de impossibilidade de trabalho", tipo: "pdf", link: "#", descricao: "Advogada que 'não podia trabalhar'" },
        // Adicionar mais...
      ]
    },
    "boa-fe": {
      titulo: "Boa-Fé do Pai",
      arquivos: [
        { nome: "Visitas Junho 2025", tipo: "imagem", link: "#", descricao: "Fotos e registros" },
        { nome: "Visitas Outubro 2025", tipo: "imagem", link: "#", descricao: "Fotos e registros" },
        // Adicionar mais...
      ]
    },
    audios: {
      titulo: "Áudios e Gravações",
      arquivos: [
        { nome: "Hostilidade sob Ordem Judicial", tipo: "audio", link: "#", descricao: "Tomás arrancado do colo - Jun/2025" },
        // Adicionar mais...
      ]
    }
  };

  const data = provasData[categoria];

  const getIconByTipo = (tipo: string) => {
    switch (tipo) {
      case "pdf": return FileText;
      case "imagem": return ImageIcon;
      case "audio": return Play;
      default: return FileText;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto max-w-3xl"
    >
      <Button
        variant="ghost"
        onClick={onVoltar}
        className="mb-6 text-slate-400 hover:text-white"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para categorias
      </Button>

      <h1 className="text-3xl font-bold mb-8">{data.titulo}</h1>

      <div className="space-y-4">
        {data.arquivos.map((arquivo, index) => {
          const Icon = getIconByTipo(arquivo.tipo);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-4 bg-slate-900/50 hover:bg-slate-800/50 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-800 rounded-xl">
                      <Icon className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">{arquivo.nome}</h3>
                      <p className="text-sm text-slate-500">{arquivo.descricao}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={arquivo.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Abrir
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={arquivo.link} download>
                        <Download className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Nota */}
      <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
        <p className="text-sm text-amber-200">
          <strong>Nota:</strong> Os links serão atualizados com os arquivos reais do Google Drive.
        </p>
      </div>
    </motion.div>
  );
}
