const experiences = [
  { role: 'Software Developer', company: 'Aggra Technologies Pvt. Ltd.', period: '2025 - Present', description: 'Leading design systems and user research for product teams.' },
  { role: 'Full Stack Developer', company: 'Alma Better', period: '2024 - 2025', description: 'Shipped multiple products from concept to launch.' },
  { role: 'Full Stack Developer Intern', company: 'Baoiam Innovation Pvt. Ltd.', period: '2023 - 2023', description: 'Improved conversion and usability across web and mobile.' },
];

export default function Experience() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-10">
              <span className="text-accent">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-white">Experience</h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.role + exp.company}
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 p-6 rounded-xl bg-dark-muted border border-white/5"
                >
                  <div>
                    <h3 className="font-display font-semibold text-lg text-white">{exp.role}</h3>
                    <p className="text-white/70 text-sm mt-1">{exp.company}</p>
                    <p className="text-white/80 mt-3 text-sm">{exp.description}</p>
                  </div>
                  <span className="flex-shrink-0 inline-flex px-3 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-accent">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <h2 className="font-display font-bold text-xl text-white">Contact</h2>
            </div>
            <div className="rounded-xl bg-dark-muted border border-white/5 p-6 space-y-4">
              <p className="text-white/80 text-sm">
                <span className="text-white/50 block mb-1">Location</span>
                Uttar Pradesh, India
              </p>
              <p className="text-white/80 text-sm">
                <span className="text-white/50 block mb-1">Email</span>
                <a href="mailto:karanapal03040@gmail.com" className="text-accent hover:underline">
                  karanapal03040@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
