import {
  CalendarDays,
  FileText,
  ScrollText,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export const INSTAGRAM_URL = "https://www.instagram.com/dockter.com.br/";
export const YOUTUBE_URL =
  "https://youtube.com/@dockterflow?si=vcV1o_ipVcquDBCW";
export const CONTACT_EMAIL = "contato@dockter.com.br";

export type FeatureRoute =
  "/agenda-e-plantoes" | "/prontuario" | "/receituario" | "/financeiro";

export const featureNav: {
  href: FeatureRoute;
  title: string;
  desc: string;
  icon: LucideIcon;
  badge?: string;
}[] = [
  {
    href: "/agenda-e-plantoes",
    title: "Agenda e plantões",
    desc: "Consultas, retornos e plantões com horários e locais.",
    icon: CalendarDays,
  },
  {
    href: "/prontuario",
    title: "Prontuário e evolução",
    desc: "Histórico do paciente e evolução em SOAP, SBAR ou seu modelo.",
    icon: FileText,
  },
  {
    href: "/receituario",
    title: "Receituário digital",
    desc: "Templates em um clique e assinatura VIDaaS.",
    icon: ScrollText,
  },
  {
    href: "/financeiro",
    title: "Módulo financeiro",
    desc: "Recebimentos, encontro de contas e indicadores.",
    icon: Wallet,
    badge: "2027",
  },
];

export type PlanItem = { text: string; kind: "ok" | "okStrong" | "addon" };

export type Plan = {
  name: string;
  tag: string;
  monthly: string;
  annual: string;
  equiv: string;
  save: string;
  featured?: boolean;
  items: PlanItem[];
};

const ok = (text: string): PlanItem => ({ text, kind: "ok" });
const okStrong = (text: string): PlanItem => ({ text, kind: "okStrong" });
const addon = (text: string): PlanItem => ({ text, kind: "addon" });

const baseItems = [
  "Agenda de consultas e retornos",
  "Prontuário com SOAP e SBAR",
  "Receituário para todos os tipos de medicamentos",
  "Assinatura digital VIDaaS",
];

export const plans: Plan[] = [
  {
    name: "Dockter Basic",
    tag: "Para o médico que está organizando o consultório.",
    monthly: "69,90",
    annual: "754",
    equiv: "62,83",
    save: "84,80",
    items: [
      ...baseItems.map(ok),
      ok("Até 20 templates de receita"),
      ok("1 modelo de evolução personalizado"),
      ok("Plantões em até 2 locais"),
      ok("Suporte por e-mail"),
      addon("Secretária: + R$ 39,90/mês por acesso"),
      addon(
        "Implantação com migração do histórico: + R$ 497 (pagamento único)",
      ),
    ],
  },
  {
    name: "Dockter Pro",
    tag: "Para o médico com consultório e plantões.",
    monthly: "99,90",
    annual: "1.079",
    equiv: "89,92",
    save: "119,80",
    featured: true,
    items: [
      okStrong("Tudo do Basic, e mais:"),
      ok("Templates de receita ilimitados"),
      ok("Modelos de evolução ilimitados"),
      ok("Plantões ilimitados"),
      ok("Suporte por e-mail e WhatsApp"),
      ok("Financeiro: recebimentos e despesas (2027)"),
      addon("Secretária: + R$ 39,90/mês por acesso"),
      addon(
        "Implantação com migração do histórico: + R$ 497 (pagamento único)",
      ),
    ],
  },
  {
    name: "Dockter Pro+",
    tag: "Para o médico que quer a gestão completa da prática.",
    monthly: "149,90",
    annual: "1.618",
    equiv: "134,83",
    save: "180,80",
    items: [
      okStrong("Tudo do Pro, e mais:"),
      ok("Acesso para secretária ou assistente"),
      ok(
        "Implantação assistida: migração do histórico de pacientes do seu sistema atual (sujeita a análise) e cadastro dos seus templates e modelos",
      ),
      ok("Suporte prioritário"),
      ok("Financeiro completo com encontro de contas e indicadores (2027)"),
    ],
  },
];

export const planChoices = [
  "Ainda não sei",
  "Dockter Basic",
  "Dockter Pro",
  "Dockter Pro+",
] as const;

export type CompareRow = [
  feature: string,
  basic: string,
  pro: string,
  plus: string,
];

export const compareRows: CompareRow[] = [
  ["Agenda de consultas e retornos", "✓", "✓", "✓"],
  ["Prontuário com SOAP e SBAR", "✓", "✓", "✓"],
  ["Receituário para todos os tipos de medicamentos", "✓", "✓", "✓"],
  ["Assinatura digital VIDaaS", "✓", "✓", "✓"],
  ["Templates de receita", "Até 20", "Ilimitados", "Ilimitados"],
  ["Modelos de evolução personalizados", "1", "Ilimitados", "Ilimitados"],
  ["Cadastro de plantões", "Até 2 locais", "Ilimitado", "Ilimitado"],
  [
    "Acesso para secretária ou assistente",
    "+ R$ 39,90/mês",
    "+ R$ 39,90/mês",
    "✓",
  ],
  [
    "Implantação assistida com migração do histórico de pacientes",
    "+ R$ 497 (único)",
    "+ R$ 497 (único)",
    "✓",
  ],
  ["Suporte", "E-mail", "E-mail e WhatsApp", "Prioritário"],
  [
    "Financeiro (previsto para 2027)",
    "—",
    "Recebimentos e despesas",
    "Completo",
  ],
  ["Encontro de contas e indicadores (previsto para 2027)", "—", "—", "✓"],
];

export type Faq = {
  q: string;
  a: string;
  inPlanos?: boolean;
  planosOrder?: number;
  planosA?: string;
};

export const faqs: Faq[] = [
  {
    q: "Como funciona o teste grátis?",
    a: "Você usa a Dockter gratuitamente por 30 dias para conhecer a plataforma na sua rotina. Ao final do período, escolhe o plano que faz mais sentido para você.",
    inPlanos: true,
    planosOrder: 1,
  },
  {
    q: "A Dockter funciona no celular e no computador?",
    a: "Sim. Você pode usar a Dockter no computador e no celular, com as mesmas informações nos dois.",
  },
  {
    q: "O certificado digital para assinar receitas está incluso?",
    a: "Não. O certificado digital é contratado pelo próprio médico. Hoje, o Conselho Federal de Medicina disponibiliza um certificado digital para os médicos. Com ele em mãos, você assina suas receitas na Dockter pelo VIDaaS.",
    inPlanos: true,
    planosOrder: 4,
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "PIX ou cartão de crédito.",
    inPlanos: true,
    planosOrder: 3,
  },
  {
    q: "Posso cancelar a assinatura?",
    a: "Sim. O plano mensal não tem fidelidade: você pode cancelar quando quiser.",
    inPlanos: true,
    planosOrder: 2,
  },
  {
    q: "Vocês trazem os dados do meu sistema atual?",
    a: "Sim. A implantação assistida inclui a migração do histórico de pacientes do seu sistema atual para a Dockter, sujeita a análise. Ela está incluída no Pro+ e custa R$ 497, em pagamento único, nos planos Basic e Pro.",
  },
  {
    q: "Quando chega o módulo financeiro?",
    a: "O módulo financeiro, com recebimentos, despesas, encontro de contas e indicadores, está previsto para 2027.",
    planosA:
      "O módulo financeiro, com recebimentos, despesas, encontro de contas e indicadores, está previsto para 2027. No Pro, entram recebimentos e despesas; no Pro+, o financeiro completo.",
    inPlanos: true,
    planosOrder: 5,
  },
];
