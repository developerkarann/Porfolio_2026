import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'HOME', path: '/', hash: '#home' },
  { label: 'ABOUT', path: '/about', hash: '' },
  { label: 'SERVICES', path: '/services', hash: '' },
  { label: 'PROJECTS', path: '/projects', hash: '' },
  { label: 'BLOGS', path: '/blogs', hash: '' },
  { label: 'CONTACT', path: '/contact', hash: '' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isActive = (link) => {
    if (link.path === '/blogs') return location.pathname.startsWith('/blogs');
    if (link.path === '/projects') return location.pathname.startsWith('/projects');
    if (link.path === '/about') return location.pathname === '/about';
    if (link.path === '/services') return location.pathname === '/services';
    if (link.path === '/contact') return location.pathname === '/contact';
    return link.path === '/' && !location.pathname.startsWith('/blogs') && !location.pathname.startsWith('/projects') && location.pathname !== '/about' && location.pathname !== '/services' && location.pathname !== '/contact';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-2">
          {/* <span className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-dark font-bold text-lg">K</span> */}
          <span className="font-display font-semibold md:text-4xl text-white">Karan <span className="text-accent">Pal</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.hash ? `${link.path}${link.hash}` : link.path}
              className={`text-sm font-medium transition-colors ${isActive(link) ? 'text-accent' : 'text-white/80 hover:text-accent'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-dark py-4 px-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.hash ? `${link.path}${link.hash}` : link.path}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium ${isActive(link) ? 'text-accent' : 'text-white/80'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
