import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Koket Habesha Dress | Traditional & Modern Fashion",
  description:
    "Showcasing unique Ethiopian fashion designs blending traditional craftsmanship with contemporary style. Explore our collection of casual wear, traditional clothes, and accessories.",
  keywords: [
    "Ethiopian fashion",
    "Ethiopian designer",
    "traditional clothing",
    "African fashion",
    "handmade accessories",
    "Ethiopian style",
    "habesha kemis",
    "Ethiopian wedding dress",
    "African designer",
    "traditional Ethiopian clothing",
  ],
  authors: [{ name: "Koket Habesha Dress" }],
  creator: "Koket Habesha Dress",
  publisher: "Koket Habesha Dress",
  metadataBase: new URL("https://ethiopiandesigner.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "am-ET": "/",
    },
  },
  openGraph: {
    title: "Koket Habesha Dress | Traditional & Modern Fashion",
    description: "Unique Ethiopian fashion designs blending tradition with modernity",
    url: "https://ethiopiandesigner.com",
    siteName: "Koket Habesha Dress",
    images: [
      {
        url: "/ethiopian-traditional-dress-with-modern-twist.jpg",
        width: 1200,
        height: 630,
        alt: "Koket Habesha Dress Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Koket Habesha Dress | Traditional & Modern Fashion",
    description: "Unique Ethiopian fashion designs blending tradition with modernity",
    images: ["/ethiopian-traditional-dress-with-modern-twist.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B4513" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
