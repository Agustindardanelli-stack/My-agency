import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  title: {
    default: 'CodeNova - Desarrollo Web y Marketing Digital | Río Cuarto, Córdoba',
    template: '%s | CodeNova - Desarrollo Web'
  },
  description: 'Agencia especializada en desarrollo web moderno con React, Next.js y marketing digital en Río Cuarto, Córdoba. Creamos experiencias digitales que impulsan tu negocio al siguiente nivel.',
  keywords: ['desarrollo web', 'marketing digital', 'React', 'Next.js', 'Río Cuarto', 'Córdoba', 'Argentina', 'diseño web', 'SEO', 'aplicaciones web'],
  authors: [{ name: 'CodeNova', url: 'https://codenova.com.ar' }],
  creator: 'CodeNova',
  publisher: 'CodeNova',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://codenova.com.ar'),
  alternates: {
    canonical: '/',
    languages: {
      'es-AR': '/es-ar',
      'es': '/es',
    },
  },
  openGraph: {
    title: 'CodeNova - Desarrollo Web y Marketing Digital',
    description: 'Transformamos ideas en experiencias digitales excepcionales. Especialistas en React, Next.js y tecnologías de vanguardia que impulsan tu negocio.',
    url: 'https://codenova.com.ar',
    siteName: 'CodeNova',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CodeNova - Desarrollo Web y Marketing Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeNova - Desarrollo Web y Marketing Digital',
    description: 'Transformamos ideas en experiencias digitales excepcionales con tecnologías modernas.',
    images: ['/twitter-image.jpg'],
    creator: '@codenova_ar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token_here',
    yandex: 'verification_token_here',
    yahoo: 'verification_token_here',
  },
  category: 'technology',
  classification: 'Desarrollo Web, Marketing Digital, Tecnología',
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="es-AR" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#03045E" />
        <meta name="color-scheme" content="light" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Schema.org structured data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CodeNova",
              "description": "Agencia especializada en desarrollo web y marketing digital",
              "url": "https://codenova.com.ar",
              "logo": "https://codenova.com.ar/logo.png",
              "image": "https://codenova.com.ar/og-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Río Cuarto",
                "addressRegion": "Córdoba",
                "addressCountry": "AR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+54-358-123-4567",
                "contactType": "customer service",
                "email": "agustin.dardanelli@gmail.com",
                "availableLanguage": ["Spanish"]
              },
              "founder": {
                "@type": "Person",
                "name": "Agustín Dardanelli"
              },
              "sameAs": [
                "https://github.com/Agustindardanelli-stack"
              ],
              "service": [
                {
                  "@type": "Service",
                  "name": "Desarrollo Web",
                  "description": "Desarrollo de aplicaciones web modernas con React y Next.js"
                },
                {
                  "@type": "Service", 
                  "name": "Marketing Digital",
                  "description": "Estrategias de marketing digital y SEO"
                },
                {
                  "@type": "Service",
                  "name": "Consultoría Técnica",
                  "description": "Asesoramiento en arquitectura de software y tecnologías"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-custom-green antialiased`}>
        <div className="min-h-screen">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}