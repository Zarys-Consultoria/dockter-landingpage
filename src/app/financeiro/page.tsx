import type { Metadata } from "next";
import { FeaturePage } from "@/components/dockter/FeaturePage";
import { financeiro } from "@/components/dockter/featureData";

export const metadata: Metadata = {
  title: "Módulo financeiro",
  description:
    "Acompanhe valores a receber, recebimentos, despesas e resultados, e compare o previsto com o que efetivamente entrou. Previsto para 2027.",
  alternates: { canonical: "/financeiro/" },
};

export default function FinanceiroPage() {
  return <FeaturePage config={financeiro} />;
}
