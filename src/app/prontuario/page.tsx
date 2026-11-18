import type { Metadata } from "next";
import { FeaturePage } from "@/components/dockter/FeaturePage";
import { prontuario } from "@/components/dockter/featureData";

export const metadata: Metadata = {
  title: "Prontuário e evolução",
  description:
    "Reúna o histórico de cada paciente e registre a evolução nos modelos SOAP e SBAR, ou no modelo que você mesmo criar.",
  alternates: { canonical: "/prontuario/" },
};

export default function ProntuarioPage() {
  return <FeaturePage config={prontuario} />;
}
