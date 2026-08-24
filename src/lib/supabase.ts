import { createClient } from '@supabase/supabase-js';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Website Development' | 'Business Growth';
  publish_date: string;
  author_name: string;
  author_avatar: string;
  reading_time: string;
  content: string;
  status: 'draft' | 'published';
  summary: string;
  featured_image: string;
  created_at: string;
}

// 1. Initial High-Quality Seed Data (Pre-designed based on user requests)
const SEED_POSTS: BlogPost[] = [
  {
    id: 'seed-post-1',
    title: 'How Much Does a Website Cost? A Complete Pricing Guide',
    slug: 'how-much-does-a-website-cost',
    category: 'Website Development',
    publish_date: '2026-07-01',
    author_name: 'Saksham Pandey',
    author_avatar: '/saksham.png',
    reading_time: '6 min read',
    summary: 'An in-depth guide explaining how website development is priced, comparing templates, custom React sites, and complex enterprise software platforms.',
    featured_image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=1200&auto=format&fit=crop&q=80',
    status: 'published',
    created_at: '2026-07-01T12:00:00.000Z',
    content: `When planning a digital expansion, the very first question business owners ask is: **"How much does a website cost?"**

The short answer is that website costs vary wildly depending on functionality, complexity, and technology stack. Below, we break down the exact costs, tech-stacks, and architectural decisions to help you budget with confidence.

### 1. Cost Overview by Project Type

| Website Type | Average Cost Range (USD) | Best Suited For | Tech Stack Recommendation |
| :--- | :--- | :--- | :--- |
| **Landing Page** | $500 - $1,500 | Simple conversion, lead generation, single campaign | HTML/CSS, Tailwind, React/Vite |
| **Business Website** | $2,500 - $8,000 | Small to mid-sized firms, portfolio presentation, lead capture | Next.js, React, Tailwind, Headless CMS |
| **Custom Web App** | $10,000 - $35,000+ | SaaS platforms, custom dashboards, client portals | React/TS, Node.js, Express, PostgreSQL/Supabase |
| **Enterprise Platform** | $50,000+ | Large-scale multi-user systems, deep automation, high-security | React, TypeScript, Microservices, Cloud SQL |

### 2. Key Pricing Drivers

There are several main factors that dictate the final investment required for a premium website:

* **Design Complexity**: Pre-built templates are affordable but lack brand uniqueness. Fully custom UI/UX design crafted from scratch offers absolute brand consistency and premium performance.
* **Feature Scope**: Features like user authorization, real-time database syncing, custom dashboard panels, and API integrations require backend engineering which increases development time.
* **SEO and Schema**: Implementing proper technical SEO, custom JSON-LD schemas, automated meta descriptions, and perfect Core Web Vitals guarantees visibility but requires experienced architects.

> "A cheap website is like a cheap suit—it looks okay from afar, but under any stress, it falls apart. Investing in a custom React platform yields durable business ROI."  
> — *Saksham Pandey, Founder of Spark Station*

### 3. Step-by-Step Cost Allocation

1. **Discovery & Wireframing (15%)**: Understanding user personas, outlining hierarchy, and drafting low-fidelity layouts.
2. **UI/UX Design (25%)**: Creating high-fidelity screens, choosing elegant color palettes, and refining typography.
3. **Frontend & Backend Engineering (45%)**: Coding custom functional states, setting up databases (like Supabase or Firestore), and optimizing API proxies.
4. **Testing & Deployment (15%)**: Performing rigorous cross-device checks, checking lighthouse scores, and deploying to high-speed hosting solutions like Vercel or Cloud Run.

### 4. How to Choose the Right Agency

When reviewing potential agencies, look for:
* **Pragmatic Tech Choice**: Choose agencies using modern frameworks (Vite, Next.js, Tailwind, React, TypeScript) rather than old, slow monolithic builders.
* **Transparent Communication**: An agency that provides clear pricing timelines and respects your budget boundaries.
* **Demonstrated Design Craftsmanship**: Review their past portfolios to verify layout density, motion curves, and overall visual polish.

Are you ready to build a high-performance web platform that sets your brand apart? Contact **Spark Station** today to get a custom, itemized estimate.
`
  },
  {
    id: 'seed-post-2',
    title: 'Website vs. Landing Page: Which is Better for Your Business?',
    slug: 'website-vs-landing-page',
    category: 'Website Development',
    publish_date: '2026-07-04',
    author_name: 'Saksham Pandey',
    author_avatar: '/saksham.png',
    reading_time: '5 min read',
    summary: 'Discover the key differences between a comprehensive business website and a high-converting landing page to select the right tool for your campaigns.',
    featured_image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80',
    status: 'published',
    created_at: '2026-07-04T12:00:00.000Z',
    content: `Many businesses struggle to decide whether they should invest in a full **multi-page corporate website** or a **dedicated, single-view landing page**.

Choosing the incorrect asset can dilute your marketing budget and lead to poor conversion rates. Let's compare their structures, objectives, and optimal use-cases.

### 1. Structural Comparison

The distinction comes down to intent and focus:

* **Landing Page**: A single-screen, highly focused layout. It contains no external navigation links, no generic sidebars, and has exactly **one** primary objective—conversion.
* **Business Website**: A multi-view architectural experience. It features persistent headers and footers, comprehensive sub-pages (About, Services, Team, Case Studies), and detailed informative content.

### 2. When to Use a Landing Page

Landing pages are best suited for paid advertising campaigns where traffic is sent to a specific offer. 

#### Advantages of Landing Pages:
1. **Zero Distractions**: Without a global navigation menu, users have only two options: convert (sign up/purchase) or close the page.
2. **Speed & Clarity**: Highly concise value propositions paired with clear Call-to-Action (CTA) elements.
3. **Higher Conversion Rates**: Average landing pages convert 3x to 5x higher than complex homepages because of their laser focus.

\`\`\`ts
// Example of a perfect CTA focus handler in React
export function handleCTA() {
  const ctaElement = document.getElementById('conversion-form');
  if (ctaElement) {
    ctaElement.scrollIntoView({ behavior: 'smooth' });
  }
}
\`\`\`

### 3. When to Use a Full Website

A comprehensive website is your brand's digital headquarters. It is designed to establish authority, build deep brand trust, and educate potential clients over multiple sessions.

#### Advantages of a Full Website:
* **Organic SEO Growth**: Multiple pages allow you to target separate keywords, write detailed educational blogs, and gain rich search volume.
* **Domain Authority**: Google rewards structured architectures containing rich content, distinct page-level structured metadata, and authentic schema configurations.
* **Customer Education**: Clients can browse team bios, read deep case studies, check itemized services, and review FAQs before reaching out.

### 4. Summary Matrix: Quick Guide

| Criteria | Landing Page | Full Website |
| :--- | :--- | :--- |
| **Primary Goal** | Direct Lead Capture / Sales | Trust, SEO, Authority, Information |
| **Ideal Traffic Source** | Meta Ads, Google PPC, Email Newsletters | Organic Search, Social Media, Direct Visits |
| **Navigation Menu** | No (strictly forbidden) | Yes (structured dropdowns, navbar) |
| **Bounce Rate** | Typically high (by design) | Low to moderate (multi-page browsing) |
| **Content Depth** | Minimal, punchy, persuasive | Deep, comprehensive, educational |

### 5. The Hybrid Solution: Spark Station Approach

At Spark Station, we often recommend a unified approach:
* Establish a gorgeous, structured **Vite/React main website** to act as your brand's anchor.
* Build custom, light, lightning-fast **landing pages** mapped to specific sub-routes (e.g., \`/landing/special-offer\`) for your paid marketing funnels.

This strategy ensures you capture organic search authority without sacrificing direct conversion efficiency. Have questions on which model fits your current growth cycle? Send us a message!
`
  },
  {
    id: 'seed-post-3',
    title: 'How Modern Websites Help Businesses Grow and Maximize ROI',
    slug: 'how-websites-help-businesses-grow',
    category: 'Business Growth',
    publish_date: '2026-07-06',
    author_name: 'Saksham Pandey',
    author_avatar: '/saksham.png',
    reading_time: '5 min read',
    summary: 'A detailed breakdown of how custom software development, modern technical SEO, and flawless user experiences turn websites into 24/7 lead machines.',
    featured_image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    status: 'published',
    created_at: '2026-07-06T12:00:00.000Z',
    content: `In the modern digital landscape, a website is no longer just an online brochure. It is an active business employee working 24/7/365 to generate leads, close deals, and build customer loyalty.

However, a slow, outdated, generic website acts as a bottleneck. Let's look at the direct, measurable ways a custom modern React application scales your business and maximizes your Return on Investment (ROI).

### 1. Speed as a Ranking & Conversion Factor

A single second delay in page load time can reduce conversions by **20%** and page views by **11%**. Modern clients demand immediate feedback.

* **Vite-Powered Frontend**: By utilizing React with Vite, our sites compile into lean, efficient static bundles with automatic route-based split loading.
* **Core Web Vitals**: Flawless scores on Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) keep search engines happy and guarantee your site ranks above slower legacy builders.

### 2. Conversions Through Aesthetic Pairings

Premium design is not just "looking pretty"; it is psychological. A meticulously polished layout builds immediate trust:
1. **Negative Space**: Generous breathing room guides the user's focus straight to your primary CTA buttons.
2. **Typography Pairings**: Using high-contrast display headings like Space Grotesk paired with clean, readable Inter sans-serif font ensures maximum legibility.
3. **Motion Curves**: High-performance animations (powered by the \`motion\` engine) make form submissions and page transitions feel premium.

> "Your website is the front door of your modern company. If it looks broken, slow, or generic, users assume your service is the same. Craftsmanship equals trust."  
> — *Saksham Pandey, CEO of Spark Station*

### 3. SEO & Structured Data Integration

A website that no one can find is useless. Modern search engine optimization goes beyond keyword stuffing:

* **JSON-LD Schema**: Injecting valid schema data enables search engines like Google to display interactive rich snippets (reviews, FAQs, ratings, articles) on search result pages.
* **AI Search Optimization**: Structuring your content with semantic HTML, clear header hierarchies (\`h1\`, \`h2\`, \`h3\`), and concise FAQ answers ensures AI models like ChatGPT, Gemini, and Claude can parse your brand data accurately.

### 4. Measurable Automation

A custom website can automate manual, repetitive office processes:
* **Interactive Calculators**: Allow users to estimate project costs instantly on-screen, capturing pre-qualified leads.
* **Calendly / Meeting Schedulers**: Let prospects book consultations directly without back-and-forth emails.
* **Smart Client Portals**: Real-time dashboards built on top of high-performance backend databases like Supabase, reducing customer support load.

### 5. Final ROI Calculation

Let's look at a quick mathematical projection of a premium website upgrade:

* **Before (Legacy Site)**: 1,000 monthly visitors, 1% conversion rate = 10 leads. At a $1,000 contract value = **$10,000 revenue**.
* **After (Spark Station Site)**: 1,500 monthly visitors (due to technical SEO), 3% conversion rate (due to superior design/speed) = 45 leads. At a $1,000 contract value = **$45,000 revenue**.

By upgrading to a modern website, the business gained a **350% increase in monthly revenue**, paying off the website investment in a single month.

Don't let a sluggish website hold back your business growth. Reach out to **Spark Station** today to engineer your digital growth machine.
`
  }
];

// 2. Initialize Supabase Client (Optionally using environment variables)
const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey && supabaseUrl !== 'https://your-project-id.supabase.co');

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// 3. Fallback Storage Engine
const LOCAL_STORAGE_KEY = 'spark_station_blog_posts';
const AUTH_SESSION_KEY = 'spark_station_admin_session';

// Helper to get local posts
const getLocalPosts = (): BlogPost[] => {
  const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(SEED_POSTS));
    return SEED_POSTS;
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    return SEED_POSTS;
  }
};

// Helper to save local posts
const saveLocalPosts = (posts: BlogPost[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
};

// 4. Unified Data Access Layer (CMS Engine)
export const blogService = {
  // Get all posts
  async getPosts(includeDrafts = false): Promise<BlogPost[]> {
    if (isSupabaseConfigured && supabase) {
      try {
        let query = supabase.from('blog_posts').select('*').order('publish_date', { ascending: false });
        if (!includeDrafts) {
          query = query.eq('status', 'published');
        }
        const { data, error } = await query;
        if (error) throw error;
        if (data && data.length > 0) {
          return data as BlogPost[];
        }
      } catch (e) {
        console.warn('Supabase getPosts failed, using LocalStorage cache:', e);
      }
    }

    // Local Storage Fallback
    const posts = getLocalPosts();
    const filtered = includeDrafts ? posts : posts.filter(p => p.status === 'published');
    return [...filtered].sort((a, b) => new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime());
  },

  // Get post by slug
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .maybeSingle();
        if (error) throw error;
        if (data) return data as BlogPost;
      } catch (e) {
        console.warn('Supabase getPostBySlug failed, using LocalStorage cache:', e);
      }
    }

    // Local Storage Fallback
    const posts = getLocalPosts();
    return posts.find(p => p.slug === slug) || null;
  },

  // Create post
  async createPost(postData: Omit<BlogPost, 'id' | 'created_at'>): Promise<BlogPost> {
    const newPost: BlogPost = {
      ...postData,
      id: 'post-' + Math.random().toString(36).substr(2, 9),
      created_at: new Date().toISOString()
    };

    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .insert(newPost)
          .select()
          .single();
        if (error) throw error;
        if (data) return data as BlogPost;
      } catch (e) {
        console.warn('Supabase createPost failed, using LocalStorage cache:', e);
      }
    }

    // Local Storage Fallback
    const posts = getLocalPosts();
    posts.push(newPost);
    saveLocalPosts(posts);
    return newPost;
  },

  // Update post
  async updatePost(id: string, postData: Partial<BlogPost>): Promise<BlogPost> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', id)
          .select()
          .single();
        if (error) throw error;
        if (data) return data as BlogPost;
      } catch (e) {
        console.warn('Supabase updatePost failed, using LocalStorage cache:', e);
      }
    }

    // Local Storage Fallback
    const posts = getLocalPosts();
    const idx = posts.findIndex(p => p.id === id);
    if (idx === -1) throw new Error('Post not found');
    const updatedPost = { ...posts[idx], ...postData };
    posts[idx] = updatedPost;
    saveLocalPosts(posts);
    return updatedPost;
  },

  // Delete post
  async deletePost(id: string): Promise<boolean> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { error } = await supabase
          .from('blog_posts')
          .delete()
          .eq('id', id);
        if (error) throw error;
        return true;
      } catch (e) {
        console.warn('Supabase deletePost failed, using LocalStorage cache:', e);
      }
    }

    // Local Storage Fallback
    const posts = getLocalPosts();
    const filtered = posts.filter(p => p.id !== id);
    saveLocalPosts(filtered);
    return true;
  },

  // Upload featured image
  async uploadImage(file: File): Promise<string> {
    if (isSupabaseConfigured && supabase) {
      try {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `blog-featured/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('blog-images')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from('blog-images')
          .getPublicUrl(filePath);

        if (data?.publicUrl) return data.publicUrl;
      } catch (e) {
        console.warn('Supabase image upload failed, falling back to Base64 data URL:', e);
      }
    }

    // Local Storage Fallback: Convert to Base64 data URL so image works immediately in memory/storage
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  },

  // Auth Operations
  async login(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        return { success: true };
      } catch (e: any) {
        return { success: false, error: e.message || 'Invalid credentials' };
      }
    }

    // Local Storage Fallback (Admin user check)
    // Accept user email or developer email 'sparkstation.x@gmail.com' / 'protechnicalguruji1@gmail.com'
    const allowedEmails = ['sparkstation.x@gmail.com', 'protechnicalguruji1@gmail.com', 'admin@sparkstation.agency'];
    if (
      allowedEmails.includes(email.toLowerCase()) &&
      password === 'SparkAdmin2026!'
    ) {
      localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify({ email, token: 'mock-jwt-token-' + Date.now() }));
      return { success: true };
    }
    return { success: false, error: 'Invalid admin credentials. Hint: use sparkstation.x@gmail.com and SparkAdmin2026!' };
  },

  logout() {
    if (isSupabaseConfigured && supabase) {
      supabase.auth.signOut();
    }
    localStorage.removeItem(AUTH_SESSION_KEY);
  },

  isLoggedIn(): boolean {
    if (isSupabaseConfigured && supabase) {
      // In a real scenario, we check active session synchronously (often with a state listener in the component),
      // we can also inspect the localStorage/cookies or token cache.
      const session = localStorage.getItem('sb-' + supabaseUrl.split('//')[1].split('.')[0] + '-auth-token');
      if (session) return true;
    }
    return localStorage.getItem(AUTH_SESSION_KEY) !== null;
  }
};

// 5. Database Setup Help Script string for the user to paste into Supabase SQL editor
export const SUPABASE_SQL_SETUP = `-- Copy and paste this into the Supabase SQL Editor:

-- 1. Create the blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category TEXT CHECK (category IN ('Website Development', 'Business Growth')) NOT NULL,
  publish_date DATE NOT NULL,
  author_name TEXT NOT NULL,
  author_avatar TEXT NOT NULL,
  reading_time TEXT NOT NULL,
  content TEXT NOT NULL,
  status TEXT CHECK (status IN ('draft', 'published')) NOT NULL,
  summary TEXT NOT NULL,
  featured_image TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable row level security (RLS)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- 3. Create public read policy (anyone can read published posts)
CREATE POLICY "Public read published posts" ON blog_posts
  FOR SELECT USING (status = 'published');

-- 4. Create all-access policy for authenticated users (admin dashboard)
CREATE POLICY "Admin full access" ON blog_posts
  FOR ALL TO authenticated USING (true);

-- 5. Set up Storage bucket 'blog-images'
-- Go to Storage -> Create a new bucket named "blog-images" and make it PUBLIC.
-- Under Bucket Policies, allow INSERT/UPDATE/DELETE/SELECT for authenticated users, and SELECT for public.
`;
