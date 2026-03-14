export type ServiceIconKey =
  | "graduationCap"
  | "code2"
  | "briefcase"
  | "bookOpen"
  | "users"
  | "globe"
  | "percent"
  | "home"
  | "fileText";

export type ServiceSlug =
  | "admission-services"
  | "tech-solutions"
  | "work-from-home"
  | "academic-services"
  | "career-counseling";

export interface ServiceDetailSection {
  title: string;
  description?: string;
  points: string[];
}

export interface ServiceItem {
  slug: ServiceSlug;
  title: string;
  subtitle: string;
  description: string;
  cardFeatures: string[];
  highlight: string;
  iconKey: ServiceIconKey;
  iconSecondaryKey: ServiceIconKey;
  detailIntro: string;
  detailSections: ServiceDetailSection[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "admission-services",
    title: "Admission Services",
    subtitle: "Regular, Online & Distance",
    description:
      "End-to-end admission support for Regular, Online, and Distance modes across top Indian and international universities.",
    cardFeatures: ["Regular Admissions", "Online Programs", "Distance Learning"],
    highlight: "Complete Admission Desk",
    iconKey: "graduationCap",
    iconSecondaryKey: "globe",
    detailIntro:
      "Our admission team helps students and working professionals choose the right mode, right university, and right specialization based on career goals, budget, and location preference.",
    detailSections: [
      {
        title: "Admission Modes We Handle",
        points: [
          "Regular Admissions for campus programs (UG, PG, Diploma)",
          "Online Admissions for UGC-entitled and flexible learning pathways",
          "Distance Admissions for learners balancing work and study",
          "Lateral entry and migration guidance where applicable"
        ]
      },
      {
        title: "University & Program Assistance",
        points: [
          "Program shortlisting by stream, fees, and career outcomes",
          "Scholarship and discount guidance based on eligibility",
          "Seat availability checks and application strategy",
          "Domain-focused counseling for management, IT, healthcare, and engineering"
        ]
      },
      {
        title: "Documentation & Compliance",
        points: [
          "Application form filling with zero-error verification",
          "Document checklist support and statement drafting",
          "Admission timeline tracking and status follow-ups",
          "Counseling for compliance with university norms and admission policies"
        ]
      },
      {
        title: "Student Support Beyond Enrollment",
        points: [
          "Fee payment assistance and onboarding guidance",
          "Semester planning and LMS onboarding for online students",
          "Exam form and academic calendar reminders",
          "Dedicated support desk for ongoing student queries"
        ]
      }
    ]
  },
  {
    slug: "tech-solutions",
    title: "Tech Solutions",
    subtitle: "Web, App, AI & Growth",
    description:
      "A full-stack technology and creative execution partner for startups, businesses, and institutions from idea to scale.",
    cardFeatures: ["Web & App", "AI Generation", "Brand & Growth"],
    highlight: "Everything Under One Roof",
    iconKey: "code2",
    iconSecondaryKey: "percent",
    detailIntro:
      "Inspired by modern service stacks in leading agency sites, we provide complete digital solutions across product, marketing, design, and AI-led content production.",
    detailSections: [
      {
        title: "Website & Platform Development",
        points: [
          "Business, portfolio, and enterprise websites",
          "Landing pages for campaigns and lead generation",
          "E-commerce and multi-vendor marketplace development",
          "CRM, ERP, and custom admin panel development",
          "Performance optimization, SEO structure, and analytics setup"
        ]
      },
      {
        title: "Mobile & Software Engineering",
        points: [
          "Android and iOS app development (native and cross-platform)",
          "SaaS product development and API integrations",
          "Automation tools and workflow management systems",
          "Third-party integrations: payment, WhatsApp, maps, and auth",
          "Maintenance, feature upgrades, and code audits"
        ]
      },
      {
        title: "Creative Design & Branding",
        points: [
          "Brand identity, logo systems, and visual guidelines",
          "UI/UX design for websites, apps, and dashboards",
          "Social media post design, ad creatives, and banners",
          "Brochures, pitch decks, and print-ready design collateral",
          "Motion graphics and presentation design"
        ]
      },
      {
        title: "AI Content & Video Generation",
        points: [
          "AI-assisted graphic generation for campaigns and ads",
          "Short-form video generation for reels and social growth",
          "Long-form video scripting, editing, and generation workflows",
          "AI voiceovers, subtitles, and multilingual localization",
          "Avatar-based explainers and product demo videos"
        ]
      },
      {
        title: "Marketing, Scale & Visibility",
        points: [
          "SEO, local SEO, and content optimization",
          "Paid campaigns for Meta, Google, and YouTube",
          "Social media management and growth strategy",
          "Email, WhatsApp, and funnel automation",
          "Conversion tracking and monthly performance reporting"
        ]
      }
    ]
  },
  {
    slug: "work-from-home",
    title: "Work From Home",
    subtitle: "Flexible Opportunities",
    description:
      "Verified work-from-home options designed for students, homemakers, and professionals seeking additional monthly income.",
    cardFeatures: ["Flexible Timing", "Verified Roles", "Support Team"],
    highlight: "Flexible Earning Programs",
    iconKey: "briefcase",
    iconSecondaryKey: "home",
    detailIntro:
      "We connect candidates with structured remote opportunities and provide onboarding support so they can start confidently.",
    detailSections: [
      {
        title: "Program Types",
        points: [
          "Part-time remote assignments",
          "Project-based and task-based work options",
          "Skill-based opportunities in sales, support, and operations",
          "Beginner-friendly options with guided onboarding"
        ]
      },
      {
        title: "What You Get",
        points: [
          "Transparent role expectations and deliverables",
          "Process training and productivity support",
          "Periodic performance guidance",
          "Regular communication and payout tracking support"
        ]
      }
    ]
  },
  {
    slug: "academic-services",
    title: "Academic Services",
    subtitle: "Research & Publication Excellence",
    description:
      "Comprehensive academic and research support aligned with the service areas highlighted in Skillmate World Pvt. Ltd. profile.",
    cardFeatures: ["Publishing Support", "Research Consultancy", "Content Development"],
    highlight: "End-to-End Academic Support",
    iconKey: "bookOpen",
    iconSecondaryKey: "fileText",
    detailIntro:
      "Our academic support wing is structured around publishing excellence, research quality, and professional development for students, scholars, and institutions.",
    detailSections: [
      {
        title: "Academic & Professional Publishing",
        points: [
          "Support for peer-reviewed national and international journal publication",
          "Guidance for publication ethics, formatting, and submission readiness",
          "Editorial review support aligned with indexing norms",
          "Book chapter and conference publication pathways"
        ]
      },
      {
        title: "Research Support & Consultancy",
        points: [
          "Manuscript writing, editing, and technical structuring",
          "Plagiarism checking guidance and quality improvements",
          "Research methodology support for dissertations and thesis",
          "Institution-level consultancy for research output improvement"
        ]
      },
      {
        title: "Content Writing & Development",
        points: [
          "Scientific and academic writing for journals and conferences",
          "Review articles, project reports, and technical documentation",
          "Proofreading, reference alignment, and language polishing",
          "Publication-ready document preparation"
        ]
      },
      {
        title: "Knowledge Exchange & Professional Development",
        points: [
          "Workshops, webinars, and academic training sessions",
          "Mentoring on research ethics and scholarly communication",
          "Interdisciplinary collaboration support",
          "Skill development programs for researchers and educators"
        ]
      },
      {
        title: "Key Journal Discipline Coverage",
        points: [
          "Pharmaceutical and Life Sciences",
          "Medical and Health Sciences",
          "Biotechnology and Biological Sciences",
          "Chemistry, Engineering, Computer Science, and Technology",
          "Environmental, Management, Education, and Humanities domains"
        ]
      }
    ]
  },
  {
    slug: "career-counseling",
    title: "Career Counseling",
    subtitle: "Clarity for Next Steps",
    description:
      "Personalized career guidance for students and working professionals to choose the right roadmap and growth strategy.",
    cardFeatures: ["One-to-One Guidance", "Profile Mapping", "Action Plan"],
    highlight: "Personal Mentorship",
    iconKey: "users",
    iconSecondaryKey: "briefcase",
    detailIntro:
      "We provide practical counseling sessions focused on current market trends, your profile strengths, and long-term opportunities.",
    detailSections: [
      {
        title: "Counseling Scope",
        points: [
          "Stream and specialization selection",
          "Career switch and upskilling pathways",
          "Resume and profile enhancement guidance",
          "Interview and communication preparation"
        ]
      },
      {
        title: "Outcome-Focused Planning",
        points: [
          "Short-term and long-term action roadmap",
          "Skill gap analysis and recommended certifications",
          "Industry-aligned career progression guidance",
          "Mentorship check-ins for accountability"
        ]
      }
    ]
  }
];

export const SERVICES_BY_SLUG: Record<ServiceSlug, ServiceItem> = SERVICES.reduce(
  (acc, service) => {
    acc[service.slug] = service;
    return acc;
  },
  {} as Record<ServiceSlug, ServiceItem>
);
