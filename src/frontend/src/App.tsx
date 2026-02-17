import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import SiteHeader from './components/marketing/SiteHeader';
import SiteFooter from './components/marketing/SiteFooter';
import HomeSection from './components/marketing/sections/HomeSection';
import ServicesSection from './components/marketing/sections/ServicesSection';
import AboutSection from './components/marketing/sections/AboutSection';
import ContactSection from './components/marketing/sections/ContactSection';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  useEffect(() => {
    document.title = 'MJ CySec - Cybersecurity Solutions for Modern Businesses';
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <HomeSection />
          <ServicesSection />
          <AboutSection />
          <ContactSection />
        </main>
        <SiteFooter />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
