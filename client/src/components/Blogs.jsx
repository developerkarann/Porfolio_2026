import { Link } from 'react-router-dom';
import { BLOGS_LIST } from '../data/blogsData';

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="blogs-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-10">
          <div className="flex items-center gap-2">
            <span className="text-accent" aria-hidden="true">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6m4-4h-1m-1 4h1m-1 4h1m-2 5h7m-7 2h7" />
              </svg>
            </span>
            <h2 id="blogs-heading" className="font-display font-bold text-2xl lg:text-3xl text-white">
              Blogs &amp; Technical Writing
            </h2>
          </div>
          <Link to="/blogs" className="text-accent text-sm font-medium hover:underline inline-flex items-center gap-1">
            View all blogs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
        <p className="text-white/80 text-lg max-w-2xl mb-12">
          In-depth articles on distributed systems, message brokers, cloud computing, Redis, Docker, Elasticsearch, scaling strategies, and load balancing for developers and DevOps.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOGS_LIST.map((blog) => (
            <article
              key={blog.slug}
              id={`blogs-${blog.slug}`}
              className="group rounded-xl border border-white/5 bg-dark-muted overflow-hidden hover:border-accent/30 transition-colors"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg text-white mb-3 group-hover:text-accent transition-colors">
                  <Link to={`/blogs/${blog.slug}`} className="focus:outline-none focus:ring-2 focus:ring-accent rounded">
                    {blog.title}
                  </Link>
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4" itemProp="description">
                  {blog.excerpt}
                </p>
                <Link
                  to={`/blogs/${blog.slug}`}
                  className="inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:underline"
                >
                  Read article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <meta itemProp="keywords" content={blog.keywords} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
