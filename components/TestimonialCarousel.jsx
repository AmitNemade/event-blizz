import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "Event BliZz - we give you the best wedding experience at a nominal cost which can be afforded by everyone. We create value for our customers and make their wedding experience blissful.",
    author: "Client Review",
  },
  {
    text: "Event BliZz brings structure to wedding planning with thoughtful logistics, elegant decor planning, and hospitality that feels personal.",
    author: "Happy Couple",
  },
  {
    text: "From venue styling to guest flow, our team turns celebrations into lasting memories while keeping each event budget-conscious.",
    author: "Corporate Client",
  },
];

export default function TestimonialCarousel({ className = "" }) {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const primaryGold = "#a38918";

  const handleStep = (nextIndex) => {
    setIsFading(true);
    setTimeout(() => {
      setIndex(nextIndex);
      setIsFading(false);
    }, 300);
  };

  const prev = () => {
    const nextIdx = index === 0 ? TESTIMONIALS.length - 1 : index - 1;
    handleStep(nextIdx);
  };

  const next = () => {
    const nextIdx = index === TESTIMONIALS.length - 1 ? 0 : index + 1;
    handleStep(nextIdx);
  };

  return (
    <section className={`relative overflow-hidden py-10 ${className}`}>
      <div className="max-w-4xl px-6 mx-auto text-center">
        {/* Large Decorative Quote Icon */}
        <div className="flex justify-center mb-4 opacity-20">
          <Quote size={60} style={{ color: primaryGold }} fill={primaryGold} />
        </div>

        <div className="relative min-h-[200px] flex flex-col items-center justify-center">
          {/* Main Testimonial Text */}
          <p
            className={`text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-white transition-all duration-300 italic ${
              isFading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            "{TESTIMONIALS[index].text}"
          </p>

          {/* Author/Tag */}
          <div
            className={`mt-8 text-xs font-bold uppercase tracking-[0.3em] transition-opacity duration-500 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
            style={{ color: primaryGold }}
          >
            — {TESTIMONIALS[index].author}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={prev}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all hover:border-[#a38918]"
            aria-label="Previous"
          >
            <ChevronLeft
              size={20}
              className="text-white group-hover:text-[#a38918]"
            />
          </button>

          {/* Pagination Dots */}
          <div className="flex gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => handleStep(i)}
                className="h-1.5 transition-all duration-300 rounded-full"
                style={{
                  width: i === index ? "24px" : "6px",
                  backgroundColor:
                    i === index ? primaryGold : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all hover:border-[#a38918]"
            aria-label="Next"
          >
            <ChevronRight
              size={20}
              className="text-white group-hover:text-[#a38918]"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
