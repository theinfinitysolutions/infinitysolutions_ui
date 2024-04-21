import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://www.theinfinitysolutions.net/services",
      lastModified: new Date("2024-04-10").toISOString(),
    },
    {
      url: "https://www.theinfinitysolutions.net",
      lastModified: new Date("2024-04-10").toISOString(),
    },
    {
      url: "https://www.theinfinitysolutions.net/about",
      lastModified: new Date("2024-04-10").toISOString(),
    },
    {
      url: "https://www.theinfinitysolutions.net/projects",
      lastModified: new Date("2024-04-10").toISOString(),
    },
  ];
}
