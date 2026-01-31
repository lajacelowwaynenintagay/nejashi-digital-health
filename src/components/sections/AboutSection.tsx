import { Briefcase, Award, MapPin, Users } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm Abdirahman, a web designer and developer from Jigjiga. I previously worked with 
              two established web design agencies — <span className="text-foreground font-medium">Ileys</span> and{" "}
              <span className="text-foreground font-medium">Abarso Web Design</span> — where I built websites 
              for businesses across Africa, Europe, and Australia.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Now I'm working independently as a freelancer, building my personal portfolio and 
              focusing on helping local businesses in Jigjiga establish their online presence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I understand our community, speak Somali and Amharic fluently, and I'm passionate 
              about bringing world-class web design to our region.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <InfoCard
              icon={<Briefcase className="w-6 h-6" />}
              title="Experience"
              value="Agency + Freelance"
              description="Worked with Ileys & Abarso agencies"
            />
            <InfoCard
              icon={<MapPin className="w-6 h-6" />}
              title="Location"
              value="Jigjiga"
              description="Local support & understanding"
            />
            <InfoCard
              icon={<Award className="w-6 h-6" />}
              title="Projects"
              value="10+"
              description="Websites delivered"
            />
            <InfoCard
              icon={<Users className="w-6 h-6" />}
              title="Clients"
              value="3 Continents"
              description="Africa, Australia, Europe"
            />
          </div>
        </div>

        <div className="mt-16 bg-teal-light p-8 rounded-2xl">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            Why Work With Me?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Local Understanding</h4>
              <p className="text-muted-foreground text-sm">
                I know Jigjiga, I know your patients, and I understand what Ethiopian hospitals need online.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">International Quality</h4>
              <p className="text-muted-foreground text-sm">
                My agency experience means you get world-class design standards at local prices.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Ongoing Support</h4>
              <p className="text-muted-foreground text-sm">
                I'm here in Jigjiga. You can reach me anytime for updates, questions, or support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({
  icon,
  title,
  value,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}) => (
  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-sm text-muted-foreground mb-1">{title}</h3>
    <p className="text-2xl font-bold text-foreground mb-1">{value}</p>
    <p className="text-xs text-muted-foreground">{description}</p>
  </div>
);
