import type { Metadata } from "next";
import { FeaturePage } from "@/components/dockter/FeaturePage";
import { agenda } from "@/components/dockter/featureData";

export const metadata: Metadata = {
  title: "Agenda e plantões",
  description:
    "Organize a agenda do consultório e cadastre seus plantões com horários e locais, para ver toda a sua semana de trabalho de uma vez.",
  alternates: { canonical: "/agenda-e-plantoes/" },
};

export default function AgendaPage() {
  return <FeaturePage config={agenda} />;
}
