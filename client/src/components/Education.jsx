const education = [
  { degree: 'BSc in CSE', school: 'London University', period: '2022 - Present' },
  { degree: 'Diploma in Web Design', school: 'Oxford College', period: '2021 - 2024' },
  { degree: 'UI/UX Certificate', school: 'Google Design', period: '2020 - 2023' },
  { degree: 'Branding Course', school: 'Cambridge Institute', period: '2019 - 2022' },
];

export default function Education() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-10">
          <span className="text-accent">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </span>
          <h2 className="font-display font-bold text-2xl lg:text-3xl text-white">Education</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {education.map((item) => (
            <div
              key={item.degree}
              className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 p-6 rounded-xl bg-dark-muted border border-white/5"
            >
              <div>
                <h3 className="font-display font-semibold text-white">{item.degree}</h3>
                <p className="text-white/70 text-sm mt-1">{item.school}</p>
              </div>
              <span className="flex-shrink-0 inline-flex px-3 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium">
                {item.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
