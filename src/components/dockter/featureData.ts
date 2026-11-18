import {
  ArrowLeftRight,
  BarChart3,
  CalendarDays,
  ClipboardList,
  FilePlus2,
  FileText,
  Files,
  Import,
  Layers,
  MapPin,
  MonitorSmartphone,
  Pill,
  ScrollText,
  ShieldCheck,
  UserRound,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import type { FeatureConfig } from "@/components/dockter/FeaturePage";
import appCelular from "@/assets/photos/app-celular.webp";
import medicoNotebook from "@/assets/photos/medico-notebook.jpg";
import medicoCelular from "@/assets/photos/medico-celular.jpg";
import telaComputador from "@/assets/photos/tela-computador.jpg";

export const agenda: FeatureConfig = {
  slug: "/agenda-e-plantoes",
  breadcrumb: "Agenda e plantões",
  titleStrong: "Consultas, retornos e plantões",
  titleRest: "no mesmo lugar.",
  intro:
    "Organize a agenda do consultório e cadastre seus plantões com horários e locais, para ver toda a sua semana de trabalho de uma vez.",
  image: {
    kind: "phone-circle",
    src: appCelular,
    alt: "Tela inicial do aplicativo Dockter no celular",
  },
  muda: {
    strong: "Sua semana de trabalho,",
    rest: "sem informação espalhada.",
    cards: [
      {
        icon: CalendarDays,
        dor: "Consultas, retornos e compromissos espalhados entre papel, celular e mensagens.",
        strong: "Agenda",
        rest: " com consultas, retornos e compromissos organizados em um só lugar.",
      },
      {
        icon: MapPin,
        dor: "Plantões em locais e horários diferentes, difíceis de acompanhar junto com o consultório.",
        strong: "Cadastro de plantões",
        rest: " personalizado, com horários e locais, ao lado da sua agenda de consultas.",
      },
    ],
  },
  recursos: {
    strong: "Tudo o que a agenda",
    rest: "do médico precisa.",
    intro:
      "Recursos pensados para quem divide a rotina entre consultório e plantões.",
    cards: [
      {
        icon: CalendarDays,
        title: "Consultas e retornos",
        text: "Marque consultas e retornos e veja os próximos atendimentos do dia.",
      },
      {
        icon: MapPin,
        title: "Plantões com horário e local",
        text: "Cadastre cada plantão do seu jeito, com horários e locais de onde serão.",
      },
      {
        icon: UserRound,
        title: "Paciente a um clique",
        text: "Antes do atendimento, consulte as informações do paciente direto da agenda.",
      },
      {
        icon: Users,
        title: "Acesso para secretária",
        text: "Sua secretária ou assistente ajuda a organizar a agenda com um acesso próprio.",
      },
      {
        icon: MonitorSmartphone,
        title: "No computador e no celular",
        text: "Consulte e organize a agenda de onde estiver, com as mesmas informações.",
      },
    ],
  },
  middle: {
    kind: "steps",
    strong: "Do primeiro horário",
    rest: "ao último plantão.",
    steps: [
      {
        title: "Cadastre seus locais de trabalho",
        text: "Registre os locais onde você atende e dá plantão, com os horários de cada um.",
      },
      {
        title: "Organize consultas e retornos",
        text: "Marque os atendimentos do consultório e acompanhe os retornos dos pacientes.",
      },
      {
        title: "Veja tudo junto",
        text: "Consultas e plantões aparecem lado a lado, para você planejar a semana com clareza.",
      },
      {
        title: "Antes do atendimento",
        text: "Abra as informações do paciente direto da agenda e comece a consulta preparado.",
      },
    ],
  },
  planRows: [
    ["Agenda de consultas e retornos", "✓", "✓", "✓"],
    ["Cadastro de plantões", "Até 2 locais", "Ilimitado", "Ilimitado"],
    [
      "Acesso para secretária ou assistente",
      "+ R$ 39,90/mês",
      "+ R$ 39,90/mês",
      "✓",
    ],
  ],
};

export const prontuario: FeatureConfig = {
  slug: "/prontuario",
  breadcrumb: "Prontuário e evolução",
  titleStrong: "O histórico do paciente,",
  titleRest: "do seu jeito.",
  intro:
    "Reúna o histórico e as informações de cada paciente e registre a evolução nos modelos SOAP e SBAR, ou no modelo que você mesmo criar.",
  image: {
    kind: "d-cut",
    src: medicoNotebook,
    alt: "Médico usando a Dockter no notebook",
  },
  muda: {
    strong: "Informação certa",
    rest: "na hora do atendimento.",
    cards: [
      {
        icon: FileText,
        dor: "Históricos e informações dos pacientes difíceis de encontrar na hora do atendimento.",
        strong: "Prontuário",
        rest: " que reúne o histórico e as informações de cada paciente para consultar quando precisar.",
      },
      {
        icon: ClipboardList,
        dor: "Evoluções registradas cada vez de um jeito, difíceis de acompanhar ao longo do tempo.",
        strong: "Modelos de evolução SOAP e SBAR",
        rest: " prontos por padrão, ou o seu próprio modelo, com os campos que fazem sentido para você.",
      },
    ],
  },
  recursos: {
    strong: "Um prontuário",
    rest: "que acompanha a sua prática.",
    intro:
      "Registre, consulte e acompanhe a evolução de cada paciente em um só lugar.",
    cards: [
      {
        icon: Layers,
        title: "Histórico reunido",
        text: "Informações e histórico de cada paciente reunidos para consultar quando precisar.",
      },
      {
        icon: FileText,
        title: "SOAP e SBAR por padrão",
        text: "Registre a evolução nos modelos mais usados, já prontos para usar.",
      },
      {
        icon: FilePlus2,
        title: "Seu próprio modelo",
        text: "Crie modelos de evolução com os campos que fazem sentido para a sua especialidade.",
      },
      {
        icon: ScrollText,
        title: "Receituário integrado",
        text: "Durante o atendimento, registre no prontuário e emita a receita no mesmo fluxo.",
      },
      {
        icon: Import,
        title: "Traga seu histórico",
        text: "Na implantação assistida, migramos o histórico de pacientes do seu sistema atual, sujeito a análise.",
      },
    ],
  },
  middle: {
    kind: "demo",
    strong: "Troque o modelo",
    rest: "e veja os campos.",
    sub: "Alterne entre SOAP, SBAR e um modelo personalizado.",
    demo: "evolucao",
  },
  planRows: [
    ["Prontuário com SOAP e SBAR", "✓", "✓", "✓"],
    ["Modelos de evolução personalizados", "1", "Ilimitados", "Ilimitados"],
    [
      "Implantação assistida com migração do histórico",
      "+ R$ 497 (único)",
      "+ R$ 497 (único)",
      "✓",
    ],
  ],
};

export const receituario: FeatureConfig = {
  slug: "/receituario",
  breadcrumb: "Receituário digital",
  titleStrong: "Receita pronta",
  titleRest: "em um clique.",
  intro:
    "Emita receitas para todos os tipos de medicamentos, use templates para não digitar a mesma prescrição o dia inteiro e assine digitalmente pelo VIDaaS.",
  image: {
    kind: "d-cut",
    src: medicoCelular,
    alt: "Médico usando a Dockter no celular",
  },
  muda: {
    strong: "Menos digitação.",
    rest: "Mais tempo para o paciente.",
    cards: [
      {
        icon: Zap,
        dor: "Digitar a mesma prescrição dezenas de vezes por dia, como dipirona 500 mg de 6 em 6 horas.",
        strong: "Templates de receita",
        rest: " com seus medicamentos e receitas salvos: a prescrição de rotina entra com um clique.",
      },
      {
        icon: ShieldCheck,
        dor: "Imprimir, assinar e organizar cada receita à mão.",
        strong: "Assinatura digital pelo VIDaaS",
        rest: ", com receitas emitidas para todos os tipos de medicamentos.",
      },
    ],
  },
  recursos: {
    strong: "Tudo para prescrever",
    rest: "com agilidade.",
    intro: "Do medicamento salvo à receita assinada, sem retrabalho.",
    cards: [
      {
        icon: Pill,
        title: "Todos os tipos de medicamentos",
        text: "Emita receitas para todos os tipos de medicamentos em um só lugar.",
      },
      {
        icon: Zap,
        title: "Templates de medicamentos",
        text: "Salve medicamentos com dose e posologia e adicione à receita com um clique.",
      },
      {
        icon: Files,
        title: "Templates de receitas",
        text: "Monte receitas completas que você usa com frequência e reutilize sempre que precisar.",
      },
      {
        icon: ShieldCheck,
        title: "Assinatura digital VIDaaS",
        text: "Assine suas receitas digitalmente pelo VIDaaS, sem papel.",
      },
      {
        icon: FileText,
        title: "Integrado ao prontuário",
        text: "Prescreva durante o atendimento, junto com o registro no prontuário.",
      },
    ],
    aviso:
      "O certificado digital é contratado pelo próprio médico. Hoje, o Conselho Federal de Medicina disponibiliza um certificado digital para os médicos.",
  },
  middle: {
    kind: "demo",
    strong: "Clique e veja",
    rest: "a receita se montar.",
    sub: "Escolha um medicamento salvo e ele entra na receita na hora.",
    demo: "receita",
  },
  planRows: [
    ["Receituário para todos os tipos de medicamentos", "✓", "✓", "✓"],
    ["Assinatura digital VIDaaS", "✓", "✓", "✓"],
    ["Templates de receita", "Até 20", "Ilimitados", "Ilimitados"],
  ],
};

export const financeiro: FeatureConfig = {
  slug: "/financeiro",
  breadcrumb: "Módulo financeiro",
  selo: "Previsto para 2027",
  titleStrong: "Clareza sobre o que",
  titleRest: "você tem a receber.",
  intro:
    "Acompanhe valores a receber, recebimentos, despesas e resultados, e compare o previsto com o que efetivamente entrou.",
  secondaryLabel: "Quero ser avisado",
  image: {
    kind: "browser",
    src: telaComputador,
    alt: "Tela do módulo financeiro da Dockter no computador",
  },
  muda: {
    strong: "Pagamentos e resultados",
    rest: "sem adivinhação.",
    cards: [
      {
        icon: ArrowLeftRight,
        dor: "Pagamentos previstos e pendências difíceis de conferir no fim do mês.",
        strong: "Encontro de contas",
        rest: " para comparar o previsto com o efetivamente recebido e identificar diferenças.",
      },
      {
        icon: BarChart3,
        dor: "Sem uma visão clara de despesas, faturamento e resultados da própria prática.",
        strong: "Financeiro e indicadores",
        rest: " com valores a receber, despesas, faturamento e desempenho da prática.",
      },
    ],
  },
  recursos: {
    strong: "O que chega",
    rest: "com o módulo financeiro.",
    intro: "Recursos previstos para a atualização de 2027.",
    cards: [
      {
        icon: Wallet,
        title: "Financeiro",
        text: "Valores a receber, recebimentos, despesas e resultados.",
      },
      {
        icon: ArrowLeftRight,
        title: "Encontro de contas",
        text: "Previsto: o que você espera receber. Recebido: o que foi pago. A conferir: as diferenças entre os dois.",
      },
      {
        icon: BarChart3,
        title: "Indicadores",
        text: "Visão sobre faturamento e desempenho da sua prática.",
      },
    ],
  },
  middle: {
    kind: "steps",
    strong: "Do atendimento",
    rest: "ao resultado do mês.",
    steps: [
      {
        title: "Depois do atendimento",
        text: "Acompanhe o que está previsto para receber de cada atendimento.",
      },
      {
        title: "Na conferência",
        text: "Compare o previsto com o recebido e veja o que precisa de atenção.",
      },
      {
        title: "Na visão do período",
        text: "Observe despesas, faturamento e resultados da sua prática.",
      },
    ],
  },
  planRows: [
    ["Recebimentos e despesas", "—", "✓", "✓"],
    ["Encontro de contas", "—", "—", "✓"],
    ["Indicadores", "—", "—", "✓"],
  ],
};
