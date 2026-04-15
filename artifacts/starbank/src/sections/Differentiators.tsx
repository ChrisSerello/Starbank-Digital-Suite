import { motion } from "framer-motion";
import { differentiators } from "@/data/content";

export default function Differentiators() {
  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Excelência Operacional
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A arquitetura Starbank foi construída com princípios de zero-trust, resiliência extrema e escalabilidade nativa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-primary shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-lg">{diff.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-14">
                    {diff.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}