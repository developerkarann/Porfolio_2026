const logos = ['CUMFOOD', 'asana', 'Framer', 'Medium', 'Linear'];

export default function ClientLogos() {
  return (
    <section className="py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {logos.map((name) => (
            <span
              key={name}
              className="text-white/40 font-display font-semibold text-lg hover:text-white/70 transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
