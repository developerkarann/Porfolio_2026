import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getBlogBySlug, BLOGS_LIST } from '../data/blogsData';
import { useSeo } from '../hooks/useSeo';

function renderContent(blocks) {
  return blocks.map((block, i) => {
    if (block.type === 'h2') {
      return <h2 key={i} className="font-display font-bold text-xl sm:text-2xl text-white mt-12 mb-4 first:mt-0 scroll-mt-24">{block.text}</h2>;
    }
    if (block.type === 'h3') {
      return <h3 key={i} className="font-display font-semibold text-lg text-white mt-8 mb-2 scroll-mt-24">{block.text}</h3>;
    }
    if (block.type === 'p') {
      return <p key={i} className="text-white/88 leading-relaxed mb-5 text-base sm:text-lg">{block.text}</p>;
    }
    return null;
  });
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = slug ? getBlogBySlug(slug) : null;

  useSeo({
    title: blog ? blog.title : 'Blog',
    description: blog ? blog.metaDescription : 'Technical blog by Karan Pal, Full Stack Developer.',
  });

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 pb-16 px-4 text-center">
          <p className="text-white/80 mb-4">Blog post not found.</p>
          <Link to="/blogs" className="text-accent hover:underline">View all blogs</Link>
          <span className="text-white/50 mx-2">|</span>
          <Link to="/" className="text-accent hover:underline">Home</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const currentIndex = BLOGS_LIST.findIndex((b) => b.slug === slug);
  const prevBlog = currentIndex > 0 ? BLOGS_LIST[currentIndex - 1] : null;
  const nextBlog = currentIndex >= 0 && currentIndex < BLOGS_LIST.length - 1 ? BLOGS_LIST[currentIndex + 1] : null;
  const postImage = blog.image || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=600&fit=crop';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 lg:pt-28 pb-16">
        {/* Hero with blog image – same structure as other pages */}
        <section className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={postImage}
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/70 to-dark/60" aria-hidden />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto py-16 lg:py-24">
            <nav className="text-sm text-white/60 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/blogs" className="hover:text-accent transition-colors">Blogs</Link>
              <span className="mx-2">/</span>
              <span className="text-white/80 line-clamp-1">{blog.title}</span>
            </nav>
            {blog.topic && (
              <span className="inline-block px-3 py-1 rounded-lg bg-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
                {blog.topic}
              </span>
            )}
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              {blog.title}
            </h1>
            <p className="text-white/80 mt-4 text-base sm:text-lg">
              By Karan Pal · Full Stack Developer
            </p>
          </div>
        </section>

        <div className="px-4 sm:px-6 lg:px-8">
          <article className="max-w-3xl mx-auto -mt-6 relative z-10">
            <div className="rounded-2xl border border-white/10 bg-dark-muted/90 backdrop-blur p-6 sm:p-8 lg:p-10 shadow-2xl">
              <div className="prose-custom">
                {renderContent(blog.content)}
              </div>
            </div>

            <footer className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/75 mb-8 text-base">
                If you'd like to work together on scalable systems, message brokers, or cloud architecture, reach out via my <Link to="/#contact" className="text-accent hover:underline">contact section</Link>.
              </p>

              {/* Prev / Next as cards with images */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {prevBlog ? (
                  <Link
                    to={`/blogs/${prevBlog.slug}`}
                    className="group rounded-xl border border-white/10 bg-dark-muted/50 p-4 hover:border-accent/30 transition-colors flex gap-4"
                  >
                    <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={prevBlog.image}
                        alt=""
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Previous</p>
                      <span className="font-display font-semibold text-white group-hover:text-accent transition-colors line-clamp-2">
                        {prevBlog.title}
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div className="rounded-xl border border-white/5 bg-dark-muted/30 p-4 flex items-center">
                    <span className="text-white/40 text-sm">← Previous</span>
                  </div>
                )}
                {nextBlog ? (
                  <Link
                    to={`/blogs/${nextBlog.slug}`}
                    className="group rounded-xl border border-white/10 bg-dark-muted/50 p-4 hover:border-accent/30 transition-colors flex gap-4 sm:flex-row-reverse"
                  >
                    <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden sm:order-2">
                      <img
                        src={nextBlog.image}
                        alt=""
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <div className="min-w-0 text-right sm:order-1">
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Next</p>
                      <span className="font-display font-semibold text-white group-hover:text-accent transition-colors line-clamp-2">
                        {nextBlog.title}
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div className="rounded-xl border border-white/5 bg-dark-muted/30 p-4 flex items-center justify-end">
                    <span className="text-white/40 text-sm">Next →</span>
                  </div>
                )}
              </div>

              <p className="text-sm text-white/60">
                <Link to="/blogs" className="text-accent hover:underline">← All blogs</Link>
                <span className="text-white/50 mx-2">·</span>
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="text-accent hover:underline bg-transparent border-none cursor-pointer p-0 text-sm"
                >
                  Back
                </button>
              </p>
            </footer>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
