import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BLOGS_LIST, BLOG_SECTIONS } from '../data/blogsData';
import { useSeo } from '../hooks/useSeo';

const META_DESCRIPTION = 'Technical blogs on distributed systems, RabbitMQ, cloud computing, Redis, Docker, Elasticsearch, horizontal and vertical scaling, and load balancing. Written by Karan Pal, Full Stack Developer.';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&h=1080&fit=crop';

const TOPIC_CARDS = [
  { topic: 'Architecture', description: 'Distributed systems, scalability, and design', slug: 'distributed-systems', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop' },
  { topic: 'Messaging', description: 'Message brokers, queues, and event-driven design', slug: 'rabbitmq-message-broker', image: 'https://images.unsplash.com/photo-1551431009-a22ee0f4e6d7?w=600&h=400&fit=crop' },
  { topic: 'Cloud & DevOps', description: 'Cloud platforms, containers, and deployment', slug: 'cloud-computing', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop' },
  { topic: 'Databases & Cache', description: 'Redis, data structures, and performance', slug: 'redis-caching', image: 'https://images.unsplash.com/photo-1544197654-7aae768b4509?w=600&h=400&fit=crop' },
  { topic: 'Scaling', description: 'Horizontal, vertical, and load balancing', slug: 'horizontal-scaling', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' },
  { topic: 'Search & Analytics', description: 'Elasticsearch and full-text search', slug: 'elasticsearch', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop' },
];

function groupBlogsBySection() {
  const bySection = {};
  BLOGS_LIST.forEach((blog) => {
    const section = blog.section || 'development';
    if (!bySection[section]) bySection[section] = [];
    bySection[section].push(blog);
  });
  return BLOG_SECTIONS.map((sec) => ({ ...sec, blogs: bySection[sec.id] || [] })).filter((s) => s.blogs.length > 0);
}

const ReadLink = ({ to, children = 'Read article', className = '' }) => (
  <span className={`inline-flex items-center gap-2 text-accent text-base sm:text-lg font-medium ${className}`}>
    {children}
    <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </span>
);

export default function BlogListPage() {
  useSeo({
    title: 'Blogs – Distributed Systems, Message Brokers, Cloud, Redis, Docker, Scaling',
    description: META_DESCRIPTION,
  });

  const sectionsWithBlogs = groupBlogsBySection();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 lg:pt-28 pb-16">
        {/* Hero */}
        <section className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-dark/85" aria-hidden />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto py-16 lg:py-24">
            <nav className="text-sm text-white/60 mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Blogs</span>
            </nav>
            <div className="h-1 w-24 bg-accent rounded-full mb-8" aria-hidden />
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Technical Blogs
            </h1>
            <p className="text-white/90 text-lg sm:text-xl max-w-2xl mt-6">
              In-depth articles on distributed systems, message brokers, cloud computing, Redis, Docker, Elasticsearch, scaling strategies, and load balancing—topics I work with daily as a Full Stack Developer.
            </p>
          </div>
        </section>

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto mt-14 lg:mt-20 space-y-24 lg:space-y-28">
            {sectionsWithBlogs.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24" aria-label={section.title}>
                {/* Section header with optional bg */}
                <div className="relative rounded-2xl border border-white/10 overflow-hidden min-h-[140px] sm:min-h-[160px] flex flex-col justify-end p-6 sm:p-8 mb-10 lg:mb-12">
                  <div className="absolute inset-0 z-0">
                    <img src={section.image} alt="" className="w-full h-full object-cover object-center opacity-20" />
                    <div className="absolute inset-0 bg-dark/75" />
                  </div>
                  <div className="relative z-10">
                    <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
                      {section.title}
                    </h2>
                    <p className="text-white/80 text-base sm:text-lg mt-2 max-w-2xl">
                      {section.description}
                    </p>
                  </div>
                </div>

                {/* Layout depends on section id */}
                {section.id === 'distributed-systems' && (
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8" aria-label="Blog posts">
                    {section.blogs.map((blog) => (
                      <li key={blog.slug}>
                        <article className="group relative rounded-2xl border border-white/10 overflow-hidden min-h-[380px] sm:min-h-[420px] lg:min-h-[440px] hover:border-accent/30 transition-all duration-300">
                          <Link to={`/blogs/${blog.slug}`} className="block h-full flex flex-col justify-end p-7 sm:p-9 lg:p-10">
                            <div className="absolute inset-0 z-0">
                              <img src={blog.image} alt="" className="w-full h-full object-cover object-center opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                              <div className="absolute inset-0 bg-dark/75 group-hover:bg-dark/65 transition-colors" />
                            </div>
                            <div className="relative z-10 mt-auto">
                              <span className="inline-block px-3 py-1.5 rounded-md bg-accent/90 text-dark text-xs font-semibold uppercase tracking-wider mb-4">
                                {blog.topic}
                              </span>
                              <h3 className="font-display font-semibold text-2xl sm:text-3xl text-white mb-4 group-hover:text-accent transition-colors line-clamp-2">
                                {blog.title}
                              </h3>
                              <p className="text-white/80 text-base sm:text-lg leading-relaxed line-clamp-4 mb-5">
                                {blog.excerpt}
                              </p>
                              <ReadLink />
                            </div>
                          </Link>
                        </article>
                      </li>
                    ))}
                  </ul>
                )}

                {section.id === 'cloud-computing' && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8" aria-label="Blog posts">
                    {section.blogs.map((blog) => (
                      <li key={blog.slug}>
                        <article className="group relative rounded-2xl border border-white/10 overflow-hidden min-h-[360px] sm:min-h-[400px] hover:border-accent/30 transition-all duration-300">
                          <Link to={`/blogs/${blog.slug}`} className="block h-full flex flex-col">
                            <div className="relative h-44 sm:h-52 flex-shrink-0 overflow-hidden">
                              <img src={blog.image} alt="" className="w-full h-full object-cover object-center opacity-40 group-hover:opacity-50 transition-opacity duration-300" />
                              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
                              <span className="absolute bottom-3 left-4 px-3 py-1 rounded-md bg-accent/90 text-dark text-xs font-semibold uppercase tracking-wider">
                                {blog.topic}
                              </span>
                            </div>
                            <div className="flex-1 flex flex-col justify-end p-6 sm:p-8 bg-dark/40">
                              <h3 className="font-display font-semibold text-xl sm:text-2xl text-white mb-3 group-hover:text-accent transition-colors line-clamp-2">
                                {blog.title}
                              </h3>
                              <p className="text-white/80 text-base leading-relaxed line-clamp-3 mb-4">
                                {blog.excerpt}
                              </p>
                              <ReadLink />
                            </div>
                          </Link>
                        </article>
                      </li>
                    ))}
                  </ul>
                )}

                {section.id === 'development' && (
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8" aria-label="Blog posts">
                    {section.blogs.map((blog, i) => (
                      <li key={blog.slug} className={i === 0 ? 'lg:row-span-2' : ''}>
                        <article className={`group relative rounded-2xl border border-white/10 overflow-hidden hover:border-accent/30 transition-all duration-300 flex flex-col h-full ${i === 0 ? 'min-h-[420px] lg:min-h-[520px]' : 'min-h-[320px] sm:min-h-[360px]'}`}>
                          <Link to={`/blogs/${blog.slug}`} className={`flex flex-col h-full ${i === 0 ? 'lg:flex-row' : ''}`}>
                            <div className={`relative flex-shrink-0 ${i === 0 ? 'h-56 lg:h-full lg:w-1/2 lg:min-h-[520px]' : 'h-44 sm:h-48'}`}>
                              <img src={blog.image} alt="" className="w-full h-full object-cover object-center opacity-25 group-hover:opacity-35 transition-opacity duration-300" />
                              <div className="absolute inset-0 bg-dark/70 group-hover:bg-dark/60 transition-colors" />
                              <span className="absolute bottom-4 left-4 px-3 py-1.5 rounded-md bg-accent/90 text-dark text-xs font-semibold uppercase tracking-wider">
                                {blog.topic}
                              </span>
                            </div>
                            <div className={`relative z-10 flex flex-col justify-end p-6 sm:p-8 ${i === 0 ? 'lg:justify-center lg:p-8 lg:w-1/2' : ''}`}>
                              <h3 className={`font-display font-semibold text-white group-hover:text-accent transition-colors line-clamp-2 ${i === 0 ? 'text-2xl sm:text-3xl lg:text-3xl mb-4' : 'text-xl sm:text-2xl mb-3'}`}>
                                {blog.title}
                              </h3>
                              <p className={`text-white/80 leading-relaxed mb-4 ${i === 0 ? 'text-base sm:text-lg line-clamp-4' : 'text-base line-clamp-2'}`}>
                                {blog.excerpt}
                              </p>
                              <ReadLink />
                            </div>
                          </Link>
                        </article>
                      </li>
                    ))}
                  </ul>
                )}

                {section.id === 'deployment' && (
                  <ul className="space-y-4" aria-label="Blog posts">
                    {section.blogs.map((blog, i) => (
                      <li key={blog.slug}>
                        <article className="group relative rounded-2xl border border-white/10 overflow-hidden min-h-[200px] sm:min-h-[220px] hover:border-accent/30 transition-all duration-300 flex flex-col sm:flex-row">
                          <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-accent/60 group-hover:bg-accent rounded-r opacity-80" aria-hidden />
                          <Link to={`/blogs/${blog.slug}`} className="flex flex-col sm:flex-row flex-1 pl-5 sm:pl-6">
                            <div className="hidden sm:block relative w-48 lg:w-56 flex-shrink-0 h-full min-h-[220px]">
                              <img src={blog.image} alt="" className="w-full h-full object-cover object-center opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
                              <div className="absolute inset-0 bg-dark/70" />
                            </div>
                            <div className="flex-1 flex flex-col justify-center p-6 sm:p-8">
                              <span className="inline-block px-3 py-1 rounded-md bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
                                {blog.topic}
                              </span>
                              <h3 className="font-display font-semibold text-xl sm:text-2xl text-white mb-2 group-hover:text-accent transition-colors line-clamp-2">
                                {blog.title}
                              </h3>
                              <p className="text-white/80 text-base leading-relaxed line-clamp-2 mb-3">
                                {blog.excerpt}
                              </p>
                              <ReadLink className="text-base" />
                            </div>
                          </Link>
                        </article>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Explore by topic – larger cards */}
            <section className="mt-8" aria-label="Explore by topic">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                Explore by topic
              </h2>
              <p className="text-white/70 text-base sm:text-lg mb-8 max-w-2xl">
                Jump to articles by theme—architecture, messaging, cloud, databases, scaling, and more.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {TOPIC_CARDS.map((card) => (
                  <Link
                    key={card.topic}
                    to={`/blogs/${card.slug}`}
                    className="group relative rounded-2xl border border-white/10 overflow-hidden min-h-[220px] sm:min-h-[260px] flex flex-col justify-end p-7 sm:p-9 hover:border-accent/30 transition-all duration-300"
                  >
                    <div className="absolute inset-0 z-0">
                      <img src={card.image} alt="" className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-dark/70 group-hover:bg-dark/60 transition-colors" />
                    </div>
                    <div className="relative z-10">
                      <h3 className="font-display font-semibold text-xl sm:text-2xl text-white group-hover:text-accent transition-colors">
                        {card.topic}
                      </h3>
                      <p className="text-white/75 text-base sm:text-lg mt-2">
                        {card.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 mt-3 text-accent text-sm sm:text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Read
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* What you'll find – larger card */}
            <section>
              <div className="relative rounded-2xl border border-white/10 overflow-hidden min-h-[280px] sm:min-h-[320px] flex flex-col justify-end p-8 sm:p-10 lg:p-14">
                <div className="absolute inset-0 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1517694713802-14d397994a72?w=1000&h=600&fit=crop"
                    alt=""
                    className="w-full h-full object-cover object-center opacity-15"
                  />
                  <div className="absolute inset-0 bg-dark/80" />
                </div>
                <div className="relative z-10">
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                    What you'll find here
                  </h2>
                  <ul className="grid sm:grid-cols-2 gap-3 text-white/85 text-base sm:text-lg">
                    <li className="flex items-center gap-2">
                      <span className="text-accent">·</span>
                      Practical patterns from production systems
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">·</span>
                      Clear explanations of distributed concepts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">·</span>
                      How I choose and use tools (Redis, Docker, etc.)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">·</span>
                      Scaling and reliability strategies
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <p className="mt-14 text-white/60 text-sm sm:text-base">
              <Link to="/" className="text-accent hover:underline">← Back to home</Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
