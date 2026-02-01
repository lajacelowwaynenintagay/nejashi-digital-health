import { ExternalLink } from "lucide-react";

interface Project {
  name: string;
  url: string;
  description: string;
  location: string;
  role: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    name: "Tax Savers Australia",
    url: "https://taxsavers.com.au",
    description:
      "My proudest collaboration — a comprehensive financial services website for an Australian tax consultancy firm. Modern design with booking system integration.",
    location: "Sydney, Australia",
    role: "Collaborated in Designing Phase",
    featured: true,
  },
  {
    name: "Hagarlaawe Hotel",
    url: "https://hagarlawehotel.com",
    description:
      "My most recent project right here in Jigjiga! A local hotel website with booking capabilities, room showcases, and event information.",
    location: "Jigjiga, Ethiopia",
    role: "Full Design & Development",
  },
  {
    name: "Art Caffe Kenya",
    url: "https://artcaffe.co.ke",
    description:
      "A vibrant restaurant and cafe chain website created while I was working with design agencies. " +
      "Menu, locations, and brand storytelling for one of Nairobi's most popular dining destinations.",
    location: "Nairobi, Kenya",
    role: "Developer",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Here are some of the websites I've designed and developed. 
            From local businesses in Jigjiga to international clients in Australia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-card border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                project.featured ? "border-primary md:col-span-2 lg:col-span-1" : "border-border"
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full z-10">
                  Featured
                </div>
              )}

              <div className="aspect-video bg-gradient-to-br from-primary/10 to-teal-light flex items-center justify-center">
                <div className="text-center p-6">
                  <span className="text-2xl font-display font-bold text-primary group-hover:text-teal-dark transition-colors">
                    {project.name}
                  </span>
                  <p className="text-sm text-muted-foreground mt-2">{project.location}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-primary mb-3">
                  <ExternalLink className="w-4 h-4" />
                  <span className="group-hover:underline">{project.url.replace("https://", "")}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                  {project.role}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
