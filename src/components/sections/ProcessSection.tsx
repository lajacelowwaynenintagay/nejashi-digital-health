import { MessageSquare, PenTool, FileText, Code, Rocket } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Design Interview",
      description:
        "We discuss your hospital's brand, services, and goals. I learn what makes Nejashi Hospital unique and what you want patients to feel.",
      icon: <MessageSquare className="w-6 h-6" />,
      duration: "1-2 hours",
    },
    {
      number: 2,
      title: "Design Presentation",
      description:
        "I create mockups of your website. You'll see exactly how it looks before any coding begins. Revisions included until you're happy.",
      icon: <PenTool className="w-6 h-6" />,
      duration: "3-5 days",
    },
    {
      number: 3,
      title: "Website Content",
      description:
        "Together we gather all content: doctor photos, service descriptions, contact info, and hospital history. I can help write content too.",
      icon: <FileText className="w-6 h-6" />,
      duration: "1-2 days",
    },
    {
      number: 4,
      title: "Website Build",
      description:
        "I develop your website with all features, test everything thoroughly, and optimize for speed and mobile devices.",
      icon: <Code className="w-6 h-6" />,
      duration: "3-6 days",
    },
    {
      number: 5,
      title: "Launch!",
      description:
        "We go live! I train your team on updates, connect Google Analytics, and ensure everything runs perfectly. Ongoing support included.",
      icon: <Rocket className="w-6 h-6" />,
      duration: "1 day",
    },
  ];

  return (
    <section id="our-process" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Our Simple <span className="text-primary">5-Step Process</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From our first meeting to launch, here's exactly how we'll work together 
            to create your hospital's new online presence.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative lg:flex lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center">
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-sm text-accent font-semibold">Step {step.number}</span>
                        <h3 className="font-display text-xl font-bold text-foreground">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-3">{step.description}</p>
                    <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                      Duration: {step.duration}
                    </span>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
                  {step.number}
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            <span className="font-semibold text-foreground">Total timeline:</span> 2 weeks (7-14 days) from start to launch
          </p>
          <button
            onClick={() => document.getElementById("investment")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-teal-dark transition-colors"
          >
            See Investment Options →
          </button>
        </div>
      </div>
    </section>
  );
};
