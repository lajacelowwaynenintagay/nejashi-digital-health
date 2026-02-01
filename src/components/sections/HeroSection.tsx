import heroImage from "@/assets/hero-design-team.jpg";
import websiteMockup from "@/assets/website-mockup new one.png";
import hospitalBuilding from "@/assets/najashi building.jpeg";

export const HeroSection = () => {
  return (
    <section id="introduction" className="min-h-screen py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              New Website.
              <br />
              <span className="text-primary">More Patients.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Thank you for considering{" "}
              <span className="text-accent font-semibold">Mohamed Web Design</span>{" "}
              for your hospital's digital presence.
            </p>
            <p className="mt-4 text-xl text-foreground">
              Hi <span className="font-semibold">Nejashi Hospital Team</span>, I look forward to working with you!
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById("investment")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-teal-dark transition-colors"
              >
                View Investment Options
              </button>
              <button
                onClick={() => document.getElementById("your-website")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-teal-light transition-colors"
              >
                See What You'll Get
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={heroImage}
              alt="Web design team collaboration"
              className="rounded-xl shadow-lg w-full h-48 object-cover"
            />
            <img
              src={websiteMockup}
              alt="Hospital website mockup"
              className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
            />
            <img
              src={hospitalBuilding}
              alt="Modern hospital building"
              className="rounded-xl shadow-lg w-full h-48 object-cover -mt-8"
            />
            <div className="rounded-xl bg-teal-light p-6 flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl font-bold text-primary">24/7</span>
                <p className="text-sm text-primary mt-1">Online Presence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
