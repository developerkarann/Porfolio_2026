import { Link } from 'react-router-dom';
import { PROFILE } from '../data/aboutData';
import { SOCIAL_LINKS } from '../data/contactData';

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

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      {/* Background: dark with accent glow and subtle grid */}
      <div className="absolute inset-0 bg-dark" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100%,600px)] h-[400px] bg-accent/10 rounded-full blur-[120px]" aria-hidden />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" aria-hidden />

      <div className="relative max-w-5xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/5 text-accent text-sm font-medium">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
            Open to new projects & collaboration
          </span>
        </div>

        <h2 id="contact-heading" className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white text-center mb-4">
          Let's build something great
        </h2>
        <p className="text-white/70 text-center text-lg sm:text-xl max-w-2xl mx-auto mb-14">
          Have an idea or want to chat about tech? I’m one message away. Drop a line or connect on social—I’d love to hear from you.
        </p>

        {/* Email block – prominent card */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-6 mb-12">
          <a
            href={`mailto:${PROFILE.email}`}
            className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
          >
            <span className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/30 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <div className="text-left sm:text-center">
              <span className="text-white/50 text-sm block">Email me at</span>
              <span className="text-white font-semibold text-lg group-hover:text-accent transition-colors">{PROFILE.email}</span>
            </div>
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-accent text-dark font-semibold hover:bg-accent-hover transition-colors"
          >
            Send a message
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Social icons */}
        <div className="flex flex-col items-center">
          <p className="text-white/50 text-sm uppercase tracking-wider mb-6">Connect with me</p>
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/70 hover:border-accent/40 hover:bg-accent/10 hover:text-accent transition-all duration-300"
                aria-label={social.name}
              >
                <SocialIcon icon={social.icon} className="w-7 h-7" />
              </a>
            ))}
          </div>
          <p className="text-white/40 text-sm mt-4 max-w-xs text-center">
            {PROFILE.location} · Available for remote work
          </p>
        </div>

        {/* Decorative line + quote */}
        <div className="mt-16 pt-12 border-t border-white/5">
          <p className="text-white/40 text-center text-sm sm:text-base italic max-w-xl mx-auto">
            “Good software is built by people who care—about users, performance, and craft.”
          </p>
        </div>
      </div>
    </section>
  );
}
