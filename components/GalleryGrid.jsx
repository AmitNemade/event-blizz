import { useMemo, useState } from "react";
import { Maximize2, Info, X, ArrowUpRight, Instagram } from "lucide-react";

const FILTERS = [
  { id: "all", label: "All Works", category: "all" },
  { id: "bangalore", label: "Bangalore", category: "location" },
  { id: "chennai", label: "Chennai", category: "location" },
  { id: "mumbai", label: "Mumbai", category: "location" },
  { id: "delhi", label: "Delhi", category: "location" },
  { id: "wedding", label: "Wedding Events", category: "management" },
  { id: "logistics", label: "Logistics & Hospitality", category: "management" },
  { id: "decor", label: "Design & Decor", category: "management" },
];

const GALLERY_ITEMS = [
  { src: "/images/eb1.jpeg", location: "Bangalore", type: "Wedding Events" },
  { src: "/images/eb2.jpeg", location: "Mumbai", type: "Design and Decor" },
  { src: "/images/eb3.jpeg", location: "Chennai", type: "Wedding Events" },
  {
    src: "/images/eb4(JPEG)2.jpg",
    location: "Delhi",
    type: "Logistics and Hospitality Management",
  },
];

export default function GalleryGrid() {
  const [selectedFilter, setSelectedFilter] = useState("All Works");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = useMemo(() => {
    if (selectedFilter === "All Works") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter(
      (item) =>
        item.location === selectedFilter || item.type === selectedFilter,
    );
  }, [selectedFilter]);

  return (
    <div className="min-h-screen text-white bg-brandDark">
      {/* Background Decorative Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/5 blur-[150px] pointer-events-none" />

      {/* Filter Section */}
      <section className="relative z-10 px-6 pt-40 pb-16">
        <div className="max-w-6xl mx-auto">
          <header className="mb-16 text-center">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.6em] text-gray-500 mb-4">
              Our Portfolio
            </h2>
            <h1 className="font-serif text-5xl text-white sm:text-6xl">
              Captured{" "}
              <span className="italic font-medium text-primary">Moments</span>
            </h1>
            <div className="w-24 h-px mx-auto mt-8 bg-primary/30" />
          </header>

          <div className="flex flex-wrap justify-center gap-4">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.label)}
                className={`transition-all duration-500 px-8 py-2 text-[9px] font-bold uppercase tracking-[0.25em] border ${
                  selectedFilter === filter.label
                    ? "bg-primary border-primary text-brandDark shadow-[0_10px_30px_rgba(163,137,24,0.2)]"
                    : "bg-transparent border-white/5 text-gray-500 hover:border-primary/50 hover:text-primary"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative z-10 px-6 pb-32">
        <div className="gap-8 mx-auto space-y-8 max-w-[1400px] columns-1 sm:columns-2 lg:columns-3">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-all duration-700 border group break-inside-avoid bg-brandDark border-white/5 hover:border-primary/30"
            >
              <img
                src={item.src}
                className="w-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-70 group-hover:opacity-100"
                alt="Event Gallery"
              />

              {/* Cinematic Overlay - Using brandDark gradient */}
              <div className="absolute inset-0 flex flex-col justify-end p-10 transition-all duration-500 opacity-0 bg-gradient-to-t from-brandDark via-brandDark/40 to-transparent group-hover:opacity-100">
                <div className="mb-8 transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary mb-2">
                    {item.location}
                  </p>
                  <h3 className="font-serif text-2xl leading-tight tracking-wide text-white uppercase">
                    {item.type}
                  </h3>
                </div>

                <div className="flex items-center gap-4 transition-transform duration-700 transform translate-y-4 group-hover:translate-y-0">
                  <button
                    onClick={() => setSelectedImage(item.src)}
                    className="flex items-center justify-center w-12 h-12 text-white transition-all border rounded-full border-white/10 backdrop-blur-xl hover:bg-primary hover:border-primary hover:text-brandDark"
                  >
                    <Maximize2 size={18} strokeWidth={1.5} />
                  </button>

                  <div className="relative group/info">
                    <button className="flex items-center justify-center w-12 h-12 text-white transition-all border rounded-full border-white/10 backdrop-blur-xl hover:bg-white hover:text-brandDark">
                      <Info size={18} strokeWidth={1.5} />
                    </button>
                    {/* Tooltip Info */}
                    <div className="absolute left-0 w-64 transition-all duration-500 scale-95 opacity-0 pointer-events-none bottom-16 group-hover/info:scale-100 group-hover/info:opacity-100">
                      <div className="bg-brandDark/95 border border-primary/20 p-5 text-[11px] leading-relaxed text-gray-400 backdrop-blur-xl shadow-2xl">
                        <span className="block mb-2 font-bold tracking-[0.3em] text-primary uppercase">
                          The Blissful Standard
                        </span>
                        A bespoke experience curated in {item.location},
                        showcasing our squad's commitment to precision and
                        elegance.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="relative px-6 py-24 overflow-hidden bg-brandDark">
        {/* Decorative Brand Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Side: Brand Messaging */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 border rounded-full bg-primary/10 border-primary/20">
                  <Instagram size={20} className="text-primary" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-500">
                  Live on Social
                </span>
              </div>

              <h2 className="mb-6 font-serif text-5xl leading-tight text-white">
                Beyond the <br />
                <span className="italic text-primary">Still Moments</span>
              </h2>

              <p className="max-w-md mb-10 text-lg font-light leading-relaxed text-gray-400">
                Follow our journey on Instagram for exclusive behind-the-scenes
                access, event films, and live updates from our latest
                celebrations across India.
              </p>

              <a
                href="https://www.instagram.com/eventblizz_/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 border border-primary/30 px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-primary transition-all hover:bg-primary hover:text-brandDark hover:shadow-[0_0_30px_rgba(163,137,24,0.3)]"
              >
                Explore our Feed
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>

            {/* Right Side: Mockup Bento Grid */}
            <div className="relative grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div className="overflow-hidden border h-80 border-white/5">
                <img
                  src="/images/eb1.jpeg"
                  className="object-cover w-full h-full transition-opacity duration-700 opacity-60 hover:opacity-100"
                  alt="IG Preview 1"
                />
              </div>
              {/* Small Stack */}
              <div className="grid gap-4">
                <div className="h-[152px] overflow-hidden border border-white/5">
                  <img
                    src="/images/eb3.jpeg"
                    className="object-cover w-full h-full transition-opacity duration-700 opacity-60 hover:opacity-100"
                    alt="IG Preview 2"
                  />
                </div>
                <div className="h-[152px] overflow-hidden border border-white/5 bg-primary/10 flex items-center justify-center group cursor-pointer">
                  <div className="text-center transition-transform duration-500 group-hover:scale-110">
                    <p className="font-serif text-3xl text-primary">500+</p>
                    <p className="text-[8px] uppercase tracking-widest text-gray-500">
                      Stories Filed
                    </p>
                  </div>
                </div>
              </div>
              {/* Bottom Wide Link */}
              <div className="relative h-40 col-span-2 overflow-hidden border border-white/5 group">
                <img
                  src="/images/eb4(JPEG)2.jpg"
                  className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-[2s]"
                  alt="IG Preview 3"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold uppercase tracking-[0.6em] border-b border-primary/50 pb-2">
                    @eventblizz_
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brandDark/95 backdrop-blur-xl p-6 transition-all"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute transition-colors top-10 right-10 text-white/20 hover:text-primary">
            <X size={40} strokeWidth={1} />
          </button>

          <div
            className="relative max-h-[80vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Thematic Frame */}
            <div className="absolute border pointer-events-none -inset-4 border-primary/20" />

            <img
              src={selectedImage}
              className="relative z-10 max-h-full max-w-full object-contain shadow-[0_0_100px_rgba(0,0,0,0.8)]"
              alt="Full view"
            />
          </div>
        </div>
      )}
    </div>
  );
}
