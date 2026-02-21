const services = [
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Custom software solutions—desktop, mobile, and cloud—built for scalability, security, and long-term maintainability.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Responsive, fast, and SEO-friendly websites and web applications using modern frameworks and best practices.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    id: 'uiux-development',
    title: 'UI/UX Development',
    description: 'User-centered interfaces and experiences: research, wireframes, prototypes, and pixel-perfect implementation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    description: 'Robust APIs, databases, and server-side logic—REST/GraphQL, authentication, and cloud deployment.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    id: 'it-consultancy-networking',
    title: 'IT Consultancy & Networking',
    description: 'Infrastructure planning, network design, security audits, and technology strategy to align IT with business goals.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-accent">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </span>
          <h2 id="services-heading" className="font-display font-bold text-2xl lg:text-3xl text-white">Services</h2>
        </div>
        <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
          Experience the Impact of User-Centered Design
        </h3>
        <p className="text-white/80 text-lg max-w-2xl mb-8">
          I focus on understanding your users and business goals to deliver designs that look great and perform even better.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 mb-12 px-6 py-3.5 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-hover transition-colors"
        >
          Start a Project
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((item) => (
            <article
              key={item.id}
              className="rounded-xl border border-white/5 bg-dark-muted/50 p-6 flex flex-col transition-colors hover:border-accent/30 hover:bg-dark-muted"
            >
              <span className="text-accent mb-4 inline-flex" aria-hidden>
                {item.icon}
              </span>
              <h4 className="font-display font-semibold text-lg text-white mb-2">{item.title}</h4>
              <p className="text-white/70 text-sm leading-relaxed flex-1">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
