import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "your-website", label: "Your New Website" },
  { id: "our-process", label: "Our Process" },
  { id: "investment", label: "Your Investment" },
  { id: "projects", label: "My Projects" },
  { id: "about", label: "About Me" },
  { id: "approve", label: "Approve Proposal" },
];

export const ProposalSidebar = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col z-50 hidden lg:flex">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">A</span>
          </div>
          <span className="font-display text-xl font-semibold text-sidebar-foreground">
            Abdirahman
          </span>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  activeSection === item.id
                    ? "bg-sidebar-accent text-sidebar-accent-foreground border-l-4 border-primary"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <p className="text-xs text-muted-foreground text-center">
          Proposal for Nejashi Hospital
        </p>
        <p className="text-xs text-muted-foreground text-center mt-1">
          Jigjiga, Ethiopia
        </p>
      </div>
    </aside>
  );
};
