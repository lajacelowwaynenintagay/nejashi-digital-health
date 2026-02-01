import { Calendar, Clock, Users, Phone, FileText, Shield, Star, MapPin, Stethoscope, Building } from "lucide-react";
import websiteMockup from "@/assets/website-mockup new one.png";

export const WebsiteFeaturesSection = () => {
  return (
    <section id="your-website" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Your New Website: A <span className="text-primary">24/7 Digital Hospital</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            More than just a website — this is your online hospital front desk, appointment center, 
            and information hub all in one. Here's what patients will experience:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img
              src={websiteMockup}
              alt="Hospital website booking interface"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <FeatureItem
              icon={<Calendar className="w-5 h-5" />}
              title="Online Appointment Booking"
              description="Patients can book appointments with specific doctors, choose dates and times — even from their phone at midnight."
            />
            <FeatureItem
              icon={<Stethoscope className="w-5 h-5" />}
              title="Doctor Profiles & Specializations"
              description="Showcase your medical team with photos, qualifications, and specializations. Build trust before patients arrive."
            />
            <FeatureItem
              icon={<Building className="w-5 h-5" />}
              title="All Services Listed"
              description="ICU, Emergency, Consultations, Lab, Pharmacy — every department clearly listed with descriptions."
            />
            <FeatureItem
              icon={<Phone className="w-5 h-5" />}
              title="Clear Contact Information"
              description="Phone numbers, WhatsApp, location map, and emergency contacts — always visible, always accessible."
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={<Clock />} stat="24/7" label="Available Online" />
          <StatCard icon={<Users />} stat="∞" label="Patients Reached" />
          <StatCard icon={<MapPin />} stat="#1" label="Google Ranking Goal" />
          <StatCard icon={<Star />} stat="100%" label="Professional Image" />
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-teal-light p-8 rounded-2xl">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              What Patients Can Do
            </h3>
            <ul className="space-y-3">
              {[
                "Book appointments online",
                "Find doctor schedules",
                "View all hospital services",
                "Get directions to the hospital",
                "Contact via phone or WhatsApp",
                "Read about medical departments",
                "Check emergency services",
                "Learn about the hospital's history",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gold-light p-8 rounded-2xl">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              What You'll Receive
            </h3>
            <ul className="space-y-3">
              {[
                "Modern, mobile-friendly design",
                "SEO optimized for local search",
                "Fast loading on all devices",
                "Secure patient data handling",
                "Easy content updates",
                "Google Analytics tracking",
                "Professional email setup",
                "Training for your team",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex gap-4">
    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>
);

const StatCard = ({
  icon,
  stat,
  label,
}: {
  icon: React.ReactNode;
  stat: string;
  label: string;
}) => (
  <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <div className="text-3xl font-bold text-foreground mb-1">{stat}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);
