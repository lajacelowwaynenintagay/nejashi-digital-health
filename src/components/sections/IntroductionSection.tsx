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
            <br /><br />
            Let me show you what's happening when potential patients search for healthcare in Jigjiga.
            <br /><br />
            You are falling behind on Google because competitors like Lifecare have a professional website that secures the top search results and captures patient traffic before they can even find you. <a href="https://www.lifecare.et/" className="text-primary underline">https://www.lifecare.et/</a>
            <br /><br />
            Hospitals like Jazira Superspeciality Hospital have already established a strong website presence, allowing them to offer superior information access and win the trust of every patient searching online. <a href="https://jazira.net/" className="text-primary underline">https://jazira.net/</a>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <ProblemCard
            icon={<TrendingDown className="w-6 h-6" />}
            title="Lost Patients to Competitors"
            description="LifeCare Ethiopia and Jazira Hospital have websites. Patients who can't find your information online go to those who are easy to find."
          />
          <ProblemCard
            icon={<Search className="w-6 h-6" />}
            title="Invisible on Google"
            description="When someone searches 'hospitals in Jigjiga', your competitors appear first. Without a website, you're invisible to patients actively searching for care."
          />
          <ProblemCard
            icon={<Clock className="w-6 h-6" />}
            title="No 24/7 Online Reception"
            description="Facebook posts expire. A website is your 24/7 front desk — always available to book appointments and answer all patient questions instantly."
          />
          <ProblemCard
            icon={<Globe className="w-6 h-6" />}
            title="Disconnected from Visitors"
            description="Patients from outside Jigjiga, including Somali visitors and regional travelers, search for hospitals online. Without a website, you're missing these important patient groups."
          />
          <ProblemCard
            icon={<Globe className="w-6 h-6" />}
            title="Digital Trust Score"
            description="Patients judge hospitals by their online presence. Without a professional website, you're losing credibility and trust before patients even meet your doctors."
          />
          <ProblemCard
            icon={<Users className="w-6 h-6" />}
            title="Operational Efficiency"
            description="Websites integrate advanced tools that streamline administrative tasks, reducing staff burden through online appointment booking and automated patient communication."
          />
          <ProblemCard
            icon={<Users className="w-6 h-6" />}
            title="No Online Appointments"
            description="Top hospitals like Hallelujah Hospital and Dalmar Hospital offer online booking. Patients expect this convenience in 2026."
          />
          <ProblemCard
            icon={<TrendingDown className="w-6 h-6" />}
            title="Information Supremacy"
            description="Your competitors aren't winning because they're better doctors — they're winning because they have better information available 24/7. A website puts you in that position."
          />
          <ProblemCard
            icon={<AlertTriangle className="w-6 h-6" />}
            title="Revenue Loss"
            description="Every patient lost to competitors is direct revenue loss. A professional website converts searchers into actual patients, increasing your income."
          />
        </div>

        <div className="mt-12 p-8 bg-card border border-primary/20 rounded-xl shadow-lg relative overflow-hidden group hover:border-primary/40 transition-colors">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
          <h3 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="text-primary">The Digital Reality</span>
          </h3>
          <p className="text-lg text-foreground/80 leading-relaxed">
            <span className="font-semibold text-foreground">Clients/patients</span> go online first to find services that they want. If you don’t have a web presence, your prospective customers will have no choice but to visit your competitors' websites.
            <br /><br />
            This is especially true for local hospital businesses fighting for a share of the local market.
            <br /><br />
            A simple website and a well-executed optimization plan can help businesses connect with local consumers through organic search and Google Maps.
          </p>
        </div>

        <div className="mt-6 p-6 bg-gold-light border-l-4 border-accent rounded-r-lg">
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
