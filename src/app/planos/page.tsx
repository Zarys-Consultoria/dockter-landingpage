import type { Metadata } from "next";
import Link from "next/link";
import { Clock, CreditCard, Unlock, type LucideIcon } from "lucide-react";
import { SiteHeader } from "@/components/dockter/SiteHeader";
import { SiteFooter } from "@/components/dockter/SiteFooter";
import { ContactSection } from "@/components/dockter/ContactSection";
import { FaqSection } from "@/components/dockter/FaqSection";
import { PlanosShowcase } from "@/components/dockter/PlanosShowcase";
import { Reveal } from "@/components/dockter/Reveal";
import { Eyebrow, Arc } from "@/components/dockter/ui";
import { compareRows } from "@/components/dockter/data";

export const metadata: Metadata = {
  title: "Planos e preços",
  description:
    "Compare os planos Dockter Basic, Pro e Pro+, veja os adicionais e as condições de pagamento. Teste grátis por 30 dias.",
  alternates: { canonical: "/planos/" },
};

const addons = [
  {
    title: "Acesso para secretária ou assistente",
    text: "Sua secretária ou assistente acessa a agenda e ajuda a organizar os atendimentos, com um acesso próprio.",
    price: "R$ 39,90",
    unit: "/mês por acesso",
  },
  {
    title: "Implantação assistida",
    text: "Nossa equipe migra o histórico de pacientes do seu sistema atual para a Dockter, sujeito a análise, e cadastra seus templates de receita e modelos de evolução.",
    price: "R$ 497",
    unit: "pagamento único",
  },
];

const conditions: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Clock,
    title: "30 dias grátis",
    text: "Teste a Dockter na sua rotina antes de escolher o plano.",
  },
  {
    icon: CreditCard,
    title: "PIX ou cartão de crédito",
    text: "Escolha a forma de pagamento que preferir.",
  },
  {
    icon: Unlock,
    title: "Mensal sem fidelidade",
    text: "Cancele quando quiser.",
  },
];

function isCheck(value: string) {
  return value === "✓";
}

export default function PlanosPage() {
  return (
    <main>
      <SiteHeader />

      <section className="relative overflow-hidden bg-brand text-cloud">
        <Arc
          className="-right-[140px] -top-[180px]"
          size={520}
          border={52}
          color="var(--color-brand-deep)"
          corners="tr"
        />
        <div className="relative mx-auto flex max-w-[1200px] flex-col gap-[22px] px-6 pb-[88px] pt-16">
          <Reveal className="flex max-w-[760px] flex-col gap-[22px]">
            <nav
              aria-label="Você está em"
              className="flex flex-wrap items-center gap-2 text-[15px] text-ice"
            >
              <Link href="/" className="text-ice hover:text-cloud">
                Início
              </Link>
              <span aria-hidden="true">›</span>
              <span className="font-semibold text-cloud">Planos</span>
            </nav>
            <h1 className="text-[clamp(38px,5vw,58px)] font-bold leading-[1.08] tracking-[-0.02em]">
              Planos e preços.{" "}
              <span className="text-ice">Comece com 30 dias grátis.</span>
            </h1>
            <p className="max-w-[560px] text-[19px] leading-relaxed">
              Compare os recursos de cada plano, veja os adicionais e as
              condições de pagamento antes de escolher.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        id="planos"
        className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-6 py-24"
      >
        <Reveal className="flex max-w-[680px] flex-col items-center gap-[18px] text-center">
          <Eyebrow className="justify-center">Planos de assinatura</Eyebrow>
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.12] tracking-[-0.015em]">
            Escolha o plano{" "}
            <span className="text-brand">para a sua prática.</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            Assine mensalmente ou economize cerca de 10% no plano anual.
          </p>
        </Reveal>
        <Reveal as="div" className="w-full">
          <PlanosShowcase />
        </Reveal>
      </section>

      <section className="bg-cloud">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-24">
          <Reveal className="flex max-w-[720px] flex-col gap-[18px]">
            <Eyebrow>Adicionais</Eyebrow>
            <h2 className="text-[clamp(30px,4vw,42px)] font-bold leading-[1.12] tracking-[-0.015em]">
              Adicionais para os planos Basic e Pro.{" "}
              <span className="text-brand">
                No Pro+, os dois já estão incluídos.
              </span>
            </h2>
          </Reveal>
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))]">
            {addons.map((a, i) => (
              <Reveal
                key={a.title}
                as="article"
                delay={(i % 2) * 90}
                className="hover-lift flex flex-col gap-4 rounded-3xl border border-ice bg-white p-8 hover:border-brand/40"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-display text-[22px] font-bold">
                    {a.title}
                  </h3>
                  <span className="rounded-full bg-ice px-3 py-1 text-[13px] font-semibold text-ink">
                    Incluído no Pro+
                  </span>
                </div>
                <p className="text-[17px] leading-relaxed text-muted">
                  {a.text}
                </p>
                <p className="mt-auto flex items-baseline gap-2 font-display">
                  <span className="text-[32px] font-bold">{a.price}</span>
                  <span className="text-[15px] font-medium text-muted">
                    {a.unit}
                  </span>
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
          {conditions.map((c, i) => (
            <Reveal
              key={c.title}
              as="div"
              delay={i * 70}
              className="flex items-start gap-4 rounded-[22px] border border-ice bg-white p-7"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-[14px] bg-brand text-cloud">
                <c.icon size={22} strokeWidth={2} />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold">{c.title}</h3>
                <p className="text-base leading-relaxed text-muted">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-ice bg-white">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-8 px-6 py-24">
          <Reveal className="text-center">
            <h2 className="text-[clamp(32px,4vw,46px)] font-bold leading-[1.12] tracking-[-0.015em]">
              Compare os <span className="text-brand">planos.</span>
            </h2>
          </Reveal>
          <Reveal
            as="div"
            className="w-full overflow-x-auto rounded-3xl border border-ice"
          >
            <table className="w-full min-w-[680px] border-collapse text-[15px]">
              <thead>
                <tr className="bg-ink font-display text-cloud">
                  <th
                    scope="col"
                    className="px-6 py-[18px] text-left font-semibold"
                  >
                    Recurso
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-[18px] text-center font-bold"
                  >
                    Basic
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-[18px] text-center font-bold"
                  >
                    Pro
                  </th>
                  <th
                    scope="col"
                    className="bg-brand px-4 py-[18px] text-center font-bold"
                  >
                    Pro+
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(([label, basic, pro, plus], i) => (
                  <tr
                    key={label}
                    className={`border-t border-ice ${i % 2 ? "bg-[#fbfcfe]" : ""}`}
                  >
                    <th
                      scope="row"
                      className="px-6 py-[15px] text-left font-medium text-ink"
                    >
                      {label}
                    </th>
                    <td
                      className={`px-4 py-[15px] text-center ${isCheck(basic) ? "text-brand" : "text-muted"}`}
                    >
                      {basic}
                    </td>
                    <td
                      className={`px-4 py-[15px] text-center ${isCheck(pro) ? "text-brand" : "text-muted"}`}
                    >
                      {pro}
                    </td>
                    <td className="bg-cloud px-4 py-[15px] text-center font-semibold text-ink">
                      {plus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <Reveal as="div">
            <p className="max-w-[820px] text-center text-[15px] leading-relaxed text-muted">
              Valores em reais. Pagamento por PIX ou cartão de crédito. Plano
              mensal sem fidelidade. Acesso para secretária e implantação
              assistida estão incluídos no Pro+; nos planos Basic e Pro, custam
              R$ 39,90/mês por acesso de secretária e R$ 497 em pagamento único
              pela implantação. A migração do histórico de pacientes está
              sujeita a análise do sistema atual. Módulo financeiro previsto
              para 2027.
            </p>
          </Reveal>
        </div>
      </section>

      <FaqSection
        eyebrow="Dúvidas frequentes"
        heading="Dúvidas sobre "
        highlight="os planos."
        intro="As perguntas mais comuns sobre planos, pagamento e condições."
        onlyPlanos
      />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
