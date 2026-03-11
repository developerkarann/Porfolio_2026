import { useEffect } from 'react';

const DEFAULT_TITLE = 'Karan Pal | Software Developer';

export function useSeo({ title, description }) {
  useEffect(() => {
    // Keep a single title site-wide (from index.html); do not change document.title per page
    document.title = DEFAULT_TITLE;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    const prevContent = meta.getAttribute('content');
    if (description) meta.setAttribute('content', description);

    return () => {
      document.title = DEFAULT_TITLE;
      if (description && meta) meta.setAttribute('content', prevContent || '');
    };
  }, [title, description]);
}
