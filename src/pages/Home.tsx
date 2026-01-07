import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ProfileAnalysisBox from "@/components/ProfileAnalysisBox";
import { Download, FileText, Scale, TrendingDown, TrendingUp, Calendar, Shield, AlertCircle, Rocket, Brain, Heart, CheckCircle2, Target, Sparkles, GraduationCap, Instagram, Building2, ArrowRight, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <p className="text-sm font-semibold text-primary">Dossiê Estratégico de Defesa</p>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight">
                Pela Verdade,<br />
                <span className="text-primary">Pelo Tomás</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Uma defesa jurídica fundamentada em fatos, transparência e o melhor interesse da criança.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  <FileText className="mr-2 h-5 w-5" />
                  Ver Documentação Completa
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <Download className="mr-2 h-5 w-5" />
                  Baixar PDF para Tribunal
                </Button>
              </div>
            </div>

            {/* Right: Mascote Lobo */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <img 
                  src="/mascote-lobo.png" 
                  alt="Mascote Lobo - Símbolo de Proteção Paterna" 
                  className="relative w-80 h-80 md:w-96 md:h-96 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-card border-y">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-destructive">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <TrendingDown className="h-6 w-6" />
                  Dívida Cobrada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">R$ 70.000</p>
                <p className="text-muted-foreground mt-2">Sem abatimento dos valores pagos</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <TrendingUp className="h-6 w-6" />
                  Valores Pagos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">R$ 27.000</p>
                <p className="text-muted-foreground mt-2">Comprovados via PIX e plano de saúde</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <Scale className="h-6 w-6" />
                  Diferença Injusta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">R$ 43.000</p>
                <p className="text-muted-foreground mt-2">Valor não compensado pela genitora</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* A Realidade Financeira */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              A Realidade Financeira
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma análise transparente dos custos mensais e da capacidade real de pagamento
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Custos Mensais */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Custos Mensais Comprovados</CardTitle>
                <CardDescription>Despesas essenciais e obrigatórias</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-chart-1"></div>
                    <span className="font-medium">Medicamentos (TOC + TDAH)</span>
                  </div>
                  <span className="text-lg font-bold">R$ 930</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-chart-2"></div>
                    <span className="font-medium">Aluguel</span>
                  </div>
                  <span className="text-lg font-bold">R$ 3.800</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-chart-3"></div>
                    <span className="font-medium">Plano de Saúde</span>
                  </div>
                  <span className="text-lg font-bold">R$ 1.074</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-chart-4"></div>
                    <span className="font-medium">Alimentação/Transporte</span>
                  </div>
                  <span className="text-lg font-bold">R$ 2.000</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-chart-5"></div>
                    <span className="font-medium">Internet</span>
                  </div>
                  <span className="text-lg font-bold">R$ 150</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span className="font-medium">Reserva Emergência (5%)</span>
                  </div>
                  <span className="text-lg font-bold">R$ 750</span>
                </div>

                <div className="border-t-2 border-primary pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">Total Mensal</span>
                    <span className="text-3xl font-bold text-primary">R$ 8.704</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Renda atual: R$ 15.000/mês
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Gráfico Comparativo */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">A Injustiça Matemática</CardTitle>
                <CardDescription>Comparação entre valores pagos e cobrados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Valores Pagos */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-primary">Valores Pagos (Comprovados)</span>
                      <span className="text-2xl font-bold text-primary">R$ 27.000</span>
                    </div>
                    <div className="h-12 bg-primary rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      PIX + Plano de Saúde + Extras (Jan-Nov 2025)
                    </p>
                  </div>

                  {/* Dívida Cobrada */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-destructive">Dívida Cobrada (Sem Abatimento)</span>
                      <span className="text-2xl font-bold text-destructive">R$ 70.000</span>
                    </div>
                    <div className="h-12 bg-destructive rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-destructive to-destructive/80"></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Valor total exigido para liberação da prisão
                    </p>
                  </div>

                  {/* Alert */}
                  <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-lg">
                    <div className="flex gap-3">
                      <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-destructive mb-1">Enriquecimento Sem Causa</p>
                        <p className="text-sm text-muted-foreground">
                          A genitora cobrou duas vezes pelo mesmo período (bis in idem), 
                          desconsiderando R$ 27.000 já pagos de boa-fé. Isso configura má-fé 
                          processual (Art. 80, CPC) e enriquecimento sem causa (Art. 884, CC).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Cronológica */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Cronologia dos Fatos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma linha do tempo transparente dos eventos que levaram à situação atual
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* 2023 - Conhecimento */}
              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div className="w-1 flex-1 bg-primary/30 mt-2"></div>
                </div>
                <Card className="flex-1 shadow-md hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">Janeiro 2023 - O Encontro</CardTitle>
                    <CardDescription>Santa Catarina / Minas Gerais</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Rafael (27 anos) e a genitora (35 anos) se conhecem. Início do relacionamento 
                      com o desejo mútuo de constituir família.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Out 2023 - Perda */}
              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-destructive flex items-center justify-center text-white font-bold shadow-lg">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div className="w-1 flex-1 bg-destructive/30 mt-2"></div>
                </div>
                <Card className="flex-1 shadow-md hover:shadow-xl transition-shadow border-l-4 border-l-destructive">
                  <CardHeader>
                    <CardTitle className="text-xl">Outubro 2023 - A Perda</CardTitle>
                    <CardDescription>Minas Gerais</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Mudança para Minas Gerais. Perda da primeira filha aos 6 meses de gestação 
                      (trombofilia adquirida). Rafael permanece ao lado, cuidando e apoiando 
                      emocionalmente. Pagamento de todas as despesas: plano de saúde, aluguel, 
                      alimentação, procedimentos estéticos.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Jun 2024 - Nascimento */}
              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold shadow-lg">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div className="w-1 flex-1 bg-secondary/30 mt-2"></div>
                </div>
                <Card className="flex-1 shadow-md hover:shadow-xl transition-shadow border-l-4 border-l-secondary">
                  <CardHeader>
                    <CardTitle className="text-xl">Junho 2024 - Nascimento de Tomás</CardTitle>
                    <CardDescription>Minas Gerais</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Tomás nasce após tratamento com heparina. Rafael acorda às 5h diariamente 
                      para cuidar do bebê, permitindo que a mãe descanse. Compra enxoval, 
                      ar-condicionado, geladeira, máquina de lavar. Paga diarista para que ela 
                      tenha exclusividade com o filho.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Jan 2025 - Separação */}
              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-muted-foreground flex items-center justify-center text-white font-bold shadow-lg">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div className="w-1 flex-1 bg-muted-foreground/30 mt-2"></div>
                </div>
                <Card className="flex-1 shadow-md hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">Janeiro 2025 - Separação</CardTitle>
                    <CardDescription>Proposta de Acordo Recusada</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Saída de casa após desgaste. Proposta de R$ 2.300 + plano de saúde + 
                      "sendo amigos, o que meu filho precisasse". Todas as formas de acordo 
                      consensual foram recusadas. Pagamento de 2 meses de aluguel para ela ficar.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Jun 2025 - Visita */}
              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-destructive flex items-center justify-center text-white font-bold shadow-lg">
                    <AlertCircle className="h-6 w-6" />
                  </div>
                  <div className="w-1 flex-1 bg-destructive/30 mt-2"></div>
                </div>
                <Card className="flex-1 shadow-md hover:shadow-xl transition-shadow border-l-4 border-l-destructive">
                  <CardHeader>
                    <CardTitle className="text-xl">Junho 2025 - Visita Interrompida</CardTitle>
                    <CardDescription>Abuso Processual</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Após ordem judicial, Rafael leva mãe, irmão e irmã para conhecer Tomás 
                      pela primeira vez. A genitora arranca o filho do colo de Rafael e encerra 
                      a visita alegando que "eles não estavam na ordem". Ironicamente, seu pai 
                      e cunhada advogada estavam presentes.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Dez 2025 - Prisão */}
              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-destructive flex items-center justify-center text-white font-bold shadow-lg">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
                <Card className="flex-1 shadow-md hover:shadow-xl transition-shadow border-l-4 border-l-destructive">
                  <CardHeader>
                    <CardTitle className="text-xl">Dezembro 2025 - Prisão Injusta</CardTitle>
                    <CardDescription>Dívida de R$ 70.000 sem abatimento</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Rafael é preso com dívida de R$ 70.000. Três dias antes, a genitora 
                      perguntou se o plano de saúde estava ativo. Durante a prisão, advogado 
                      envia mensagens pedindo acordo. Respostas demoram horas/dias, sempre "não". 
                      Ela alega que Rafael "nunca ajudou", ignorando R$ 27.000 comprovados.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Análise do Perfil Psicológico - Box Interativo */}
      <ProfileAnalysisBox />

      {/* Estratégia Jurídica */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Estratégia Jurídica
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Três teses fundamentadas para reverter a injustiça e proteger o melhor interesse de Tomás
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Tese 1 */}
            <Card className="shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-t-primary">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Scale className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Tese 1: Compensação pela Má-Fé</CardTitle>
                <CardDescription>Enriquecimento sem causa e bis in idem</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="font-semibold text-primary mb-2">Fatos:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• R$ 27.000 pagos antes da prisão</li>
                    <li>• R$ 70.000 exigidos sem abatimento</li>
                    <li>• Cobrança dupla pelo mesmo período</li>
                  </ul>
                </div>
                
                <div className="bg-secondary/5 p-4 rounded-lg">
                  <p className="font-semibold text-secondary mb-2">Fundamento Legal:</p>
                  <p className="text-sm text-muted-foreground">
                    Art. 884, CC (Enriquecimento sem causa) + Art. 80, CPC (Má-fé processual)
                  </p>
                </div>

                <div className="bg-accent/5 p-4 rounded-lg">
                  <p className="font-semibold text-accent mb-2">Pedido:</p>
                  <p className="text-sm text-muted-foreground">
                    Compensação imediata dos R$ 27.000 + Tutela de Urgência para suspender 
                    exigibilidade das próximas parcelas
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tese 2 */}
            <Card className="shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-t-secondary">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Tese 2: Prestação de Contas</CardTitle>
                <CardDescription>Transparência no uso da pensão</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="font-semibold text-primary mb-2">Argumento:</p>
                  <p className="text-sm text-muted-foreground">
                    A má-fé comprovada ao inflar a dívida levanta dúvidas sobre a veracidade 
                    das necessidades alegadas para o filho.
                  </p>
                </div>
                
                <div className="bg-secondary/5 p-4 rounded-lg">
                  <p className="font-semibold text-secondary mb-2">Objetivo:</p>
                  <p className="text-sm text-muted-foreground">
                    Verificar se a pensão está sendo usada para o bem-estar da criança ou 
                    para outros fins, desvirtuando sua finalidade.
                  </p>
                </div>

                <div className="bg-accent/5 p-4 rounded-lg">
                  <p className="font-semibold text-accent mb-2">Pedido:</p>
                  <p className="text-sm text-muted-foreground">
                    Intimação da genitora para apresentar prestação de contas detalhada com 
                    notas e recibos dos gastos com Tomás
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tese 3 - DESTAQUE ESPECIAL */}
            <Card className="shadow-lg hover:shadow-2xl transition-shadow border-2 border-amber-500 bg-gradient-to-br from-amber-50/50 to-orange-50/50 relative overflow-hidden">
              {/* Badge de destaque */}
              <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                TESE CENTRAL
              </div>
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                  <TrendingDown className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl text-amber-900">Tese 3: Revisão Imediata</CardTitle>
                <CardDescription className="text-amber-700">A nova realidade exige adequação</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white/80 p-4 rounded-lg border border-amber-200">
                  <p className="font-semibold text-amber-800 mb-2">Situação Atual:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Renda atual: R$ 15.000/mês</li>
                    <li>• Custos essenciais: R$ 8.704/mês</li>
                    <li>• Medicamentos TDAH/TOC: R$ 930/mês</li>
                  </ul>
                </div>
                
                <div className="bg-amber-100/50 p-4 rounded-lg border border-amber-300">
                  <p className="font-semibold text-amber-800 mb-2">🔗 Conectado à Bala de Prata:</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    O diagnóstico de <strong>TDAH (Dez/2024)</strong> não foi apenas médico — foi uma 
                    <strong className="text-amber-700"> descoberta de propósito</strong>.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>→ Tecnologia saiu do propósito de vida</li>
                    <li>→ Novo MEI: Educação em saúde mental (@rafael.tdah)</li>
                    <li>→ Objetivo: ajudar quem vive com TDAH e não sabe</li>
                    <li>→ Renda em transição para nova carreira</li>
                  </ul>
                </div>

                <div className="bg-white/80 p-4 rounded-lg border-2 border-amber-400">
                  <p className="font-semibold text-amber-800 mb-2">Pedido:</p>
                  <p className="text-sm text-muted-foreground">
                    Liminar para revisão imediata da pensão com base no binômio 
                    necessidade/possibilidade atualizado — considerando a <strong>transição de carreira 
                    genuína e documentada</strong> motivada por questões de saúde mental.
                  </p>
                </div>

                <div className="bg-amber-500/10 p-3 rounded-lg text-center">
                  <p className="text-xs text-amber-700 italic">
                    "Quero salvar vidas. Preciso das condições necessárias para isso."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Janela de Ouro */}
          <Card className="mt-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl text-center">⚡ Janela de Ouro: Agora até Março 2026</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg text-muted-foreground">
                Existe uma <strong className="text-primary">janela crítica de 3 meses</strong> para 
                entrar com a Ação Revisional no Brasil e se antecipar a qualquer novo pedido de prisão.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-card p-4 rounded-lg">
                  <p className="font-semibold text-destructive">Abril 2026</p>
                  <p className="text-sm text-muted-foreground">Novo pedido de prisão possível</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <p className="font-semibold text-amber-600">Possível Ação Internacional</p>
                  <p className="text-sm text-muted-foreground">Ela pode tentar usar informações sobre localização no exterior (viu status no WhatsApp)</p>
                </div>
                <div className="bg-card p-4 rounded-lg border-2 border-primary">
                  <p className="font-semibold text-primary">AGORA</p>
                  <p className="text-sm text-muted-foreground">Entrar com Revisional</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 italic">
                Nota: A localização atual é temporária e incerta — o propósito de vida mudou com o diagnóstico de TDAH, 
                e o foco agora é empreender na área de saúde mental, independente de onde isso aconteça.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BALA DE PRATA - Reinvenção Profissional */}
      <section id="bala-de-prata" className="py-20 bg-gradient-to-br from-amber-50 via-background to-orange-50 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="container">
          {/* Header com mensagem para Prima */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/10 rounded-full mb-6">
              <Sparkles className="h-5 w-5 text-amber-600" />
              <span className="text-amber-700 font-bold">🎯 ESTRATÉGIA CONFIDENCIAL</span>
              <Sparkles className="h-5 w-5 text-amber-600" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              A Bala de Prata
            </h2>
            <p className="text-2xl text-amber-700 font-semibold mb-4">
              "Prima, essa é a jogada que muda tudo"
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma estratégia genuína de reinvenção profissional por saúde mental que fortalece 
              juridicamente a revisão de pensão e desarma qualquer contra-ataque.
            </p>
          </div>

          {/* Card Principal - A Visão */}
          <Card className="mb-12 border-2 border-amber-300 shadow-2xl bg-gradient-to-br from-white to-amber-50">
            <CardHeader className="text-center pb-2">
              <div className="w-20 h-20 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-10 w-10 text-amber-600" />
              </div>
              <CardTitle className="text-3xl text-amber-700">A Descoberta que Mudou Tudo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    O Que Aconteceu
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Antes de descobrir o TDAH, eu vivia ouvindo "vozes" - críticas, cobranças, 
                    expectativas dos outros. Quando coloquei os "óculos do TDAH", essas vozes 
                    silenciaram e <strong className="text-amber-700">minha própria voz alcançou minha consciência</strong>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Vi com clareza que meu propósito é <strong className="text-amber-700">ajudar outras pessoas 
                    na mesma condição</strong> - com TDAH/TOC - e empreender nessa área.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Target className="h-5 w-5 text-amber-600" />
                    A Decisão Estratégica
                  </h4>
                  <div className="bg-amber-100/50 p-4 rounded-lg border border-amber-200">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Desativar MEI antigo</strong> - Não tenho mais interesse em atuar com tecnologia diretamente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Este projeto é o último</strong> - Para honrar a dívida não conciliada</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Abrir novo MEI</strong> - Educação conectada ao perfil @rafael.tdah</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Box: Por que essa decisão? - Dados e Contexto */}
          <Card className="mb-12 border-2 border-blue-300 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-blue-800">Por que essa decisão?</CardTitle>
                  <p className="text-sm text-blue-600">Dados, contexto e propósito</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              {/* Dados sobre TDAH no Brasil */}
              <div className="bg-white/80 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="text-lg">🇧🇷</span> O Cenário do TDAH no Brasil
                </h4>
                <div className="grid md:grid-cols-3 gap-4 mb-3">
                  <div className="text-center p-3 bg-blue-100/50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">4 milhões</p>
                    <p className="text-xs text-blue-600">adultos com sintomas de TDAH (18-44 anos)</p>
                  </div>
                  <div className="text-center p-3 bg-blue-100/50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">+123%</p>
                    <p className="text-xs text-blue-600">aumento de diagnósticos em adultos (10 anos)</p>
                  </div>
                  <div className="text-center p-3 bg-blue-100/50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-700">Maioria</p>
                    <p className="text-xs text-blue-600">não foi diagnosticada na infância</p>
                  </div>
                </div>
                <p className="text-xs text-blue-600 italic">Fontes: Ministério da Saúde (2025), ABDA, Drauzio Varella</p>
              </div>

              {/* Minha história */}
              <div className="bg-amber-50/80 p-4 rounded-lg border border-amber-200">
                <h4 className="font-bold text-amber-800 mb-3">🧠 Minha Jornada de Autodescoberta</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-amber-700">TOC (Pure O) desde os 14 anos</strong> — sofri por décadas sem saber o que era. 
                    Descobri sozinho, pesquisando, e depois confirmei com laudo (Maio/2024).
                  </p>
                  <p>
                    <strong className="text-amber-700">TDAH descoberto tardiamente</strong> — era a condição primária, o TOC era secundário. 
                    Uma amiga me ajudou a perceber, mas eu já havia identificado os padrões em mim mesmo. Laudo em Dez/2024.
                  </p>
                  <p>
                    <strong className="text-amber-700">Lacuna de diagnóstico</strong> — muitos psiquiatras ainda não identificam TDAH em adultos corretamente. 
                    Eu tive que fazer o trabalho de investigação sozinho.
                  </p>
                </div>
              </div>

              {/* Talentos descobertos */}
              <div className="bg-green-50/80 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-3">💡 O que descobri sobre mim</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong className="text-green-700">Talento para empreender</strong> — descobri que isso é inevitável em mim. 
                      Saúde mental, estética, outras áreas... o empreendedorismo é o caminho.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-green-700">Tecnologia saiu do propósito</strong> — definitivamente. 
                      Não é mais uma opção para mim.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong className="text-green-700">Facilidade para identificar padrões</strong> — em pessoas, comportamentos, sistemas. 
                      Quero usar isso para ajudar, não para mim.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-green-700">Experiência de vida</strong> — autodescoberta das duas condições me dá 
                      legitimidade para ajudar quem passa pelo mesmo.
                    </p>
                  </div>
                </div>
              </div>

              {/* A missão */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                  <Instagram className="h-5 w-5 text-pink-600" />
                  @rafael.tdah — A Missão
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Mídia social é o grande canal de comunicação com esse público. Milhões de adultos vivem com TDAH 
                  sem saber — e eu posso ajudá-los a ter <strong className="text-purple-700">uma vida de verdade de volta</strong>.
                </p>
                <div className="bg-white/60 p-3 rounded text-center">
                  <p className="text-purple-800 font-semibold italic">
                    "Quero salvar vidas. Preciso das condições necessárias para isso."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline da Reinvenção */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
              <Calendar className="h-6 w-6 text-amber-600" />
              Timeline da Reinvenção
            </h3>
            <div className="relative">
              {/* Linha conectora */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 hidden md:block"></div>
              
              <div className="space-y-8">
                {/* Maio 2024 */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="md:w-1/2 md:text-right md:pr-8">
                    <Card className="inline-block bg-white shadow-lg border-amber-200">
                      <CardContent className="p-4">
                        <p className="font-bold text-amber-700">Maio 2024</p>
                        <p className="text-lg font-semibold">Laudo TOC (Pure O)</p>
                        <p className="text-sm text-muted-foreground">Primeiro diagnóstico documentado</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center z-10 shadow-lg">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>

                {/* Dezembro 2024 */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="md:w-1/2 md:text-right md:pr-8"></div>
                  <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center z-10 shadow-lg">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <Card className="inline-block bg-white shadow-lg border-amber-200">
                      <CardContent className="p-4">
                        <p className="font-bold text-amber-700">Dezembro 2024</p>
                        <p className="text-lg font-semibold">Laudo TDAH + Prisão</p>
                        <p className="text-sm text-muted-foreground">Ponto de inflexão - diagnóstico completo</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Janeiro 2025 - Tratamento */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="md:w-1/2 md:text-right md:pr-8">
                    <Card className="inline-block bg-white shadow-lg border-amber-200">
                      <CardContent className="p-4">
                        <p className="font-bold text-amber-700">Janeiro 2025</p>
                        <p className="text-lg font-semibold">Tratamento Ativo</p>
                        <p className="text-sm text-muted-foreground">R$ 930/mês em medicamentos + acompanhamento</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center z-10 shadow-lg">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>

                {/* Janeiro 2025 - Novo Propósito */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="md:w-1/2 md:text-right md:pr-8"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center z-10 shadow-lg">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <Card className="inline-block bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg border-2 border-amber-400">
                      <CardContent className="p-4">
                        <p className="font-bold text-amber-700">Janeiro 2025</p>
                        <p className="text-lg font-semibold">🚀 Novo Propósito de Vida</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Instagram className="h-4 w-4 text-pink-600" />
                          <span className="text-sm font-medium">@rafael.tdah</span>
                          <span className="text-sm text-muted-foreground">+ MEI Educação</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Por que isso funciona juridicamente */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg border-green-200 bg-gradient-to-br from-white to-green-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-green-700">
                  <Scale className="h-6 w-6" />
                  Por que Funciona Juridicamente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-100/50 p-4 rounded-lg border border-green-200">
                  <p className="font-semibold text-green-700 mb-2">Art. 1.695, Código Civil</p>
                  <p className="text-sm text-muted-foreground italic">
                    "São devidos os alimentos quando quem os pretende não tem bens suficientes, 
                    nem pode prover, pelo seu trabalho, à própria mantença, e aquele, de quem se 
                    reclamam, pode fornecê-los, sem desfalque do necessário ao seu sustento."
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-semibold">Mudança de Recursos Documentada</p>
                      <p className="text-sm text-muted-foreground">Laudos médicos comprovam necessidade de mudança de carreira</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-semibold">Renda Instável em 2025</p>
                      <p className="text-sm text-muted-foreground">Início de novo negócio = argumento forte para revisão</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-semibold">Cronologia Coerente</p>
                      <p className="text-sm text-muted-foreground">Juiz vê ordem lógica: diagnóstico → tratamento → reinvenção</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-blue-200 bg-gradient-to-br from-white to-blue-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-blue-700">
                  <Shield className="h-6 w-6" />
                  Defesa Preventiva
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Esta estratégia <strong>desarma os contra-ataques</strong> antes deles acontecerem:
                </p>
                
                <div className="space-y-3">
                  <div className="bg-blue-100/50 p-3 rounded-lg border border-blue-200">
                    <p className="font-semibold text-blue-700">"Ele está escondendo renda"</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <ArrowRight className="h-4 w-4" />
                      Laudos médicos comprovam necessidade de mudança
                    </p>
                  </div>
                  
                  <div className="bg-blue-100/50 p-3 rounded-lg border border-blue-200">
                    <p className="font-semibold text-blue-700">"É manobra para não pagar"</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <ArrowRight className="h-4 w-4" />
                      Diagnósticos são de ANTES da prisão (Maio/24)
                    </p>
                  </div>
                  
                  <div className="bg-blue-100/50 p-3 rounded-lg border border-blue-200">
                    <p className="font-semibold text-blue-700">"Ele pode trabalhar com TI"</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <ArrowRight className="h-4 w-4" />
                      Laudo indica necessidade de ambiente com menos pressão
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Checklist de Documentos */}
          <Card className="mb-12 shadow-lg border-purple-200 bg-gradient-to-br from-white to-purple-50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-purple-700">
                <FileText className="h-6 w-6" />
                Checklist de Documentos para Reunir
              </CardTitle>
              <CardDescription>Prima, precisamos organizar esses documentos para a ação</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 bg-purple-100/50 rounded-lg border border-purple-200">
                  <div className="w-6 h-6 rounded border-2 border-purple-400 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-sm">Laudo TOC (Maio/2024)</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-purple-100/50 rounded-lg border border-purple-200">
                  <div className="w-6 h-6 rounded border-2 border-purple-400 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-sm">Laudo TDAH (Dez/2024)</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-purple-100/50 rounded-lg border border-purple-200">
                  <div className="w-6 h-6 rounded border-2 border-purple-400 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-sm">Prescrições médicas</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-purple-100/50 rounded-lg border border-purple-200">
                  <div className="w-6 h-6 rounded border-2 border-purple-400 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-sm">Comprovantes medicação (R$ 930/mês)</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-amber-100/50 rounded-lg border border-amber-200">
                  <div className="w-6 h-6 rounded border-2 border-amber-400"></div>
                  <span className="text-sm">Prints @rafael.tdah</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-amber-100/50 rounded-lg border border-amber-200">
                  <div className="w-6 h-6 rounded border-2 border-amber-400"></div>
                  <span className="text-sm">Novo MEI (Educação)</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-amber-100/50 rounded-lg border border-amber-200">
                  <div className="w-6 h-6 rounded border-2 border-amber-400"></div>
                  <span className="text-sm">Encerramento MEI antigo</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-amber-100/50 rounded-lg border border-amber-200">
                  <div className="w-6 h-6 rounded border-2 border-amber-400"></div>
                  <span className="text-sm">Declaração de propósito</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-purple-600" /> = Já temos</span>
                <span className="ml-4">□ = Precisamos providenciar</span>
              </p>
            </CardContent>
          </Card>

          {/* Projeção de Sucesso */}
          <Card className="border-2 border-amber-400 shadow-2xl bg-gradient-to-br from-amber-50 to-orange-50">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl flex items-center justify-center gap-2 text-amber-700">
                <Target className="h-8 w-8" />
                Projeção de Sucesso
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-green-100 rounded-xl border-2 border-green-300">
                  <p className="text-5xl font-bold text-green-700">70%</p>
                  <p className="text-lg font-semibold text-green-800 mt-2">Redução Significativa</p>
                  <p className="text-sm text-green-600">Pensão adequada à nova realidade</p>
                </div>
                
                <div className="text-center p-6 bg-amber-100 rounded-xl border-2 border-amber-300">
                  <p className="text-5xl font-bold text-amber-700">20%</p>
                  <p className="text-lg font-semibold text-amber-800 mt-2">Vitória Completa</p>
                  <p className="text-sm text-amber-600">Compensação total + revisão favorável</p>
                </div>
                
                <div className="text-center p-6 bg-blue-100 rounded-xl border-2 border-blue-300">
                  <p className="text-5xl font-bold text-blue-700">10%</p>
                  <p className="text-lg font-semibold text-blue-800 mt-2">Manutenção Temporária</p>
                  <p className="text-sm text-blue-600">Até estabilização da nova renda</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-amber-200 to-orange-200 p-6 rounded-xl text-center">
                <p className="text-xl font-bold text-amber-900 mb-2">
                  💡 Prima, o mais importante:
                </p>
                <p className="text-lg text-amber-800">
                  <strong>Isso não é mentira, é verdade.</strong> É genuíno, está conectado com meus laudos, 
                  e cria uma narrativa que o juiz vai entender: um pai que passou por uma crise de saúde, 
                  descobriu seu propósito, e está se reinventando para poder cuidar do filho de forma sustentável.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Área de Downloads */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Documentação e Provas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Todos os documentos, comprovantes e laudos organizados para fácil acesso
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Comprovantes de Pagamento
                </CardTitle>
                <CardDescription>PIX, transferências e plano de saúde</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Baixar Comprovantes (Google Drive)
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Laudos Médicos
                </CardTitle>
                <CardDescription>TOC Pure O e TDAH</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Baixar Laudos (Google Drive)
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Conversas e Mensagens
                </CardTitle>
                <CardDescription>Provas de má-fé e recusa de acordo</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Baixar Conversas (Google Drive)
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Dossiê Completo (PDF)
                </CardTitle>
                <CardDescription>Documento consolidado para tribunal</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg" variant="default">
                  <Download className="mr-2 h-5 w-5" />
                  Baixar PDF Completo
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Nota sobre Google Drive */}
          <Card className="mt-12 max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">
                <strong className="text-primary">Nota:</strong> Todos os arquivos estão organizados 
                no Google Drive para facilitar o acesso e download. Os links serão configurados 
                para permitir acesso direto sem necessidade de login.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container text-center">
          <div className="mb-6">
            <img 
              src="/mascote-lobo.png" 
              alt="Mascote Lobo" 
              className="w-24 h-24 mx-auto object-contain opacity-80"
            />
          </div>
          <h3 className="text-2xl font-display font-bold mb-2">Pela Verdade, Pelo Tomás</h3>
          <p className="text-primary-foreground/80 mb-6">
            Dossiê Estratégico de Defesa Jurídica - Rafael Marvila
          </p>
          <p className="text-sm text-primary-foreground/60">
            © 2025 - Todos os direitos reservados | Documento confidencial para uso jurídico
          </p>
        </div>
      </footer>
    </div>
  );
}
