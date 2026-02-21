import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PROJECTS_LIST } from '../data/projectsData';
import { useSeo } from '../hooks/useSeo';

const META_DESCRIPTION = 'Portfolio of full-stack projects: CRM, crowdfunding, e‑commerce, healthcare. Built with React, Node.js, PostgreSQL, MongoDB. Architecture, APIs, and user-centered design.';

export default function ProjectsPage() {
  useSeo({
    title: 'Projects – Full Stack Development, CRM, E‑commerce, Healthcare',
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
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark/85" aria-hidden />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto py-16 lg:py-24">
            <nav className="text-sm text-white/60 mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Projects</span>
            </nav>
            <div className="h-1 w-24 bg-accent rounded-full mb-8" aria-hidden />
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Projects
            </h1>
            <p className="text-white/90 text-lg sm:text-xl max-w-2xl mt-6">
              A selection of products I’ve designed and built end-to-end—from requirements and architecture to deployment. Each project reflects a focus on clear APIs, maintainable code, and user-centered flows.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 mt-10 px-6 py-3.5 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-hover transition-colors"
            >
              Start a project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto mt-16 lg:mt-20">
            {/* How I approach – below hero */}
            <div className="rounded-2xl border border-white/10 bg-dark-muted/60 p-6 sm:p-8 mb-16 lg:mb-20">
              <h2 className="font-display font-semibold text-lg text-white mb-4 flex items-center gap-2">
                <span className="text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </span>
                How I approach building products
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-white/80 text-sm leading-relaxed">
                <li><strong className="text-white">Architecture first:</strong> APIs, data models, and auth designed before UI so the system stays scalable.</li>
                <li><strong className="text-white">Stack that fits:</strong> React for front-end, Node.js + Express for APIs; PostgreSQL for relational workloads, MongoDB where documents make sense.</li>
                <li><strong className="text-white">UX and performance:</strong> Responsive layouts, loading states, and clear feedback so users never wonder what’s happening.</li>
                <li><strong className="text-white">Security and maintainability:</strong> JWT/auth, input validation, and structured logging so apps are safe and easier to debug.</li>
              </ul>
            </div>

          {/* Project grid */}
          <section aria-label="Project list">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {PROJECTS_LIST.map((project) => (
                <article
                  key={project.slug}
                  className="group relative rounded-2xl border border-white/10 bg-dark-muted/50 overflow-hidden hover:border-accent/30 transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] min-h-[220px] sm:min-h-[260px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} – ${project.category}`}
                      className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h2 className="font-display font-semibold text-xl sm:text-2xl text-white mt-2 mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed line-clamp-3 mb-5">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4" onClick={(e) => e.stopPropagation()}>
                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg bg-accent text-dark hover:bg-accent-hover transition-colors"
                        >
                          Source Code
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg border border-white/20 text-white hover:border-accent hover:text-accent transition-colors"
                        >
                          View Live
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg bg-accent text-dark hover:bg-accent-hover transition-colors"
                      >
                        Read more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <p className="mt-12 text-white/60 text-sm">
            <Link to="/" className="text-accent hover:underline">← Back to home</Link>
            <span className="mx-2">·</span>
            <Link to="/#contact" className="text-accent hover:underline">Start a project</Link>
          </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
