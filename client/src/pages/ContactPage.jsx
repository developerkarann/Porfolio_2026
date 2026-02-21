import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSeo } from '../hooks/useSeo';
import { PROFILE } from '../data/aboutData';
import { CONTACT_COPY, SOCIAL_LINKS } from '../data/contactData';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop';

const META_DESCRIPTION = 'Get in touch with Karan Pal, Full Stack Developer. Send a message for projects, consulting, or collaboration. Connect on LinkedIn, GitHub, and Twitter.';

function SocialIcon({ icon, className = 'w-6 h-6' }) {
  switch (icon) {
    case 'linkedin':
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'github':
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      );
    case 'twitter':
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ContactPage() {
  useSeo({
    title: 'Contact – Get in Touch | Projects & Collaboration',
    description: META_DESCRIPTION,
  });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setStatus(null);
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate submit (replace with your API or mailto/form backend)
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTouched({});
    }, 800);
  };

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-200';
  const labelClass = 'block text-sm font-medium text-white/90 mb-1.5';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 lg:pt-28 pb-16">
        {/* Hero */}
        <section className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-dark/88" aria-hidden />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto py-16 lg:py-24">
            <nav className="text-sm text-white/60 mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Contact</span>
            </nav>
            <div className="h-1 w-24 bg-accent rounded-full mb-8" aria-hidden />
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              {CONTACT_COPY.heroTitle}
            </h1>
            <p className="text-white/90 text-lg sm:text-xl max-w-2xl mt-6">
              {CONTACT_COPY.heroSubtitle}
            </p>
          </div>
        </section>

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto mt-14 lg:mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Form – creative card with gradient border */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-accent/30 via-transparent to-accent/10 overflow-hidden">
                  <div className="relative rounded-2xl bg-dark border border-white/10 backdrop-blur p-6 sm:p-8 lg:p-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" aria-hidden />
                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-1">
                      {CONTACT_COPY.formTitle}
                    </h2>
                    <p className="text-white/70 text-base mb-8">
                      {CONTACT_COPY.formSubtitle}
                    </p>

                    {status === 'success' && (
                      <div className="mb-6 p-4 rounded-xl bg-accent/15 border border-accent/30 text-accent font-medium text-sm sm:text-base" role="alert">
                        {CONTACT_COPY.successMessage}
                      </div>
                    )}
                    {status === 'error' && (
                      <div className="mb-6 p-4 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 font-medium text-sm sm:text-base" role="alert">
                        {CONTACT_COPY.errorMessage}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="contact-name" className={labelClass}>
                          {CONTACT_COPY.nameLabel}
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={CONTACT_COPY.namePlaceholder}
                          className={inputClass}
                          required
                          autoComplete="name"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className={labelClass}>
                          {CONTACT_COPY.emailLabel}
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={CONTACT_COPY.emailPlaceholder}
                          className={inputClass}
                          required
                          autoComplete="email"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-subject" className={labelClass}>
                          {CONTACT_COPY.subjectLabel}
                        </label>
                        <input
                          id="contact-subject"
                          type="text"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={CONTACT_COPY.subjectPlaceholder}
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-message" className={labelClass}>
                          {CONTACT_COPY.messageLabel}
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={CONTACT_COPY.messagePlaceholder}
                          rows={5}
                          className={`${inputClass} resize-y min-h-[120px]`}
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-accent text-dark font-semibold text-base hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {status === 'sending' ? CONTACT_COPY.submitSending : CONTACT_COPY.submitLabel}
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Right column – contact details and social links */}
              <div className="lg:col-span-5 space-y-8">
                {/* Contact details */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                  <h3 className="font-display font-semibold text-lg text-white mb-4">Direct contact</h3>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/30 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <div>
                      <span className="text-white/60 text-sm block">Email</span>
                      <span className="text-white font-medium group-hover:text-accent transition-colors">{PROFILE.email}</span>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 p-3 rounded-xl mt-2">
                    <span className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/70">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <div>
                      <span className="text-white/60 text-sm block">Location</span>
                      <span className="text-white font-medium">{PROFILE.location}</span>
                    </div>
                  </div>
                </div>

                {/* Social links – creative cards */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                  <h3 className="font-display font-semibold text-lg text-white mb-2">{CONTACT_COPY.connectTitle}</h3>
                  <p className="text-white/60 text-sm mb-6">{CONTACT_COPY.connectSubtitle}</p>
                  <div className="space-y-3">
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group"
                      >
                        <span className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/80 group-hover:bg-accent/20 group-hover:text-accent transition-all duration-300">
                          <SocialIcon icon={social.icon} className="w-6 h-6" />
                        </span>
                        <div className="flex-1 min-w-0">
                          <span className="font-semibold text-white group-hover:text-accent transition-colors block">
                            {social.name}
                          </span>
                          <span className="text-white/60 text-sm block truncate">{social.description}</span>
                        </div>
                        <svg className="w-5 h-5 text-white/40 group-hover:text-accent group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

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
