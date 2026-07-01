import { FAQItem, ServiceItem, TeamMember, ProjectItem } from '../types';

export const AGENCY_INFO = {
  name: "SPARK STATION",
  headline: "We Build Digital Solutions That Work",
  subheadline: "Helping startups, businesses, and creators build, grow, and scale online. From web apps to brand identities — we deliver results.",
  copyright: "© 2026 Spark Station. All rights reserved.",
  whatsapp: "+91 9111376314",
  whatsappUrl: "https://wa.me/919111376314?text=Hi%2C%20I%27d%20like%20a%20free%20consultation",
  call: "+91 7224935780",
  email: "sparkstation.x@gmail.com"
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'electronics-shop',
    title: 'Shrinit Enterprises',
    category: 'web',
    desc: 'Comprehensive e-commerce platform for retail electronics, featuring streamlined catalog management and secure checkout.',
    tags: ['React', 'E-commerce'],
    liveUrl: 'https://shrinit-enterprisess.vercel.app/',
    image: 'https://images.unsplash.com/photo-1542332213-9b5a5a81a4b1?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'chiranjivi-clinic',
    title: 'Chiranjivi Clinic',
    category: 'web',
    desc: 'Patient-centric medical service portal facilitating seamless appointment scheduling and digital health record management.',
    tags: ['React', 'Healthcare'],
    liveUrl: 'https://chiranjeevi-clinic.vercel.app/',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'jhansi-empire',
    title: 'Jhansi Empire',
    category: 'web',
    desc: 'Professional real estate and housing society management portal showcasing residential property listings.',
    tags: ['Real Estate', 'Management'],
    liveUrl: 'https://jhansi-empire-frontend.vercel.app/',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'advance-property',
    title: 'Advance Property Construction',
    category: 'web',
    desc: 'Modern construction company website featuring project portfolios and service capabilities for commercial and residential developments.',
    tags: ['Construction', 'Portfolio'],
    liveUrl: 'https://advance-property-frontend.vercel.app/',
    image: 'https://images.unsplash.com/photo-1503387762-592dfe58ef4a?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'shayona-space',
    title: 'Shayona Space',
    category: 'web',
    desc: 'High-end real estate property showcase platform focused on architectural aesthetics and luxury living spaces.',
    tags: ['Real Estate', 'Luxury'],
    liveUrl: 'https://shayona-space-1.vercel.app/',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'futura-groups',
    title: 'Futura Groups',
    category: 'web',
    desc: 'Strategic real estate development portal designed for high-volume property listings and investor engagement.',
    tags: ['Real Estate', 'Investment'],
    liveUrl: 'https://futura-groups-0.vercel.app/',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'pavitra-mobiles',
    title: 'Pavitra Mobiles',
    category: 'web',
    desc: 'Mobile phone retailer portal showcasing latest gadgets and accessories.',
    tags: ['Retail', 'Mobile'],
    liveUrl: 'https://pavitra-mobile.vercel.app/',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'happy-tooth',
    title: 'Happy Tooth',
    category: 'web',
    desc: 'Dental clinic appointment and services portal for comprehensive dental care.',
    tags: ['Healthcare', 'Dental'],
    liveUrl: 'https://happy-tooth-frontend.vercel.app/',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'adarsh-gupta',
    title: 'Adarsh Gupta CA',
    category: 'web',
    desc: 'Professional Chartered Accountant portal providing financial services and advisory.',
    tags: ['Finance', 'Professional'],
    liveUrl: 'https://gupta-adarsh-co.vercel.app/',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    category: 'web',
    desc: 'Property listing and management platform for commercial and residential real estate.',
    tags: ['Real Estate'],
    liveUrl: 'https://real-estate-livid-psi.vercel.app/',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'abati',
    title: 'Abati',
    category: 'web',
    desc: 'Real estate development and property showcase for modern living.',
    tags: ['Real Estate'],
    liveUrl: 'https://abati-website.vercel.app/',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80'
  }
];

export const TRUSTED_BADGES = [
  "TechStartup Co.",
  "LocalBiz Hub",
  "Creator Studio",
  "ScaleUp Ventures",
  "Digital Agency X"
];

export const PROBLEMS = [
  "Outdated or non-existent digital presence",
  "Poor user experience losing potential customers",
  "Slow, buggy applications damaging your brand",
  "Lack of technical expertise on your team",
  "High agency costs with low-quality results"
];

export const SOLUTIONS = [
  "Modern, fast websites & digital solutions built to convert",
  "UX-first design that delights your users",
  "Clean, maintainable code that scales",
  "A dedicated expert team behind every project",
  "Transparent, fair pricing with real results"
];

export const PILLARS = [
  {
    icon: "Zap",
    title: "Fast Delivery",
    desc: "We move quickly without cutting corners. Your deadlines are our deadlines."
  },
  {
    icon: "CodeXml",
    title: "Quality Code",
    desc: "Clean, documented, maintainable code. Built to last and scale."
  },
  {
    icon: "TrendingUp",
    title: "Custom Pricing",
    desc: "No cookie-cutter packages. Fair, transparent quotes tailored to you."
  },
  {
    icon: "Users",
    title: "Ongoing Support",
    desc: "We don't disappear after launch. We're here for the long haul."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Web Development",
    desc: "Modern, responsive, high-performance websites built with React, Next.js, and modern tools. Fast load times & SEO optimized.",
    iconName: "CodeXml",
    color: "#58A6FF",
    benefits: ["Fast Delivery", "Quality Code", "Custom Pricing", "Ongoing Support"],
    useCases: ["SaaS Landing Pages", "Company Websites", "Web Applications", "Customer Portals"]
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    desc: "Intuitive, conversion-focused design systems, prototypes, and user interfaces that delight your customers.",
    iconName: "Layout",
    color: "#F778BA",
    benefits: ["User Research", "Wireframing", "Interactive Prototypes", "Design Systems"],
    useCases: ["Redesign Projects", "New App Concepts", "Landing Page CRO", "Brand Guidelines"]
  },
  {
    id: "branding",
    title: "Branding & Identity",
    desc: "Distinctive logos, color palettes, typography, and complete brand guidelines that make your business stand out.",
    iconName: "Palette",
    color: "#34D399",
    benefits: ["Logo Design", "Color Palettes", "Typography", "Brand Book"],
    useCases: ["Rebranding", "New Startups", "Product Launches", "Social Media Kits"]
  },
  {
    id: "product-design",
    title: "Product Design",
    desc: "From MVP ideation to full product roadmap and wireframes. We help shape your vision into a viable digital product.",
    iconName: "Compass",
    color: "#FBBF24",
    benefits: ["Product Strategy", "User Journey Maps", "Feature Prioritization", "Rapid Prototyping"],
    useCases: ["Pitch Decks", "Angel Investors", "Beta Launches", "Feature Expansions"]
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    desc: "Scalable online stores with seamless checkout, payment gateway integrations, and robust inventory management.",
    iconName: "ShoppingBag",
    color: "#38BDF8",
    benefits: ["Stripe & Razorpay", "Custom Cart Logic", "Order Tracking", "Admin Dashboard"],
    useCases: ["D2C Brands", "Digital Downloads", "Subscription Boxes", "B2B Wholesale"]
  },
  {
    id: "seo",
    title: "SEO & Performance",
    desc: "Technical SEO audits, core web vitals optimization, structured data, and speed boosting to rank higher on search engines.",
    iconName: "Search",
    color: "#A855F7",
    benefits: ["90+ Lighthouse Score", "Keyword Strategy", "On-Page SEO", "Schema Markup"],
    useCases: ["Organic Growth", "Blog Networks", "Local Businesses", "High Traffic Sites"]
  },
  {
    id: "consultancy",
    title: "Technical Consultancy",
    desc: "Architecture reviews, tech stack selection, cloud infrastructure setup, and technical leadership for growing engineering teams.",
    iconName: "Cpu",
    color: "#EC4899",
    benefits: ["Code Audits", "Scalability Planning", "Security Reviews", "Cost Optimization"],
    useCases: ["Scaling Architecture", "CTO Advisory", "Tech Stack Migration", "Cloud Deployment"]
  }
];

export const FAQS: FAQItem[] = [
  {
    q: "How much does a project cost?",
    a: "We provide custom quotes based on your specific requirements, scope, and timeline. Contact us for a free consultation and we'll give you a transparent breakdown."
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary by project complexity. A landing page might take 1-2 days, while a full web app can take 4-5days or maximum 1 week . We'll give you an exact estimate during consultation."
  },
  {
    q: "Do you work with startups?",
    a: "Absolutely. We love working with early-stage startups and have tailored packages to help you build your MVP and scale."
  },
  {
    q: "Will I own the code and designs?",
    a: "Yes, 100%. Upon project completion and final payment, all code, designs, and assets belong to you entirely."
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes, we offer maintenance and support packages so your product stays up-to-date, secure, and running smoothly."
  },
  {
    q: "What information do you need to get started?",
    a: "A brief description of your project, target audience, rough timeline, and any reference sites or designs you like. That's all we need for an initial consultation."
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Saksham Pandey",
    role: "Founder & Developer",
    bio: "Passionate full-stack developer specializing in scalable web architectures and modern UI systems.",
    experience: "5+ Years",
    contact: "https://wa.me/919111376314",
    skills: ["Web Development", "UI/UX Design", "Tech Solutions"],
    color: "#58A6FF",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Shashwat Rai",
    role: "Finance Manager",
    bio: "Handles pricing strategy, budgeting, and financial planning for projects.",
    experience: "4 Years",
    contact: null,
    skills: ["Financial Planning", "Budgeting", "Pricing Strategy"],
    color: "#8B5CF6",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Niket",
    role: "Marketing & Content Strategy",
    bio: "Responsible for marketing strategy, content creation, and customer acquisition.",
    experience: "3 Years",
    contact: null,
    skills: ["Marketing Strategy", "Content Creation", "Lead Generation"],
    color: "#F778BA",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Manas",
    role: "Client Relations",
    bio: "Ensuring smooth communication, project onboarding, and client satisfaction.",
    experience: "3 Years",
    contact: "tel:+917224935780",
    skills: ["Client Relations", "Project Management", "Consultation"],
    color: "#34D399",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Puneet Dubey",
    role: "Client Relations",
    bio: "Bridges technical deliverables with client expectations and business goals.",
    experience: "3 Years",
    contact: null,
    skills: ["Client Relations", "Account Management", "Strategy"],
    color: "#FBBF24",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=80"
  }
];
