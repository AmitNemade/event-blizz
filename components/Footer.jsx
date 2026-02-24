import Link from "next/link";
import { Twitter, Facebook, Instagram, Linkedin, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-6 overflow-hidden text-white border-t border-white/5 bg-brandDark">
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 h-64 w-full -translate-x-1/2 bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-3 lg:items-start">
          {/* Column 1: Presence */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2 mb-6 text-primary">
              <MapPin size={16} />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                Our Presence
              </span>
            </div>
            <p className="font-serif text-lg leading-relaxed text-center text-gray-400 lg:text-left">
              Bangalore <span className="mx-2 text-primary/30">/</span> Chennai{" "}
              <br />
              Mumbai <span className="mx-2 text-primary/30">/</span> Delhi
            </p>
          </div>

          {/* Column 2: Brand Identity */}
          <div className="flex flex-col items-center justify-center text-center">
            <Link href="/" className="mb-4 group">
              <h2 className="font-serif text-3xl tracking-[0.2em] transition-colors group-hover:text-primary">
                EVENT <span className="font-bold text-primary">BLIZZ</span>
              </h2>
            </Link>
            <p className="text-xs italic font-light tracking-widest text-gray-500 uppercase">
              Creating Blissful Experiences
            </p>

            <div className="flex gap-8 mt-8">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-primary"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Action & Legal */}
          <div className="flex flex-col items-center lg:items-end">
            <Link
              href="/contact"
              className="inline-block border border-primary px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-primary transition-all hover:bg-primary hover:text-brandDark"
            >
              Book a Consultation
            </Link>

            <div className="mt-12 text-center lg:text-right">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500">
                &copy; {new Date().getFullYear()} EventBlizz Squad
              </p>
              <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-gray-600">
                Crafting magic across India
              </p>
            </div>
          </div>
        </div>

        {/* --- Added Bottom Credit Line --- */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-16 border-t border-white/5 md:flex-row">
          <div className="hidden w-1/4 h-px bg-gradient-to-r from-transparent to-white/5 md:block" />

          <p className="text-[9px] uppercase tracking-[0.5em] text-gray-500 font-light">
            Designed & Developed by{" "}
            <a
              href="https://amitnemade.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-bold transition-colors cursor-default text-primary/90 hover:text-primary"
            >
              Amit Nemade
            </a>
          </p>

          <div className="hidden w-1/4 h-px bg-gradient-to-l from-transparent to-white/5 md:block" />
        </div>
      </div>
    </footer>
  );
}
