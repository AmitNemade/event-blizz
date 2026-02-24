const SECTIONS = [
  {
    id: "wedding",
    title: "WEDDING EVENTS",
    intro:
      "Acting as your personal wedding concierge service, we define your vision and pull all elements together with seamless planning, budgets, schedules, supplier sourcing, guest management, and decor execution.",
    cards: [
      {
        image: "/images/1.png",
        title: "Destination Wedding",
        text: "Full destination planning with venue, travel, family flow, and event execution support.",
      },
      {
        image: "/images/2.png",
        title: "Pre Wedding Photography",
        text: "Coordinated photoshoots and event photography teams aligned to your style and budget.",
      },
      {
        image: "/images/3.png",
        title: "Wedding Invites",
        text: "Theme-based invitation concepting, design support, and print coordination.",
      },
      {
        image: "/images/4.png",
        title: "Bridal Styling",
        text: "Hair, makeup, outfits, accessories, and styling consultation matched to your profile.",
      },
      {
        image: "/images/5.png",
        title: "Photography & Cinematography",
        text: "Photo and video teams that work in sync with event flow to capture key moments.",
      },
      {
        image: "/images/6.png",
        title: "Decor and Design",
        text: "Stage, mandap, floral styling, and visual language tailored to your celebration.",
      },
    ],
  },
  {
    id: "hospitality",
    title: "LOGISTICS AND HOSPITALITY MANAGEMENT",
    intro:
      "We manage guest movement, food services, and hospitality operations with strong on-ground control and clear communication.",
    cards: [
      {
        image: "/images/7.png",
        title: "Logistics & Transportation",
        text: "Coordinated movement plans for family and guests across events and venues.",
      },
      {
        image: "/images/8.png",
        title: "Food & Beverages",
        text: "Menu planning and execution with service-level control across all functions.",
      },
      {
        image: "/images/9.png",
        title: "Hospitality Management",
        text: "Arrival/departure, assistance desks, and concierge-style guest handling.",
      },
    ],
  },
  {
    id: "more",
    title: "WHAT ELSE WE DO",
    intro:
      "Beyond planning and logistics, we provide specialists across entertainment, security, gifting, and production support.",
    cards: [
      {
        image: "/images/10.png",
        title: "Artist Management",
        text: "Artist booking and show flow management for event entertainment.",
      },
      {
        image: "/images/11.png",
        title: "Security & Valets",
        text: "Coordinated security and valet operations for smooth guest arrivals.",
      },
      {
        image: "/images/12.png",
        title: "Entertainment",
        text: "From DJs to live acts, we curate performances that match your event energy.",
      },
      {
        image: "/images/13.png",
        title: "Choreography",
        text: "Sangeet choreography planning and rehearsal coordination.",
      },
      {
        image: "/images/14.png",
        title: "Special Effects",
        text: "Production effects and controlled visual moments for memorable highlights.",
      },
      {
        image: "/images/15.png",
        title: "Favors and Gifts",
        text: "Curated gifting concepts and event-wise packaging support.",
      },
    ],
  },
];

import { useEffect, useState, useRef } from "react";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

export default function ServicePage() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    sectionRefs.current[id].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Layout title="Services | EventBlizz" active="services">
      <section className="relative min-h-screen px-6 pt-40 pb-20 bg-brandDark lg:px-12">
        {/* Background Atmospheric Glow */}
        <div className="fixed top-0 right-0 h-[600px] w-[600px] bg-primary/5 blur-[150px] pointer-events-none" />

        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-20 lg:flex-row">
            {/* LEFT: Sticky Navigation (The Sidebar) */}
            <aside className="sticky hidden w-1/4 lg:block top-40 h-fit">
              <div className="space-y-8">
                <div>
                  <h1 className="mb-4 font-serif text-5xl italic text-white">
                    Services
                  </h1>
                  <p className="text-gray-500 text-xs uppercase tracking-[0.4em] font-bold">
                    EventBlizz Portfolio
                  </p>
                </div>

                <nav className="flex flex-col gap-6 pt-10 border-l border-white/5">
                  {SECTIONS.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollTo(section.id)}
                      className={`group flex items-center gap-4 pl-6 text-left transition-all duration-500 ${
                        activeSection === section.id
                          ? "text-primary scale-105"
                          : "text-white/30 hover:text-white/60"
                      }`}
                    >
                      <span
                        className={`h-px transition-all duration-500 bg-primary ${
                          activeSection === section.id
                            ? "w-8"
                            : "w-0 group-hover:w-4"
                        }`}
                      />
                      <span className="font-serif text-lg tracking-widest uppercase">
                        {section.title}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* RIGHT: Content Feed */}
            <main className="space-y-32 lg:w-3/4">
              {SECTIONS.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  ref={(el) => (sectionRefs.current[section.id] = el)}
                  className="transition-opacity duration-1000 scroll-mt-40"
                >
                  {/* Section Intro */}
                  <div className="mb-12">
                    <h2 className="mb-6 font-serif text-4xl tracking-wider text-white uppercase lg:text-5xl">
                      {section.title}
                    </h2>
                    <p className="max-w-2xl pl-6 text-xl italic font-light leading-relaxed text-gray-400 border-l border-primary/30">
                      "{section.intro}"
                    </p>
                  </div>

                  {/* Visual Grid */}
                  <div className="grid gap-6 md:grid-cols-2">
                    {section.cards.map((card, idx) => (
                      <article
                        key={idx}
                        className="group relative h-[500px] overflow-hidden bg-black/40 border border-white/5 transition-all duration-700 hover:border-primary/20"
                      >
                        <img
                          src={card.image}
                          className="h-full w-full object-cover opacity-60 grayscale-[50%] transition-all duration-[2s] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                          alt={card.title}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brandDark via-transparent to-transparent opacity-80" />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8">
                          <div className="flex items-center gap-2 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-2">
                            <Sparkles size={12} /> Excellence
                          </div>
                          <h3 className="mb-3 font-serif text-2xl tracking-wide text-white uppercase">
                            {card.title}
                          </h3>
                          <p className="overflow-hidden text-sm font-light leading-relaxed text-gray-400 transition-all duration-500 opacity-0 max-h-0 group-hover:max-h-24 group-hover:opacity-100">
                            {card.text}
                          </p>
                          <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                            Enquire <ArrowRight size={14} />
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </main>
          </div>
        </div>
      </section>
    </Layout>
  );
}
