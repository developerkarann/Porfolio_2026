import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getProjectBySlug, PROJECTS_LIST } from '../data/projectsData';
import { useSeo } from '../hooks/useSeo';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = slug ? getProjectBySlug(slug) : null;

  useSeo({
    title: project ? project.title : 'Project',
    description: project ? project.metaDescription : 'Full Stack Developer project case study.',
  });

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 pb-16 px-4 text-center">
          <p className="text-white/80 mb-4">Project not found.</p>
          <Link to="/projects" className="text-accent hover:underline">View all projects</Link>
          <span className="text-white/50 mx-2">|</span>
          <Link to="/" className="text-accent hover:underline">Home</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const currentIndex = PROJECTS_LIST.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? PROJECTS_LIST[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && currentIndex < PROJECTS_LIST.length - 1 ? PROJECTS_LIST[currentIndex + 1] : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 lg:pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/projects" className="hover:text-accent transition-colors">Projects</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{project.title}</span>
          </nav>

          {/* Hero: title, category, description */}
          <header className="mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mt-2 mb-6">
              {project.title}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={project.sourceUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 font-semibold rounded-lg transition-colors ${project.sourceUrl ? 'bg-accent text-dark hover:bg-accent-hover' : 'bg-white/10 text-white/60 cursor-not-allowed pointer-events-none'}`}
              >
                Source Code
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </a>
              <a
                href={project.liveUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 font-semibold rounded-lg border-2 border-white/20 text-white hover:border-accent hover:text-accent transition-colors ${!project.liveUrl ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''}`}
              >
                View Live
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </header>

          {/* Lead screenshot */}
          <div className="rounded-2xl overflow-hidden border border-white/10 mb-12">
            <img
              src={project.screenshots[0]?.src ?? project.image}
              alt={project.screenshots[0]?.alt ?? `${project.title} – main view`}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Two-column: Features + Tech */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14 mb-14">
            <section>
              <h2 className="font-display font-semibold text-xl text-white mb-4 flex items-center gap-2">
                <span className="text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </span>
                Key features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-white/85 text-sm leading-relaxed">
                    <span className="text-accent mt-1.5 shrink-0" aria-hidden>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="font-display font-semibold text-xl text-white mb-4 flex items-center gap-2">
                <span className="text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                Technologies
              </h2>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-dark-muted border border-white/10 text-white/90 text-sm font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Screenshots gallery */}
          {project.screenshots && project.screenshots.length > 1 && (
            <section className="mb-14">
              <h2 className="font-display font-semibold text-xl text-white mb-6">Screenshots</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.screenshots.slice(1).map((shot, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Footer nav */}
          <footer className="pt-8 border-t border-white/10">
            <p className="text-white/70 mb-6">
              Want to build something similar? Get in touch via my{' '}
              <Link to="/#contact" className="text-accent hover:underline">contact section</Link>.
            </p>
            <nav className="flex flex-wrap gap-4 justify-between text-sm">
              <div>
                {prevProject ? (
                  <Link to={`/projects/${prevProject.slug}`} className="text-accent hover:underline">
                    ← {prevProject.title}
                  </Link>
                ) : (
                  <span className="text-white/40">← Previous</span>
                )}
              </div>
              <div>
                {nextProject ? (
                  <Link to={`/projects/${nextProject.slug}`} className="text-accent hover:underline">
                    {nextProject.title} →
                  </Link>
                ) : (
                  <span className="text-white/40">Next →</span>
                )}
              </div>
            </nav>
            <p className="mt-8">
              <Link to="/projects" className="text-accent hover:underline">← All projects</Link>
              <span className="text-white/50 mx-2">|</span>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="text-accent hover:underline bg-transparent border-none cursor-pointer p-0"
              >
                Back
              </button>
            </p>
          </footer>
        </article>
      </main>
      <Footer />
    </div>
  );
}
