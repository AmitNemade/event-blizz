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
import { ArrowRight, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function ServicePage() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -40% 0px" },
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Matches your navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Layout title="Services | EventBlizz" active="services">
      {/* VITAL FIX: We use h-full and items-start. 
          The 'relative' on the section is fine, but check your Layout.js 
          to ensure it doesn't have 'overflow-hidden'. 
      */}
      <section className="px-6 pt-40 pb-32 bg-brandDark lg:px-12">
        <div className="mx-auto max-w-[1300px]">
          {/* Using a Grid layout often behaves better for sticky than Flex in some browsers */}
          <div className="grid items-start grid-cols-1 gap-16 lg:grid-cols-4">
            {/* --- SIDEBAR --- */}
            <aside className="sticky self-start hidden lg:block top-32 h-fit">
              <header className="mb-12">
                <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.5em] text-gray-500">
                  Our Expertise
                </span>
                <h1 className="font-serif text-5xl font-light leading-tight text-white">
                  Bespoke <br />
                  <span className="italic font-medium text-primary">
                    Services
                  </span>
                </h1>
              </header>

              <nav className="flex flex-col gap-8 border-l border-white/5">
                {SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={`group flex items-center gap-4 pl-6 text-left transition-all duration-500 ${
                      activeSection === section.id
                        ? "text-primary translate-x-2"
                        : "text-white/20 hover:text-white/50"
                    }`}
                  >
                    <div
                      className={`h-1.5 w-1.5 rounded-full bg-primary transition-all duration-500 ${
                        activeSection === section.id
                          ? "scale-100 opacity-100 shadow-[0_0_8px_#a38918]"
                          : "scale-0 opacity-0"
                      }`}
                    />
                    <span className="font-serif text-sm tracking-[0.3em] uppercase">
                      {section.title}
                    </span>
                  </button>
                ))}
              </nav>
            </aside>

            {/* --- MAIN CONTENT --- */}
            <div className="space-y-32 lg:col-span-3">
              {SECTIONS.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  ref={(el) => (sectionRefs.current[section.id] = el)}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-6 mb-10">
                    <h2 className="font-serif text-3xl tracking-widest text-white uppercase">
                      {section.title}
                    </h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                  </div>

                  <p className="max-w-2xl pl-6 mb-12 text-lg italic font-light leading-relaxed text-gray-400 border-l-2 border-primary/20">
                    "{section.intro}"
                  </p>

                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {section.cards.map((card, idx) => (
                      <article
                        key={idx}
                        className="group relative h-[380px] overflow-hidden bg-[#020510] border border-white/5 transition-all duration-500 hover:border-primary/40"
                      >
                        <img
                          src={card.image}
                          className="h-full w-full object-cover opacity-50 transition-transform duration-[2s] group-hover:scale-110 group-hover:opacity-30"
                          alt={card.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brandDark via-transparent to-transparent" />
                        <div className="absolute inset-0 flex flex-col justify-end p-8">
                          <Sparkles
                            className="mb-3 transition-opacity opacity-0 text-primary group-hover:opacity-100"
                            size={18}
                          />
                          <h3 className="mb-2 font-serif text-xl tracking-widest text-white uppercase">
                            {card.title}
                          </h3>
                          <div className="overflow-hidden transition-all duration-500 opacity-0 max-h-0 group-hover:max-h-24 group-hover:opacity-100">
                            <p className="mb-4 text-sm font-light text-gray-400">
                              {card.text}
                            </p>
                          </div>
                          <Link
                            href="/contact"
                            className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-[0.2em]"
                          >
                            Enquire Now{" "}
                            <ArrowRight
                              size={14}
                              className="transition-transform group-hover:translate-x-2"
                            />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
