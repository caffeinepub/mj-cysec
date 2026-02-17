import { Shield, Search, FileCheck, AlertTriangle, Lock, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Shield,
    title: 'Security Assessments',
    description: 'Comprehensive evaluation of your security posture with detailed risk analysis and actionable recommendations to strengthen your defenses.',
    features: ['Penetration Testing', 'Risk Analysis', 'Security Audits']
  },
  {
    icon: Search,
    title: 'Vulnerability Scanning',
    description: 'Continuous monitoring and scanning of your infrastructure to identify and remediate vulnerabilities before they can be exploited.',
    features: ['Automated Scanning', 'Threat Detection', 'Patch Management']
  },
  {
    icon: FileCheck,
    title: 'Compliance Readiness',
    description: 'Navigate complex regulatory requirements with confidence. We help you achieve and maintain compliance with industry standards.',
    features: ['GDPR & HIPAA', 'ISO 27001', 'SOC 2']
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    description: 'Rapid response to security incidents with expert containment, investigation, and recovery services to minimize business impact.',
    features: ['24/7 Response', 'Forensic Analysis', 'Recovery Planning']
  },
  {
    icon: Lock,
    title: 'Data Protection',
    description: 'Safeguard your sensitive data with encryption, access controls, and data loss prevention strategies tailored to your business.',
    features: ['Encryption Services', 'Access Control', 'DLP Solutions']
  },
  {
    icon: Users,
    title: 'Security Training',
    description: 'Empower your team with security awareness training and best practices to create a human firewall against cyber threats.',
    features: ['Phishing Simulations', 'Security Workshops', 'Policy Development']
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            Comprehensive Security <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From assessment to implementation, we provide end-to-end cybersecurity services 
            tailored to protect your business at every level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-glow transition-all duration-300 hover:border-primary/50 bg-card"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
