"use client";

import { useState } from "react";
import { Plus, ShieldCheck } from "lucide-react";

type Template = { id: string; short: string; name: string; dose: string };

const templates: Template[] = [
  {
    id: "dipirona",
    short: "Dipirona 500 mg",
    name: "Dipirona 500 mg",
    dose: "Tomar 1 comprimido de 6 em 6 horas, se dor ou febre.",
  },
  {
    id: "amoxicilina",
    short: "Amoxicilina 500 mg",
    name: "Amoxicilina 500 mg",
    dose: "Tomar 1 cápsula de 8 em 8 horas, por 7 dias.",
  },
  {
    id: "omeprazol",
    short: "Omeprazol 20 mg",
    name: "Omeprazol 20 mg",
    dose: "Tomar 1 cápsula pela manhã, em jejum.",
  },
  {
    id: "loratadina",
    short: "Loratadina 10 mg",
    name: "Loratadina 10 mg",
    dose: "Tomar 1 comprimido ao dia.",
  },
];

export function ReceitaDemo() {
  const [rx, setRx] = useState<string[]>(["dipirona"]);
  const items = rx
    .map((id) => templates.find((t) => t.id === id))
    .filter((t): t is Template => Boolean(t));

  function toggle(id: string) {
    setRx((cur) =>
      cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id],
    );
  }

  return (
    <article className="flex flex-col gap-[22px] rounded-[28px] bg-cloud p-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold">Receita em um clique.</h3>
        <p className="text-base leading-relaxed text-muted">
          Nada de digitar “dipirona 500 mg de 6 em 6 horas” várias vezes ao dia.
          Salve seus medicamentos e receitas como templates e prescreva com um
          clique, para todos os tipos de medicamentos.
        </p>
      </div>
      <div className="flex flex-col gap-2.5">
        <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-muted">
          Meus templates
        </span>
        <div className="flex flex-wrap gap-2">
          {templates.map((t) => {
            const active = rx.includes(t.id);
            return (
              <button
                key={t.id}
                type="button"
                aria-pressed={active}
                onClick={() => toggle(t.id)}
                className={`rounded-full border-[1.5px] px-4 py-2.5 text-sm font-semibold transition-colors ${
                  active
                    ? "border-brand bg-brand text-cloud"
                    : "border-ice bg-white text-ink hover:border-brand"
                }`}
              >
                {active ? "✓ " : "+ "}
                {t.short}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex min-h-[210px] flex-col gap-3.5 rounded-[20px] border border-ice bg-white p-[22px]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-display text-base font-bold">Receituário</span>
          <span className="text-[13px] text-muted">Paciente de exemplo</span>
        </div>
        <div className="h-px bg-ice" />
        {items.length === 0 ? (
          <p className="py-[18px] text-center text-[15px] text-muted">
            Clique em um template acima para adicionar à receita.
          </p>
        ) : (
          <ol className="flex list-decimal flex-col gap-3 pl-5">
            {items.map((t) => (
              <li key={t.id} className="text-[15px] leading-normal text-ink">
                <strong className="font-semibold">{t.name}</strong>
                <br />
                <span className="text-muted">{t.dose}</span>
              </li>
            ))}
          </ol>
        )}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-1.5">
          <span className="flex items-center gap-2 text-sm font-medium text-brand">
            <ShieldCheck size={18} strokeWidth={2} />
            Assinatura digital VIDaaS
          </span>
          <button
            type="button"
            onClick={() => setRx([])}
            className="rounded-full border-[1.5px] border-ice bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand"
          >
            Limpar
          </button>
        </div>
      </div>
      <p className="text-[13px] text-muted">
        Demonstração ilustrativa. As prescrições são definidas por cada médico.
      </p>
    </article>
  );
}

type Model = "soap" | "sbar" | "meu";

const models: Record<
  Model,
  { label: string; title: string; fields: [string, string, number][] }
> = {
  soap: {
    label: "SOAP",
    title: "Evolução — SOAP",
    fields: [
      ["S", "Subjetivo", 80],
      ["O", "Objetivo", 64],
      ["A", "Avaliação", 72],
      ["P", "Plano", 56],
    ],
  },
  sbar: {
    label: "SBAR",
    title: "Evolução — SBAR",
    fields: [
      ["S", "Situação", 70],
      ["B", "Breve histórico", 84],
      ["A", "Avaliação", 62],
      ["R", "Recomendação", 76],
    ],
  },
  meu: {
    label: "Meu modelo",
    title: "Evolução — modelo personalizado",
    fields: [
      ["1", "Queixa principal", 74],
      ["2", "Exame físico", 60],
      ["3", "Conduta", 68],
    ],
  },
};

export function EvolucaoDemo() {
  const [current, setCurrent] = useState<Model>("soap");
  const def = models[current];

  return (
    <article className="flex flex-col gap-[22px] rounded-[28px] bg-ink p-8 text-cloud">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold">Evolução do seu jeito.</h3>
        <p className="text-base leading-relaxed text-ice">
          Acompanhe a evolução de cada paciente com os modelos SOAP e SBAR
          prontos por padrão, ou crie o seu próprio modelo com os campos que
          fazem sentido para a sua prática.
        </p>
      </div>
      <div
        role="group"
        aria-label="Modelo de evolução"
        className="flex flex-wrap gap-1 self-start rounded-full bg-[#24365c] p-[5px]"
      >
        {(Object.keys(models) as Model[]).map((key) => {
          const active = key === current;
          return (
            <button
              key={key}
              type="button"
              aria-pressed={active}
              onClick={() => setCurrent(key)}
              className={`rounded-full px-[18px] py-2.5 text-sm font-semibold transition-colors ${
                active ? "bg-cloud text-ink" : "bg-transparent text-cloud"
              }`}
            >
              {models[key].label}
            </button>
          );
        })}
      </div>
      <div className="flex flex-col gap-3 rounded-[20px] bg-cloud p-[22px] text-ink">
        <span className="font-display text-base font-bold">{def.title}</span>
        {def.fields.map(([letter, label, width]) => (
          <div key={label} className="flex items-center gap-3.5">
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand font-display text-base font-bold text-cloud">
              {letter}
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <span className="text-[15px] font-semibold">{label}</span>
              <span
                className="block h-2 rounded-full bg-ice"
                style={{ width: `${width}%` }}
              />
            </div>
          </div>
        ))}
        {current === "meu" && (
          <span className="flex items-center gap-2 self-start rounded-full border-[1.5px] border-dashed border-brand px-4 py-2.5 text-sm font-semibold text-brand">
            <Plus size={16} strokeWidth={2.5} />
            Adicionar campo
          </span>
        )}
      </div>
    </article>
  );
}
