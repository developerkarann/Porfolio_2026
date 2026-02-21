export default function RecentProjects() {
  return (
    <section id="projects" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div className="flex items-center gap-2">
            <span className="text-accent">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </span>
            <h2 className="font-display font-bold text-2xl lg:text-3xl text-white">Recent Projects</h2>
          </div>
          <a href="#projects" className="text-sm text-white/70 hover:text-accent transition-colors inline-flex items-center gap-1">
            Explore More Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
        <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&h=600&fit=crop"
            alt="M-Mockups: MacBook Air"
            className="w-full h-[320px] sm:h-[400px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-white/70 text-sm">LuminUI</p>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">M-Mockups: MacBook Air</h3>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 self-start sm:self-center px-5 py-2.5 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-hover transition-colors"
            >
              View Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
