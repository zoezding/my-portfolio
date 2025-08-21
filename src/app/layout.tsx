import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Zoe Ding - Developer",
  description: "Personal portfolio of Zoe Ding, a passionate developer creating meaningful digital experiences",
  metadataBase: new URL('https://zoezding.github.io/my-portfolio'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zoezding.github.io/my-portfolio',
    title: 'Zoe Ding - Developer',
    description: 'Personal portfolio of Zoe Ding, a passionate developer creating meaningful digital experiences',
    siteName: 'Zoe Ding Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoe Ding - Developer',
    description: 'Personal portfolio of Zoe Ding, a passionate developer creating meaningful digital experiences',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/my-portfolio/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} min-h-screen bg-white text-gray-900 font-inter antialiased`}>
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}