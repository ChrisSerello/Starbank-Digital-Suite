import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Overview() {
  return (
    <section id="overview" className="py-24 md:py-32 bg-card relative overflow-hidden border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Muito mais que um banco.<br />
              <span className="text-muted-foreground">Um hub financeiro completo.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                O Grupo Starbank nasceu da necessidade de modernizar e unificar operações financeiras complexas. Nós não apenas fornecemos crédito; nós construímos as estradas pelas quais o capital transita com segurança e eficiência.
              </p>
              <p>
                Nossa arquitetura proprietária combina o rigor regulatório exigido pelo mercado com a agilidade das principais empresas de tecnologia do mundo. Do crédito consignado digitalizado à infraestrutura de Banking as a Service, entregamos soluções que escalam operações institucionais.
              </p>
            </div>
            
            <div className="mt-10">
              <Button variant="link" className="px-0 text-primary hover:text-primary/80 text-base font-medium h-auto flex items-center gap-2">
                Conheça nossa Governança Corporativa
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl border border-border/50 bg-background/50 overflow-hidden relative group">
              {/* Decorative Tech Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full h-full border border-primary/20 rounded-xl bg-card/80 backdrop-blur-sm flex flex-col p-6 shadow-2xl relative overflow-hidden">
                  
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

                  <div className="flex justify-between items-center mb-8 pb-4 border-b border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">SB</div>
                      <span className="font-semibold text-sm">Core Engine</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">Online</span>
                    </div>
                  </div>

                  <div className="space-y-4 flex-1">
                    {[
                      { label: "BaaS API", status: "200 OK", ms: "12ms", w: "100%" },
                      { label: "Credit Engine", status: "200 OK", ms: "45ms", w: "80%" },
                      { label: "Open Finance", status: "200 OK", ms: "28ms", w: "90%" },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <div className="flex justify-between text-xs font-mono text-muted-foreground">
                          <span>{item.label}</span>
                          <span className="flex gap-4">
                            <span className="text-green-500">{item.status}</span>
                            <span>{item.ms}</span>
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-background rounded-full overflow-hidden">
                          <div className="h-full bg-primary/40 rounded-full" style={{ width: item.w }}></div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
            
            {/* Soft glow behind the decorative image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl blur-xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}