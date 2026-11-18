"use client";

import { useEffect, useState } from "react";
import { Check, Mail } from "lucide-react";
import { Eyebrow } from "@/components/dockter/ui";
import { Reveal } from "@/components/dockter/Reveal";
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  planChoices,
} from "@/components/dockter/data";
import {
  InstagramGlyph,
  YoutubeGlyph,
} from "@/components/dockter/SocialGlyphs";
import { SELECT_PLAN_EVENT } from "@/components/dockter/PlanosShowcase";

const fieldClass =
  "rounded-xl border-[1.5px] border-ice bg-white px-3.5 py-3 text-base text-ink";
const labelClass = "flex flex-col gap-1.5 text-sm font-semibold";

export function ContactSection() {
  const [plan, setPlan] = useState<string>(planChoices[0]);
  const [consent, setConsent] = useState(false);
  const [consentErr, setConsentErr] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    function onSelect(e: Event) {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) setPlan(detail);
    }
    window.addEventListener(SELECT_PLAN_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_PLAN_EVENT, onSelect);
  }, []);

  function send(form: HTMLFormElement) {
    if (!consent) {
      setConsentErr(true);
      return;
    }
    setConsentErr(false);
    const data = new FormData(form);
    const nome = data.get("nome") ?? "";
    const especialidade = data.get("especialidade") ?? "";
    const email = data.get("email") ?? "";
    const telefone = data.get("telefone") ?? "";
    const mensagem = data.get("mensagem") ?? "";
    const body = [
      `Nome: ${nome}`,
      `Especialidade: ${especialidade}`,
      `E-mail: ${email}`,
      `WhatsApp: ${telefone}`,
      `Plano de interesse: ${plan}`,
      "",
      mensagem,
    ].join("\n");
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Contato Dockter — ${nome}`)}&body=${encodeURIComponent(body)}`;
    window.open(mailto, "_blank");
    setSent(true);
  }

  function reset() {
    setSent(false);
    setConsent(false);
    setPlan(planChoices[0]);
  }

  return (
    <section id="contato" className="bg-ink text-cloud">
      <div className="mx-auto max-w-[1200px] px-6 pb-24 pt-28">
        <div className="relative overflow-hidden rounded-[32px] bg-brand">
          <div
            aria-hidden="true"
            className="absolute -right-[120px] -top-10 -bottom-10 w-[640px] rounded-l-full bg-[#2b4cc4]"
          />
          <div
            aria-hidden="true"
            className="absolute -right-[120px] top-5 bottom-5 w-[540px] rounded-l-full bg-[#2643b0]"
          />
          <div
            aria-hidden="true"
            className="absolute -right-[120px] top-20 bottom-20 w-[440px] rounded-l-full bg-[#213b9c]"
          />
          <div className="relative flex flex-wrap gap-12 p-[clamp(28px,5vw,64px)]">
            <Reveal className="flex min-w-0 flex-1 basis-[360px] flex-col gap-5">
              <Eyebrow tone="onBlue">Fale conosco</Eyebrow>
              <h2 className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.015em]">
                Sua vida profissional.{" "}
                <span className="text-ice">Tudo sob controle.</span>
              </h2>
              <p className="text-lg leading-relaxed text-cloud">
                Conheça a Dockter e veja como organizar sua rotina médica em um
                só lugar. Deixe seu contato e a nossa equipe retorna.
              </p>
              <div className="flex flex-col gap-3 pt-2 text-[17px] font-medium">
                <span className="flex items-center gap-3">
                  <Mail size={20} strokeWidth={2} />
                  {CONTACT_EMAIL}
                </span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cloud hover:text-ice"
                >
                  <InstagramGlyph />
                  @dockter.com.br
                </a>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cloud hover:text-ice"
                >
                  <YoutubeGlyph />
                  YouTube: @dockterflow
                </a>
              </div>
            </Reveal>

            <Reveal
              delay={120}
              className="min-w-0 flex-1 basis-[420px] rounded-3xl bg-cloud p-8 text-ink"
            >
              {sent ? (
                <div
                  role="status"
                  className="flex min-h-[380px] flex-col items-center justify-center gap-3.5 text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ice">
                    <Check size={30} strokeWidth={2.5} className="text-brand" />
                  </span>
                  <h3 className="text-[23px] font-bold">Mensagem enviada.</h3>
                  <p className="max-w-[320px] text-base text-muted">
                    Obrigado pelo interesse na Dockter. Nossa equipe vai entrar
                    em contato em breve.
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="rounded-full border-[1.5px] border-ice bg-white px-5 py-3 text-[15px] font-semibold text-ink transition-colors hover:border-brand"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form
                  aria-label="Formulário de contato"
                  className="flex flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    send(e.currentTarget);
                  }}
                >
                  <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
                    <label className={labelClass}>
                      Nome
                      <input
                        type="text"
                        name="nome"
                        placeholder="Seu nome"
                        className={fieldClass}
                      />
                    </label>
                    <label className={labelClass}>
                      Especialidade
                      <input
                        type="text"
                        name="especialidade"
                        placeholder="Ex.: Cardiologia"
                        className={fieldClass}
                      />
                    </label>
                    <label className={labelClass}>
                      E-mail
                      <input
                        type="email"
                        name="email"
                        placeholder="voce@email.com"
                        className={fieldClass}
                      />
                    </label>
                    <label className={labelClass}>
                      WhatsApp
                      <input
                        type="tel"
                        name="telefone"
                        placeholder="(00) 00000-0000"
                        className={fieldClass}
                      />
                    </label>
                  </div>
                  <label className={labelClass}>
                    Plano de interesse
                    <select
                      name="plano"
                      value={plan}
                      onChange={(e) => setPlan(e.target.value)}
                      className={fieldClass}
                    >
                      {planChoices.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className={labelClass}>
                    Mensagem
                    <textarea
                      name="mensagem"
                      rows={4}
                      placeholder="Conte um pouco sobre a sua rotina"
                      className={`${fieldClass} resize-y`}
                    />
                  </label>
                  <label className="flex cursor-pointer items-start gap-3 text-sm leading-normal text-muted">
                    <input
                      type="checkbox"
                      name="consentimento"
                      checked={consent}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        setConsentErr(false);
                      }}
                      className="mt-px h-5 w-5 flex-none accent-brand"
                    />
                    <span>
                      Concordo em receber contato da Dockter e com o tratamento
                      dos meus dados conforme a{" "}
                      <a href="#" className="font-semibold text-brand">
                        Política de Privacidade
                      </a>
                      .
                    </span>
                  </label>
                  {consentErr && (
                    <p
                      role="alert"
                      className="rounded-xl bg-ice px-3.5 py-2.5 text-sm font-semibold text-ink"
                    >
                      Para enviar, marque a caixa de consentimento acima.
                    </p>
                  )}
                  <button
                    type="submit"
                    className="rounded-full bg-ink px-5 py-4 text-base font-semibold text-cloud transition-colors hover:bg-brand"
                  >
                    Enviar mensagem
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
