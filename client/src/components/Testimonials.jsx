const testimonials = [
  {
    quote: 'Karan Pal delivered beyond our expectations. The attention to detail and user focus made a real difference to our product.',
    name: 'Dr. Rinky Agarwal',
    title: 'Director, Navnetram Eye Care',
  },
  {
    quote: 'Working with Karan was a game-changer. His design thinking and execution are top-tier.',
    name: 'Siddharth Tomar',
    title: 'CEO, BAOIAM Pvt. Ltd.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-white/10 border-2 border-dark overflow-hidden"
              >
                <img
                  src={`https://i.pravatar.cc/80?img=${i + 10}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-white/80 font-medium">Trusted by 50+ Satisfied Clients</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="relative rounded-2xl bg-dark-muted border border-white/5 p-8 lg:p-10"
            >
              <span className="absolute top-6 left-6 text-6xl text-accent/30 font-display leading-none">"</span>
              <p className="text-white/90 text-lg leading-relaxed pl-8 mt-4">{t.quote}</p>
              <footer className="mt-6 pl-8">
                <cite className="not-italic font-display font-semibold text-white">{t.name}</cite>
                <p className="text-white/60 text-sm">{t.title}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
