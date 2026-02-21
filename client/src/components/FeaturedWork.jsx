import { Link } from 'react-router-dom';
import { PROJECTS_LIST } from '../data/projectsData';

const featuredProjects = PROJECTS_LIST.filter((p) => p.featured);

const linkClass = "inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition-colors";
const primaryBtn = "bg-accent text-dark hover:bg-accent-hover";
const secondaryBtn = "border border-white/20 text-white hover:border-accent hover:text-accent";

export default function FeaturedWork() {
  return (
    <section id="projects" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-accent">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </span>
          <h2 className="font-display font-bold text-2xl lg:text-3xl text-white">Featured Work</h2>
        </div>
        <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
          Showcasing My Work for Your Inspiration
        </h3>
        <p className="text-white/80 text-lg max-w-2xl mb-8">
          Discover a selection of projects that highlight my approach to design and development.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 mb-12 px-6 py-3.5 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-hover transition-colors"
        >
          Explore all Projects
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {featuredProjects.map((project) => (
            <article
              key={project.slug}
              className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] min-h-[280px] sm:min-h-[320px] bg-dark-muted"
            >
              <img
                src={project.image}
                alt={`${project.title} – ${project.category}`}
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/50 to-transparent flex flex-col justify-end p-5 sm:p-6">
                <span className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1">
                  {project.category}
                </span>
                <h4 className="font-display font-semibold text-lg sm:text-xl text-white mb-2">{project.title}</h4>
                <p className="text-white/80 text-sm sm:text-base line-clamp-2 mb-4">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={project.sourceUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClass} ${primaryBtn} ${!project.sourceUrl ? 'pointer-events-none opacity-60' : ''}`}
                    aria-label={`Source code for ${project.title}`}
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
                    className={`${linkClass} ${secondaryBtn} ${!project.liveUrl ? 'pointer-events-none opacity-60' : ''}`}
                    aria-label={`View live ${project.title}`}
                  >
                    View Live
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <Link
                    to={`/projects/${project.slug}`}
                    className={`${linkClass} ${secondaryBtn} text-white/90`}
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
      </div>
    </section>
  );
}
