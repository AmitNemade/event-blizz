import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";

export default function ContactPage() {
  return (
    <Layout title="Contact Us | EventBlizz" active="contact">
      <section className="relative flex items-center justify-center min-h-screen px-6 pt-32 pb-20 bg-brandDark">
        {/* Background Glows for Depth */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <header className="mb-16 text-center">
            <h1 className="font-serif text-5xl tracking-tight text-white sm:text-7xl">
              Let's Create <span className="italic text-primary">Magic</span>
            </h1>
          </header>

          <div className="grid overflow-hidden border border-white/10 shadow-2xl lg:grid-cols-[1fr_1.5fr] rounded-sm bg-[#050a1f]">
            {/* --- Info Panel --- */}
            <div className="bg-[#030614] p-8 text-white lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
              <h2 className="mb-12 font-serif text-3xl tracking-wide">
                Event <span className="font-bold text-primary">Blizz</span>
              </h2>

              <div className="space-y-10">
                <div className="flex items-start gap-5">
                  <div className="p-3 border rounded-lg bg-primary/10 border-primary/20">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
                      Our Presence
                    </p>
                    <p className="font-light leading-relaxed text-gray-300">
                      Bangalore / Mumbai / Chennai / Delhi
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="p-3 border rounded-lg bg-primary/10 border-primary/20">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <a
                    href="tel:9710284524"
                    className="text-lg tracking-wider text-gray-200 transition hover:text-primary"
                  >
                    9710284524
                  </a>
                </div>

                <div className="flex items-center gap-5">
                  <div className="p-3 border rounded-lg bg-primary/10 border-primary/20">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <a
                    href="mailto:info.eventblizz@gmail.com"
                    className="tracking-wide text-gray-200 transition hover:text-primary"
                  >
                    info.eventblizz@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* --- High Visibility Form Panel --- */}
            <div className="p-8 lg:p-12 bg-white/[0.02] backdrop-blur-md">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  {/* Name Field */}
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-4 text-white outline-none transition-all duration-300 focus:border-primary focus:bg-white/[0.07] focus:ring-1 focus:ring-primary/30 placeholder:text-gray-600"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-4 text-white outline-none transition-all duration-300 focus:border-primary focus:bg-white/[0.07] focus:ring-1 focus:ring-primary/30 placeholder:text-gray-600"
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                    Tell us about your event
                  </label>
                  <textarea
                    rows="5"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-4 text-white outline-none transition-all duration-300 focus:border-primary focus:bg-white/[0.07] focus:ring-1 focus:ring-primary/30 placeholder:text-gray-600 resize-none"
                    placeholder="Date, Location, and Vision..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button className="group relative w-full bg-primary py-5 text-[11px] font-bold uppercase tracking-[0.5em] text-brandDark transition-all hover:bg-[#c4a622] hover:shadow-[0_0_40px_rgba(163,137,24,0.4)] overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Send Inquiry{" "}
                      <Send
                        size={14}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                    {/* Animated shine effect */}
                    <div className="absolute top-0 block w-1/2 h-full transform -skew-x-12 -inset-full z-5 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Add this to your tailwind.config.js for the button shine */}
      <style jsx>{`
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        .animate-shine {
          animation: shine 0.8s;
        }
      `}</style>
    </Layout>
  );
}
