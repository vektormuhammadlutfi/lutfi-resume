import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lutfi - Web Developer & Designer',
  description: 'Professional portfolio showcasing my skills, projects, and experience in web development and design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Lutfi - Web Developer & Designer</title>
        <meta name="description" content="Professional portfolio showcasing my skills, projects, and experience in web development and design" />
        {/* Open Graph Meta Tags */}
        <meta property="og:url" content="https://lutfi-resume.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lutfi - Web Developer & Designer" />
        <meta property="og:description" content="Professional portfolio showcasing my skills, projects, and experience in web development and design" />
        <meta property="og:image" content="" /> {/* Replace with your image URL */}
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="lutfi-resume.vercel.app" />
        <meta name="twitter:url" content="https://lutfi-resume.vercel.app/" />
        <meta name="twitter:title" content="Lutfi - Web Developer & Designer" />
        <meta name="twitter:description" content="Professional portfolio showcasing my skills, projects, and experience in web development and design" />
        <meta name="twitter:image" content="" /> {/* Replace with your image URL */}
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light" 
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen bg-background">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
