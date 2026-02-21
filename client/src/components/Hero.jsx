const tags = ['#SOFTWARE DEVELOPER', '#MERN STACK', '#REACT', '#NODE.JS'];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 lg:pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle warm glow - stronger on the right */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_40%,rgba(251,191,36,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(250,204,21,0.06),transparent)]" />

      <div className="max-w-7xl mx-auto relative">
        {/* 1. Name - large, centered */}
        <div className="text-center mb-6">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight">
            KARAN PAL
          </h1>
        </div>

        {/* 2. Tags - centered row below name */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-14 lg:mb-16">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center text-white/90 text-sm sm:text-base font-medium"
            >
              <span className="text-accent">#</span>
              {tag.replace('#', '')}
            </span>
          ))}
        </div>

        {/* 3. Two-column block: Left = image, Right = intro + button. Mobile: image first, then content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-25 items-center">
          {/* Left - Image (first on mobile) */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-1">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="./main2.png"
                alt="Karan Pal"
                className="w-full h-full object-cover object-top"
              />
              {/* Optional subtle grid/glow overlay for tech feel */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, rgba(251,191,36,0.15) 0%, transparent 60%),
                    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </div>
          </div>

          {/* Right - Description (intro) + Button (second on mobile) */}
          <div className="order-2 lg:order-2">
            <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed">
              I design and build high-performance, scalable, and secure web applications that power modern businesses. From intuitive frontends to robust distributed backends, I transform complex ideas into seamless digital experiences. Clean architecture, optimized performance, and production-ready deployments. Let's bring your ideas to life!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-hover transition-colors"
            >
              Hire Me
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
