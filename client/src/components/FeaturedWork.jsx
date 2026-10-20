import { Link } from 'react-router-dom';
import { PROJECTS_LIST } from '../data/projectsData';
import ProjectCard from './ProjectCard';

const featuredProjects = PROJECTS_LIST.filter((p) => p.featured);

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
          className="inline-flex items-center gap-2 mb-12 px-4 py-2.5 sm:px-6 sm:py-3.5 text-sm sm:text-base bg-accent text-dark font-semibold rounded-lg hover:bg-accent-hover transition-colors"
        >
          Explore all Projects
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
