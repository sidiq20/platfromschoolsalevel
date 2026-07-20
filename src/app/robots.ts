import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // Fallback to custom domain or use custom env variable
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.platformcollege.org";

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
