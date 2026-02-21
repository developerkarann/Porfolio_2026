import { TECHNOLOGIES } from '../data/technologiesData';

function JwtIcon({ className, color }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
    </svg>
  );
}

export default function Technologies() {
  return (
    <section id="technologies" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="technologies-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-accent">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </span>
          <h2 id="technologies-heading" className="font-display font-bold text-2xl lg:text-3xl text-accent uppercase tracking-wide">
            Technologies
          </h2>
        </div>
        <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
          Technologies I Work With
        </h3>
        <p className="text-white/80 text-lg max-w-2xl mb-10">
          Tools and technologies I use to build scalable, maintainable applications.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center rounded-xl border border-white/5 bg-dark-muted/50 p-5 sm:p-6 hover:border-accent/30 hover:bg-dark-muted transition-colors duration-200"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-3" style={{ color: tech.color }}>
                {tech.icon === 'jwt' ? (
                  <JwtIcon className="w-10 h-10 sm:w-12 sm:h-12" color={tech.color} />
                ) : (
                  <i
                    className={`${tech.icon} text-3xl sm:text-4xl`}
                    style={{ color: 'inherit' }}
                    aria-hidden
                  />
                )}
              </div>
              <span className="font-display font-medium text-sm sm:text-base text-white text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
