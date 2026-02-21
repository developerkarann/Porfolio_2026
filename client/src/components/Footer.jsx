import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/#about' },
  { label: 'Services', to: '/#services' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Contact', to: '/contact' },
];

const socialIcons = [
  { name: 'GitHub', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Dribbble', href: '#' },
];

export default function Footer() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true });
  const dateStr = now.toLocaleDateString('en-GB', { weekday: 'long', month: 'short', day: 'numeric' });

  return (
    <footer className="border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex items-center gap-2">
            {/* <span className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-dark font-bold text-lg">P</span> */}
            <span className="font-display font-semibold text-lg text-white">
              Karan <span className="text-accent">Pal</span>
            </span>
          </div>
          <nav className="flex flex-wrap gap-4 lg:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-white/60 text-sm hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {socialIcons.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-accent hover:text-dark hover:border-accent transition-colors"
                aria-label={s.name}
              >
                <span className="text-xs font-medium">{s.name.slice(0, 1)}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
