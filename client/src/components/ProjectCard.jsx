import { Link } from 'react-router-dom';

const linkClass =
  'inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors';
const secondaryBtn = 'border border-white/20 text-white hover:border-accent hover:text-accent';

export default function ProjectCard({ project }) {
  return (
    <article className="relative w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-white/10 bg-dark-muted flex flex-col">
      <img
        src={project.image}
        alt={`${project.title} – ${project.category}`}
        className="w-full h-[180px] sm:h-[280px] object-cover object-center"
      />
      <div className="flex flex-col p-5 sm:p-6">
        <span className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1">
          {project.category}
        </span>
        <h3 className="font-display font-semibold text-lg sm:text-xl text-white mb-2">{project.title}</h3>
        <p className="text-white/80 text-sm sm:text-base line-clamp-2 mb-4">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2 w-full justify-center sm:justify-start">
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
  );
}
