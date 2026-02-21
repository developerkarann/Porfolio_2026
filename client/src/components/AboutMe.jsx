const socials = [
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
  { name: 'GitHub', href: 'https://github.com', icon: 'gh' },
  { name: 'Twitter', href: 'https://twitter.com', icon: 'x' },
];

const frontend = ['React & Next.js', 'JavaScript', 'Tailwind CSS'];
const backend = ['Node.js & Express', 'MongoDB & MySQL', 'RESTful APIs'];
const tools = ['Git & Github', 'Vercel & Render', 'Postman'];

const skilledIn = [
  'Full Stack Development',
  'RESTful API',
  'Frontend Development',
  'State Management',
  'Backend Development',
  'User Authentications',
  'Version Control',
  'Deployment',
];

export default function AboutMe() {
  return (
    <section id="about" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-10">
          <span className="text-accent">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </span>
          <h2 className="font-display font-bold text-2xl lg:text-3xl text-white">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-6">
              Software Developer
            </h3>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              I’m Karan Pal, a software developer focused on building scalable, high-performance web applications. I transform complex ideas into clean, efficient digital solutions that combine seamless user experiences with strong backend architecture.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              With expertise in frontend and backend development, I design robust RESTful APIs, implement secure authentication systems, and build distributed systems that scale. I work confidently with MongoDB, MySQL, cloud infrastructure, and modern state management to deliver reliable and optimized applications.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              From database design to Dockerization, deployment, and DevOps. I don’t just build applications; I create scalable digital ecosystems designed for long-term growth and performance.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div>
                <h4 className="font-display font-semibold text-accent text-sm uppercase tracking-wide mb-3">Frontend</h4>
                <ul className="space-y-1.5 text-white/80 text-sm">
                  {frontend.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display font-semibold text-accent text-sm uppercase tracking-wide mb-3">Backend</h4>
                <ul className="space-y-1.5 text-white/80 text-sm">
                  {backend.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display font-semibold text-accent text-sm uppercase tracking-wide mb-3">Tools</h4>
                <ul className="space-y-1.5 text-white/80 text-sm">
                  {tools.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-hover transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-dark-muted p-6 lg:p-8 space-y-6">
            <div>
              <h4 className="font-display font-semibold text-xl text-white mb-1">Karan Pal</h4>
              <p className="text-white/70 text-sm">Full Stack Developer</p>
            </div>
            <div className="space-y-3 pt-2 border-t border-white/5">
              <p className="text-white/80 text-sm">
                <span className="text-white/50 block mb-0.5">Location</span>
                Uttar Pradesh, India
              </p>
              <p className="text-white/80 text-sm">
                <span className="text-white/50 block mb-0.5">Email</span>
                <a href="mailto:karanapal03040@gmail.com" className="text-accent hover:underline">
                  karanapal03040@gmail.com
                </a>
              </p>
            </div>
            <div className="flex gap-4 pt-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-accent hover:text-dark hover:border-accent transition-colors font-medium text-sm"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-white/5">
              <p className="text-white/50 text-xs uppercase tracking-wide mb-3">Skilled In</p>
              <div className="flex flex-wrap gap-2">
                {skilledIn.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
