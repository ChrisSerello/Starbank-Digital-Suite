import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
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
              <Button size="lg" className="h-14 px-8 text-base">
                Falar com um Executivo
                <ArrowRight className="ml-2 h-5 w-5" />
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
            {/* Abstract Dashboard Mockup */}
            <div className="relative rounded-xl border border-border/50 bg-card/40 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="flex items-center px-4 py-3 border-b border-border/50 bg-card/80">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                </div>
                <div className="mx-auto bg-background/50 text-muted-foreground text-xs px-3 py-1 rounded-md">
                  starbank.com.br/hub
                </div>
              </div>
              
              <div className="p-6 grid gap-6">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Esteira operacional</p>
                    <h3 className="text-3xl font-bold">Ativa</h3>
                  </div>
                  <div className="flex items-center text-green-500 text-sm font-medium bg-green-500/10 px-2 py-1 rounded">
                    Digital
                  </div>
                </div>

                <div className="h-40 w-full flex items-end gap-2 pb-4">
                  {[40, 65, 45, 80, 55, 90, 70, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors rounded-t-sm" style={{ height: `${h}%` }}></div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                    <ShieldCheck className="h-5 w-5 text-primary mb-2" />
                    <p className="text-xs text-muted-foreground">Compliance</p>
                    <p className="font-semibold text-sm">Rastreável</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                    <Zap className="h-5 w-5 text-primary mb-2" />
                    <p className="text-xs text-muted-foreground">Integração</p>
                    <p className="font-semibold text-sm">Conectada</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
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