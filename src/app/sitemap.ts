import { MetadataRoute } from 'next'
import { programmes } from '@/data/programmes'

export default function sitemap(): MetadataRoute.Sitemap {
  // Fallback to Vercel domain or use custom env variable
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://platfromschoolsalevel.vercel.app";

  const routes = [
    { url: '', priority: 1, freq: 'yearly' },
    { url: '/about', priority: 0.8, freq: 'monthly' },
    { url: '/campus-life', priority: 0.8, freq: 'monthly' },
    { url: '/admissions', priority: 0.8, freq: 'monthly' },
    { url: '/programmes', priority: 0.8, freq: 'monthly' },
    { url: '/results', priority: 0.7, freq: 'yearly' },
    { url: '/contact', priority: 0.7, freq: 'yearly' },
    { url: '/news', priority: 0.7, freq: 'weekly' },
  ] as const

  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.freq,
    priority: route.priority,
  }))

  const programRoutes = programmes.map((p) => ({
    url: `${baseUrl}/programmes/${p.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...programRoutes]
}
