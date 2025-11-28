import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  Phone,
} from "lucide-react";

export function Contact() {
  const contacts = [
    {
      name: "Email",
      icon: Mail,
      handle: "yuta.koike.cs@gmail.com",
      link: "mailto:yuta.koike.cs@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      handle: "Yuta Koike",
      link: "https://www.linkedin.com/in/yuta-koike-1139b8301/",
    },
    {
      name: "Instagram",
      icon: Instagram,
      handle: "Kouuuuuta",
      link: "https://www.instagram.com/kouuuuuta/",
    },
    {
      name: "Facebook",
      icon: Facebook,
      handle: "Yuta Koike",
      link: "https://www.facebook.com/yuta.koike.14811",
    },
    {
      name: "Phone",
      icon: Phone,
      handle: "+63 9673822241",
      link: "https://www.facebook.com/yuta.koike.14811",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      <div className="fixed inset-0 bg-linear-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(78,204,163,0.1),transparent_50%)]" />
      </div>

      <div className="fixed inset-0 bg-gradient-radial from-transparent via-black/20 to-black/60 pointer-events-none" />

      <div className="fixed top-12 left-12 z-50">
        <Link
          to="/"
          className="flex items-center gap-3 text-amber-200/60 hover:text-amber-200 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs tracking-[0.2em] font-light">BACK</span>
        </Link>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-12 py-32">
        <div className="mb-32" style={{ animation: "fadeIn 0.8s ease-out" }}>
          <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-6 bg-linear-to-r from-amber-200 via-amber-100 to-amber-200 bg-clip-text text-transparent">
            Let's talk.
          </h1>
          <div className="w-16 h-px bg-amber-200/30 mb-8" />
          <p className="text-lg text-gray-400 font-light leading-relaxed max-w-md">
            I'm always open to discussing new projects, creative ideas, or
            opportunities.
          </p>
        </div>

        <div className="space-y-1 mb-32">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between py-8 border-b border-amber-200/10 hover:border-amber-200/30 transition-all duration-500 overflow-hidden"
                style={{
                  animation: `slideIn 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-amber-200/5 to-transparent"
                    style={{
                      animation: "shimmer 2s ease-in-out infinite",
                    }}
                  />
                </div>

                <div className="flex items-center gap-8 relative z-10">
                  <div className="relative">
                    <Icon className="w-5 h-5 text-amber-200/40 group-hover:text-amber-200 transition-all duration-500 group-hover:scale-110" />

                    <div className="absolute inset-0 bg-amber-200/0 group-hover:bg-amber-200/20 blur-xl transition-all duration-500" />
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.15em] text-amber-200/60 mb-1 font-light group-hover:text-amber-200/80 transition-colors duration-300">
                      {contact.name.toUpperCase()}
                    </div>
                    <div className="text-xl font-light text-amber-100 group-hover:translate-x-2 transition-all duration-500 group-hover:text-amber-200">
                      {contact.handle}
                    </div>
                  </div>
                </div>

                <ArrowLeft className="w-4 h-4 rotate-180 text-amber-200/30 group-hover:text-amber-200 group-hover:translate-x-2 transition-all duration-500 relative z-10" />

                <div className="absolute bottom-0 left-0 w-0 h-px bg-linear-to-r from-amber-200/50 to-transparent group-hover:w-full transition-all duration-700" />
              </a>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-16 mb-32 pt-16 border-t border-amber-200/10">
          <div style={{ animation: "fadeIn 0.8s ease-out 0.2s both" }}>
            <div className="text-xs tracking-[0.15em] text-amber-200/60 mb-4 font-light">
              LOCATION
            </div>
            <p className="text-sm font-light text-gray-400 leading-relaxed">
              Quezon City
              <br />
              Philippines
            </p>
          </div>
          <div style={{ animation: "fadeIn 0.8s ease-out 0.3s both" }}>
            <div className="text-xs tracking-[0.15em] text-amber-200/60 mb-4 font-light">
              AVAILABILITY
            </div>
            <p className="text-sm font-light text-gray-400 leading-relaxed">
              Open to projects
              <br />
              24-48h response
            </p>
          </div>
          <div style={{ animation: "fadeIn 0.8s ease-out 0.4s both" }}>
            <div className="text-xs tracking-[0.15em] text-amber-200/60 mb-4 font-light">
              TIMEZONE
            </div>
            <p className="text-sm font-light text-gray-400 leading-relaxed">
              PST (UTC-8)
              <br />
              9AM - 6PM
            </p>
          </div>
        </div>

        <div
          className="pt-16 border-t border-amber-200/10 flex justify-between items-center"
          style={{ animation: "fadeIn 0.8s ease-out 0.5s both" }}
        >
          <div className="text-xs tracking-[0.15em] text-amber-200/60 font-light">
            © 2025 Yuta Koike
          </div>
          <div className="text-xs tracking-[0.15em] text-amber-200/60 font-light"></div>
        </div>
      </div>
    </div>
  );
}
