import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Shield, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Senha simples para acesso (pode ser alterada)
  const CORRECT_PASSWORD = "tomas2024";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simula um pequeno delay para UX
    setTimeout(() => {
      if (password === CORRECT_PASSWORD) {
        localStorage.setItem("dossie_auth", "true");
        onLogin();
      } else {
        setError("Senha incorreta. Tente novamente.");
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo/Mascote */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            <img 
              src="/mascote-lobo.png" 
              alt="Dossiê Tomás" 
              className="relative w-32 h-32 object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Card de Login */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-2xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
              <Shield className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-amber-500">Acesso Restrito</span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Dossiê Confidencial</h1>
            <p className="text-slate-400 text-sm">
              Este conteúdo é protegido. Insira a senha para continuar.
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Senha de Acesso
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite a senha..."
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 pr-12 h-12 text-lg"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-red-400 text-sm flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-lg p-3"
              >
                <Shield className="w-4 h-4" />
                {error}
              </motion.div>
            )}

            <Button
              type="submit"
              disabled={isLoading || !password}
              className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all duration-300"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                />
              ) : (
                <>
                  <Lock className="w-5 h-5 mr-2" />
                  Acessar Dossiê
                </>
              )}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <p className="text-center text-xs text-slate-500">
              Dossiê Tomás — Defesa Jurídica Rafael Marvila
            </p>
          </div>
        </motion.div>

        {/* Nota de Segurança */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-slate-600 mt-6"
        >
          🔒 Conexão segura • Dados protegidos
        </motion.p>
      </motion.div>
    </div>
  );
}
