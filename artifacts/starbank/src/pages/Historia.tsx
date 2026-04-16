import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Rocket, TrendingUp, Users, Building2, Target, Award, Zap, Star } from "lucide-react";

/* ─── Data ────────────────────────────────────────────────────────────────── */
const periods = [
  {
    id: "inicio",
    era: "O Início",
    range: "2016 — 2019",
    color: "blue",
    eraOnLeft: true,
    icon: Rocket,
    summary: "De uma promotora de crédito regional ao início de uma plataforma financeira de alcance nacional.",
    kpis: [
      { label: "Produção mensal", value: "R$ 32M" },
      { label: "Parceiros bancários", value: "4+" },
      { label: "Posições operacionais", value: "60" },
    ],
    years: [
      {
        year: "2016",
        title: "Fundação — Anticipay",
        text: "Iniciamos nossa trajetória como promotora de crédito Corban sob a marca Anticipay, estabelecendo os alicerces de uma operação que se tornaria referência nacional no ecossistema financeiro.",
      },
      {
        year: "2017",
        title: "Primeiras Parcerias Estratégicas",
        text: "Firmamos acordos com o Itaú e Daycoval, consolidando nossa credibilidade institucional e ampliando significativamente o portfólio de produtos e oportunidades comerciais.",
      },
      {
        year: "2018",
        title: "Expansão e Diversificação",
        text: "Ampliamos a estrutura para 60 posições operacionais, implementamos o centro de atendimento próprio e celebramos novos convênios com Banco Paribas e Cetelem.",
      },
      {
        year: "2019",
        title: "Marco de R$ 32M Mensais",
        text: "Alcançamos R$ 32 milhões em produção mensal de empréstimos — resultado que validou definitivamente o modelo de negócio e abriu caminho para a fase seguinte de crescimento acelerado.",
      },
    ],
  },
  {
    id: "expansao",
    era: "Expansão",
    range: "2020 — 2022",
    color: "purple",
    eraOnLeft: false,
    icon: TrendingUp,
    summary: "Resiliência na adversidade, modernização estrutural e o nascimento do ecossistema Fintech.",
    kpis: [
      { label: "Transformação digital", value: "100%" },
      { label: "Fintechs estruturadas", value: "3+" },
      { label: "Redução operacional", value: "-40% custo" },
    ],
    years: [
      {
        year: "2020",
        title: "Resiliência na Pandemia",
        text: "Em meio à crise global, mantivemos a operação com total resiliência. O período foi utilizado estrategicamente para revisar processos, fortalecer a governança e consolidar o planejamento da próxima fase.",
      },
      {
        year: "2021",
        title: "Modernização da Operação",
        text: "Realizamos a desmobilização do call center físico como parte de uma reestruturação deliberada, migrando para uma estrutura operacional digital, ágil e preparada para escalar com menor custo.",
      },
      {
        year: "2022",
        title: "Nascimento do Projeto Fintech",
        text: "Demos início ao projeto das Fintechs e à reestruturação corporativa do Grupo, posicionando a companhia como um ecossistema tecnológico-financeiro orientado à inovação e ao crescimento sustentável.",
      },
    ],
  },
  {
    id: "crescimento",
    era: "Crescimento Exponencial",
    range: "2023 — 2024",
    color: "green",
    eraOnLeft: true,
    icon: Award,
    summary: "Consolidação como Grupo de Companhias, escala real e entrada no mercado de capitais.",
    kpis: [
      { label: "Colaboradores", value: "+100" },
      { label: "Convênios ativos", value: "+65" },
      { label: "Produção mensal", value: "+R$ 50M" },
    ],
    years: [
      {
        year: "2023",
        title: "Grupo de Companhias",
        text: "Reorganizamos a estrutura jurídica e operacional como um Grupo de Companhias, ampliando nossa atuação simultânea nos mercados financeiro e imobiliário com visão estratégica de longo prazo.",
      },
      {
        year: "2024",
        title: "Escala, FIDICs e Mercado Imobiliário",
        text: "Estabelecemos parcerias com bancos, financeiras e FIDICs. Superamos 100 colaboradores e 65 convênios ativos, alcançamos R$ 50M em produção e iniciamos a estruturação do FECIDAT-BR208 e a expansão imobiliária.",
      },
    ],
  },
  {
    id: "futuro",
    era: "O Futuro e as Projeções",
    range: "2025 — 2026",
    color: "orange",
    eraOnLeft: false,
    icon: Target,
    summary: "FIDICs, debêntures públicas, mercado imobiliário e a consolidação como referência nacional.",
    kpis: [
      { label: "Produção projetada 2026", value: "R$ 350M/mês" },
      { label: "Pipeline debêntures", value: "+R$ 3Bi" },
      { label: "Colaboradores 2026", value: "+300" },
    ],
    years: [
      {
        year: "2025",
        title: "FIDICs, Debêntures e Imóveis",
        text: "Criação dos STAR FIDIC 01 e 02, emissão da 1ª Debênture Pública e lançamento de 1.000 unidades imobiliárias. Meta de +200 colaboradores, +178 convênios ativos, R$ 280M em produção e lançamento do FECIDAT-BR208.",
      },
      {
        year: "2026",
        title: "Liderança Nacional",
        text: "Projeção de +300 colaboradores, +245 convênios ativos e R$ 350M em produção mensal. Pipeline de Debêntures superior a R$ 3 bilhões e lançamento de 3.000 unidades imobiliárias — o Grupo Starbank como referência nacional.",
      },
    ],
  },
];

const accent: Record<string, { text: string; bg: string; border: string; dot: string; glow: string }> = {
  blue:   { text: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/30",   dot: "bg-blue-500",   glow: "shadow-[0_0_16px_theme(colors.blue.500/40)]"   },
  purple: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30", dot: "bg-purple-500", glow: "shadow-[0_0_16px_theme(colors.purple.500/40)]" },
  green:  { text: "text-green-400",  bg: "bg-green-500/10",  border: "border-green-500/30",  dot: "bg-green-500",  glow: "shadow-[0_0_16px_theme(colors.green.500/40)]"  },
  orange: { text: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30", dot: "bg-orange-500", glow: "shadow-[0_0_16px_theme(colors.orange.500/40)]" },
};

/* ─── Component ───────────────────────────────────────────────────────────── */
export default function Historia() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 8%", "end 92%"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const rocketTop  = useTransform(smooth, [0, 1], ["0%", "calc(100% - 56px)"]);
  const lineHeight = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">

        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="pt-32 pb-20 md:pt-44 md:pb-28 relative overflow-hidden bg-background">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-[900px] h-[500px] bg-primary/5 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium mb-6 text-muted-foreground">
                <Rocket className="h-4 w-4" />
                Fundado em 2016
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                Uma Trajetória de<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
                  Crescimento e Inovação
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Desde nossa fundação, o Grupo Starbank tem trilhado um caminho de constante evolução e excelência. Conheça os marcos que moldaram nossa jornada rumo à liderança no ecossistema financeiro nacional.
              </p>
            </motion.div>

            {/* Stat strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {[
                { label: "Anos de história",        value: "9+" },
                { label: "Produção projetada 2026", value: "R$ 350M/mês" },
                { label: "Pipeline debêntures",     value: "+R$ 3Bi" },
                { label: "Colaboradores em 2026",   value: "+300" },
              ].map((s) => (
                <div key={s.label} className="bg-card border border-border/50 rounded-xl px-4 py-4 text-center">
                  <div className="text-xl font-bold mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="mt-14 flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-xs uppercase tracking-widest">Role para explorar</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
              >
                <Rocket className="h-5 w-5 rotate-180" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Timeline ──────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-background">
          <div ref={timelineRef} className="relative container mx-auto px-4 md:px-6 max-w-5xl">

            {/* Background line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/30 -translate-x-1/2" />

            {/* Animated fill line */}
            <motion.div
              className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 origin-top bg-gradient-to-b from-primary/70 via-primary/40 to-transparent"
              style={{ height: lineHeight }}
            />

            {/* Rocket */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 z-30"
              style={{ top: rocketTop }}
            >
              {/* Exhaust trail */}
              <motion.div
                className="absolute -top-5 left-1/2 -translate-x-1/2 w-0.5 h-6 rounded-full"
                style={{
                  background: "linear-gradient(to bottom, transparent, hsl(var(--primary)/0.6))",
                }}
                animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
              {/* Rocket body */}
              <motion.div
                className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 10px hsl(var(--primary)/0.3)",
                    "0 0 22px hsl(var(--primary)/0.7)",
                    "0 0 10px hsl(var(--primary)/0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Rocket className="h-6 w-6 text-primary" style={{ transform: "rotate(135deg)" }} />
              </motion.div>
            </motion.div>

            {/* Periods */}
            {periods.map((period, pIdx) => {
              const a = accent[period.color];
              const Icon = period.icon;
              const isLast = pIdx === periods.length - 1;

              return (
                <div key={period.id} className={isLast ? "" : "mb-28 md:mb-36"}>

                  {/* Era marker dot */}
                  <div className="relative flex justify-center mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className={`w-6 h-6 rounded-full ${a.dot} z-10 flex items-center justify-center ${a.glow}`}
                    >
                      <div className="w-2 h-2 rounded-full bg-white/80" />
                    </motion.div>
                  </div>

                  {/* 2-column grid */}
                  <div className="grid grid-cols-2 gap-0 items-start">

                    {/* ── LEFT column ── */}
                    <div className="pr-8 md:pr-14">
                      {period.eraOnLeft ? (
                        /* Era card on LEFT */
                        <motion.div
                          initial={{ opacity: 0, x: -28 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-80px" }}
                          transition={{ duration: 0.6 }}
                          className="text-right"
                        >
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${a.bg} border ${a.border} text-xs font-bold mb-3 ${a.text} uppercase tracking-wider`}>
                            {period.range}
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold mb-3">{period.era}</h2>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-6">{period.summary}</p>
                          {/* KPI pills */}
                          <div className="flex flex-col gap-2 items-end">
                            {period.kpis.map((k) => (
                              <div key={k.label} className={`${a.bg} border ${a.border} rounded-xl px-4 py-2.5 flex items-center gap-3`}>
                                <div>
                                  <div className={`text-base font-bold ${a.text}`}>{k.value}</div>
                                  <div className="text-[11px] text-muted-foreground">{k.label}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ) : (
                        /* Year events on LEFT */
                        <div className="space-y-5 text-right">
                          {period.years.map((yr, yIdx) => (
                            <motion.div
                              key={yr.year}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, margin: "-40px" }}
                              transition={{ duration: 0.5, delay: yIdx * 0.1 }}
                              className={`bg-card border ${a.border} rounded-xl p-5 relative`}
                            >
                              {/* Connector dot */}
                              <div className={`absolute -right-4 top-6 w-3 h-3 rounded-full ${a.dot} z-10`} />
                              <div className={`text-2xl font-bold ${a.text} mb-1`}>{yr.year}</div>
                              <div className="font-semibold text-sm mb-2">{yr.title}</div>
                              <div className="text-xs text-muted-foreground leading-relaxed">{yr.text}</div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* ── RIGHT column ── */}
                    <div className="pl-8 md:pl-14">
                      {period.eraOnLeft ? (
                        /* Year events on RIGHT */
                        <div className="space-y-5">
                          {period.years.map((yr, yIdx) => (
                            <motion.div
                              key={yr.year}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, margin: "-40px" }}
                              transition={{ duration: 0.5, delay: yIdx * 0.1 }}
                              className={`bg-card border ${a.border} rounded-xl p-5 relative`}
                            >
                              {/* Connector dot */}
                              <div className={`absolute -left-4 top-6 w-3 h-3 rounded-full ${a.dot} z-10`} />
                              <div className={`text-2xl font-bold ${a.text} mb-1`}>{yr.year}</div>
                              <div className="font-semibold text-sm mb-2">{yr.title}</div>
                              <div className="text-xs text-muted-foreground leading-relaxed">{yr.text}</div>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        /* Era card on RIGHT */
                        <motion.div
                          initial={{ opacity: 0, x: 28 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-80px" }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${a.bg} border ${a.border} text-xs font-bold mb-3 ${a.text} uppercase tracking-wider`}>
                            {period.range}
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold mb-3">{period.era}</h2>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-6">{period.summary}</p>
                          {/* KPI pills */}
                          <div className="flex flex-col gap-2">
                            {period.kpis.map((k) => (
                              <div key={k.label} className={`${a.bg} border ${a.border} rounded-xl px-4 py-2.5 flex items-center gap-3`}>
                                <div>
                                  <div className={`text-base font-bold ${a.text}`}>{k.value}</div>
                                  <div className="text-[11px] text-muted-foreground">{k.label}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}

            {/* End marker */}
            <div className="relative flex justify-center mt-10">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center"
              >
                <Star className="h-4 w-4 text-primary" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="py-20 bg-card border-t border-border">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium mb-6 text-muted-foreground">
                <Zap className="h-4 w-4" />
                Em constante evolução
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Faça parte desta história
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                O Grupo Starbank segue crescendo. Seja como parceiro estratégico, colaborador ou investidor — há um lugar para você nessa jornada.
              </p>
              <a
                href="https://wa.me/5511939329765" target="blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Falar com um Executivo
                <Rocket className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}