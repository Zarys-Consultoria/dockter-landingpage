import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://dockter.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/planos`, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${siteUrl}/agenda-e-plantoes`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/prontuario`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/receituario`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/financeiro`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
