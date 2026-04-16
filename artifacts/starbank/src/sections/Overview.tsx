import { motion } from "framer-motion";
import { ArrowRight, Activity, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const apis = [
  { label: "BaaS API",       status: "200 OK", ms: "12ms",  w: "100%", req: "18.432 req/min", color: "bg-green-500"  },
  { label: "Credit Engine",  status: "200 OK", ms: "45ms",  w: "82%",  req: "7.218 req/min",  color: "bg-green-500"  },
  { label: "Open Finance",   status: "200 OK", ms: "28ms",  w: "91%",  req: "11.094 req/min", color: "bg-green-500"  },
  { label: "Fraud Shield",   status: "200 OK", ms: "9ms",   w: "98%",  req: "22.761 req/min", color: "bg-green-500"  },
  { label: "Consignado API", status: "200 OK", ms: "33ms",  w: "87%",  req: "5.340 req/min",  color: "bg-green-500"  },
];

const events = [
  { type: "ok",   msg: "Deploy v3.14.2 concluído com sucesso",   time: "agora"    },
  { type: "ok",   msg: "Backup automático de base finalizado",    time: "2min"     },
  { type: "warn", msg: "Pico de tráfego detectado — BaaS API",   time: "5min"     },
  { type: "ok",   msg: "Certificado SSL renovado automaticamente",time: "12min"    },
];

export default function Overview() {
  return (
    <section id="overview" className="py-24 md:py-32 bg-card relative overflow-hidden border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
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

          {/* Core Engine Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border border-border/50 bg-background/50 overflow-hidden shadow-2xl">

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border/50 bg-card/80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">SB</div>
                  <div>
                    <div className="font-semibold text-sm">Core Engine</div>
                    <div className="text-[10px] text-muted-foreground font-mono">v3.14.2 · prod</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                    <div className="text-[10px] text-muted-foreground">Uptime</div>
                    <div className="text-sm font-bold text-green-400">99,97%</div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs text-green-400 font-medium">Online</span>
                  </div>
                </div>
              </div>

              {/* Summary bar */}
              <div className="grid grid-cols-3 divide-x divide-border/50 border-b border-border/50">
                {[
                  { label: "Requisições/s", value: "1.847" },
                  { label: "Latência p99",  value: "52ms"  },
                  { label: "Erros 5xx",     value: "0,03%" },
                ].map((m) => (
                  <div key={m.label} className="px-4 py-3 text-center">
                    <div className="text-sm font-bold">{m.value}</div>
                    <div className="text-[10px] text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* API rows */}
              <div className="p-4 space-y-3">
                {apis.map((item) => (
                  <div key={item.label} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-foreground/80">{item.label}</span>
                      <span className="flex gap-3">
                        <span className="text-muted-foreground">{item.req}</span>
                        <span className="text-green-400">{item.status}</span>
                        <span className="text-muted-foreground">{item.ms}</span>
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-background rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${item.color} rounded-full opacity-60`}
                        initial={{ width: 0 }}
                        whileInView={{ width: item.w }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Event log */}
              <div className="border-t border-border/50 px-4 py-3 space-y-2">
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Activity className="h-3 w-3" /> Log de eventos
                </div>
                {events.map((ev, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] font-mono">
                    {ev.type === "ok"
                      ? <CheckCircle2 className="h-3 w-3 text-green-400 shrink-0" />
                      : <AlertCircle  className="h-3 w-3 text-yellow-400 shrink-0" />}
                    <span className="text-foreground/70 flex-1 truncate">{ev.msg}</span>
                    <span className="text-muted-foreground flex items-center gap-1 shrink-0">
                      <Clock className="h-2.5 w-2.5" />{ev.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl blur-xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}