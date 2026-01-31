import { AlertTriangle, TrendingDown, Search, Clock, Users, Globe } from "lucide-react";

export const IntroductionSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Why Nejashi Hospital Needs a Website — <span className="text-primary">Now</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            During my research, I identified critical gaps that are costing your hospital patients and reputation. 
            Let me show you what's happening when potential patients search for healthcare in Jigjiga.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <ProblemCard
            icon={<Search className="w-6 h-6" />}
            title="Invisible on Google"
            description="When someone searches 'hospitals in Jigjiga', your competitors appear first. Without a website, you're invisible to patients actively searching for care."
          />
          <ProblemCard
            icon={<TrendingDown className="w-6 h-6" />}
            title="Lost Patients to Competitors"
            description="LifeCare Ethiopia and Jazira Hospital have websites. Patients who can't find your information online go to those who are easy to find."
          />
          <ProblemCard
            icon={<Clock className="w-6 h-6" />}
            title="No 24/7 Information"
            description="Facebook posts expire. A website is your 24/7 front desk — always available to answer questions about services, doctors, and appointments."
          />
          <ProblemCard
            icon={<AlertTriangle className="w-6 h-6" />}
            title="Missing Contact Info"
            description="Your Google Business Profile lacks essential contact details. Patients can't call you if they can't find your number."
          />
          <ProblemCard
            icon={<Users className="w-6 h-6" />}
            title="No Online Appointments"
            description="Top hospitals like Hallelujah Hospital and Dalmar Hospital offer online booking. Patients expect this convenience in 2026."
          />
          <ProblemCard
            icon={<Globe className="w-6 h-6" />}
            title="Diaspora Disconnect"
            description="Somali diaspora searching for reliable hospitals for their families back home can't find or verify your services online."
          />
        </div>

        <div className="mt-12 p-6 bg-gold-light border-l-4 border-accent rounded-r-lg">
          <p className="text-lg font-medium text-foreground">
            <span className="text-accent font-bold">Good news:</span> The online competition in Jigjiga is small. 
            With a professional website, you can quickly become the #1 hospital found online in the region.
          </p>
        </div>
      </div>
    </section>
  );
};

const ProblemCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-destructive/10 text-destructive rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </div>
);
