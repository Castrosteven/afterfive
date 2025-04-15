import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "After5.nyc - Find Your Perfect After Work Crowd",
    template: "%s | After5.nyc"
  },
  description: "Connect with like-minded professionals in NYC who know how to unwind after a long day at work. Find your perfect after-work event and make new connections.",
  keywords: ["after work", "networking", "NYC", "events", "social", "professionals", "meetup", "happy hour"],
  authors: [{ name: "After5.nyc" }],
  creator: "After5.nyc",
  publisher: "After5.nyc",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://after5.nyc'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://after5.nyc',
    title: 'After5.nyc - Find Your Perfect After Work Crowd',
    description: 'Connect with like-minded professionals in NYC who know how to unwind after a long day at work.',
    siteName: 'After5.nyc',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'After5.nyc - Find Your Perfect After Work Crowd',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'After5.nyc - Find Your Perfect After Work Crowd',
    description: 'Connect with like-minded professionals in NYC who know how to unwind after a long day at work.',
    images: ['/og-image.jpg'],
    creator: '@after5nyc',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  manifest: '/manifest.json',
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
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SpeedInsights/>
        <Analytics/>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
