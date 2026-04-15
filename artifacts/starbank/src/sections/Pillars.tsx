import { motion } from "framer-motion";
import { pillars } from "@/data/content";

export default function Pillars() {
  return (
    <section id="ecossistema" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-3xl mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            O Ecossistema Starbank
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Arquitetura modular projetada para resolver desafios financeiros complexos. Componentes que funcionam de forma independente ou em perfeita sinergia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-border transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-14 h-14 rounded-xl bg-background border border-border/50 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 relative z-10">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}