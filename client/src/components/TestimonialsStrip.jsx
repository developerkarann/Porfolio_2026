const testimonials = [
  { stars: 5, quote: 'Exceptional design and delivery.' },
  { stars: 5, quote: 'Transformed our brand completely.' },
  { stars: 5, quote: 'Professional and creative.' },
  { stars: 5, quote: 'Exceeded all expectations.' },
  { stars: 5, quote: 'Highly recommend for any project.' },
];

function Star() {
  return (
    <svg className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function TestimonialsStrip() {
  return (
    <section className="py-8 border-y border-white/5 overflow-hidden">
      <div className="flex animate-scroll gap-8">
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 border border-white/5 min-w-[280px]"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: t.stars }).map((_, j) => <Star key={j} />)}
            </div>
            <p className="text-white/80 text-sm">"{t.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
