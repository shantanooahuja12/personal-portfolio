import { Project, ServiceItem, StudioStat, ClientLog } from "./types";

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  details?: string;
  period: string;
}

export interface SkillCategory {
  label: string;
  tags: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-1",
    institution: "jai hind college, mumbai",
    degree: "bachelor of commerce (digital strategy) – second year",
    details: "key focus areas: digital marketing, strategy, data insights, and consumer analytics",
    period: "2024 — present"
  },
  {
    id: "edu-2",
    institution: "chavara vidhyapeeth, narsinghpur (m.p.)",
    degree: "high school education",
    details: "achieved strong academic foundation focusing on leadership and extracurricular initiatives",
    period: "completed"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    label: "design & presentations",
    tags: ["canva", "gamma", "napkin ai"]
  },
  {
    label: "ai development & prompt engineering",
    tags: ["google ai studio", "elevenlabs"]
  },
  {
    label: "development tools",
    tags: ["cursor"]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "festival president",
    organization: "jai hind college (bds digital strategy initiative)",
    period: "2025 — 2026",
    bullets: [
      "served as the president for a major college festival, leading overall execution, team management, and brand partnerships.",
      "secured high-profile corporate sponsorships, pitching to and onboarding samsung as title sponsor alongside upstox.",
      "managed brand collaborations and on-ground commercial stalls, featuring volans clothing (by actor hitul pujara)."
    ]
  },
  {
    role: "seo & digital marketing intern",
    organization: "evolved.in project",
    period: "2024",
    bullets: [
      "conducted full technical seo audit using semrush, ahrefs, and google pagespeed insights to uncover performance issues.",
      "fixed critical website errors (missing meta descriptions, missing alt text, code bloat, slow mobile loading speeds) to boost rankings.",
      "performed keyword research and competitor tracking targeting high-traffic terms like 'public speaking classes for kids in mumbai'.",
      "created optimization roadmap to drive organic traffic using internal page linking, descriptive copy, and a gamified learning model."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "nike-swoosh-yatra",
    title: "nike swoosh yatra",
    subtitle: "marketing & campaign strategy",
    category: "nike project",
    year: "2026",
    client: "academic case study",
    services: ["Campaign Strategy", "Gen-Z Demographics", "Launch Roadmap"],
    role: "Lead Strategist",
    summary: "designed a 3-part plan targeting gen-z buyers in india via exclusive memberships, invite-only music concerts, city fitness racing leagues, and artist-designed limited-edition sneakers.",
    description: "this high-impact campaign strategy redefines footwear connection for india's modern youth. by dividing the journey into three calculated acts, we optimize digital brand community building. set a 4-month timeline aiming to increase app downloads by 500% and sales by 25%.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200",
    subImages: [
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&q=80&w=1200"
    ],
    techSpec: ["Target Group: Indian Gen-Z", "Metric Target: +500% Downloads", "Timeline: 4 Months"],
    challenges: [
      "engaging highly skeptical gen-z consumers who reject traditional direct advertisements.",
      "orchestrating logistics for nationwide urban racing leagues and exclusive local drop concerts."
    ],
    results: [
      "projected over 500% increase in mobile application installations in test regional sectors.",
      "designed a blueprint for culturally grounded customized sneaker models."
    ]
  },
  {
    id: "eveready-rural",
    title: "rural market penetration",
    subtitle: "rural marketing & research",
    category: "eveready project",
    year: "2025",
    client: "academic research",
    services: ["Rural Branding", "Competitor Tracking", "Strategic Channels"],
    role: "Market Analyst",
    summary: "studied eveready’s use of village walls, weekly markets (haats), and community spaces (chaupals). analyzed its 53.1% market share dominance and mapped out updated channels.",
    description: "a forensic analysis of energy and hardware distribution in semi-urban and deep rural zones. this study examines how eveready preserves its staggering 53.1% market share dominance against global giants like panasonic and duracell. we outline modern optimization routes including localized influencer loops and eco-friendly packaging.",
    image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&q=80&w=1200",
    subImages: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200"
    ],
    techSpec: ["Market Share: 53.1%", "Traditional Channels: Haats & Chaupals", "Focus: Eco-friendly battery lines"],
    challenges: [
      "accessing reliable primary demographic statistics in remote non-metropolitan districts.",
      "introducing digital marketing methodologies to regions with fragmented connectivity."
    ],
    results: [
      "formulated a high-efficiency rural distribution framework combining micro-influencers with physical village wall murals.",
      "proposed a concrete roadmap for collecting high-density regional user data."
    ]
  },
  {
    id: "zomato-viral",
    title: "viral loops & commentary",
    subtitle: "digital marketing & brand analysis",
    category: "zomato project",
    year: "2025",
    client: "brand case study",
    services: ["Social Media Analysis", "Loyalty Gamification", "Risk Mitigation"],
    role: "Brand Analyst",
    summary: "analyzed zomato's use of witty social media, memes, and push notifications for gen z/millennials. evaluated viral campaign metrics alongside risks of public backlash.",
    description: "a deep dive into the industry-defining cultural commentary engine of zomato. we break down how conversational notifications and fast meme reactivity create self-sustaining viral growth loops. additionally, the study proposes a gamified 'food passport' loyalty challenge and assesses sustainability messaging through electric vehicle delivery integration.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
    subImages: [
      "https://images.unsplash.com/photo-1565123409695-7b5ef63a24b5?auto=format&fit=crop&q=80&w=1200"
    ],
    techSpec: ["Target Demographics: Millennials & Gen-Z", "Proposed Feature: Food Passport Loyalty System", "Sustainability Metric: EV Transition Tracking"],
    challenges: [
      "balancing conversational brand humor against sudden and volatile public public-relations backlash.",
      "structuring loyalty programs that maintain high repeat actions without costly margin discounts."
    ],
    results: [
      "designed a high-retention 'food passport' wireframe showing visual map travel logs.",
      "published a complete action manual on identifying and mitigating viral marketing risks."
    ]
  },
  {
    id: "melted-moments",
    title: "candle production optimization",
    subtitle: "cost accounting & pricing strategy",
    category: "melted moments project",
    year: "2025",
    client: "financial case study",
    services: ["Cost Sheet Modeling", "Markup Strategy", "Resource Planning"],
    role: "Financial Analyst",
    summary: "built a complete cost sheet for a batch of 300 scented candles factoring in raw wax, premium essence, daily labor, workshop rent, and equipment depreciation.",
    description: "precision financial engineering applied to dynamic custom production. we constructed a granular cost sheet representing 300 units of custom scented candles. by accounting for every micro-variable—including raw wax, essence oils, workshop floor rent, and equipment depreciation—we established the exact cost baseline of ₹130, applying a 50% profit markup for an ideal selling price of ₹195.",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=1200",
    subImages: [
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200"
    ],
    techSpec: ["Batch Size: 300 Scented Candles", "Unit Base Cost: ₹130", "Markup: 50%", "Target Unit Price: ₹195"],
    challenges: [
      "accurately distributing fixed overhead expenses (depreciation, workshop rent) across highly variable single production runs.",
      "reconciling raw material waste rates with consistent final production margins."
    ],
    results: [
      "produced a rigorous, ready-to-scale dynamic cost accounting excel model.",
      "maximized capital returns by establishing an optimized 50% profit markup structure."
    ]
  },
  {
    id: "tarun-tahiliani",
    title: "luxury digital storefront",
    subtitle: "e-commerce & ui/ux research",
    category: "tarun tahiliani project",
    year: "2025",
    client: "luxury brand research",
    services: ["UI/UX Architecture", "HNWI Demographics", "Wireframing"],
    role: "UX Researcher",
    summary: "analyzed high-end luxury fashion web architectures (tarun tahiliani, sabyasachi, manish malhotra) and structured wireframes optimizing luxury couture browsing.",
    description: "exploring the digital translation of haute couture. we analyzed the online presence of india's preeminent designers to understand the digital expectations of high-net-worth individuals. the final output includes premium, minimalist, grid-focused wireframes that preserve brand prestige while maximizing interaction flow and high-contrast styling.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200",
    subImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
    ],
    techSpec: ["Design Standards: Minimalist Elite Grid", "Target Audience: HNWIs", "Analyzed Competitors: Sabyasachi, Manish Malhotra"],
    challenges: [
      "translating the extreme tactile feel of luxury Indian materials into sterile glass smartphone screens.",
      "maintaining ultra-clean, un-cluttered visual layouts without losing crucial navigation structures."
    ],
    results: [
      "built high-contrast responsive structural wireframes with a 45% shorter checkout route.",
      "defined a detailed design manual on luxury digital typography pairing."
    ]
  },
  {
    id: "hawt-dogs",
    title: "conceptual launch strategy",
    subtitle: "brand strategy & online promotion",
    category: "hawt dogs project",
    year: "2024",
    client: "conceptual venture",
    services: ["Brand Architecture", "Location Playbooks", "Hyperlocal Strategy"],
    role: "Brand Director",
    summary: "created a brand identity and launch roadmap for a conceptual food truck, designing targeted playbooks and hyperlocal campaigns to drive on-ground traffic.",
    description: "a masterclass in localized brand building. for this conceptual hot dog venture, we developed an aggressive, street-aligned brand identity. using targeted geo-location social media campaigns, distinct localized hashtags, and event partnerships, we designed a robust playbook optimized to drive on-ground traffic footprints.",
    image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a24b5?auto=format&fit=crop&q=80&w=1200",
    subImages: [
      "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=1200"
    ],
    techSpec: ["Venture Model: Quick Service Food Truck", "Marketing Mode: Hyperlocal Instagram Drops", "Target Metric: Live foot traffic conversion"],
    challenges: [
      "converting fleeting digital social interactions into on-ground physical restaurant queues.",
      "establishing a reliable tracking system for hyper-localized attribution metrics."
    ],
    results: [
      "produced a plug-and-play launch manual suited for any mobile food venture.",
      "designed high-impact, print-ready brutalist flyer templates."
    ]
  },
  {
    id: "puma-mock",
    title: "ai visual copywriting",
    subtitle: "creative writing & copywriting",
    category: "puma campaign",
    year: "2024",
    client: "creative concept",
    services: ["Copywriting", "Generative AI Prompts", "Visual Direction"],
    role: "Creative Copywriter",
    summary: "authored high-engagement, relatable copy ('i like you, but i love me more') paired with customized generative backdrops like rain-themed ads.",
    description: "synthesizing human emotion with machine intelligence. we authored high-velocity, emotionally resonant taglines targeting contemporary urban buyers. utilizing advanced AI image generation suites, we rendered matching, contextual visual backdrops including monsoon-themed transit advertisements and snow-themed penguin visuals.",
    image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&q=80&w=1200",
    subImages: [
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200"
    ],
    techSpec: ["Core Tagline: 'i like you, but i love me more'", "AI Generative Engine: Midjourney & Stable Diffusion", "Asset Types: Transit & Out-Of-Home"],
    challenges: [
      "retaining authentic human emotional weight within highly structured synthetic media outputs.",
      "ensuring brand color and layout consistency across diverse generative backdrops."
    ],
    results: [
      "completed a portfolio of high-engagement mock visual advertisements.",
      "defined an optimization workflow for prompt engineering in commercial copywriting."
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "digital-strategy",
    index: "01",
    title: "digital strategy & data insights",
    description: "leveraging consumer behavior data and market analysis to build high-performance campaigns. studying market share metrics, analyzing competitor structures, and engineering strategic roadmaps that drive growth.",
    capabilities: ["Market Research", "Competitor Tracking", "Data Modeling", "Consumer Analytics"]
  },
  {
    id: "marketing-seo",
    index: "02",
    title: "search optimization & performance",
    description: "conducting forensic audits, fixing index blockages, and restructuring technical linking maps. driving organic acquisition through deep SEO keyword alignment and data-backed content optimization roadmaps.",
    capabilities: ["Technical SEO", "Keyword Auditing", "Competitor Research", "Acquisition Loops"]
  },
  {
    id: "brand-creative",
    index: "03",
    title: "creative copywriting & identity",
    description: "formulating bold, street-aligned brand taglines and high-contrast visual backdrops. combining modern human emotional resonance with generative AI prompt suites to output high-engagement commercial assets.",
    capabilities: ["Creative Copy", "Visual Direction", "AI Asset Synthesis", "Launch Playbooks"]
  }
];

export const STATS: StudioStat[] = [
  { index: "01", label: "academic status", value: "second year" },
  { index: "02", label: "strategic cases", value: "07" },
  { index: "03", label: "active roles", value: "02" },
  { index: "04", label: "focus rating", value: "100%" }
];

export const CLIENT_LOGS: ClientLog[] = [
  { id: "1", name: "samsung", project: "title festival sponsor", year: "2026", service: "brand partnership" },
  { id: "2", name: "upstox", project: "festival brand sponsor", year: "2025", service: "sponsor onboarding" },
  { id: "3", name: "volans clothing", project: "on-ground commercial stalls", year: "2025", service: "collaboration lead" },
  { id: "4", name: "evolved.in", project: "technical seo & marketing roadmap", year: "2024", service: "optimization intern" },
  { id: "5", name: "jai hind bds", project: "digital strategy initiative", year: "2024 — 2026", service: "student president" }
];
