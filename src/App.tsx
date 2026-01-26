import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ConhecendoTerreno from "./pages/ConhecendoTerreno";
import EstrategiaJuridica from "./pages/EstrategiaJuridica";

type Page = "login" | "dashboard" | "conhecendo-terreno" | "estrategia-juridica";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("login");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verifica se já está autenticado
    const auth = localStorage.getItem("dossie_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
      setCurrentPage("dashboard");
    }
    setIsLoading(false);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("dossie_auth");
    setIsAuthenticated(false);
    setCurrentPage("login");
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  const renderPage = () => {
    if (!isAuthenticated) {
      return <Login onLogin={handleLogin} />;
    }

    switch (currentPage) {
      case "dashboard":
        return <Dashboard onLogout={handleLogout} onNavigate={handleNavigate} />;
      case "conhecendo-terreno":
        return (
          <ConhecendoTerreno 
            onBack={() => setCurrentPage("dashboard")} 
            onLogout={handleLogout}
          />
        );
      case "estrategia-juridica":
        return (
          <EstrategiaJuridica 
            onBack={() => setCurrentPage("dashboard")} 
            onLogout={handleLogout}
          />
        );
      default:
        return <Dashboard onLogout={handleLogout} onNavigate={handleNavigate} />;
    }
  };

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          {renderPage()}
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
