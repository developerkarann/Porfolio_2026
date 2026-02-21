/**
 * Portfolio projects – used by FeaturedWork, ProjectsPage, and ProjectDetailPage.
 * Each project has list view data + full detail content (screenshots, features, technologies).
 */

export const PROJECTS_LIST = [
  {
    slug: 'deb-collection-crm',
    title: 'Deb Collection CRM',
    category: 'CRM & Business',
    shortDescription: 'End-to-end CRM for debt collection workflows, agent dashboards, and compliance reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=560&fit=crop',
    liveUrl: null,
    sourceUrl: null,
    featured: true,
  },
  {
    slug: 'crowd-funding-platform',
    title: 'Crowd Funding Platform',
    category: 'Fintech & Crowdfunding',
    shortDescription: 'Secure crowdfunding with pledges, milestones, and Stripe integration for creators and backers.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=900&h=560&fit=crop',
    liveUrl: null,
    sourceUrl: null,
    featured: true,
  },
  {
    slug: 'ecommerce-platform',
    title: 'E‑commerce Platform',
    category: 'E‑commerce',
    shortDescription: 'Full-featured online store with cart, checkout, inventory, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742111-a301566d24d0?w=900&h=560&fit=crop',
    liveUrl: null,
    sourceUrl: null,
    featured: true,
  },
  {
    slug: 'navnetram-eye-care',
    title: 'Navnetram Eye Care',
    category: 'Healthcare',
    shortDescription: 'Hospital-focused patient management, appointments, and eye care workflows for clinics.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&h=560&fit=crop',
    liveUrl: null,
    sourceUrl: null,
    featured: true,
  },
];

const PROJECTS_FULL = {
  'deb-collection-crm': {
    slug: 'deb-collection-crm',
    title: 'Deb Collection CRM',
    category: 'CRM & Business',
    metaDescription: 'Deb Collection CRM – custom CRM for debt collection: agent dashboards, workflow automation, compliance reporting. Built with React, Node.js, and PostgreSQL. Case study by Full Stack Developer.',
    description: 'A full-stack CRM tailored for debt collection teams. The system streamlines case assignment, follow-up scheduling, and compliance documentation while giving managers real-time visibility into agent performance and pipeline health.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop',
    liveUrl: null,
    sourceUrl: null,
    features: [
      'Case and debtor management with status workflows',
      'Agent dashboard with assigned cases and KPIs',
      'Automated follow-up scheduling and reminders',
      'Compliance logs and audit trails for regulations',
      'Role-based access (admin, team lead, agent)',
      'Export and reporting for management',
    ],
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'REST API'],
    screenshots: [
      { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=600&fit=crop', alt: 'Deb Collection CRM – Dashboard overview' },
      { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&h=600&fit=crop', alt: 'Deb Collection CRM – Case list and filters' },
      { src: 'https://images.unsplash.com/photo-1551431009-a22ee0f4e6d7?w=1000&h=600&fit=crop', alt: 'Deb Collection CRM – Analytics and reports' },
    ],
  },
  'crowd-funding-platform': {
    slug: 'crowd-funding-platform',
    title: 'Crowd Funding Platform',
    category: 'Fintech & Crowdfunding',
    metaDescription: 'Crowd funding platform with pledges, milestones, and Stripe. Full stack crowdfunding app – React, Node.js, MongoDB. Project case study by Full Stack Developer.',
    description: 'A crowdfunding platform that lets creators launch campaigns, set funding goals and milestones, and accept pledges. Backers can browse campaigns, pledge with Stripe, and track milestone updates—all with a clear, secure flow from signup to payout.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=630&fit=crop',
    liveUrl: null,
    sourceUrl: null,
    features: [
      'Campaign creation with goals, deadlines, and milestones',
      'Pledge tiers and Stripe payment integration',
      'Creator dashboard for campaign analytics',
      'Backer dashboard to track pledged campaigns',
      'Milestone updates and notifications',
      'Search, filters, and featured campaigns',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'REST API'],
    screenshots: [
      { src: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1000&h=600&fit=crop', alt: 'Crowd Funding Platform – Campaign discovery' },
      { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&h=600&fit=crop', alt: 'Crowd Funding Platform – Campaign detail and pledge' },
      { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&h=600&fit=crop', alt: 'Crowd Funding Platform – Creator dashboard' },
    ],
  },
  'ecommerce-platform': {
    slug: 'ecommerce-platform',
    title: 'E‑commerce Platform',
    category: 'E‑commerce',
    metaDescription: 'Full-featured e‑commerce platform: product catalog, cart, checkout, inventory, admin. Built with MERN stack. E‑commerce project case study by Full Stack Developer.',
    description: 'A complete e‑commerce solution with a customer-facing store (browse, search, cart, checkout) and an admin panel for products, inventory, orders, and basic analytics—designed to scale from small catalogs to larger inventories.',
    image: 'https://images.unsplash.com/photo-1556742111-a301566d24d0?w=1200&h=630&fit=crop',
    liveUrl: null,
    sourceUrl: null,
    features: [
      'Product catalog with categories and search',
      'Shopping cart and guest checkout',
      'Order management and order history',
      'Admin panel: products, stock, orders',
      'Image upload and product variants',
      'Responsive storefront and dashboard',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'REST API'],
    screenshots: [
      { src: 'https://images.unsplash.com/photo-1556742111-a301566d24d0?w=1000&h=600&fit=crop', alt: 'E‑commerce Platform – Storefront and product grid' },
      { src: 'https://images.unsplash.com/photo-1556742111-a301566d24d0?w=1000&h=600&fit=crop', alt: 'E‑commerce Platform – Product detail and cart' },
      { src: 'https://images.unsplash.com/photo-1551431009-a22ee0f4e6d7?w=1000&h=600&fit=crop', alt: 'E‑commerce Platform – Admin orders and inventory' },
    ],
  },
  'navnetram-eye-care': {
    slug: 'navnetram-eye-care',
    title: 'Navnetram Eye Care',
    category: 'Healthcare',
    metaDescription: 'Navnetram Eye Care – hospital and clinic management: patient records, appointments, eye care workflows. Healthcare project for a hospital. Built with React, Node.js. Case study by Full Stack Developer.',
    description: 'A healthcare management system built for Navnetram Eye Care hospital. It covers patient registration, appointment scheduling, basic clinical notes, and clinic-specific workflows so staff can focus on patient care while keeping records and schedules in one place.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=630&fit=crop',
    liveUrl: null,
    sourceUrl: null,
    features: [
      'Patient registration and electronic records',
      'Appointment scheduling and calendar view',
      'Doctor availability and slot management',
      'Clinical notes and visit history',
      'Reception and admin dashboards',
      'Role-based access for staff and doctors',
    ],
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'REST API'],
    screenshots: [
      { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1000&h=600&fit=crop', alt: 'Navnetram Eye Care – Patient and appointment dashboard' },
      { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&h=600&fit=crop', alt: 'Navnetram Eye Care – Appointment calendar' },
      { src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1000&h=600&fit=crop', alt: 'Navnetram Eye Care – Patient record and history' },
    ],
  },
};

export function getProjectBySlug(slug) {
  return PROJECTS_FULL[slug] || null;
}

export function getFeaturedProjects() {
  return PROJECTS_LIST.filter((p) => p.featured);
}
