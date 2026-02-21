import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSeo } from '../hooks/useSeo';
import {
  SERVICES_LIST,
  PROBLEM_SOLVING_STEPS,
  OUTCOMES,
  INDUSTRIES,
  WHY_ME,
} from '../data/servicesData';

const META_DESCRIPTION = 'Full Stack Developer services: software development, web development, UI/UX, backend, IT consultancy. Problem-solving, scalable systems, and end-to-end delivery.';

const ICONS = {
  understand: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  design: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  build: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  deliver: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  ),
  scale: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  docs: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586A1 1 0 0114 4.586V7a2 2 0 012 2v11a2 2 0 01-2 2z" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  speed: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  stack: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  mindset: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  comm: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  longterm: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function ServicesPage() {
  useSeo({
    title: 'Services – Full Stack Development, Web, UI/UX, Backend, IT Consultancy',
    description: META_DESCRIPTION,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 lg:pt-28 pb-16">
        {/* Hero with background image */}
        <section className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark/85" aria-hidden />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto py-16 lg:py-24">
            <nav className="text-sm text-white/60 mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Services</span>
            </nav>
            <div className="h-1 w-24 bg-accent rounded-full mb-8" aria-hidden />
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Services that scale with your vision
            </h1>
            <p className="text-white/90 text-lg sm:text-xl max-w-2xl mt-6">
              From idea to deployment—custom software, web apps, UI/UX, backend systems, and IT consultancy. I deliver end-to-end solutions built for performance and growth.
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

        {/* My Services – cards with images */}
        <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
              What I offer
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mt-2 mb-4">
              My services
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mb-12">
              A wide range of development and consultancy services so you get the right solution—not a one-size-fits-all template.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {SERVICES_LIST.map((service) => (
                <article
                  key={service.id}
                  className="group rounded-2xl border border-white/10 bg-dark-muted/50 overflow-hidden hover:border-accent/30 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={service.image}
                      alt=""
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-display font-semibold text-lg text-white">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80 text-xs font-medium"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Problem-solving approach */}
        <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
              My approach
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mt-2 mb-4">
              How I solve problems
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mb-12">
              I don’t just write code—I work with you to understand the problem, design the right solution, and deliver something that lasts.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROBLEM_SOLVING_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="relative rounded-2xl border border-white/10 bg-dark-muted/50 p-6 hover:border-accent/25 transition-colors"
                >
                  <span className="absolute top-4 right-4 font-display font-bold text-4xl text-white/10" aria-hidden>
                    {String(item.step).padStart(2, '0')}
                  </span>
                  <span className="text-accent inline-flex mb-4" aria-hidden>
                    {ICONS[item.icon]}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What you get – outcomes */}
        <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
                  Outcomes
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mt-2 mb-6">
                  What you get when we work together
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  Every project is built with scalability, clarity, and long-term success in mind.
                </p>
                <div className="space-y-6">
                  {OUTCOMES.map((outcome) => (
                    <div key={outcome.title} className="flex gap-4">
                      <span className="text-accent shrink-0 mt-0.5" aria-hidden>
                        {ICONS[outcome.icon]}
                      </span>
                      <div>
                        <h3 className="font-display font-semibold text-white mb-1">{outcome.title}</h3>
                        <p className="text-white/75 text-sm leading-relaxed">{outcome.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] max-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1551431009-a22ee0f4e6d7?w=800&h=600&fit=crop"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Why work with me */}
        <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
              Why me
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mt-2 mb-12">
              What makes my services different
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_ME.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-dark-muted/50 p-6 hover:border-accent/25 transition-colors"
                >
                  <span className="text-accent inline-flex mb-4" aria-hidden>
                    {ICONS[item.icon]}
                  </span>
                  <h3 className="font-display font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries / wide range – image grid */}
        <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
              Wide range
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mt-2 mb-4">
              Industries and product types I serve
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mb-12">
              E‑commerce, healthcare, fintech, CRM, SaaS, and more. I adapt to your domain and requirements.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {INDUSTRIES.map((ind) => (
                <div
                  key={ind.name}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]"
                >
                  <img
                    src={ind.image}
                    alt=""
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="font-display font-semibold text-white text-lg">{ind.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 sm:p-12 text-center">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Ready to build something great?
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8">
                Tell me about your project. I’ll help you scope it, choose the right approach, and deliver a solution that fits your goals.
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
