import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'], // 800 = ExtraBold
  variable: '--font-open-sans',
  display: 'swap',
})

const BASE_URL = 'https://archiana.web.id'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Archiana — Architecture & Creative Studio',
    template: '%s | Archiana',
  },
  description:
    'Archiana is an architecture and creative studio crafting distinctive spaces, identities, and experiences for ambitious brands. Based in Jakarta, Indonesia.',
  keywords: [
    'architecture studio',
    'interior design',
    'brand spaces',
    'creative studio',
    'Jakarta architect',
    'Archiana',
  ],
  authors: [{ name: 'Archiana Studio', url: BASE_URL }],
  creator: 'Archiana Studio',
  publisher: 'Archiana Studio',

  // Canonical
  alternates: {
    canonical: '/',
  },

  // Open Graph
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Archiana',
    title: 'Archiana — Architecture & Creative Studio',
    description:
      'Archiana is an architecture and creative studio crafting distinctive spaces, identities, and experiences for ambitious brands.',
    images: [
      {
        url: '/images/archiana-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Archiana — Architecture & Creative Studio',
      },
    ],
    locale: 'en_US',
  },

  // Twitter / X
  twitter: {
    card: 'summary_large_image',
    title: 'Archiana — Architecture & Creative Studio',
    description:
      'Archiana Studio is a Bandung-based architecture and design studio, delivering projects across West Java and diverse regions throughout Indonesia.',
    images: ['/images/archiana-hero.jpg'],
  },

  // Favicon & icons
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'mask-icon', url: '/favicon/favicon.ico' }],
  },

  // Web manifest
  manifest: '/favicon/site.webmanifest',

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en'>
      <body className={openSans.variable}>{children}</body>
    </html>
  )
}
