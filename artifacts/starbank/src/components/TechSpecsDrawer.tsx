import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Copy, CheckCheck, Zap, Shield, Globe, Server,
  Activity, Lock, ChevronRight, ExternalLink, Terminal,
  BarChart3, Clock, AlertTriangle, CheckCircle2,
} from "lucide-react";

/* ─── Types ──────────────────────────────────────────────────────────────── */
type Tab = "overview" | "api" | "sla" | "security" | "sandbox";

/* ─── Code snippets ──────────────────────────────────────────────────────── */
const codeSnippets: Record<string, string> = {
  pix: `// Iniciar transferência PIX
POST https://api.starbank.com.br/v1/pix/transfer

Authorization: Bearer {access_token}
Content-Type: application/json

{
  "amount": 150000,          // centavos
  "pix_key": "cpf:12345678900",
  "description": "Pgto contrato #4821",
  "idempotency_key": "uuid-v4"
}

// Resposta (200 OK — 11ms médio)
{
  "transaction_id": "txn_9xKZ2mR",
  "status": "COMPLETED",
  "end_to_end_id": "E00038166...",
  "settled_at": "2025-05-14T14:32:01Z"
}`,

  webhook: `// Configurar webhook de eventos
POST https://api.starbank.com.br/v1/webhooks

{
  "url": "https://suaapp.com/webhooks/starbank",
  "events": [
    "transaction.completed",
    "transaction.failed",
    "fraud.detected",
    "balance.low"
  ],
  "secret": "whsec_sua_chave_secreta"
}

// Payload recebido no seu endpoint
{
  "event": "transaction.completed",
  "data": { "transaction_id": "txn_9xKZ2mR" },
  "signature": "sha256=abc123..."
}`,

  sdk: `// SDK Node.js — instalação
npm install @starbank/sdk

// Inicializar
import { StarBank } from "@starbank/sdk";

const sb = new StarBank({
  apiKey: process.env.STARBANK_KEY,
  environment: "production",
});

// Transferência PIX
const tx = await sb.pix.transfer({
  amount: 15000,
  pixKey: "email:cliente@email.com",
});

console.log(tx.status); // "COMPLETED"`,
};

/* ─── Data ────────────────────────────────────────────────────────────────── */
const endpoints = [
  { method: "POST", path: "/v1/pix/transfer",          desc: "Transferência PIX",            lat: "11ms"  },
  { method: "POST", path: "/v1/ted/transfer",           desc: "Transferência TED/DOC",         lat: "38ms"  },
  { method: "POST", path: "/v1/boleto/generate",        desc: "Emissão de boleto",             lat: "22ms"  },
  { method: "GET",  path: "/v1/balance",                desc: "Consulta de saldo",             lat: "8ms"   },
  { method: "GET",  path: "/v1/transactions",           desc: "Extrato e histórico",           lat: "15ms"  },
  { method: "POST", path: "/v1/fraud/analyze",          desc: "Score de fraude em tempo real", lat: "9ms"   },
  { method: "POST", path: "/v1/webhooks",               desc: "Registro de webhook",           lat: "12ms"  },
  { method: "GET",  path: "/v1/statement/reconcile",    desc: "Conciliação automática",        lat: "24ms"  },
];

const slaItems = [
  { label: "Disponibilidade",      value: "99,99%",   sub: "~52 min downtime/ano",        ok: true  },
  { label: "Latência PIX p50",     value: "11ms",     sub: "p99 < 45ms",                  ok: true  },
  { label: "Latência TED p50",     value: "38ms",     sub: "p99 < 120ms",                 ok: true  },
  { label: "Throughput máximo",    value: "25.000/s", sub: "transações por segundo",       ok: true  },
  { label: "RTO (Recovery Time)",  value: "< 30s",    sub: "tempo de recuperação",         ok: true  },
  { label: "RPO (Recovery Point)", value: "0",        sub: "sem perda de dados",           ok: true  },
  { label: "Taxa de erro 5xx",     value: "0,03%",    sub: "monitoramento 24/7",           ok: true  },
  { label: "Suporte P1",           value: "< 15min",  sub: "resposta garantida em contrato",ok: true },
];

const secItems = [
  { icon: Lock,    title: "TLS 1.3 obrigatório",        desc: "Todas as conexões são criptografadas em trânsito."       },
  { icon: Shield,  title: "AES-256 em repouso",          desc: "Dados em banco e armazenamento com criptografia total."  },
  { icon: Globe,   title: "Conformidade BCB & LGPD",     desc: "Auditado por entidade regulatória com relatório anual."  },
  { icon: Server,  title: "OAuth 2.0 + PKCE",            desc: "Autenticação moderna com rotação automática de tokens."  },
  { icon: Activity,title: "WAF + DDoS mitigation",       desc: "Firewall de aplicação e proteção a ataques volumétricos."},
  { icon: Lock,    title: "Assinatura de webhooks",      desc: "Payload assinado com HMAC-SHA256 verificável."          },
];

const methodColor: Record<string, string> = {
  GET:  "bg-blue-500/15 text-blue-400 border-blue-500/30",
  POST: "bg-green-500/15 text-green-400 border-green-500/30",
  PUT:  "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  DEL:  "bg-red-500/15 text-red-400 border-red-500/30",
};

/* ─── Small helpers ──────────────────────────────────────────────────────── */
function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="absolute top-3 right-3 p-1.5 rounded-md bg-border/40 hover:bg-border/70 transition-colors"
    >
      {copied
        ? <CheckCheck className="h-3.5 w-3.5 text-green-400" />
        : <Copy className="h-3.5 w-3.5 text-muted-foreground" />}
    </button>
  );
}

/* ─── Main drawer ────────────────────────────────────────────────────────── */
interface Props {
  open: boolean;
  onClose: () => void;
  solutionTitle?: string;
}

export function TechSpecsDrawer({ open, onClose, solutionTitle = "Infraestrutura Transacional" }: Props) {
  const [tab, setTab] = useState<Tab>("overview");
  const [activeSnippet, setActiveSnippet] = useState<keyof typeof codeSnippets>("pix");

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "overview",  label: "Visão Geral",    icon: <BarChart3 className="h-3.5 w-3.5" /> },
    { id: "api",       label: "API Reference",  icon: <Terminal className="h-3.5 w-3.5" />  },
    { id: "sla",       label: "SLA & Uptime",   icon: <Activity className="h-3.5 w-3.5" />  },
    { id: "security",  label: "Segurança",      icon: <Shield className="h-3.5 w-3.5" />    },
    { id: "sandbox",   label: "Sandbox",        icon: <Zap className="h-3.5 w-3.5" />       },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-background border-l border-border z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-card/80 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-primary/20 flex items-center justify-center">
                  <Terminal className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{solutionTitle}</div>
                  <div className="text-[10px] text-muted-foreground font-mono">Especificações Técnicas · v2.4</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  Documentação completa <ExternalLink className="h-3 w-3" />
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-md hover:bg-secondary transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-border shrink-0 bg-card/40 px-4 overflow-x-auto">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`flex items-center gap-1.5 px-4 py-3 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${
                    tab === t.id
                      ? "border-primary text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.icon}
                  {t.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">

              {/* ── OVERVIEW ── */}
              {tab === "overview" && (
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-1">Sobre esta solução</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A Infraestrutura Transacional do Grupo Starbank é uma camada de serviços financeiros de alto desempenho, projetada para processar transações em tempo real com latência de milissegundos, conformidade regulatória nativa e antifraude embarcado.
                    </p>
                  </div>

                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Transações/dia",    value: "1,2 bilhão",  icon: <Activity className="h-4 w-4 text-blue-400" />   },
                      { label: "Uptime garantido",  value: "99,99%",      icon: <CheckCircle2 className="h-4 w-4 text-green-400" />},
                      { label: "Latência PIX",      value: "11ms",        icon: <Zap className="h-4 w-4 text-yellow-400" />       },
                      { label: "Canais suportados", value: "PIX · TED · Boleto · Cartão", icon: <Globe className="h-4 w-4 text-purple-400" /> },
                    ].map((s) => (
                      <div key={s.label} className="bg-card border border-border/50 rounded-xl p-4 flex items-start gap-3">
                        {s.icon}
                        <div>
                          <div className="text-sm font-bold">{s.value}</div>
                          <div className="text-[11px] text-muted-foreground">{s.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Architecture */}
                  <div>
                    <h3 className="font-semibold mb-3">Arquitetura</h3>
                    <div className="bg-card border border-border/50 rounded-xl p-4 font-mono text-xs text-muted-foreground space-y-1.5 leading-relaxed">
                      <div className="text-foreground font-semibold mb-2">Fluxo de uma transação PIX</div>
                      <div>Seu App <ChevronRight className="inline h-3 w-3" /> API Gateway (TLS 1.3)</div>
                      <div className="pl-4">↳ Auth Service (OAuth 2.0)</div>
                      <div className="pl-4">↳ <span className="text-yellow-400">Fraud Engine</span> (ML · &lt;9ms)</div>
                      <div className="pl-4">↳ <span className="text-blue-400">PIX Orchestrator</span></div>
                      <div className="pl-8">↳ DICT (BCB) — consulta chave</div>
                      <div className="pl-8">↳ SPI (BCB) — liquidação</div>
                      <div className="pl-4">↳ <span className="text-green-400">Ledger Service</span> — registro</div>
                      <div className="pl-4">↳ Webhook Dispatcher → seu endpoint</div>
                      <div className="mt-2 text-green-400">✓ Total: ~11ms p50 · ~45ms p99</div>
                    </div>
                  </div>

                  {/* SDKs */}
                  <div>
                    <h3 className="font-semibold mb-3">SDKs disponíveis</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Python", "Java", "Go", "PHP", "Ruby", ".NET", "REST"].map((sdk) => (
                        <span key={sdk} className="px-3 py-1.5 bg-secondary/60 border border-border/50 rounded-lg text-xs font-medium">
                          {sdk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ── API REFERENCE ── */}
              {tab === "api" && (
                <div className="p-6 space-y-6">
                  {/* Endpoints list */}
                  <div>
                    <h3 className="font-semibold mb-3">Endpoints</h3>
                    <div className="space-y-2">
                      {endpoints.map((ep) => (
                        <div
                          key={ep.path}
                          className="flex items-center gap-3 p-3 bg-card border border-border/50 rounded-lg hover:border-border transition-colors"
                        >
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded border font-mono ${methodColor[ep.method]}`}>
                            {ep.method}
                          </span>
                          <span className="font-mono text-xs text-foreground/80 flex-1">{ep.path}</span>
                          <span className="text-[11px] text-muted-foreground hidden sm:block">{ep.desc}</span>
                          <span className="text-[11px] text-green-400 font-mono shrink-0">{ep.lat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Code examples */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Exemplos de código</h3>
                      <div className="flex gap-1 bg-secondary/50 rounded-lg p-0.5">
                        {(["pix", "webhook", "sdk"] as const).map((k) => (
                          <button
                            key={k}
                            onClick={() => setActiveSnippet(k)}
                            className={`px-3 py-1 text-xs rounded-md transition-colors ${
                              activeSnippet === k
                                ? "bg-background text-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {k === "pix" ? "PIX Transfer" : k === "webhook" ? "Webhook" : "SDK Node"}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="relative">
                      <pre className="bg-[#0d1117] border border-border/50 rounded-xl p-4 text-[11px] font-mono text-green-300/90 overflow-x-auto leading-relaxed whitespace-pre">
                        {codeSnippets[activeSnippet]}
                      </pre>
                      <CopyButton code={codeSnippets[activeSnippet]} />
                    </div>
                  </div>
                </div>
              )}

              {/* ── SLA & UPTIME ── */}
              {tab === "sla" && (
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-1">Acordos de Nível de Serviço</h3>
                    <p className="text-sm text-muted-foreground">Todos os SLAs são contratuais e monitorados em tempo real via painel de status.</p>
                  </div>

                  <div className="space-y-3">
                    {slaItems.map((s) => (
                      <div key={s.label} className="flex items-center justify-between p-4 bg-card border border-border/50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0" />
                          <div>
                            <div className="text-sm font-medium">{s.label}</div>
                            <div className="text-[11px] text-muted-foreground">{s.sub}</div>
                          </div>
                        </div>
                        <div className="text-sm font-bold text-green-400 font-mono">{s.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Uptime bar mockup */}
                  <div>
                    <h3 className="font-semibold mb-3">Histórico de disponibilidade — últimos 90 dias</h3>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 90 }).map((_, i) => {
                        const isDown = [12, 43].includes(i);
                        const isPartial = [27].includes(i);
                        return (
                          <div
                            key={i}
                            title={isDown ? "Incidente" : isPartial ? "Degradado" : "Operacional"}
                            className={`flex-1 h-8 rounded-sm ${
                              isDown ? "bg-red-500/70" : isPartial ? "bg-yellow-500/70" : "bg-green-500/60"
                            }`}
                          />
                        );
                      })}
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
                      <span>90 dias atrás</span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-green-500/60 inline-block" /> Operacional</span>
                        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-yellow-500/70 inline-block" /> Degradado</span>
                        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-red-500/70 inline-block" /> Incidente</span>
                      </div>
                      <span>Hoje</span>
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-green-400 font-bold text-sm">99,97%</span>
                      <span className="text-muted-foreground text-xs ml-2">de uptime nos últimos 90 dias</span>
                    </div>
                  </div>
                </div>
              )}

              {/* ── SECURITY ── */}
              {tab === "security" && (
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-1">Segurança & Conformidade</h3>
                    <p className="text-sm text-muted-foreground">Arquitetura zero-trust com múltiplas camadas de proteção, auditoria contínua e conformidade com regulatórios nacionais.</p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {secItems.map((s) => {
                      const Icon = s.icon;
                      return (
                        <div key={s.title} className="flex gap-4 p-4 bg-card border border-border/50 rounded-xl">
                          <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                            <Icon className="h-4 w-4 text-green-400" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold mb-0.5">{s.title}</div>
                            <div className="text-xs text-muted-foreground">{s.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 flex gap-3">
                    <AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" />
                    <div className="text-xs text-muted-foreground">
                      <span className="text-yellow-400 font-semibold">Programa de Bug Bounty ativo.</span>{" "}
                      Vulnerabilidades críticas elegíveis a recompensa de até R$ 50.000. Acesse security@starbank.com.br.
                    </div>
                  </div>
                </div>
              )}

              {/* ── SANDBOX ── */}
              {tab === "sandbox" && (
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-1">Ambiente Sandbox</h3>
                    <p className="text-sm text-muted-foreground">Teste todas as integrações sem custo, sem movimentação real e com dados fictícios gerados automaticamente.</p>
                  </div>

                  <div className="bg-card border border-border/50 rounded-xl p-4 space-y-3">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Credenciais de teste</div>
                    {[
                      { label: "Base URL",    value: "https://sandbox.api.starbank.com.br" },
                      { label: "API Key",     value: "sk_test_4xKz9mQ2...redacted"         },
                      { label: "Client ID",   value: "sb_client_test_001"                  },
                    ].map((c) => (
                      <div key={c.label} className="flex items-center justify-between gap-4">
                        <span className="text-[11px] text-muted-foreground w-20 shrink-0">{c.label}</span>
                        <code className="text-xs font-mono text-foreground/80 bg-background/50 px-2 py-1 rounded flex-1 truncate">
                          {c.value}
                        </code>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold">Dados de teste disponíveis</h3>
                    {[
                      { emoji: "✅", title: "PIX simulado",            desc: "Transações liquidadas em tempo real (fictício)"        },
                      { emoji: "✅", title: "Cenários de fraude",       desc: "Gatilhe detecção com CPFs especiais de teste"          },
                      { emoji: "✅", title: "Webhooks de teste",        desc: "Disparo manual de eventos pelo painel sandbox"         },
                      { emoji: "✅", title: "Mock de saldo",            desc: "Saldo configurável via API de administração sandbox"   },
                      { emoji: "🔜", title: "Replay de transações",    desc: "Em breve: repetir fluxos reais anonimizados"           },
                    ].map((d) => (
                      <div key={d.title} className="flex gap-3 p-3 bg-card border border-border/50 rounded-lg">
                        <span className="text-base">{d.emoji}</span>
                        <div>
                          <div className="text-sm font-medium">{d.title}</div>
                          <div className="text-[11px] text-muted-foreground">{d.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">
                    <Zap className="h-4 w-4" />
                    Acessar Console Sandbox
                    <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}

            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-border bg-card/60 shrink-0 flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground">Starbank Developers · docs.starbank.com.br</span>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] text-green-400">Todos os sistemas operacionais</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}