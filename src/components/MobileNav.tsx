import { useState } from "react";
import { Menu, X } from "lucide-react";
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

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">M</span>
          </div>
          <span className="font-display text-lg font-semibold">Mohamed</span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-muted transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={cn(
          "absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg transition-all duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <nav className="p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
