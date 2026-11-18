import {
  ArrowLeftRight,
  BarChart3,
  CalendarDays,
  FileText,
  MapPin,
  ScrollText,
  ShieldCheck,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type Solution = {
  icon: LucideIcon;
  dor: string;
  strong: string;
  rest: string;
  soon?: boolean;
};

export const solutions: Solution[] = [
  {
    icon: CalendarDays,
    dor: "Consultas, retornos e compromissos espalhados entre papel, celular e mensagens.",
    strong: "Agenda",
    rest: " com consultas, retornos e compromissos organizados em um só lugar.",
  },
  {
    icon: FileText,
    dor: "Históricos e informações dos pacientes difíceis de encontrar na hora do atendimento.",
    strong: "Prontuário com evolução",
    rest: " do paciente nos modelos SOAP e SBAR, ou no modelo que você mesmo criar.",
  },
  {
    icon: ScrollText,
    dor: "Digitar a mesma prescrição dezenas de vezes por dia e ainda assinar cada receita.",
    strong: "Receituário com templates",
    rest: " para todos os tipos de medicamentos: a prescrição de rotina entra com um clique e a receita sai assinada digitalmente pelo VIDaaS.",
  },
  {
    icon: MapPin,
    dor: "Plantões em locais e horários diferentes, difíceis de acompanhar junto com o consultório.",
    strong: "Cadastro de plantões",
    rest: " personalizado, com horários e locais, ao lado da sua agenda de consultas.",
  },
  {
    icon: ArrowLeftRight,
    dor: "Pagamentos previstos e pendências difíceis de conferir no fim do mês.",
    strong: "Encontro de contas",
    rest: " para comparar o previsto com o efetivamente recebido e identificar diferenças.",
    soon: true,
  },
  {
    icon: BarChart3,
    dor: "Sem uma visão clara de despesas, faturamento e resultados da própria prática.",
    strong: "Financeiro e indicadores",
    rest: " com valores a receber, despesas, faturamento e desempenho da prática.",
    soon: true,
  },
];

export const launchFeatures: {
  icon: LucideIcon;
  title: string;
  text: string;
  href: string;
}[] = [
  {
    icon: CalendarDays,
    title: "Agenda",
    text: "Consultas, retornos e compromissos organizados.",
    href: "/agenda-e-plantoes",
  },
  {
    icon: MapPin,
    title: "Plantões",
    text: "Cadastro personalizado de plantões, com horários e locais.",
    href: "/agenda-e-plantoes",
  },
  {
    icon: FileText,
    title: "Prontuário e evolução",
    text: "Acompanhamento do paciente com modelos SOAP e SBAR ou o seu próprio modelo.",
    href: "/prontuario",
  },
  {
    icon: ScrollText,
    title: "Receituário",
    text: "Emissão de receitas para todos os tipos de medicamentos.",
    href: "/receituario",
  },
  {
    icon: Zap,
    title: "Templates de receita",
    text: "Medicamentos e receitas salvos para prescrever com um clique.",
    href: "/receituario",
  },
  {
    icon: ShieldCheck,
    title: "Assinatura digital VIDaaS",
    text: "Receitas e documentos assinados digitalmente com o VIDaaS.",
    href: "/receituario",
  },
];

export const soonFeatures: {
  icon: LucideIcon;
  title: string;
  text: string;
}[] = [
  {
    icon: Wallet,
    title: "Financeiro",
    text: "Valores a receber, recebimentos, despesas e resultados.",
  },
  {
    icon: ArrowLeftRight,
    title: "Encontro de contas",
    text: "Comparação entre o previsto e o efetivamente recebido.",
  },
  {
    icon: BarChart3,
    title: "Indicadores",
    text: "Visão sobre faturamento e desempenho da prática.",
  },
];
