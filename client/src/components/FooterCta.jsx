export default function FooterCta() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-accent">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <h2 className="font-display font-bold text-2xl text-white">Get a project?</h2>
        </div>
        <h3 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-8">
          Surround yourself with an expert
        </h3>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-hover transition-colors text-lg"
        >
          Start a Project Now
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
