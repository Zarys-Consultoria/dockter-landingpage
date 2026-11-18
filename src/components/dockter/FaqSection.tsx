import { Plus } from "lucide-react";
import { Eyebrow } from "@/components/dockter/ui";
import { Reveal } from "@/components/dockter/Reveal";
import { faqs } from "@/components/dockter/data";

export function FaqSection({
  eyebrow = "Dúvidas frequentes",
  heading = "Ficou alguma ",
  highlight = "dúvida?",
  intro = "Reunimos as perguntas mais comuns. Se a sua não estiver aqui, fale com a nossa equipe.",
  onlyPlanos = false,
}: {
  eyebrow?: string;
  heading?: string;
  highlight?: string;
  intro?: string;
  onlyPlanos?: boolean;
}) {
  const list = onlyPlanos
    ? faqs
        .filter((f) => f.inPlanos)
        .sort((a, b) => (a.planosOrder ?? 0) - (b.planosOrder ?? 0))
        .map((f) => ({ ...f, a: f.planosA ?? f.a }))
    : faqs;

  return (
    <section id="duvidas" className="border-t border-ice bg-white">
      <div className="mx-auto flex max-w-[880px] flex-col gap-10 px-6 py-28">
        <Reveal className="flex flex-col items-center gap-[18px] text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.12] tracking-[-0.015em]">
            {heading}
            <span className="text-brand">{highlight}</span>
          </h2>
          <p className="max-w-[560px] text-lg leading-relaxed text-muted">
            {intro}
          </p>
        </Reveal>
        <div className="flex flex-col gap-3">
          {list.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 50}>
              <details className="rounded-[18px] border border-ice bg-white transition-colors duration-300 hover:border-brand/40">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 font-display text-[17px] font-semibold text-ink">
                  {faq.q}
                  <Plus
                    size={20}
                    strokeWidth={2.5}
                    className="faq-ic flex-none text-brand"
                  />
                </summary>
                <p className="px-6 pb-[22px] text-base leading-relaxed text-muted">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
