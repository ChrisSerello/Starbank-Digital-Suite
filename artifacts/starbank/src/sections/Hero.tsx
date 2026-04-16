import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, BarChart3, TrendingUp, Users, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const barHeights = [40, 65, 45, 80, 55, 90, 70, 100];

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] opacity-50 translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-sm font-medium mb-6 text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Plataforma Enterprise-Grade
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              A Evolução do <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/60">Ecossistema Financeiro.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Infraestrutura bancária, crédito digital e operações estruturadas em uma única plataforma para instituições, municípios e grandes empresas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="h-14 px-8 text-base" asChild>
                <a 
                  href="https://wa.me/5511939329765" target="blank" rel="noopener noreferrer">
                  Falar com um Executivo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base">
                Explorar Soluções
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Digital</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">Open</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Star</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">BaaS</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">CaaS</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg lg:max-w-none"
          >
            {/* Dashboard Mockup */}
            <div className="relative rounded-xl border border-border/50 bg-card/40 backdrop-blur-xl shadow-2xl overflow-hidden">

              {/* Top bar */}
              <div className="flex items-center px-4 py-3 border-b border-border/50 bg-card/80">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                </div>
                <div className="mx-auto bg-background/50 text-muted-foreground text-xs px-3 py-1 rounded-md">
                  starbank.com.br/hub
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs text-green-400 font-mono">ao vivo</span>
                </div>
              </div>

              <div className="p-5 grid gap-4">

                {/* Header row */}
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Esteira operacional</p>
                    <h3 className="text-2xl font-bold">Ativa</h3>
                    <p className="text-xs text-green-400 font-medium mt-0.5 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +12,4% vs. mês anterior
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground mb-0.5">Volume processado</div>
                    <div className="text-lg font-bold">R$ 48,7M</div>
                    <div className="text-xs text-muted-foreground">últimas 24h</div>
                  </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-background/40 border border-border/40 rounded-lg p-2.5">
                    <Users className="h-3.5 w-3.5 text-blue-400 mb-1.5" />
                    <div className="text-sm font-bold">14.382</div>
                    <div className="text-[10px] text-muted-foreground">Contratos ativos</div>
                  </div>
                  <div className="bg-background/40 border border-border/40 rounded-lg p-2.5">
                    <CreditCard className="h-3.5 w-3.5 text-purple-400 mb-1.5" />
                    <div className="text-sm font-bold">R$ 3,2M</div>
                    <div className="text-[10px] text-muted-foreground">Crédito liberado</div>
                  </div>
                  <div className="bg-background/40 border border-border/40 rounded-lg p-2.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-green-400 mb-1.5" />
                    <div className="text-sm font-bold">99,97%</div>
                    <div className="text-[10px] text-muted-foreground">Uptime</div>
                  </div>
                </div>

                {/* Bar chart with labels */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Operações / semana</span>
                    <span className="text-[10px] text-green-400 font-medium">↑ Crescimento</span>
                  </div>
                  <div className="h-28 w-full flex items-end gap-1.5">
                    {barHeights.map((h, i) => {
                      const days = ["S", "T", "Q", "Q", "S", "S", "D", "H"];
                      const values = ["1.2k", "1.8k", "1.4k", "2.1k", "1.7k", "2.4k", "1.9k", "2.7k"];
                      return (
                        <div key={i} className="flex flex-col items-center flex-1 gap-1 h-full justify-end group">
                          <div
                            className={`w-full rounded-t-sm transition-all ${i === 7 ? "bg-primary/80" : "bg-primary/20 group-hover:bg-primary/40"}`}
                            style={{ height: `${h}%` }}
                            title={values[i]}
                          ></div>
                          <span className="text-[9px] text-muted-foreground">{days[i]}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Status Row */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 rounded-lg bg-background/50 border border-border/50 flex items-center gap-3">
                    <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                    <div>
                      <p className="text-[10px] text-muted-foreground">Compliance</p>
                      <p className="font-semibold text-xs">Rastreável · BCB</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50 border border-border/50 flex items-center gap-3">
                    <Zap className="h-4 w-4 text-primary shrink-0" />
                    <div>
                      <p className="text-[10px] text-muted-foreground">Latência média</p>
                      <p className="font-semibold text-xs">38ms · Conectada</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-8 top-1/4 p-4 rounded-xl bg-card border border-border shadow-xl backdrop-blur-md hidden md:block animate-pulse" style={{ animationDuration: '4s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Open Star</p>
                  <p className="text-sm font-semibold">Sincronizado</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}