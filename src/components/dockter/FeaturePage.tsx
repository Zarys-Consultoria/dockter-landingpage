import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { SiteHeader } from "@/components/dockter/SiteHeader";
import { SiteFooter } from "@/components/dockter/SiteFooter";
import { ContactSection } from "@/components/dockter/ContactSection";
import { Reveal } from "@/components/dockter/Reveal";
import { CTA, Eyebrow, Arc } from "@/components/dockter/ui";
import { ReceitaDemo, EvolucaoDemo } from "@/components/dockter/demos";
import { featureNav, type FeatureRoute } from "@/components/dockter/data";

export type MudaCard = {
  icon: LucideIcon;
  dor: string;
  strong: string;
  rest: string;
};

export type RecursoCard = { icon: LucideIcon; title: string; text: string };

export type FeatureConfig = {
  slug: FeatureRoute;
  breadcrumb: string;
  selo?: string;
  titleStrong: string;
  titleRest: string;
  intro: string;
  secondaryLabel?: string;
  image: {
    kind: "phone-circle" | "d-cut" | "browser";
    src: StaticImageData;
    alt: string;
  };
  muda: { strong: string; rest: string; cards: MudaCard[] };
  recursos: {
    strong: string;
    rest: string;
    intro: string;
    cards: RecursoCard[];
    aviso?: string;
  };
  middle:
    | {
        kind: "steps";
        strong: string;
        rest: string;
        steps: { title: string; text: string }[];
      }
    | {
        kind: "demo";
        strong: string;
        rest: string;
        sub: string;
        demo: "receita" | "evolucao";
      };
  planRows: [string, string, string, string][];
};

function TopImage({ image }: { image: FeatureConfig["image"] }) {
  if (image.kind === "phone-circle") {
    return (
      <div className="relative flex min-w-0 flex-1 basis-[420px] justify-center">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-deep"
        />
        <Image
          src={image.src}
          alt={image.alt}
          priority
          className="relative h-auto w-full max-w-[280px]"
        />
      </div>
    );
  }
  if (image.kind === "browser") {
    return (
      <div className="flex min-w-0 flex-1 basis-[480px] justify-center">
        <div className="w-full max-w-[560px] overflow-hidden rounded-[18px] border border-cloud/20 bg-white shadow-[0_22px_50px_-28px_rgba(10,20,45,0.6)]">
          <div className="flex items-center gap-1.5 bg-ice px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#c7d4ef]" />
            <span className="h-3 w-3 rounded-full bg-[#c7d4ef]" />
            <span className="h-3 w-3 rounded-full bg-[#c7d4ef]" />
          </div>
          <Image
            src={image.src}
            alt={image.alt}
            priority
            className="block h-auto w-full"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex min-w-0 flex-1 basis-[420px] justify-center">
      <Image
        src={image.src}
        alt={image.alt}
        priority
        className="d-cut aspect-[5/4] w-full max-w-[500px] border-4 border-cloud/30 object-cover"
      />
    </div>
  );
}

export function FeaturePage({ config }: { config: FeatureConfig }) {
  const others = featureNav.filter((f) => f.href !== config.slug);

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
        <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-center gap-12 px-6 pb-[88px] pt-16">
          <Reveal className="flex min-w-0 flex-1 basis-[460px] flex-col gap-[22px]">
            <nav
              aria-label="Você está em"
              className="flex flex-wrap items-center gap-2 text-[15px] text-ice"
            >
              <Link href="/" className="text-ice hover:text-cloud">
                Início
              </Link>
              <span aria-hidden="true">›</span>
              <span>Funcionalidades</span>
              <span aria-hidden="true">›</span>
              <span className="font-semibold text-cloud">
                {config.breadcrumb}
              </span>
            </nav>
            {config.selo && (
              <span className="w-fit rounded-full bg-cloud/15 px-3.5 py-1.5 text-[13px] font-semibold text-cloud">
                {config.selo}
              </span>
            )}
            <h1 className="text-[clamp(38px,5vw,58px)] font-bold leading-[1.08] tracking-[-0.02em]">
              {config.titleStrong}{" "}
              <span className="text-ice">{config.titleRest}</span>
            </h1>
            <p className="max-w-[540px] text-[19px] leading-relaxed">
              {config.intro}
            </p>
            <div className="flex flex-wrap gap-3 pt-1.5">
              <CTA href="/planos" variant="light">
                Teste grátis por 30 dias
              </CTA>
              <CTA href="#contato" variant="outlineLight">
                {config.secondaryLabel ?? "Converse com a nossa equipe"}
              </CTA>
            </div>
          </Reveal>
          <Reveal delay={150} className="flex min-w-0 flex-1 basis-[420px]">
            <TopImage image={config.image} />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1200px] flex-col gap-11 px-6 py-[104px]">
        <Reveal className="flex max-w-[720px] flex-col gap-[18px]">
          <Eyebrow>O que muda na sua rotina</Eyebrow>
          <h2 className="text-[clamp(32px,4vw,46px)] font-bold leading-[1.12] tracking-[-0.015em]">
            {config.muda.strong}{" "}
            <span className="text-brand">{config.muda.rest}</span>
          </h2>
        </Reveal>
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,500px),1fr))]">
          {config.muda.cards.map((c, i) => (
            <Reveal
              key={c.dor}
              as="article"
              delay={(i % 2) * 90}
              className="hover-lift group flex flex-col gap-[22px] rounded-3xl border border-ice bg-white p-8 hover:border-brand/40"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-muted">
                  A dor
                </span>
                <p className="font-display text-xl font-semibold leading-[1.4]">
                  {c.dor}
                </p>
              </div>
              <div className="h-px bg-ice" />
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-[14px] bg-brand text-cloud transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <c.icon size={22} strokeWidth={2} />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-brand">
                    A solução Dockter
                  </span>
                  <p className="text-[17px] leading-relaxed text-muted">
                    <strong className="font-semibold text-ink">
                      {c.strong}
                    </strong>
                    {c.rest}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-cloud">
        <Arc
          className="-bottom-[240px] -left-[200px]"
          size={520}
          border={60}
          corners="bl"
        />
        <div className="relative mx-auto flex max-w-[1200px] flex-col gap-11 px-6 py-[104px]">
          <Reveal className="flex max-w-[720px] flex-col gap-[18px]">
            <Eyebrow tone="onDark">Recursos</Eyebrow>
            <h2 className="text-[clamp(32px,4vw,46px)] font-bold leading-[1.12] tracking-[-0.015em]">
              {config.recursos.strong}{" "}
              <span className="text-ice">{config.recursos.rest}</span>
            </h2>
            <p className="text-lg leading-relaxed text-ice">
              {config.recursos.intro}
            </p>
          </Reveal>
          <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr))]">
            {config.recursos.cards.map((c, i) => (
              <Reveal
                key={c.title}
                as="article"
                delay={(i % 3) * 80}
                className="hover-lift group flex flex-col gap-3 rounded-[22px] bg-cloud p-[26px] text-ink"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-brand text-cloud transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <c.icon size={22} strokeWidth={2} />
                </span>
                <h3 className="text-xl font-bold">{c.title}</h3>
                <p className="text-base leading-relaxed text-muted">{c.text}</p>
              </Reveal>
            ))}
          </div>
          {config.recursos.aviso && (
            <Reveal
              as="div"
              className="flex items-start gap-3.5 rounded-[18px] bg-brand px-5 py-[18px] text-base leading-relaxed text-cloud"
            >
              <ShieldInfo />
              <span>{config.recursos.aviso}</span>
            </Reveal>
          )}
        </div>
      </section>

      {config.middle.kind === "steps" ? (
        <section className="mx-auto flex max-w-[1000px] flex-col gap-8 px-6 py-[104px]">
          <Reveal className="flex flex-col gap-[18px]">
            <Eyebrow>Como funciona</Eyebrow>
            <h2 className="text-[clamp(32px,4vw,46px)] font-bold leading-[1.12] tracking-[-0.015em]">
              {config.middle.strong}{" "}
              <span className="text-brand">{config.middle.rest}</span>
            </h2>
          </Reveal>
          <ol className="flex flex-col">
            {config.middle.steps.map((step, i) => (
              <Reveal
                key={step.title}
                as="li"
                delay={i * 70}
                className="flex items-start gap-5 border-t border-ice py-[22px]"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-cloud">
                  {i + 1}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-[17px] leading-relaxed text-muted">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>
      ) : (
        <section className="bg-ice">
          <div className="mx-auto flex max-w-[1000px] flex-col gap-10 px-6 py-[104px]">
            <Reveal className="flex max-w-[640px] flex-col gap-[18px]">
              <Eyebrow>Experimente</Eyebrow>
              <h2 className="text-[clamp(32px,4vw,46px)] font-bold leading-[1.12] tracking-[-0.015em]">
                {config.middle.strong}{" "}
                <span className="text-brand">{config.middle.rest}</span>
              </h2>
              <p className="text-lg leading-relaxed text-ink">
                {config.middle.sub}
              </p>
            </Reveal>
            <Reveal as="div">
              {config.middle.demo === "receita" ? (
                <ReceitaDemo />
              ) : (
                <EvolucaoDemo />
              )}
            </Reveal>
          </div>
        </section>
      )}

      <section className="border-t border-ice bg-white">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-7 px-6 py-24">
          <Reveal className="text-center">
            <h2 className="text-[clamp(30px,4vw,42px)] font-bold leading-[1.12] tracking-[-0.015em]">
              Em cada <span className="text-brand">plano.</span>
            </h2>
          </Reveal>
          <Reveal
            as="div"
            className="w-full overflow-x-auto rounded-3xl border border-ice"
          >
            <table className="w-full min-w-[640px] border-collapse text-[15px]">
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
                {config.planRows.map(([label, basic, pro, plus], i) => (
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
                    <td className="px-4 py-[15px] text-center text-muted">
                      {basic}
                    </td>
                    <td className="px-4 py-[15px] text-center text-muted">
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
            <CTA href="/planos" variant="primary" icon={ArrowRight}>
              Ver planos e preços
            </CTA>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1200px] flex-col gap-7 px-6 pb-[104px] pt-[88px]">
        <Reveal>
          <h2 className="text-[clamp(28px,3vw,36px)] font-bold">
            Conheça também.
          </h2>
        </Reveal>
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
          {others.map((f, i) => (
            <Reveal key={f.href} as="div" delay={i * 70}>
              <Link
                href={f.href}
                className="group flex items-center gap-4 rounded-[20px] border border-ice bg-white px-6 py-[22px] transition-colors duration-300 hover:border-brand/40"
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-[14px] bg-ice text-brand transition-transform duration-300 group-hover:scale-110">
                  <f.icon size={22} strokeWidth={2} />
                </span>
                <span className="flex flex-1 flex-wrap items-center gap-2 font-display text-lg font-bold text-ink">
                  {f.title}
                  {f.badge && (
                    <span className="rounded-full bg-ice px-2.5 py-[3px] text-xs font-semibold">
                      {f.badge}
                    </span>
                  )}
                </span>
                <ArrowRight
                  size={20}
                  strokeWidth={2.5}
                  className="flex-none text-brand transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}

function ShieldInfo() {
  return (
    <svg
      aria-hidden="true"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-px flex-none"
    >
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  );
}
