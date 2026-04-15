import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with dark/primary gradient */}
      <div className="absolute inset-0 bg-primary z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-black z-0 opacity-90"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto text-primary-foreground">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Pronto para evoluir a operação financeira da sua instituição?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-primary-foreground/80">
            Fale com nossos especialistas em soluções corporativas e descubra como o Grupo Starbank pode impulsionar seu ecossistema financeiro.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-base">
              Falar com um Executivo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Solicitar Proposta Comercial
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-primary-foreground/60">
            Atendimento exclusivo para instituições, empresas e municípios.
          </p>
        </div>
      </div>
    </section>
  );
}