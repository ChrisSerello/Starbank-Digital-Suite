import { motion } from "framer-motion";
import { audiences } from "@/data/content";

export default function Audiences() {
  return (
    <section id="publico" className="py-24 md:py-32 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Para Quem Construímos
          </h2>
          <p className="text-lg text-muted-foreground">
            O ecossistema Starbank suporta operações complexas através de múltiplos setores, entregando valor onde a robustez é inegociável.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-8 rounded-2xl border border-border hover:border-primary/30 transition-colors shadow-sm group"
              >
                <Icon className="h-8 w-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-xl mb-4">{audience.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}