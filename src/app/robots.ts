import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // Fallback to Vercel domain or use custom env variable
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://platfromschoolsalevel.vercel.app";

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
