import { Check, Star, Zap, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  price: string;
  pages: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  icon: React.ReactNode;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$100",
    pages: "1 Page Website",
    description: "Perfect for establishing online presence quickly",
    icon: <Zap className="w-6 h-6" />,
    features: [
      "Professional single-page design",
      "Mobile responsive",
      "Contact form",
      "Google Maps integration",
      "Basic SEO setup",
      "1 year hosting included",
      "Domain registration assistance",
      "2 training sessions",
      "3 months free maintenance",
    ],
  },
  {
    name: "Professional",
    price: "$200",
    pages: "Up to 8 Pages",
    description: "Complete hospital website with all essential features",
    icon: <Star className="w-6 h-6" />,
    highlighted: true,
    features: [
      "Everything in Starter, plus:",
      "Multi-page website (Home, About, Services, Doctors, Contact, etc.)",
      "Appointment booking integration",
      "Doctor profiles section",
      "Services/Departments pages",
      "Photo gallery",
      "Advanced SEO optimization",
      "Google Analytics setup",
      "Content Management System (CMS)",
      "1 year hosting included",
      "2 training sessions",
      "Lifetime updates",
    ],
  },
  {
    name: "Premium",
    price: "$500",
    pages: "Up to 15 Pages",
    description: "Full-featured hospital portal with advanced integrations",
    icon: <Crown className="w-6 h-6" />,
    features: [
      "Everything in Professional, plus:",
      "Patient portal features",
      "Advanced booking system",
      "Multiple doctor scheduling",
      "Blog/News section",
      "Testimonials system",
      "FAQ section",
      "Multi-language support (Somali/English)",
      "Security & HIPAA compliance guidelines",
      "Priority support",
      "1 year hosting included",
      "3 months social media posters and designs to post for updates",
      "1 month full social media and Google advertisement",
      "Quarterly performance reports",
    ],
  },
];

export const InvestmentSection = () => {
  return (
    <section id="investment" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Your <span className="text-primary">Investment</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the package that best fits Nejashi Hospital's needs. 
            All packages include professional design, hosting, and my personal commitment to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl",
                tier.highlighted
                  ? "border-primary bg-primary/5 shadow-lg scale-105"
                  : "border-border bg-card"
              )}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                  Recommended
                </div>
              )}

              <div className={cn(
                "w-14 h-14 rounded-xl flex items-center justify-center mb-6",
                tier.highlighted ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
              )}>
                {tier.icon}
              </div>

              <h3 className="font-display text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                <span className="text-muted-foreground ml-2">{tier.pages}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={cn(
                      "w-5 h-5 flex-shrink-0 mt-0.5",
                      tier.highlighted ? "text-primary" : "text-muted-foreground"
                    )} />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById("approve")?.scrollIntoView({ behavior: "smooth" })}
                className={cn(
                  "w-full py-3 px-6 rounded-lg font-semibold transition-colors",
                  tier.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-teal-dark"
                    : "bg-muted text-foreground hover:bg-muted/80"
                )}
              >
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-secondary/50 rounded-2xl p-8">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4 text-center">
            What's Included in All Packages
          </h3>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            {[
              { label: "Web Hosting", desc: "1 year included" },
              { label: "Domain Assistance", desc: "Setup & registration" },
              { label: "Google Analytics", desc: "Track visitors" },
              { label: "Training Sessions", desc: "Learn to update content" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-foreground">{item.label}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="bg-card border border-primary/20 rounded-xl p-8 w-full shadow-sm">
              <p className="text-muted-foreground leading-relaxed text-center mb-8 text-lg">
                To ensure a smooth project kickoff and delivery, we operate on a milestone-based payment schedule:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-secondary/30 rounded-lg p-6 border border-border/50 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      30%
                    </div>
                    <h5 className="font-bold text-xl text-foreground">Upfront Payment</h5>
                  </div>
                  <p className="text-base text-muted-foreground mb-4">
                    Required to commence the project. This covers immediate third-party costs including:
                  </p>
                  <ul className="space-y-3 text-base text-foreground/80">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Domain Registration (nejashihospital.com)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Business Email Setup (info@nejashihospital.com)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Secure Web Hosting Environment</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-secondary/30 rounded-lg p-6 border border-border/50 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      70%
                    </div>
                    <h5 className="font-bold text-xl text-foreground">Upon Completion</h5>
                  </div>
                  <p className="text-base text-muted-foreground mb-4">
                    The remaining balance is due only after the website is fully developed, reviewed, and approved by your team.
                  </p>
                  <ul className="space-y-3 text-base text-foreground/80">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>Final Design Approval</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>Content Upload Completion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>Live Launch & Handover</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
