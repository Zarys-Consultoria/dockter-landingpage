import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { SiteHeader } from "@/components/dockter/SiteHeader";
import { SiteFooter } from "@/components/dockter/SiteFooter";
import { Reveal } from "@/components/dockter/Reveal";
import { CTA, Eyebrow, Arc, LearnMore } from "@/components/dockter/ui";
import { ReceitaDemo, EvolucaoDemo } from "@/components/dockter/demos";
import { PlanosShowcase } from "@/components/dockter/PlanosShowcase";
import { FaqSection } from "@/components/dockter/FaqSection";
import { ContactSection } from "@/components/dockter/ContactSection";
import {
  solutions,
  launchFeatures,
  soonFeatures,
} from "@/components/dockter/homeData";
import heroMedica from "@/assets/photos/hero-medica-notebook.png";
import appCelular from "@/assets/photos/app-celular.webp";
import medicoNotebook from "@/assets/photos/medico-notebook.jpg";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section
        id="inicio"
        className="relative overflow-hidden bg-brand text-cloud"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-6 -top-10 select-none font-display text-[clamp(160px,24vw,360px)] font-bold leading-none tracking-[-0.04em] text-brand-deep"
        >
          Dockter
        </div>
        <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-center gap-12 px-6 pb-24 pt-20">
          <Reveal className="flex min-w-0 flex-1 basis-[440px] flex-col gap-[26px]">
            <h1 className="text-[clamp(38px,5vw,60px)] font-bold leading-[1.08] tracking-[-0.02em]">
              A gestão da vida profissional do médico{" "}
              <span className="text-ice">em um só lugar.</span>
            </h1>
            <p className="max-w-[500px] text-[19px] leading-relaxed text-cloud">
              Agenda, plantões, prontuário e receituário com assinatura digital,
              conectados para você acompanhar a sua prática médica com clareza.
            </p>
            <div className="flex flex-wrap gap-3 pt-1.5">
              <CTA href="#planos" variant="light">
                Teste grátis por 30 dias
              </CTA>
              <CTA href="#contato" variant="outlineLight">
                Converse com a nossa equipe
              </CTA>
            </div>
          </Reveal>
          <Reveal
            delay={150}
            className="relative min-w-0 flex-1 basis-[560px] pr-[9%]"
          >
            <Image
              src={heroMedica}
              alt="Médica sorrindo com um notebook aberto na página da Dockter"
              priority
              className="ml-auto block h-auto w-full max-w-[600px]"
            />
            <Image
              src={appCelular}
              alt="Tela inicial do aplicativo Dockter no celular"
              className="absolute bottom-[4%] right-0 h-auto w-1/4 min-w-[90px] max-w-[160px]"
            />
          </Reveal>
        </div>
      </section>

      <section id="solucoes" className="bg-cloud">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-6 py-28">
          <div className="flex flex-wrap items-center gap-12">
            <Reveal className="flex min-w-0 flex-1 basis-[480px] flex-col gap-[18px]">
              <Eyebrow>Soluções</Eyebrow>
              <h2 className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.12] tracking-[-0.015em]">
                O trabalho continua{" "}
                <span className="text-brand">além da consulta.</span>
              </h2>
              <p className="max-w-[520px] text-lg leading-relaxed text-muted">
                Acompanhar cada etapa fica mais difícil quando as informações
                estão espalhadas. Veja como a Dockter resolve cada uma delas.
              </p>
            </Reveal>
            <Reveal
              delay={120}
              className="flex min-w-0 flex-1 basis-[400px] justify-center"
            >
              <Image
                src={medicoNotebook}
                alt="Médico sorrindo enquanto usa a Dockter no notebook"
                className="d-cut aspect-[5/4] w-full max-w-[500px] object-cover"
              />
            </Reveal>
          </div>

          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,500px),1fr))]">
            {solutions.map((s, i) => (
              <Reveal
                key={s.dor}
                as="article"
                delay={(i % 2) * 90}
                className="hover-lift group flex flex-col gap-[22px] rounded-3xl border border-ice bg-white p-8 hover:border-brand/40"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-muted">
                    A dor
                  </span>
                  <p className="font-display text-xl font-semibold leading-[1.4]">
                    {s.dor}
                  </p>
                </div>
                <div className="h-px bg-ice" />
                <div className="flex items-start gap-4">
                  <span
                    className={`flex h-12 w-12 flex-none items-center justify-center rounded-[14px] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${
                      s.soon ? "bg-ice text-brand" : "bg-brand text-cloud"
                    }`}
                  >
                    <s.icon size={22} strokeWidth={2} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="flex flex-wrap items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-brand">
                      A solução Dockter
                      {s.soon && (
                        <span className="rounded-full bg-ice px-2.5 py-[3px] tracking-[0.04em] text-ink">
                          Em breve
                        </span>
                      )}
                    </span>
                    <p className="text-[17px] leading-relaxed text-muted">
                      <strong className="font-semibold text-ink">
                        {s.strong}
                      </strong>
                      {s.rest}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="funcionalidades"
        className="relative overflow-hidden bg-ink text-cloud"
      >
        <Arc className="-right-[220px] -top-[220px]" corners="br" />
        <div className="relative mx-auto flex max-w-[1200px] flex-col gap-13 px-6 py-28">
          <Reveal className="flex max-w-[720px] flex-col gap-[18px]">
            <Eyebrow tone="onDark">Funcionalidades</Eyebrow>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.12] tracking-[-0.015em]">
              Sua prática médica{" "}
              <span className="text-ice">em uma plataforma.</span>
            </h2>
            <p className="text-lg leading-relaxed text-ice">
              Recursos que acompanham a organização e o atendimento desde o
              lançamento, com a gestão financeira chegando em seguida.
            </p>
          </Reveal>

          <div className="flex flex-wrap items-center gap-14">
            <div className="flex min-w-0 flex-1 basis-[580px] flex-col gap-10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2.5 text-[15px] font-semibold">
                  <span className="h-2.5 w-2.5 rounded-full bg-cloud" />
                  Disponível no lançamento
                </div>
                <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(190px,1fr))]">
                  {launchFeatures.map((f, i) => (
                    <Reveal
                      key={f.title}
                      as="article"
                      delay={(i % 3) * 80}
                      className="hover-lift group flex flex-col gap-3 rounded-[22px] bg-cloud p-[26px] text-ink"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-brand text-cloud transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                        <f.icon size={22} strokeWidth={2} />
                      </span>
                      <h3 className="text-xl font-bold">{f.title}</h3>
                      <p className="text-base leading-relaxed text-muted">
                        {f.text}
                      </p>
                      <LearnMore href={f.href} />
                    </Reveal>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2.5 text-[15px] font-semibold">
                  <span className="h-2.5 w-2.5 rounded-full border-2 border-ice" />
                  Em breve: módulo financeiro, previsto para 2027
                </div>
                <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(190px,1fr))]">
                  {soonFeatures.map((f, i) => (
                    <Reveal
                      key={f.title}
                      as="article"
                      delay={i * 80}
                      className="group flex flex-col gap-3 rounded-[22px] border-[1.5px] border-dashed border-muted p-[26px] transition-colors duration-300 hover:border-ice"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-[14px] border-[1.5px] border-brand text-ice transition-transform duration-300 group-hover:scale-110">
                        <f.icon size={22} strokeWidth={2} />
                      </span>
                      <h3 className="text-xl font-bold">{f.title}</h3>
                      <p className="text-base leading-relaxed text-ice">
                        {f.text}
                      </p>
                      <LearnMore href="/financeiro" tone="ice" />
                    </Reveal>
                  ))}
                </div>
                <Reveal
                  as="div"
                  className="flex items-start gap-3.5 rounded-[18px] bg-brand px-5 py-[18px] text-base leading-relaxed text-cloud"
                >
                  <Clock
                    size={22}
                    strokeWidth={2}
                    className="mt-px flex-none"
                  />
                  <span>
                    O módulo financeiro não faz parte do lançamento: ele chega
                    em uma{" "}
                    <strong className="font-semibold">
                      atualização prevista para 2027
                    </strong>
                    , com o encontro de contas, o controle de recebimentos e
                    despesas e os indicadores da sua prática.
                  </span>
                </Reveal>
              </div>
            </div>

            <Reveal
              delay={120}
              className="relative flex min-w-0 flex-1 basis-[300px] justify-center"
            >
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand"
              />
              <Image
                src={appCelular}
                alt="Tela inicial do aplicativo Dockter no celular"
                className="relative h-auto w-full max-w-[290px]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="destaques" className="bg-ice">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-28">
          <Reveal className="flex max-w-[720px] flex-col gap-[18px]">
            <Eyebrow>Na prática</Eyebrow>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.12] tracking-[-0.015em]">
              Menos digitação.{" "}
              <span className="text-brand">Mais tempo para o paciente.</span>
            </h2>
            <p className="text-lg leading-relaxed text-ink">
              Experimente: clique em um medicamento salvo e veja a receita se
              montar, ou troque o modelo de evolução.
            </p>
          </Reveal>
          <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,480px),1fr))]">
            <Reveal as="div">
              <ReceitaDemo />
            </Reveal>
            <Reveal as="div" delay={120}>
              <EvolucaoDemo />
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="planos"
        className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-6 py-28"
      >
        <Reveal className="flex max-w-[680px] flex-col items-center gap-[18px] text-center">
          <Eyebrow className="justify-center">Planos de assinatura</Eyebrow>
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.12] tracking-[-0.015em]">
            Escolha o plano{" "}
            <span className="text-brand">para a sua prática.</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            Teste grátis por 30 dias. Depois, assine mensalmente ou economize no
            plano anual.
          </p>
        </Reveal>

        <Reveal as="div" className="w-full">
          <PlanosShowcase />
        </Reveal>

        <Reveal
          as="div"
          className="flex flex-col items-center gap-3.5 text-center"
        >
          <CTA href="/planos" variant="ice" icon={ArrowRight}>
            Compare os planos em detalhes
          </CTA>
          <p className="text-[15px] text-muted">
            30 dias grátis · PIX ou cartão de crédito · Plano mensal sem
            fidelidade
          </p>
        </Reveal>
      </section>

      <FaqSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
