import { Building2, Network, Shield, Landmark, Briefcase, Zap, Globe, Cpu, CreditCard, Users, type LucideIcon } from "lucide-react";

export type ServicePillar = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const pillars: ServicePillar[] = [
  {
    id: "baas",
    title: "Banking as a Service (BaaS)",
    description: "Infraestrutura bancária modular para empresas e instituições integrarem serviços financeiros às suas próprias operações.",
    icon: Building2,
  },
  {
    id: "caas",
    title: "Credit as a Service (CaaS)",
    description: "Motor de crédito digital escalável, análise de risco em tempo real e originador de empréstimos integrável via API.",
    icon: CreditCard,
  },
  {
    id: "open-star",
    title: "Open Star",
    description: "Conectividade open banking padronizada, permitindo sincronização segura de dados financeiros e portabilidade de operações.",
    icon: Globe,
  }
];

export const solutions = [
  {
    title: "Crédito Consignado",
    description: "Operações ágeis e seguras de crédito com desconto em folha para servidores públicos, aposentados, pensionistas e funcionários privados, com esteira de aprovação automatizada.",
    features: ["Jornada digital com menor fricção", "Integração com fluxos de convênios", "Gestão operacional centralizada"]
  },
  {
    title: "Plataforma de Gestão de Folha",
    description: "Sistema robusto para municípios e instituições gerenciarem folhas de pagamento, margens consignáveis e integrações com múltiplas instituições financeiras.",
    features: ["Conciliação automatizada", "Auditoria de ponta a ponta", "Conformidade regulatória estrita"]
  },
  {
    title: "Infraestrutura Transacional",
    description: "Camada tecnológica para contas digitais, movimentações, pagamentos e serviços financeiros conectados a uma operação segura e escalável.",
    features: ["Fluxos transacionais digitais", "Camadas de antifraude", "Escalabilidade operacional"]
  }
];

export const differentiators = [
  {
    title: "Segurança Enterprise-Grade",
    description: "Arquitetura orientada a rastreabilidade, controle de acesso, proteção de dados e aderência às boas práticas regulatórias do setor financeiro.",
    icon: Shield
  },
  {
    title: "Integração Seamless",
    description: "Integrações estruturadas para conectar parceiros, canais operacionais e instituições com menor complexidade de implantação.",
    icon: Network
  },
  {
    title: "Estrutura Digital Escalável",
    description: "Modelo tecnológico preparado para ampliar operações, convênios e canais sem comprometer governança, controle e experiência.",
    icon: Zap
  },
  {
    title: "Motor de Decisão Proprietário",
    description: "Camadas de inteligência operacional para análise, validação, acompanhamento de crédito e redução de riscos em jornadas digitais.",
    icon: Cpu
  }
];

export const audiences = [
  {
    title: "Setor Público e Municípios",
    description: "Modernização da gestão financeira governamental, automação de folhas e facilidades de crédito para servidores.",
    icon: Landmark
  },
  {
    title: "Instituições Financeiras e Parceiros",
    description: "Expansão de portfólio através das nossas licenças e infraestrutura as-a-service.",
    icon: Building2
  },
  {
    title: "Empresas Privadas (B2B2C)",
    description: "Embarque serviços financeiros e opções de crédito consignado para funcionários no seu próprio ecossistema.",
    icon: Briefcase
  },
  {
    title: "Canais Operacionais",
    description: "Ferramentas completas para correspondentes bancários e originadores de crédito gerenciarem suas carteiras.",
    icon: Users
  }
];

export const trustMetrics = [
  { value: "Digital", label: "Operação ponta a ponta", description: "Jornadas financeiras com menos etapas manuais" },
  { value: "Seguro", label: "Arquitetura controlada", description: "Rastreabilidade, governança e proteção de dados" },
  { value: "Integrado", label: "Ecossistema conectado", description: "Banco digital, crédito, convênios e canais operacionais" },
  { value: "Escalável", label: "Modelo institucional", description: "Base preparada para parceiros, empresas e setor público" }
];