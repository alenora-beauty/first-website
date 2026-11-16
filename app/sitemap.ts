import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alenorabeautystudio.com";
  const now = new Date();

  const routes = [
    "",
    "/about",
    "/bridal-studio",
    "/services",
    "/gallery",
    "/contact",
    "/careers",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/services" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/services" || route === "/contact" ? 0.8 : 0.6,
  }));
}

