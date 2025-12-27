import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Scale, TrendingDown, TrendingUp, Calendar, Shield, AlertCircle } from "lucide-react";

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

            {/* Tese 3 */}
            <Card className="shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-t-accent">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <TrendingDown className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Tese 3: Revisão Imediata</CardTitle>
                <CardDescription>Adequação à realidade financeira</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="font-semibold text-primary mb-2">Situação Atual:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Renda: R$ 15.000/mês</li>
                    <li>• Custos essenciais: R$ 8.704/mês</li>
                    <li>• Medicamentos obrigatórios: R$ 930/mês</li>
                  </ul>
                </div>
                
                <div className="bg-secondary/5 p-4 rounded-lg">
                  <p className="font-semibold text-secondary mb-2">Mudança Drástica:</p>
                  <p className="text-sm text-muted-foreground">
                    Perda de emprego anterior, mudança para o exterior, diagnóstico de TDAH 
                    com custos médicos elevados.
                  </p>
                </div>

                <div className="bg-accent/5 p-4 rounded-lg">
                  <p className="font-semibold text-accent mb-2">Pedido:</p>
                  <p className="text-sm text-muted-foreground">
                    Liminar para revisão imediata da pensão com base no binômio 
                    necessidade/possibilidade atualizado
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
                entrar com a Ação Revisional no Brasil e se antecipar a qualquer novo pedido de prisão, 
                enfraquecendo futuras ações internacionais.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-card p-4 rounded-lg">
                  <p className="font-semibold text-destructive">Abril 2026</p>
                  <p className="text-sm text-muted-foreground">Novo pedido de prisão possível</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <p className="font-semibold text-destructive">Janeiro 2026</p>
                  <p className="text-sm text-muted-foreground">Cobrança via Convenção de Haia</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <p className="font-semibold text-primary">AGORA</p>
                  <p className="text-sm text-muted-foreground">Entrar com Revisional</p>
                </div>
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
