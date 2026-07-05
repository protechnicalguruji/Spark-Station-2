import React, { useEffect } from 'react';
import { 
  ArrowUpRight, 
  MapPin, 
  Terminal, 
  Cpu, 
  Award, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Mail, 
  Compass, 
  ArrowRight,
  CodeXml,
  Shield,
  Layers,
  Sparkles,
  ExternalLink,
  Flame,
  Globe
} from 'lucide-react';
import { PageRoute } from '../types';

interface FounderPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const FounderPage: React.FC<FounderPageProps> = ({ onRouteChange }) => {
  
  // Advanced Dynamic SEO Setup on Mount
  useEffect(() => {
    // 1. Dynamic URL Path Simulation / Clean Slug Integration
    if (window.history.pushState) {
      window.history.pushState(null, '', '/founder');
    }

    // 2. Set Page Title (around 55-60 chars)
    const previousTitle = document.title;
    document.title = "Saksham Pandey | Founder of Spark Station | Web Developer | Cybersecurity Enthusiast";

    // 3. Set Meta Tags
    const metaDesc = document.createElement('meta');
    metaDesc.name = "description";
    metaDesc.content = "Saksham Pandey is the Founder of Spark Station, a Web Developer with 18+ months of experience and a Cybersecurity Enthusiast with 4+ years of experience. Based in Gwalior, India.";
    document.head.appendChild(metaDesc);

    // Robots meta tag
    const metaRobots = document.createElement('meta');
    metaRobots.name = "robots";
    metaRobots.content = "index, follow";
    document.head.appendChild(metaRobots);

    // Canonical link
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = "canonical";
    canonicalLink.href = window.location.origin + "/founder";
    document.head.appendChild(canonicalLink);

    // Open Graph Tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = "Saksham Pandey | Founder of Spark Station | Web Developer | Cybersecurity Enthusiast";
    document.head.appendChild(ogTitle);

    const ogDesc = document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    ogDesc.content = "Saksham Pandey is the Founder of Spark Station, a Web Developer with 18+ months of experience and a Cybersecurity Enthusiast with 4+ years of experience. Based in Gwalior, India.";
    document.head.appendChild(ogDesc);

    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = "profile";
    document.head.appendChild(ogType);

    const ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.content = window.location.origin + "/founder";
    document.head.appendChild(ogUrl);

    const ogImage = document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.content = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&auto=format&fit=crop&q=80";
    document.head.appendChild(ogImage);

    // Twitter Card Tags
    const twitterCard = document.createElement('meta');
    twitterCard.name = "twitter:card";
    twitterCard.content = "summary_large_image";
    document.head.appendChild(twitterCard);

    // 4. Inject JSON-LD Person Schema Structured Data
    const schemaScript = document.createElement('script');
    schemaScript.type = "application/ld+json";
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Saksham Pandey",
      "jobTitle": "Founder & CEO",
      "worksFor": {
        "@type": "Organization",
        "name": "Spark Station",
        "url": window.location.origin
      },
      "description": "Saksham Pandey is the Founder of Spark Station, a Web Developer with 18+ months of experience and a Cybersecurity Enthusiast with 4+ years of experience. Based in Gwalior, India.",
      "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80",
      "email": "protechnicalguruji1@gmail.com",
      "url": window.location.origin + "/founder",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gwalior",
        "addressRegion": "Madhya Pradesh",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.linkedin.com",
        "https://www.instagram.com",
        "https://twitter.com",
        "https://www.snapchat.com"
      ]
    });
    document.head.appendChild(schemaScript);

    // Cleanup on unmount
    return () => {
      document.title = previousTitle;
      document.head.removeChild(metaDesc);
      document.head.removeChild(metaRobots);
      document.head.removeChild(canonicalLink);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDesc);
      document.head.removeChild(ogType);
      document.head.removeChild(ogUrl);
      document.head.removeChild(ogImage);
      document.head.removeChild(twitterCard);
      document.head.removeChild(schemaScript);
    };
  }, []);

  const skillsList = [
    { name: "HTML", category: "frontend" },
    { name: "CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Firebase", category: "backend" },
    { name: "SEO", category: "marketing" },
    { name: "Responsive Design", category: "design" },
    { name: "UI/UX", category: "design" },
    { name: "Performance Optimization", category: "marketing" },
    { name: "Linux", category: "security" },
    { name: "Python", category: "security" },
    { name: "Networking", category: "security" },
    { name: "Cybersecurity", category: "security" },
    { name: "Ethical Hacking", category: "security" },
    { name: "Git", category: "backend" },
    { name: "GitHub", category: "backend" },
    { name: "AI Tools", category: "marketing" }
  ];

  return (
    <div className="relative min-h-screen py-12 md:py-20 overflow-hidden">
      {/* Decorative premium ambient glow backgrounds matching site branding */}
      <div className="absolute top-[-100px] left-1/4 w-[500px] h-[500px] bg-[#58A6FF]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[200px] right-1/4 w-[600px] h-[600px] bg-[#8B5CF6]/5 rounded-full filter blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Navigation Breadcrumb / Label */}
        <div className="mb-10 flex items-center justify-between">
          <button 
            onClick={() => onRouteChange('team')}
            className="group flex items-center gap-2 text-sm text-[#8b949e] hover:text-white transition-colors cursor-pointer"
            aria-label="Back to Team section"
          >
            <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
            <span>Back to Team</span>
          </button>
          
          <span className="section-label">
            <Sparkles size={12} className="text-[#58A6FF]" />
            <span>Executive Portfolio</span>
          </span>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* CARD 1: HERO PROFILE CARD (lg:col-span-2, lg:row-span-2) */}
          <div 
            id="founder-hero-card"
            className="lg:col-span-2 lg:row-span-2 ss-card p-8 flex flex-col justify-between relative overflow-hidden group border-[#58A6FF]/20 shadow-2xl"
            style={{
              background: 'linear-gradient(145deg, rgba(22, 27, 34, 0.95) 0%, rgba(13, 17, 23, 0.95) 100%)'
            }}
          >
            {/* Ambient subtle animation element */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#58A6FF]/10 rounded-full filter blur-[50px] group-hover:scale-125 transition-transform duration-1000" />
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#8B5CF6]/10 rounded-full filter blur-[50px] group-hover:scale-125 transition-transform duration-1000" />
            
            <div className="relative z-10">
              {/* Profile Header Image and Badge */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#58A6FF]/40 shadow-xl relative bg-[#21262d]">
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80" 
                    alt="Saksham Pandey Founder of Spark Station" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#58A6FF]/10 border border-[#58A6FF]/30 text-xs text-[#58A6FF] font-semibold font-mono uppercase mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#58A6FF] animate-pulse"></span>
                    Founder & CEO
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-none mb-2">
                    Saksham Pandey
                  </h1>
                  <h2 className="text-sm font-medium text-[#8b949e]">
                    Founder & CEO of Spark Station
                  </h2>
                </div>
              </div>

              {/* Sub-roles / Focus */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                  <CodeXml size={16} className="text-[#58A6FF]" />
                  <span>Web Developer</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                  <Shield size={16} className="text-[#8B5CF6]" />
                  <span>Cybersecurity Enthusiast</span>
                </div>
              </div>
            </div>

            {/* Location & Metadata footer */}
            <div className="relative z-10 pt-6 border-t border-[#30363d]/50 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8b949e]">
                <MapPin size={14} className="text-[#f778ba]" />
                <span>Gwalior, MP, India</span>
              </div>
              <span className="text-[10px] font-mono text-[#8b949e] px-2 py-1 rounded bg-[#0d1117] border border-[#30363d]">
                26.2183° N, 78.1828° E
              </span>
            </div>
          </div>

          {/* CARD 2: ABOUT CARD (lg:col-span-2, lg:row-span-2) */}
          <div 
            id="founder-about-card"
            className="lg:col-span-2 lg:row-span-2 ss-card p-8 flex flex-col justify-between relative overflow-hidden group border-[#30363d]/80"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#30363d]/50">
                <Compass size={18} className="text-[#8B5CF6]" />
                <h2 className="text-xl font-display font-bold text-white">About Me</h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#c9d1d9] leading-relaxed font-sans">
                <p>
                  I am Saksham Pandey, Founder of Spark Station.
                </p>
                <p>
                  I have been building modern, responsive business websites for the past <strong className="text-white font-semibold">18 months</strong>, helping businesses establish a strong digital presence through clean design, performance, and conversion-focused development.
                </p>
                <p>
                  Alongside web development, I have been passionately exploring <strong className="text-white font-semibold">Cybersecurity for over 4 years</strong>, continuously learning ethical hacking, Linux, networking, and security best practices.
                </p>
                <p className="text-sm text-[#8b949e]">
                  My goal is to build high-quality digital products while creating a trusted technology brand that businesses can rely on.
                </p>
              </div>
            </div>

            <div className="pt-6 flex items-center justify-between">
              <span className="text-xs font-mono text-[#8b949e]">Est. 18 Months Web Dev</span>
              <span className="text-xs font-mono text-[#8b949e]">4+ Years InfoSec</span>
            </div>
          </div>

          {/* CARD 3: EXPERIENCE STATS CARD (lg:col-span-1, lg:row-span-1) */}
          <div 
            id="founder-experience-card"
            className="lg:col-span-1 ss-card p-6 flex flex-col justify-between relative overflow-hidden group border-[#30363d]/80 hover:border-[#8B5CF6]/50"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#8b949e]">Experience</h2>
              <Terminal size={16} className="text-[#8B5CF6]" />
            </div>
            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-1.5 text-[#58A6FF] text-xs font-bold mb-1 uppercase tracking-wider">
                  <span>💻 Web Dev</span>
                </div>
                <div className="text-2xl font-display font-extrabold text-white">
                  18+ Months
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-[#f778ba] text-xs font-bold mb-1 uppercase tracking-wider">
                  <span>🔐 Cybersecurity</span>
                </div>
                <div className="text-2xl font-display font-extrabold text-white">
                  4+ Years
                </div>
              </div>
            </div>
          </div>

          {/* CARD 4: LOCATION MAP/TEXT CARD (lg:col-span-1, lg:row-span-1) */}
          <div 
            id="founder-location-card"
            className="lg:col-span-1 ss-card p-6 flex flex-col justify-between relative overflow-hidden group border-[#30363d]/80 hover:border-[#f778ba]/50 bg-gradient-to-br from-[#161b22] to-[#0d1117]"
          >
            <div className="flex items-center justify-between">
              <span className="text-[32px] select-none" role="img" aria-label="Map pointer">📍</span>
              <Globe size={18} className="text-[#f778ba] opacity-60 group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-white tracking-tight leading-tight">
                Gwalior
              </h3>
              <p className="text-sm font-semibold text-[#8b949e] mt-1">
                Madhya Pradesh
              </p>
              <p className="text-xs text-[#8b949e]/80 font-mono tracking-wider mt-0.5">
                India
              </p>
            </div>
          </div>

          {/* CARD 5: ACHIEVEMENTS TIMELINE CARD (lg:col-span-2, lg:row-span-2) */}
          <div 
            id="founder-achievements-card"
            className="lg:col-span-2 lg:row-span-2 ss-card p-8 flex flex-col justify-between border-[#30363d]/80"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-[#30363d]/50">
                <Award size={18} className="text-[#34D399]" />
                <h2 className="text-xl font-display font-bold text-white">Achievements</h2>
              </div>
              
              <div className="space-y-5">
                <div className="flex gap-4 items-start group/item">
                  <div className="w-8 h-8 rounded-lg bg-[#34D399]/10 border border-[#34D399]/30 flex items-center justify-center text-[#34D399] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                    ✨
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-white group-hover/item:text-[#34D399] transition-colors">
                      Founder of Spark Station
                    </h4>
                    <p className="text-xs text-[#8b949e] mt-1 leading-relaxed">
                      Established and scale a forward-thinking digital agency delivering clean development & top performance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group/item">
                  <div className="w-8 h-8 rounded-lg bg-[#58A6FF]/10 border border-[#58A6FF]/30 flex items-center justify-center text-[#58A6FF] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                    🌐
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-white group-hover/item:text-[#58A6FF] transition-colors">
                      Successful Website Launches
                    </h4>
                    <p className="text-xs text-[#8b949e] mt-1 leading-relaxed">
                      Developed multiple highly performant, fully responsive custom business sites for global clients.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group/item">
                  <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                    🛡️
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-white group-hover/item:text-[#8B5CF6] transition-colors">
                      4+ Years Cybersecurity Focus
                    </h4>
                    <p className="text-xs text-[#8b949e] mt-1 leading-relaxed">
                      Rigorous study and training in network penetration testing, Linux configuration, and ethical hacking.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group/item">
                  <div className="w-8 h-8 rounded-lg bg-[#f778ba]/10 border border-[#f778ba]/30 flex items-center justify-center text-[#f778ba] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                    💡
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-white group-hover/item:text-[#f778ba] transition-colors">
                      Client-Centric Problem Solver
                    </h4>
                    <p className="text-xs text-[#8b949e] mt-1 leading-relaxed">
                      Translating complex real-world business constraints into highly efficient digital products.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs text-[#8b949e] italic pt-4 mt-4 border-t border-[#30363d]/30">
              Continuously iterating & learning new stacks.
            </div>
          </div>

          {/* CARD 6: COMPREHENSIVE SKILLS TAGS CARD (lg:col-span-2, lg:row-span-1) */}
          <div 
            id="founder-skills-card"
            className="lg:col-span-2 ss-card p-6 flex flex-col justify-between border-[#30363d]/80 hover:border-[#58A6FF]/30"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cpu size={16} className="text-[#58A6FF]" />
                <h2 className="text-sm font-display font-bold text-white uppercase tracking-wider">Skills & Technologies</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill, sIdx) => {
                  let colorClass = "border-[#30363d] text-[#c9d1d9] bg-[#161b22]";
                  if (skill.category === "security") {
                    colorClass = "border-[#8B5CF6]/30 text-[#A371F7] bg-[#8B5CF6]/5 hover:border-[#8B5CF6]/60";
                  } else if (skill.category === "frontend") {
                    colorClass = "border-[#58A6FF]/30 text-[#58A6FF] bg-[#58A6FF]/5 hover:border-[#58A6FF]/60";
                  } else if (skill.category === "design") {
                    colorClass = "border-[#f778ba]/30 text-[#f778ba] bg-[#f778ba]/5 hover:border-[#f778ba]/60";
                  } else if (skill.category === "marketing") {
                    colorClass = "border-[#34D399]/30 text-[#34D399] bg-[#34D399]/5 hover:border-[#34D399]/60";
                  }
                  
                  return (
                    <span 
                      key={sIdx}
                      className={`text-xs px-2.5 py-1.5 rounded-lg border font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md cursor-default ${colorClass}`}
                    >
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CARD 7: FOUNDER VISION CARD (lg:col-span-2, lg:row-span-1) */}
          <div 
            id="founder-vision-card"
            className="lg:col-span-2 ss-card p-6 flex flex-col justify-between relative overflow-hidden border-[#30363d]/80 hover:border-[#34D399]/30 bg-gradient-to-r from-[#161b22] to-[#21262d]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#34D399]/5 rounded-full filter blur-[30px]" />
            <div className="flex items-center gap-2 mb-3">
              <Flame size={16} className="text-[#34D399]" />
              <h2 className="text-sm font-display font-bold text-white uppercase tracking-wider">My Vision</h2>
            </div>
            <p className="text-base sm:text-lg font-display font-semibold italic text-[#c9d1d9] leading-relaxed relative z-10">
              "Building one of India's most trusted digital agencies while continuously advancing in cybersecurity and modern web technologies."
            </p>
            <div className="text-right mt-4 relative z-10">
              <span className="text-xs font-mono text-[#34D399] font-bold">— Saksham Pandey</span>
            </div>
          </div>

          {/* CARD 8: GALLERY CARD (lg:col-span-1, lg:row-span-1) */}
          <div 
            id="founder-gallery-card"
            className="lg:col-span-1 ss-card p-4 flex flex-col justify-between border-[#30363d]/80 overflow-hidden relative group"
          >
            <div className="grid grid-cols-2 gap-2 h-full min-h-[160px]">
              <div className="rounded-lg overflow-hidden bg-[#21262d] relative group/img">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&auto=format&fit=crop&q=80" 
                  alt="Saksham Pandey Cybersecurity Web Developer workstation" 
                  className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="rounded-lg overflow-hidden bg-[#21262d] relative group/img col-span-1">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&auto=format&fit=crop&q=80" 
                  alt="Saksham Pandey programming development setup" 
                  className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="rounded-lg overflow-hidden bg-[#21262d] relative group/img col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1581291518655-9523c932dedf?w=400&auto=format&fit=crop&q=80" 
                  alt="Modern clean digital designs" 
                  className="w-full h-full object-cover group-hover/img:scale-115 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2.5">
                  <span className="text-[10px] font-mono text-white/90">Workstations & Lab</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 9: CONTACT LINKS CARD (lg:col-span-1, lg:row-span-1) */}
          <div 
            id="founder-contact-card"
            className="lg:col-span-1 ss-card p-6 flex flex-col justify-between border-[#30363d]/80 hover:border-[#58A6FF]/40"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#8b949e]">Contact</h2>
              <Globe size={15} className="text-[#58A6FF]" />
            </div>
            
            <div className="grid grid-cols-5 gap-3">
              {/* Email */}
              <a 
                href="mailto:protechnicalguruji1@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] flex items-center justify-center text-[#c9d1d9] hover:text-[#58A6FF] transition-all hover:-translate-y-1"
                title="Email Saksham Pandey"
                aria-label="Email Saksham Pandey"
              >
                <Mail size={18} />
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#21262d] hover:bg-[#0A66C2]/15 border border-[#30363d] hover:border-[#0A66C2]/40 flex items-center justify-center text-[#c9d1d9] hover:text-[#0A66C2] transition-all hover:-translate-y-1"
                title="LinkedIn"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={18} />
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#21262d] hover:bg-[#E1306C]/15 border border-[#30363d] hover:border-[#E1306C]/40 flex items-center justify-center text-[#c9d1d9] hover:text-[#E1306C] transition-all hover:-translate-y-1"
                title="Instagram"
                aria-label="Instagram profile"
              >
                <Instagram size={18} />
              </a>

              {/* X / Twitter */}
              <a 
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#21262d] hover:bg-white/10 border border-[#30363d] hover:border-white/30 flex items-center justify-center text-[#c9d1d9] hover:text-white transition-all hover:-translate-y-1"
                title="X (Twitter)"
                aria-label="Twitter profile"
              >
                <Twitter size={18} />
              </a>

              {/* Snapchat Custom Inline Icon */}
              <a 
                href="https://www.snapchat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#21262d] hover:bg-[#FFFC00]/15 border border-[#30363d] hover:border-[#FFFC00]/40 flex items-center justify-center text-[#c9d1d9] hover:text-[#FFFC00] transition-all hover:-translate-y-1"
                title="Snapchat"
                aria-label="Snapchat profile"
              >
                {/* Snapchat Ghost Custom SVG */}
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2c-3.9 0-7 3.1-7 7a1 1 0 00.5.9c.7.4 1.2.9 1.5 1.6l.4.9c.1.3 0 .7-.3.9-.7.4-1.1.9-1.1 1.7 0 .6.4 1.1 1 1.3l.5.2c.2.1.3.4.2.6a4.2 4.2 0 00-.5 2.1c0 2 2.2 3.8 5.3 3.8 3 0 5.3-1.8 5.3-3.8 0-.8-.1-1.5-.5-2.1l-.1-.5c0-.2.1-.5.3-.6l.5-.2c.6-.2 1-.7 1-1.3 0-.8-.4-1.3-1.1-1.7a.8.8 0 01-.3-.9c.1-.3.3-.6.5-.9.3-.7.8-1.2 1.5-1.6a1 1 0 00.4-.9c0-3.9-3.1-7-7-7z" />
                </svg>
              </a>
            </div>
            
            <div className="text-xs text-[#8b949e] font-mono leading-tight">
              Direct connection available 24/7.
            </div>
          </div>

          {/* CARD 10: DYNAMIC CTA CARD (lg:col-span-4, lg:row-span-1) */}
          <div 
            id="founder-cta-card"
            className="lg:col-span-4 ss-card p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden border-[#58A6FF]/25 bg-gradient-to-r from-[#161b22] to-[#1f2937]"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(88,166,255,0.05)_0%,rgba(139,92,246,0.05)_100%)]" />
            <div className="relative z-10 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight mb-2">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-sm text-[#8b949e] max-w-xl">
                Ready to elevate your digital presence? Reach out to schedule a technical and strategic consultation.
              </p>
            </div>
            
            <button
              onClick={() => onRouteChange('contact')}
              className="btn-primary shrink-0 relative z-10 group shadow-lg shadow-[#58A6FF]/20"
            >
              <span>Work With Me</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
