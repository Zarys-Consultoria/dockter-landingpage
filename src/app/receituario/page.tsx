import type { Metadata } from "next";
import { FeaturePage } from "@/components/dockter/FeaturePage";
import { receituario } from "@/components/dockter/featureData";

export const metadata: Metadata = {
  title: "Receituário digital",
  description:
    "Emita receitas para todos os tipos de medicamentos, use templates para prescrever com um clique e assine digitalmente pelo VIDaaS.",
  alternates: { canonical: "/receituario/" },
};

export default function ReceituarioPage() {
  return <FeaturePage config={receituario} />;
}
