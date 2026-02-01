export const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="font-display text-xl font-semibold">Mohamed</span>
            </div>
            <p className="text-white/70 text-sm">
              Professional web design & development for businesses in Jigjiga and beyond.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors"
                >
                  Introduction
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("your-website")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors"
                >
                  Your Website
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("investment")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors"
                >
                  Investment
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Jigjiga, Ethiopia</li>
              <li>Phone: +251 94 883 1748</li>
              <li>Email: mohamedahmedabdi@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          <p>© 2026 Mohamed Web Design. All rights reserved.</p>
          <p className="mt-2">Proposal for Nejashi Hospital, Jigjiga</p>
        </div>
      </div>
    </footer>
  );
};
