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
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/d9f2fb8b-b2fc-4eec-b2c3-48d45a782ccb.jpg?token=pbWzZJfkD2W8lxG1hlErN2qmp2LlVi7aIu2wYa-v79Y&height=882&width=1200&expires=33283297554" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lutfi-resume.vercel.app" />
        <meta property="twitter:url" content="https://lutfi-resume.vercel.app/" />
        <meta name="twitter:title" content="Lutfi - Web Developer & Designer" />
        <meta name="twitter:description" content="Professional portfolio showcasing my skills, projects, and experience in web development and design" />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/d9f2fb8b-b2fc-4eec-b2c3-48d45a782ccb.jpg?token=pbWzZJfkD2W8lxG1hlErN2qmp2LlVi7aIu2wYa-v79Y&height=882&width=1200&expires=33283297554" />
        <link rel="icon" href="https://code.visualstudio.com/assets/favicon.ico" />
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
