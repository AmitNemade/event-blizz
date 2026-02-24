import Link from "next/link";
import Layout from "@/components/Layout";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { ArrowDown } from "lucide-react";

export default function HomePage() {
  return (
    <Layout title="Home | EventBlizz" active="home">
      {/* --- HERO SECTION WITH PARALLAX --- */}
      <section
        className="relative flex items-center justify-center min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/eb3.jpeg')" }}
      >
        {/* Navy Tint Overlay - Matching the logo's base color */}
        <div className="absolute inset-0 bg-brandDark/60" />

        <div className="relative z-10 text-center text-white">
          <div className="mb-4 space-y-2">
            {/* Using font-serif to match the logo's elegant EB and EVENT BLIZZ text */}
            <h1 className="font-serif text-5xl tracking-[0.3em] uppercase sm:text-7xl lg:text-8xl">
              Creating
            </h1>
            <h1 className="font-serif text-5xl tracking-[0.3em] uppercase sm:text-7xl lg:text-8xl">
              Unforgettable
            </h1>
            <h1 className="font-serif text-5xl tracking-[0.3em] uppercase sm:text-7xl lg:text-8xl">
              Memories
            </h1>
          </div>

          <div className="mt-12">
            <a
              href="#servicesec"
              className="group inline-flex items-center gap-3 border border-primary px-12 py-4 text-sm font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-primary hover:text-brandDark"
            >
              Explore{" "}
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* --- SERVICES PREVIEW SECTION --- */}
      <section id="servicesec" className="py-24 bg-brandDark">
        <div className="mx-auto grid max-w-[1300px] gap-0 px-6 lg:grid-cols-[1fr_1.5fr]">
          {/* Info Side - Using a slightly darker navy shade for depth */}
          <div className="flex flex-col items-center justify-center bg-[#030614] p-12 text-center border border-white/5 lg:p-20 shadow-2xl">
            <h5 className="font-serif text-3xl tracking-[0.4em] text-white uppercase">
              Services
            </h5>
            <div className="my-6 text-4xl text-primary">✦</div>
            {/* Tagline style: Italic and lighter to match "Creating Blissful Experience" from logo */}
            <p className="mb-10 text-xl tracking-[0.1em] text-gray-400 font-light italic leading-relaxed">
              "Turn your dream
              <br />
              into a reality"
            </p>
            <Link
              href="/services"
              className="inline-block px-10 py-3 text-xs font-bold tracking-widest uppercase transition-all border border-primary text-primary hover:bg-primary hover:text-white"
            >
              Discover
            </Link>
          </div>

          {/* Image Side */}
          <div className="h-[400px] lg:h-full overflow-hidden border-y lg:border-y-0 lg:border-r border-white/5">
            <img
              src="/images/eb1.jpeg"
              alt="Our Services"
              className="h-full w-full object-cover transition-transform duration-[2s] hover:scale-105 opacity-80"
            />
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <div className="py-24 border-t bg-brandDark border-white/5">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="font-serif text-white text-2xl tracking-[0.3em] uppercase">
            Blissful Experiences
          </h2>
          <div className="w-20 h-px mx-auto mt-4 opacity-50 bg-primary"></div>
        </div>
        <TestimonialCarousel />
      </div>

      {/* --- GALLERY PARALLAX SECTION --- */}
      <section className="pb-32 bg-brandDark">
        <div className="mx-auto max-w-[1300px] px-6">
          <div
            className="relative flex min-h-[700px] items-center justify-center bg-cover bg-fixed bg-center lg:justify-end overflow-hidden"
            style={{ backgroundImage: "url('/images/eb2.jpeg')" }}
          >
            {/* Navy tint overlay to unify the parallax image with the brand color */}
            <div className="absolute inset-0 bg-brandDark/50" />

            <div className="relative z-10 w-full max-w-md p-12 text-center border shadow-2xl bg-brandDark/80 backdrop-blur-xl border-white/10 lg:mr-24">
              <h5 className="font-serif text-3xl tracking-[0.4em] text-white uppercase">
                Gallery
              </h5>
              <div className="my-6 text-4xl text-primary">✦</div>
              <p className="mb-10 text-xl tracking-[0.1em] text-gray-300 font-light italic leading-relaxed">
                Moments worth
                <br />
                holding onto
              </p>
              <Link
                href="/gallery"
                className="inline-block px-10 py-3 text-xs font-bold tracking-widest uppercase transition-all border border-primary text-primary hover:bg-primary hover:text-white"
              >
                View Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
