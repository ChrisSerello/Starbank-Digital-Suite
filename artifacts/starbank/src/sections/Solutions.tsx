import { useState } from "react";
import { motion } from "framer-motion";
import { solutions } from "@/data/content";
import {
  CheckCircle2, ArrowRight, Clock, TrendingUp, Users,
  FileText, ShieldCheck, Wallet, Building2, BarChart3,
  Zap, Lock, RefreshCw, AlertTriangle, Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechSpecsDrawer } from "@/components/TechSpecsDrawer";

/* ─── Solução 1 · Crédito Consignado ─────────────────────────────────────── */
function MockupConsignado() {
  const pipeline = [
    { stage: "Análise",     count: 248, pct: 100, color: "bg-blue-500"   },
    { stage: "Pré-aprovado",count: 201, pct: 81,  color: "bg-purple-500" },
    { stage: "Assinatura",  count: 178, pct: 72,  color: "bg-yellow-500" },
    { stage: "Desembolso",  count: 165, pct: 66,  color: "bg-green-500"  },
  ];
  const recentes = [
    { nome: "João M. S.",  valor: "R$ 12.400", status: "Aprovado",   cor: "text-green-400"  },
    { nome: "Ana P. L.",   valor: "R$ 8.750",  status: "Assinatura", cor: "text-yellow-400" },
    { nome: "Carlos R.",   valor: "R$ 21.000", status: "Aprovado",   cor: "text-green-400"  },
    { nome: "Márcia T.",   valor: "R$ 5.200",  status: "Análise",    cor: "text-blue-400"   },
  ];
  return (
    <div className="rounded-2xl border border-border/50 bg-background/50 overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border/50 bg-card/80">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-primary" />
          <span className="font-semibold text-sm">Esteira Consignado</span>
        </div>
        <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
          <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span></span>
          <span className="text-xs text-green-400">Ao vivo</span>
        </div>
      </div>
      <div className="grid grid-cols-3 divide-x divide-border/50 border-b border-border/50">
        {[
          { label: "Taxa aprovação", value: "82,6%",    icon: <TrendingUp className="h-3 w-3 text-green-400" /> },
          { label: "Ticket médio",   value: "R$ 14,2k", icon: <Wallet className="h-3 w-3 text-blue-400" />     },
          { label: "Tempo médio",    value: "4,3 min",  icon: <Clock className="h-3 w-3 text-purple-400" />    },
        ].map((k) => (
          <div key={k.label} className="px-3 py-3 text-center">
            <div className="flex items-center justify-center gap-1 mb-1">{k.icon}</div>
            <div className="text-sm font-bold">{k.value}</div>
            <div className="text-[10px] text-muted-foreground">{k.label}</div>
          </div>
        ))}
      </div>
      <div className="px-5 py-4 border-b border-border/50 space-y-2.5">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Pipeline de hoje</div>
        {pipeline.map((p) => (
          <div key={p.stage} className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground w-24 shrink-0">{p.stage}</span>
            <div className="flex-1 h-2 bg-border/40 rounded-full overflow-hidden">
              <motion.div className={`h-full ${p.color} opacity-70 rounded-full`} initial={{ width: 0 }} whileInView={{ width: `${p.pct}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} />
            </div>
            <span className="text-xs font-mono font-bold w-8 text-right">{p.count}</span>
          </div>
        ))}
      </div>
      <div className="px-5 py-4">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Últimas propostas</div>
        <div className="space-y-2">
          {recentes.map((r) => (
            <div key={r.nome} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-[9px] font-bold">{r.nome.split(" ").map(w => w[0]).join("").slice(0,2)}</div>
                <span className="text-foreground/80">{r.nome}</span>
              </div>
              <span className="font-mono font-medium">{r.valor}</span>
              <span className={`font-medium ${r.cor}`}>{r.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Solução 2 · Plataforma de Gestão de Folha ──────────────────────────── */
function MockupFolha() {
  const municipios = [
    { nome: "Pref. São Caetano",  serv: 4821, pct: 91, status: "ok"   },
    { nome: "Câmara Municipal",   serv: 1204, pct: 87, status: "ok"   },
    { nome: "SAAE Regional",      serv: 632,  pct: 78, status: "warn" },
    { nome: "Autarquia Educação", serv: 2390, pct: 94, status: "ok"   },
  ];
  return (
    <div className="rounded-2xl border border-border/50 bg-background/50 overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border/50 bg-card/80">
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4 text-primary" />
          <span className="font-semibold text-sm">Gestão de Folha</span>
        </div>
        <div className="text-xs text-muted-foreground font-mono">Ciclo: Mai/2025</div>
      </div>
      <div className="grid grid-cols-3 divide-x divide-border/50 border-b border-border/50">
        {[
          { label: "Servidores",   value: "9.047",    icon: <Users className="h-3 w-3 text-blue-400" />         },
          { label: "Folha total",  value: "R$ 38,2M", icon: <Wallet className="h-3 w-3 text-green-400" />       },
          { label: "Conformidade", value: "100%",     icon: <ShieldCheck className="h-3 w-3 text-purple-400" /> },
        ].map((k) => (
          <div key={k.label} className="px-3 py-3 text-center">
            <div className="flex items-center justify-center gap-1 mb-1">{k.icon}</div>
            <div className="text-sm font-bold">{k.value}</div>
            <div className="text-[10px] text-muted-foreground">{k.label}</div>
          </div>
        ))}
      </div>
      <div className="px-5 py-4 border-b border-border/50">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Progresso do fechamento</div>
        <div className="space-y-2">
          {[
            { label: "Cálculo de margens",    done: true  },
            { label: "Validação de convênios", done: true  },
            { label: "Conciliação bancária",   done: true  },
            { label: "Geração de FOPAG",       done: false },
            { label: "Auditoria final",        done: false },
          ].map((step) => (
            <div key={step.label} className="flex items-center gap-2.5 text-xs">
              {step.done ? <CheckCircle2 className="h-3.5 w-3.5 text-green-400 shrink-0" /> : <div className="h-3.5 w-3.5 rounded-full border border-border/60 shrink-0" />}
              <span className={step.done ? "text-foreground/80" : "text-muted-foreground"}>{step.label}</span>
              {step.done && <span className="ml-auto text-[10px] text-green-400">Concluído</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 py-4">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Convênios ativos</div>
        <div className="space-y-2.5">
          {municipios.map((m) => (
            <div key={m.nome} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-foreground/80 flex items-center gap-1.5">
                  {m.status === "warn" ? <AlertTriangle className="h-3 w-3 text-yellow-400" /> : <CheckCircle2 className="h-3 w-3 text-green-400" />}
                  {m.nome}
                </span>
                <span className="text-muted-foreground font-mono">{m.serv.toLocaleString("pt-BR")} serv.</span>
              </div>
              <div className="h-1.5 bg-border/40 rounded-full overflow-hidden">
                <motion.div className={`h-full rounded-full ${m.status === "warn" ? "bg-yellow-500/60" : "bg-primary/50"}`} initial={{ width: 0 }} whileInView={{ width: `${m.pct}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Solução 3 · Infraestrutura Transacional ────────────────────────────── */
function MockupTransacional() {
  const nodes = [
    { label: "PIX",     req: "9.821/s", lat: "11ms", x: "8%",  y: "18%", color: "bg-blue-500"   },
    { label: "TED/DOC", req: "2.034/s", lat: "38ms", x: "8%",  y: "62%", color: "bg-purple-500" },
    { label: "Boleto",  req: "4.412/s", lat: "22ms", x: "70%", y: "18%", color: "bg-yellow-500" },
    { label: "Cartão",  req: "3.198/s", lat: "17ms", x: "70%", y: "62%", color: "bg-green-500"  },
  ];
  return (
    <div className="rounded-2xl border border-border/50 bg-background/50 overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border/50 bg-card/80">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-primary" />
          <span className="font-semibold text-sm">Infra Transacional</span>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-green-400 flex items-center gap-1"><Zap className="h-3 w-3" />19.465 tx/s</span>
          <span className="text-muted-foreground">|</span>
          <span className="text-blue-400 flex items-center gap-1"><Lock className="h-3 w-3" />Antifraude ativo</span>
        </div>
      </div>
      <div className="grid grid-cols-4 divide-x divide-border/50 border-b border-border/50">
        {[
          { label: "Tx hoje",    value: "1,2B"   },
          { label: "Bloqueadas", value: "0,08%"  },
          { label: "Latência",   value: "17ms"   },
          { label: "Disponib.",  value: "99,99%" },
        ].map((k) => (
          <div key={k.label} className="px-2 py-3 text-center">
            <div className="text-xs font-bold">{k.value}</div>
            <div className="text-[9px] text-muted-foreground">{k.label}</div>
          </div>
        ))}
      </div>
      <div className="px-5 py-4 border-b border-border/50">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Mapa de canais</div>
        <div className="relative h-36 bg-background/30 rounded-xl border border-border/30 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
              <div className="w-9 h-9 rounded-full bg-primary/30 border border-primary/60 flex items-center justify-center">
                <span className="text-[10px] font-bold text-primary">SB</span>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: "3s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border border-primary/10 animate-ping" style={{ animationDuration: "4s", animationDelay: "1s" }} />
          {nodes.map((n) => (
            <div key={n.label} className="absolute flex flex-col items-center gap-1" style={{ left: n.x, top: n.y }}>
              <div className={`w-2.5 h-2.5 rounded-full ${n.color} opacity-80`} />
              <span className="text-[9px] font-mono text-foreground/70">{n.label}</span>
              <span className="text-[8px] text-muted-foreground">{n.lat}</span>
            </div>
          ))}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>
      </div>
      <div className="px-5 py-4">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Camadas de antifraude</div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Análise comportamental",   val: "ML v4.2"   },
            { label: "Verificação de identidade", val: "Biometria" },
            { label: "Scoring em tempo real",     val: "< 8ms"    },
            { label: "Bloqueio automático",        val: "Ativo"    },
          ].map((f) => (
            <div key={f.label} className="flex items-center gap-2 bg-background/40 rounded-lg px-3 py-2 border border-border/30">
              <ShieldCheck className="h-3 w-3 text-green-400 shrink-0" />
              <div>
                <div className="text-[10px] text-foreground/80 font-medium">{f.label}</div>
                <div className="text-[9px] text-muted-foreground">{f.val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main ────────────────────────────────────────────────────────────────── */
const mockups = [MockupConsignado, MockupFolha, MockupTransacional];
const solutionTitles = ["Crédito Consignado", "Plataforma de Gestão de Folha", "Infraestrutura Transacional"];

export default function Solutions() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSolution, setActiveSolution] = useState(0);

  return (
    <>
      <section id="solucoes" className="py-24 md:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">

          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Soluções Especializadas</h2>
            <p className="text-lg text-muted-foreground">
              Desenvolvidas para atender às mais altas exigências operacionais e regulatórias do mercado institucional.
            </p>
          </div>

          <div className="space-y-24">
            {solutions.map((solution, index) => {
              const Mockup = mockups[index];
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    index % 2 !== 0 ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
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
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{solution.description}</p>
                    <ul className="space-y-4 mb-8">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* ── CTA button ── */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => { setActiveSolution(index); setDrawerOpen(true); }}
                      className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card text-sm font-semibold overflow-hidden transition-all hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
                    >
                      {/* animated shimmer */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                      <span className="relative flex items-center gap-2">
                        Ver Especificações Técnicas
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </motion.button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                  >
                    <Mockup />
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl blur-xl -z-10" />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global drawer */}
      <TechSpecsDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        solutionTitle={solutionTitles[activeSolution]}
      />
    </>
  );
}