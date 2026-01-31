import { CheckCircle2, Mail, Phone, MessageCircle } from "lucide-react";

export const ApproveSection = () => {
  return (
    <section id="approve" className="py-20 bg-gradient-to-br from-primary to-teal-dark text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <CheckCircle2 className="w-16 h-16 mx-auto mb-6 opacity-80" />
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Let's transform Nejashi Hospital's online presence. I'm ready to begin 
          whenever you are. Choose your preferred package and let's schedule our first meeting.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6">Next Steps</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Choose Package</h4>
                <p className="text-sm opacity-80">Select Starter, Professional, or Premium</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Contact Me</h4>
                <p className="text-sm opacity-80">Call, WhatsApp, or email</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Schedule Meeting</h4>
                <p className="text-sm opacity-80">We'll start the design interview</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="tel:+251XXXXXXXXX"
            className="flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call Me
          </a>
          <a
            href="https://wa.me/251XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href="mailto:your@email.com"
            className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="opacity-80 mb-2">Proposal prepared for</p>
          <h4 className="text-2xl font-display font-bold">Nejashi Hospital, Jigjiga</h4>
          <p className="opacity-60 mt-4 text-sm">
            This proposal is valid for 30 days. Prices and availability subject to confirmation.
          </p>
        </div>
      </div>
    </section>
  );
};
