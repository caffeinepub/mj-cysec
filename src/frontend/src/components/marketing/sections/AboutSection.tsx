import { Target, Eye, Award, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Committed to protecting businesses from evolving cyber threats'
  },
  {
    icon: Eye,
    title: 'Transparent',
    description: 'Clear communication and honest assessments at every step'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Industry-leading expertise and cutting-edge security solutions'
  },
  {
    icon: TrendingUp,
    title: 'Proactive',
    description: 'Stay ahead of threats with continuous monitoring and updates'
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
              About <span className="text-primary">MJ CySec</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Your trusted partner in cybersecurity excellence
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-16 space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-foreground/90 leading-relaxed">
                At MJ CySec, we believe that robust cybersecurity shouldn't be a luxury—it's a necessity 
                for every modern business. Founded by industry veterans with decades of combined experience, 
                we're dedicated to making enterprise-grade security accessible to organizations of all sizes.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Our mission is simple: protect your digital assets, ensure regulatory compliance, and 
                empower your team with the knowledge and tools needed to maintain a strong security posture. 
                We combine cutting-edge technology with human expertise to deliver comprehensive solutions 
                that adapt to your unique business needs.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Clients Protected</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoring</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
