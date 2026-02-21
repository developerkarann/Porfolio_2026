import { useEffect } from 'react';

export function useSeo({ title, description }) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = `${title} | Karan Pal - Full Stack Developer`;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    const prevContent = meta.getAttribute('content');
    if (description) meta.setAttribute('content', description);

    return () => {
      if (title) document.title = prevTitle;
      if (description && meta) meta.setAttribute('content', prevContent || '');
    };
  }, [title, description]);
}
