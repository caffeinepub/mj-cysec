import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomeSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/mj-cysec-hero-bg.dim_1920x1080.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Shield size={16} />
            <span>Enterprise-Grade Cybersecurity</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
            Protect Your Business from{' '}
            <span className="text-primary">Cyber Threats</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            MJ CySec delivers comprehensive cybersecurity solutions to safeguard your digital assets, 
            ensure compliance, and maintain business continuity in an evolving threat landscape.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-glow text-base px-8"
            >
              Request a Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 text-base px-8"
            >
              Explore Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm">
              <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
              <span className="text-muted-foreground">24/7 Threat Monitoring</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
              <span className="text-muted-foreground">Compliance Certified</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
              <span className="text-muted-foreground">Rapid Response Team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
