"use client";

import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { plans } from "@/components/dockter/data";

export const SELECT_PLAN_EVENT = "dockter:select-plan";

export function PlanosShowcase() {
  const [annual, setAnnual] = useState(false);

  function choose(name: string) {
    window.dispatchEvent(new CustomEvent(SELECT_PLAN_EVENT, { detail: name }));
  }

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <div
        role="group"
        aria-label="Período de cobrança"
        className="flex gap-1 rounded-full bg-ice p-[5px]"
      >
        <button
          type="button"
          aria-pressed={!annual}
          onClick={() => setAnnual(false)}
          className={`rounded-full px-7 py-3 text-[15px] font-semibold transition-colors ${
            !annual ? "bg-ink text-cloud" : "bg-transparent text-ink"
          }`}
        >
          Mensal
        </button>
        <button
          type="button"
          aria-pressed={annual}
          onClick={() => setAnnual(true)}
          className={`rounded-full px-7 py-3 text-[15px] font-semibold transition-colors ${
            annual ? "bg-ink text-cloud" : "bg-transparent text-ink"
          }`}
        >
          Anual
        </button>
      </div>

      <div className="grid w-full gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`hover-lift relative flex flex-col gap-[22px] rounded-[28px] bg-white p-[34px] ${
              plan.featured
                ? "border-2 border-brand"
                : "border border-ice hover:border-brand/40"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-[15px] left-[34px] rounded-full bg-brand px-3.5 py-1.5 text-[13px] font-semibold tracking-[0.04em] text-cloud">
                Recomendado
              </span>
            )}
            <div className="flex flex-col gap-1.5">
              <h3 className="text-[23px] font-bold">{plan.name}</h3>
              <p className="text-[15px] text-muted">{plan.tag}</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-wrap items-baseline gap-1.5 font-display">
                <span className="text-lg font-semibold">R$</span>
                <span className="text-[48px] font-bold tracking-[-0.02em]">
                  {annual ? plan.annual : plan.monthly}
                </span>
                <span className="text-base font-semibold text-muted">
                  {annual ? "/ano" : "/mês"}
                </span>
              </div>
              <p className="min-h-[22px] text-[15px] font-medium text-brand">
                {annual
                  ? `Equivale a R$ ${plan.equiv}/mês · economia de R$ ${plan.save}`
                  : `Ou R$ ${plan.annual} no plano anual`}
              </p>
            </div>
            <a
              href="#contato"
              onClick={() => choose(plan.name)}
              className={`rounded-full border-[1.5px] px-5 py-[15px] text-center text-base font-semibold transition-colors ${
                plan.featured
                  ? "border-brand bg-brand text-cloud hover:bg-ink hover:border-ink"
                  : "border-ink bg-white text-ink hover:bg-ink hover:text-cloud"
              }`}
            >
              Começar teste grátis
            </a>
            <div className="h-px bg-ice" />
            <ul className="flex flex-col gap-3 text-base text-muted">
              {plan.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  {item.kind === "addon" ? (
                    <Plus
                      size={18}
                      strokeWidth={2.5}
                      className="mt-[3px] flex-none text-muted"
                    />
                  ) : (
                    <Check
                      size={18}
                      strokeWidth={2.5}
                      className="mt-[3px] flex-none text-brand"
                    />
                  )}
                  <span
                    className={
                      item.kind === "okStrong"
                        ? "font-semibold text-ink"
                        : item.kind === "addon"
                          ? "italic text-muted"
                          : "text-muted"
                    }
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
