import Layout from "@/components/Layout";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function AboutPage() {
  const primaryGold = "#a38918";

  return (
    <Layout title="About Us | EventBlizz" active="about">
      {/* Main Section - Deep Black Background for maximum contrast */}
      <section className="relative overflow-hidden bg-[#0a0a0a] pt-32 pb-20 lg:pt-48">
        {/* Subtle background decoration */}
        <div
          className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full blur-[150px] opacity-10"
          style={{ backgroundColor: primaryGold }}
        ></div>

        <div className="px-6 mx-auto max-w-7xl">
          <div className="relative grid items-center gap-16 lg:grid-cols-12">
            {/* Left Column: Image with Floating Frame */}
            <div className="relative lg:col-span-5">
              <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
                <img
                  src="/images/Gaurav Singh.jpg"
                  alt="Gaurav Singh"
                  className="object-cover w-full h-full transition-transform duration-1000 hover:scale-105"
                />
              </div>
              {/* The "Floating" Gold Frame for depth */}
              <div
                className="absolute -left-6 -top-6 hidden h-full w-full border border-[#a38918]/40 lg:block"
                style={{ zIndex: 0 }}
              ></div>
              {/* Vertical Title Tag */}
              <div className="absolute hidden overflow-visible rotate-90 -right-8 bottom-12 lg:block">
                <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[1em] text-white/30">
                  ESTABLISHED 2019
                </span>
              </div>
            </div>

            {/* Right Column: High-Impact Typography */}
            <div className="relative z-20 lg:col-span-7">
              <header className="mb-8">
                <span
                  className="text-xs font-bold uppercase tracking-[0.5em]"
                  style={{ color: primaryGold }}
                >
                  Meet the Founder
                </span>
                <h1 className="mt-4 text-5xl font-light leading-tight text-white sm:text-6xl lg:text-7xl">
                  Making Dreams <br />
                  <span
                    className="font-serif italic"
                    style={{ color: primaryGold }}
                  >
                    Come True.
                  </span>
                </h1>
              </header>

              <div className="max-w-xl space-y-6 text-lg leading-relaxed text-gray-400">
                <p>
                  A wedding is a singular, sacred moment. At
                  <span className="font-medium text-white"> Event Blizz</span>,
                  we don’t just plan events; we curate atmosphere.
                </p>
                <p
                  className="pl-6 border-l-2"
                  style={{ borderColor: primaryGold }}
                >
                  Our squad is renowned for versatility—bridging the gap between
                  lavish high-budget spectacles and intimate, soulful
                  celebrations. Every detail is a deliberate choice in the
                  pursuit of perfection.
                </p>
              </div>

              {/* Signature Section */}
              <div className="flex flex-col items-start gap-4 mt-12">
                <div>
                  <h4 className="text-2xl font-semibold text-white">
                    Gaurav Singh
                  </h4>
                  <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                    Founder & Creative Director
                  </p>
                </div>
                {/* Gold Sparkle Icon */}
                <div className="text-4xl" style={{ color: primaryGold }}>
                  ✦
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition to Testimonials */}
      <section className="bg-[#0a0a0a] py-24">
        <div className="max-w-6xl px-6 pt-24 mx-auto border-t border-white/5">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl font-light tracking-widest text-white uppercase">
              Client <span className="font-bold">Stories</span>
            </h2>
            <div className="flex-1 h-px mx-8 bg-white/10"></div>
          </div>
          <TestimonialCarousel />
        </div>
      </section>
    </Layout>
  );
}
