import { motion } from "framer-motion";
import { trustMetrics } from "@/data/content";

export default function Credibility() {
  return (
    <section id="confianca" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Confiança construída por arquitetura.
            </h2>
            <p className="text-lg text-muted-foreground">
              A proposta do Grupo Starbank combina governança, operação digital, rastreabilidade e tecnologia bancária para apoiar decisões institucionais com mais controle.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 md:p-10 flex flex-col justify-center text-center"
            >
              <div className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                {metric.value}
              </div>
              <div className="font-semibold text-sm uppercase tracking-wider mb-2">
                {metric.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}