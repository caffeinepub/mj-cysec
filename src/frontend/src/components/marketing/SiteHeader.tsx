import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            <img
              src="/assets/generated/mj-cysec-logo.dim_1024x256.png"
              alt="MJ CySec"
              className="h-8 md:h-10 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-glow"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-accent/50 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-accent/50 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-accent/50 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-accent/50 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Contact
              </button>
              <div className="px-4 pt-2">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
