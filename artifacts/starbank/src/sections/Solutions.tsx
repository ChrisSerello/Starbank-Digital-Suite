import { motion } from "framer-motion";
import { solutions } from "@/data/content";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Solutions() {
  return (
    <section id="solucoes" className="py-24 md:py-32 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Soluções Especializadas
          </h2>
          <p className="text-lg text-muted-foreground">
            Desenvolvidas para atender às mais altas exigências operacionais e regulatórias do mercado institucional.
          </p>
        </div>

        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:grid-cols-[1fr_1fr] lg:[&>div:first-child]:order-2' : ''}`}>
              
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs font-semibold mb-6 uppercase tracking-wider text-muted-foreground">
                  Solução {index + 1}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">{solution.title}</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {solution.description}
                </p>
                
                <ul className="space-y-4 mb-8">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="gap-2">
                  Ver Especificações Técnicas
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-square md:aspect-[4/3] rounded-2xl border border-border/50 bg-background overflow-hidden flex items-center justify-center p-8"
              >
                {/* Abstract graphic representing the solution */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <div className="w-full max-w-sm relative">
                  {index === 0 && (
                    <div className="space-y-4">
                      {[100, 85, 90].map((w, i) => (
                         <div key={i} className="h-12 w-full bg-card border border-border rounded-lg flex items-center px-4 shadow-sm">
                           <div className="w-8 h-8 rounded bg-secondary/80 mr-4"></div>
                           <div className="h-3 bg-muted rounded w-1/3"></div>
                           <div className="ml-auto h-3 bg-primary/40 rounded" style={{ width: `${w/3}%` }}></div>
                         </div>
                      ))}
                    </div>
                  )}
                  {index === 1 && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-32 bg-card border border-border rounded-lg p-4 shadow-sm flex flex-col justify-between">
                        <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                        <div className="h-2 w-1/2 bg-muted rounded"></div>
                      </div>
                      <div className="h-32 bg-card border border-border rounded-lg p-4 shadow-sm flex flex-col justify-between">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20"></div>
                        <div className="h-2 w-1/2 bg-muted rounded"></div>
                      </div>
                      <div className="col-span-2 h-20 bg-card border border-border rounded-lg p-4 shadow-sm flex items-center gap-4">
                         <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                           <div className="h-full bg-primary w-3/4 rounded-full"></div>
                         </div>
                      </div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="relative h-64 w-full flex items-center justify-center">
                       <div className="absolute w-48 h-48 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                       <div className="absolute w-32 h-32 border border-primary/40 rounded-full animate-[spin_7s_linear_infinite_reverse]"></div>
                       <div className="w-16 h-16 bg-card border border-border rounded-full shadow-lg flex items-center justify-center z-10">
                         <div className="w-6 h-6 bg-primary rounded-sm"></div>
                       </div>
                    </div>
                  )}
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}