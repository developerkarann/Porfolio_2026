import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSeo } from '../hooks/useSeo';
import { PROFILE, EXPERIENCES, STACK_GROUPS, SKILLED_IN, SOCIALS } from '../data/aboutData';
import { TECHNOLOGIES } from '../data/technologiesData';

const META_DESCRIPTION = 'Karan Pal – Full Stack Developer. About me, work experience, and technologies I work with. MERN stack, React, Node.js, from Uttar Pradesh, India.';

function JwtIcon({ className, color }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
    </svg>
  );
}

export default function AboutPage() {
  useSeo({
    title: 'About – Karan Pal, Full Stack Developer',
    description: META_DESCRIPTION,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 lg:pt-28 pb-16">
        {/* Hero with background image – same structure as Services */}
        <section className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark/85" aria-hidden />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto py-16 lg:py-24">
            <nav className="text-sm text-white/60 mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">About</span>
            </nav>
            <div className="h-1 w-24 bg-accent rounded-full mb-8" aria-hidden />
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] tracking-tight">
              {PROFILE.name}
            </h1>
            <p className="font-display font-semibold text-xl sm:text-2xl text-accent mt-4">
              {PROFILE.title}
            </p>
            <p className="text-white/90 text-lg sm:text-xl max-w-xl mt-4">
              {PROFILE.tagline}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white hover:border-accent hover:text-accent transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in touch
              </a>
              {PROFILE.resumeUrl && (
                <a
                  href={PROFILE.resumeUrl}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-hover transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Resume
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Who I am – two-column on large */}
        <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-7">
                <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
                  Who I am
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mt-2 mb-8">
                  Passionate about building products that scale
                </h2>
                <div className="space-y-6">
                  {PROFILE.aboutParagraphs.map((p, i) => (
                    <p key={i} className="text-white/85 text-lg leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-dark-muted/80 p-6 lg:p-8 sticky top-28">
                  <h3 className="font-display font-semibold text-accent text-sm uppercase tracking-wider mb-4">
                    How I work
                  </h3>
                  <ul className="space-y-3">
                    {PROFILE.philosophy.map((item, i) => (
                      <li key={i} className="flex gap-3 text-white/90">
                        <span className="text-accent shrink-0 mt-0.5">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-white/60 text-sm mb-2">Location</p>
                    <p className="text-white/90">{PROFILE.location}</p>
                    <p className="text-white/60 text-sm mt-4 mb-2">Email</p>
                    <a href={`mailto:${PROFILE.email}`} className="text-accent hover:underline">
                      {PROFILE.email}
                    </a>
                    <div className="flex gap-3 mt-6">
                      {SOCIALS.map((s) => (
                        <a
                          key={s.name}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-accent hover:text-dark hover:border-accent transition-colors font-medium text-sm"
                          aria-label={s.name}
                        >
                          {s.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience – timeline */}
        <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
              Experience
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mt-2 mb-12">
              Where I’ve worked
            </h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-white/20 to-transparent" aria-hidden />
              <ul className="space-y-0">
                {EXPERIENCES.map((exp, i) => (
                  <li key={`${exp.role}-${exp.company}`} className="relative pl-12 sm:pl-16 pb-12 last:pb-0">
                    <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-dark" aria-hidden />
                    <div className="rounded-xl border border-white/10 bg-dark-muted/50 p-5 sm:p-6 hover:border-accent/20 transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="font-display font-semibold text-lg text-white">{exp.role}</h3>
                          <p className="text-white/70 text-sm mt-0.5">{exp.company}</p>
                        </div>
                        <span className="inline-flex px-3 py-1 rounded-full bg-accent/15 text-accent text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-white/80 text-sm sm:text-base mt-3 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Stack at a glance – Frontend / Backend / Tools */}
        <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <span className="text-accent font-display font-semibold text-base uppercase tracking-widest">
              Stack
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mt-2 mb-10">
              What I use day to day
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {Object.entries(STACK_GROUPS).map(([key, items]) => (
                <div
                  key={key}
                  className="rounded-2xl border border-white/10 bg-dark-muted/50 p-6 sm:p-8 min-h-[220px] sm:min-h-[260px] flex flex-col capitalize"
                >
                  <h3 className="font-display font-semibold text-accent text-base sm:text-lg uppercase tracking-wider mb-5">
                    {key}
                  </h3>
                  <ul className="space-y-3 flex-1">
                    {items.map((item) => (
                      <li key={item} className="text-white/85 text-base sm:text-lg leading-snug">
                        · {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-dark-muted/30 p-6 sm:p-8">
              <p className="text-white/50 text-sm uppercase tracking-wider mb-4">Skilled in</p>
              <div className="flex flex-wrap gap-3">
                {SKILLED_IN.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/85 text-base"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies – icon grid */}
        <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
              Technologies
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mt-2 mb-4">
              Icons I work with
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mb-10">
              Languages, frameworks, databases, and tools I use to ship products.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 about-tech-icons">
              {TECHNOLOGIES.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center rounded-xl border border-white/5 bg-dark-muted/50 p-4 hover:border-accent/25 hover:bg-dark-muted transition-colors"
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-2"
                    style={{ color: tech.color }}
                  >
                    {tech.icon === 'jwt' ? (
                      <JwtIcon className="w-8 h-8 sm:w-10 sm:h-10" color={tech.color} />
                    ) : (
                      <i className={`${tech.icon} text-2xl sm:text-3xl`} style={{ color: 'inherit' }} aria-hidden />
                    )}
                  </div>
                  <span className="font-medium text-white text-xs sm:text-sm text-center leading-tight">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 sm:p-10 text-center">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Let’s build something together
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-6">
                Have a project in mind or want to chat about tech? I’d love to hear from you.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-hover transition-colors"
              >
                Get in touch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <div className="mt-12 px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="text-white/60 text-sm hover:text-accent transition-colors">
            ← Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
