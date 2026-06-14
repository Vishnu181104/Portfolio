"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  ExternalLink,
  FileSpreadsheet,
  Gauge,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const resumePath = "/resume/Jaya-Vishnu-Resume.pdf";
const linkedInUrl = "https://www.linkedin.com/in/jaya-vishnu";

const typingRoles = [
  "Claims Processor",
  "Data Analyst",
  "Business Development Executive",
  "Problem Solver",
];

const floatingCards = [
  { label: "Data Analysis", icon: BarChart3 },
  { label: "Insurance Claims", icon: ShieldCheck },
  { label: "Excel Reporting", icon: FileSpreadsheet },
  { label: "Business Development", icon: BriefcaseBusiness },
];

const stats = [
  ["3+", "Professional Roles"],
  ["2+", "Industries"],
  ["100%", "Quality Focus"],
  ["Strong", "Analytical Skills"],
];

const experiences = [
  {
    role: "Claims Processor",
    company: "Sagility",
    period: "October 2026 - Present",
    type: "Healthcare Claims",
    bullets: [
      "Process healthcare insurance claims with accuracy, confidentiality, and compliance focus.",
      "Verify eligibility, coverage, documentation, and claim details against policy requirements.",
      "Resolve claim discrepancies while meeting SLA requirements and quality expectations.",
      "Use Excel and data validation methods to support cleaner claim review workflows.",
    ],
    tech: ["Excel", "Claims Processing", "Data Validation", "Compliance Management"],
  },
  {
    role: "Business Development & Sales Executive",
    company: "Lesuccess",
    period: "May 2026 - September 2026",
    type: "Sales Operations",
    bullets: [
      "Generated leads through market research, outreach, and client qualification activities.",
      "Managed client relationships, sales presentations, CRM updates, and follow-up pipelines.",
      "Supported contract negotiation and sales reporting with organized customer insights.",
      "Analyzed sales activity to identify conversion opportunities and improve outreach focus.",
    ],
    tech: ["CRM", "Sales Analytics", "Business Development"],
  },
  {
    role: "Data Analyst Intern",
    company: "Zephyr Tech",
    period: "June 2024 - July 2024",
    type: "Data Analytics",
    bullets: [
      "Cleaned datasets, validated records, and prepared Excel reports for business analysis.",
      "Created dashboards and trend summaries to communicate performance insights.",
      "Used data cleaning, reporting, and visualization techniques to improve analysis quality.",
      "Converted raw data into structured findings for easier decision-making.",
    ],
    tech: ["Microsoft Excel", "Data Analysis", "Dashboard Creation", "Reporting"],
  },
];

const educationTimeline = [
  {
    qualification: "Bachelor’s Degree",
    institution: "Nehru Arts and Science College",
    period: "2022 - 2025",
    detail: "B.Sc. Information Technology (IT)",
    score: "82%",
    learned: [
      "Programming Fundamentals",
      "C Programming",
      "C++",
      "Java",
      "Python",
      "Database Management Systems (DBMS)",
      "SQL",
      "Web Development (HTML, CSS, JavaScript)",
      "Software Development Life Cycle (SDLC)",
      "Computer Networks",
      "Operating Systems",
      "Data Structures",
      "Information Security Basics",
      "Cloud Computing Fundamentals",
      "System Analysis and Design",
      "MS Excel",
      "MS Word",
      "MS PowerPoint",
      "Problem Solving",
      "Logical Reasoning",
      "Team Collaboration",
      "Project Documentation",
      "Presentation Skills",
    ],
  },
  {
    qualification: "HSC (12th)",
    institution: "Dr. V. Genguswamy Naidu Matriculation Higher Secondary School",
    period: "2022",
    detail: "Arts & Science Stream",
    score: "80%",
    learned: [
      "Economics",
      "Commerce",
      "Accountancy",
      "Business Mathematics",
      "Computer Applications",
      "Analytical Thinking",
      "Data Interpretation",
      "Report Preparation",
      "Communication Skills",
      "Teamwork",
    ],
  },
  {
    qualification: "SSLC (10th)",
    institution: "Dr. V. Genguswamy Naidu Matriculation Higher Secondary School",
    period: "2020",
    detail: "Secondary School Leaving Certificate",
    score: "75%",
    learned: [
      "English",
      "Tamil",
      "Mathematics",
      "Science",
      "Social Science",
      "Basic Computer Knowledge",
      "Communication Skills",
      "Problem Solving",
      "Time Management",
    ],
  },
];

const technicalSkills = [
  ["Microsoft Excel", 90],
  ["Data Analysis", 88],
  ["Dashboard Creation", 85],
  ["Data Cleaning", 90],
  ["Reporting", 88],
  ["Data Visualization", 82],
  ["Claims Processing", 85],
  ["CRM Management", 80],
];

const professionalSkills = [
  ["Communication", 95],
  ["Problem Solving", 92],
  ["Critical Thinking", 90],
  ["Adaptability", 90],
  ["Customer Service", 95],
  ["Negotiation", 85],
];

const skillGroups = [
  {
    title: "Core Technical Skills",
    items: [
      "Microsoft Excel",
      "Microsoft Word",
      "Microsoft PowerPoint",
      "Problem Solving",
      "Analytical Thinking",
      "Technical Troubleshooting",
    ],
  },
  {
    title: "Data & Business Skills",
    items: [
      "Data Analysis",
      "Data Cleaning",
      "Dashboard Reporting",
      "Excel Functions",
      "Pivot Tables",
      "Data Visualization",
      "Business Reporting",
      "Documentation",
      "Research and Analysis",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Communication",
      "Team Collaboration",
      "Time Management",
      "Attention to Detail",
      "Adaptability",
      "Customer Service",
      "Presentation Skills",
    ],
  },
];

const certifications = [
  "Python Programming Certification",
  "SQL and Database Management Certification",
  "Microsoft Excel Certification",
  "Data Analytics Certification",
  "Web Development Certification",
  "Cloud Computing Fundamentals Certification",
  "Cybersecurity Fundamentals Certification",
  "Google Data Analytics Professional Certificate",
  "Microsoft Power BI Certification",
];

const projects = [
  {
    title: "Healthcare Claims Dashboard",
    summary:
      "A claims operations dashboard for claim volume, status tracking, SLA monitoring, discrepancy review, and Excel reporting.",
    points: ["Claims Tracking System", "SLA Monitoring", "Excel Reporting"],
    metrics: ["Claim status visibility", "SLA variance checks", "Quality-focused reporting"],
    details: {
      overview:
        "Developed a Healthcare Claims Dashboard to provide visibility into insurance claim status, documentation review, SLA performance, and discrepancy resolution. The dashboard helped operations teams monitor claims more efficiently and maintain a strong quality focus.",
      problem:
        "Healthcare claims information was spread across multiple reports, making it difficult to track pending claims, identify documentation gaps, and monitor SLA performance in one place.",
      responsibilities: [
        "Gathered claim processing and documentation review data.",
        "Standardized claim status, eligibility, and coverage datasets.",
        "Designed interactive KPI dashboards for claims operations.",
        "Built SLA tracking and discrepancy monitoring reports.",
        "Analyzed pending, approved, and rejected claim patterns.",
        "Prepared summary reports for quality and operations review.",
      ],
      features: [
        "Claims Tracking Dashboard",
        "SLA Monitoring",
        "Eligibility and Coverage Review",
        "Claim Discrepancy Analysis",
        "Documentation Status Reporting",
        "Quality Review Metrics",
      ],
      impact: [
        "Improved visibility into claim progress.",
        "Reduced manual tracking effort.",
        "Helped identify recurring documentation issues.",
        "Supported faster claim review and operational follow-up.",
      ],
      tools: ["Microsoft Excel", "Power Query", "Pivot Tables", "Data Validation", "Dashboard Reporting"],
      kpis: [
        "Total Claims Processed",
        "Pending Claims",
        "SLA Compliance",
        "Claim Discrepancy Rate",
        "Documentation Completion",
        "Quality Review Accuracy",
      ],
    },
  },
  {
    title: "Sales Performance Analytics Dashboard",
    summary:
      "A sales analytics dashboard designed to track leads, pipeline stages, revenue signals, and customer insights.",
    points: ["Lead Tracking", "Revenue Analysis", "Customer Insights"],
    metrics: ["Lead source comparison", "Pipeline performance", "Conversion opportunity tracking"],
    details: {
      overview:
        "Developed a Sales Performance Analytics Dashboard to provide visibility into lead generation activities, sales pipeline movement, and revenue performance. The dashboard helped business teams monitor sales effectiveness and customer conversion trends.",
      problem:
        "Sales data was spread across multiple reports, making it difficult for managers to evaluate pipeline health and track revenue opportunities.",
      responsibilities: [
        "Gathered sales and lead management data.",
        "Standardized customer and revenue datasets.",
        "Designed interactive KPI dashboards.",
        "Built lead conversion tracking reports.",
        "Analyzed sales funnel performance.",
        "Prepared executive summaries for business reviews.",
      ],
      features: [
        "Lead Tracking Dashboard",
        "Pipeline Stage Analysis",
        "Revenue Opportunity Monitoring",
        "Conversion Rate Tracking",
        "Customer Acquisition Insights",
        "Sales Team Performance Metrics",
      ],
      impact: [
        "Improved visibility into lead progression.",
        "Reduced reporting preparation time.",
        "Helped identify high-performing lead sources.",
        "Enabled better sales forecasting decisions.",
      ],
      tools: ["Microsoft Excel", "Power Query", "Pivot Tables", "Dashboard Reporting"],
      kpis: [
        "Total Leads Generated",
        "Qualified Leads",
        "Conversion Rate",
        "Revenue Pipeline Value",
        "Sales Cycle Duration",
        "Customer Acquisition Metrics",
      ],
    },
  },
  {
    title: "Business Intelligence Reporting Tool",
    summary:
      "A reporting framework for data cleaning, KPI monitoring, and executive-ready summaries for business teams.",
    points: ["Data Cleaning", "KPI Monitoring", "Executive Reports"],
    metrics: ["Cleaner input data", "Weekly KPI summaries", "Decision-ready visual reports"],
    details: {
      overview:
        "Created a Business Intelligence Reporting Framework that transformed raw operational data into executive-level reports for performance monitoring and strategic decision-making.",
      problem:
        "Business teams received large volumes of raw data but lacked standardized reporting structures to monitor KPIs and identify performance trends efficiently.",
      responsibilities: [
        "Performed data cleaning and validation.",
        "Consolidated information from multiple sources.",
        "Defined KPI measurement standards.",
        "Developed automated reporting templates.",
        "Created executive summary dashboards.",
        "Generated monthly performance reports.",
      ],
      features: [
        "Automated KPI Tracking",
        "Data Quality Validation",
        "Executive Reporting Dashboard",
        "Trend Analysis Reports",
        "Department Performance Monitoring",
        "Monthly Business Review Reports",
      ],
      impact: [
        "Improved reporting accuracy.",
        "Reduced manual report preparation effort by 50%.",
        "Enhanced executive visibility into business performance.",
        "Supported data-driven decision making.",
      ],
      tools: ["Microsoft Excel", "Power Query", "Data Validation", "Pivot Tables", "Dashboard Reporting"],
      kpis: [
        "Operational Efficiency",
        "Process Completion Rate",
        "Performance Trends",
        "Error Rate Analysis",
        "Productivity Metrics",
        "Business Growth Indicators",
      ],
    },
  },
];

const keywords = [
  "Claims Processor",
  "Healthcare Claims",
  "Insurance Claims",
  "Data Analyst",
  "Excel",
  "Reporting",
  "Dashboard Creation",
  "Business Development",
  "Sales Executive",
  "Lead Generation",
  "Customer Relationship Management",
  "Data Cleaning",
  "Data Validation",
  "Problem Solving",
  "Communication Skills",
  "Client Management",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = typingRoles[roleIndex];
    const delay = deleting ? 42 : 72;
    const timeout = window.setTimeout(() => {
      if (!deleting && charIndex < currentRole.length) {
        setCharIndex((value) => value + 1);
      } else if (!deleting && charIndex === currentRole.length) {
        window.setTimeout(() => setDeleting(true), 900);
      } else if (deleting && charIndex > 0) {
        setCharIndex((value) => value - 1);
      } else {
        setDeleting(false);
        setRoleIndex((value) => (value + 1) % typingRoles.length);
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="text-accent">
      {typingRoles[roleIndex].slice(0, charIndex)}
      <span className="ml-1 animate-pulse text-secondary">|</span>
    </span>
  );
}

function SkillCircle({ label, value, delay = 0 }: { label: string; value: number; delay?: number }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.025 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="glass hover-lift flex min-h-[178px] flex-col items-center justify-between rounded-3xl p-5"
    >
      <div
        className="radial-skill grid h-24 w-24 shrink-0 place-items-center rounded-full sm:h-28 sm:w-28"
        style={{ "--value": `${value}%` } as React.CSSProperties}
      >
        <span className="text-xl font-bold text-white sm:text-2xl">{value}%</span>
      </div>
      <h3 className="mt-4 flex min-h-10 items-center text-center text-sm font-semibold leading-5 text-slate-100">
        {label}
      </h3>
    </motion.div>
  );
}

export function PortfolioClient() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-[#fffaf4]/95 backdrop-blur-2xl"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="text-center">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-[1.6rem] bg-primary text-xl font-black text-white shadow-glow">
                JV
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
                Loading Portfolio
              </p>
              <div className="mx-auto mt-4 h-1 w-44 overflow-hidden rounded-full bg-secondary/10">
                <div className="h-full rounded-full bg-gradient-to-r from-secondary via-red-600 to-accent animate-[loaderGlow_1.1s_ease-in-out_infinite]" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="fixed left-0 top-0 z-50 h-1 origin-left bg-accent no-print" style={{ scaleX }} />
      <div className="noise" />

      <header className="no-print fixed inset-x-0 top-4 z-40 px-4">
        <nav className="apple-nav section-shell flex items-center justify-between gap-4 px-4 sm:px-5">
          <a href="#top" className="flex items-center gap-3 font-semibold text-primary">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent text-sm text-white shadow-glow">
              JV
            </span>
            <span className="hidden sm:inline">Jaya Vishnu</span>
          </a>
          <div className="hidden items-center gap-1 rounded-full bg-white/55 p-1 text-sm font-medium text-slate-700 md:flex">
            {[
              ["About", "#about"],
              ["Experience", "#experience"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="rounded-full px-3 py-2 transition hover:bg-white hover:text-secondary">
                {label}
              </a>
            ))}
          </div>
          <ButtonLink variant="secondary" href={resumePath} download>
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Resume</span>
          </ButtonLink>
        </nav>
      </header>

      <main id="top" className="relative overflow-hidden">
        <section className="section-shell grid min-h-screen items-center gap-12 pb-20 pt-36 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <p className="mb-5 inline-flex rounded-full border border-secondary/15 bg-white/65 px-4 py-2 text-sm font-semibold text-secondary shadow-sm backdrop-blur-xl">
              Claims Processor | Data Analyst | Business Development Professional
            </p>
            <h1 className="gradient-text text-5xl font-black leading-[0.96] md:text-7xl lg:text-8xl">
              Jaya Vishnu
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-8 text-slate-700 md:text-2xl">
              “Transforming Data into Insights and Delivering Operational Excellence.”
            </p>
            <p className="mt-6 text-lg font-semibold text-primary">
              I am a <TypingText />
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href={resumePath} download>
                <Download className="h-4 w-4" />
                Download Resume
              </ButtonLink>
              <a href="#contact">
                <Button variant="secondary">
                  Contact Me
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative animate-float"
          >
            <div className="glass hover-lift relative overflow-hidden rounded-[2rem] p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Operations Intelligence</p>
                  <h2 className="text-2xl font-bold text-white">Claims & Analytics Hub</h2>
                </div>
                <Gauge className="h-8 w-8 text-accent" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {stats.slice(0, 3).map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur-xl">
                    <p className="text-2xl font-bold text-white">{value}</p>
                    <p className="text-xs text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-56 rounded-3xl border border-white/10 bg-[#170711]/80 p-5 shadow-inner">
                <div className="flex h-full items-end gap-3">
                  {[48, 78, 58, 90, 66, 84, 72].map((height, index) => (
                    <motion.span
                      key={height}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.8, delay: index * 0.08 }}
                      className={cn(
                        "flex-1 rounded-t-xl shadow-[0_0_28px_rgba(249,115,22,0.22)]",
                        index % 3 === 0 ? "bg-accent" : index % 3 === 1 ? "bg-secondary" : "bg-white/55",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>

            {floatingCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                  className={cn(
                    "glass absolute hidden rounded-2xl px-4 py-3 text-sm font-semibold text-white shadow-glass lg:flex",
                    index === 0 && "-left-10 top-12",
                    index === 1 && "-right-8 top-20",
                    index === 2 && "-bottom-8 left-8",
                    index === 3 && "-bottom-5 right-8",
                  )}
                >
                  <Icon className="mr-2 h-4 w-4 text-accent" />
                  {card.label}
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        <motion.section
          id="about"
          className="section-shell py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.div variants={fadeUp} className="glass hover-lift rounded-[2rem] p-6 md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase text-accent">About Me</p>
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Detail-oriented professional across healthcare operations, analytics, and client growth.
            </h2>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
              I bring experience in healthcare claims processing, data analytics, and business development,
              with strong skills in data analysis, process optimization, client relationship management,
              Microsoft Excel, reporting, dashboard creation, communication, and problem solving.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map(([value, label]) => (
                <motion.div key={label} variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur-xl">
                  <p className="text-3xl font-black text-white">{value}</p>
                  <p className="text-sm text-slate-400">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          id="experience"
          className="section-shell py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase text-accent">Experience</p>
            <h2 className="text-4xl font-bold text-primary md:text-6xl">Professional Timeline</h2>
          </motion.div>
          <div className="relative grid gap-6 before:absolute before:left-4 before:top-4 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-accent before:via-secondary before:to-accent md:before:block">
            {experiences.map((item, index) => (
              <motion.article
                key={item.company}
                variants={fadeUp}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="relative md:pl-14"
              >
                <span className="absolute left-0 top-8 hidden h-8 w-8 rounded-full border border-accent/50 bg-primary shadow-glow md:grid md:place-items-center">
                  <span className="h-3 w-3 rounded-full bg-accent" />
                </span>
                <div className="glass hover-lift overflow-hidden rounded-[2rem] p-6 md:p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-accent">{item.type}</p>
                      <h3 className="mt-2 text-2xl font-bold text-white">
                        {item.company}
                      </h3>
                      <p className="mt-1 text-lg font-semibold text-orange-100">{item.role}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-slate-300 backdrop-blur-xl">
                      {item.period}
                    </span>
                  </div>
                  <ul className="mt-6 grid gap-3 text-slate-300 md:grid-cols-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-secondary/20 px-3 py-1 text-sm font-medium text-orange-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="section-shell py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase text-accent">Skills</p>
            <h2 className="max-w-4xl text-4xl font-bold text-primary md:text-6xl">
              Technical & Professional Strengths
            </h2>
          </motion.div>
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="grid gap-4">
              <h3 className="text-xl font-bold text-primary">Technical Skills</h3>
              <div className="grid auto-rows-fr grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
                {technicalSkills.map(([label, value], index) => (
                  <SkillCircle key={label} label={String(label)} value={Number(value)} delay={index * 0.03} />
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              <h3 className="text-xl font-bold text-primary">Professional Skills</h3>
              <div className="grid auto-rows-fr grid-cols-2 gap-4 sm:grid-cols-3">
                {professionalSkills.map(([label, value], index) => (
                  <SkillCircle key={label} label={String(label)} value={Number(value)} delay={index * 0.03} />
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="section-shell py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase text-accent">Projects</p>
            <h2 className="text-4xl font-bold text-primary md:text-6xl">Recruiter-Ready Case Studies</h2>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="glass hover-lift flex min-h-[360px] flex-col rounded-[2rem] p-6"
              >
                <div className="mb-8 h-36 rounded-3xl border border-white/10 bg-[#170711]/80 p-4 shadow-inner">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="h-3 w-24 rounded-full bg-accent/70" />
                    <span className="h-3 w-10 rounded-full bg-white/20" />
                  </div>
                  <div className="flex h-20 items-end gap-2">
                    {[52, 74, 46, 88, 64, 92].map((height) => (
                      <span key={`${project.title}-${height}`} className="flex-1 rounded-t-lg bg-secondary" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 flex-1 text-slate-300">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.points.map((point) => (
                    <span key={point} className="rounded-full bg-white/[0.07] px-3 py-1 text-xs font-semibold text-slate-200">
                      {point}
                    </span>
                  ))}
                </div>
                <Button className="mt-6 w-full" variant={index === 0 ? "primary" : "secondary"} onClick={() => setActiveProject(project)}>
                  Live Preview
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <section className="section-shell grid gap-6 py-16 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
            className="glass hover-lift rounded-[2rem] p-6 md:p-8"
          >
            <p className="mb-3 text-sm font-semibold uppercase text-accent">Education</p>
            <h2 className="text-3xl font-bold text-white">Education Timeline</h2>
            <div className="mt-8 space-y-6 border-l border-accent/35 pl-6">
              {educationTimeline.map((item) => (
                <div key={item.qualification} className="relative rounded-2xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur-xl">
                  <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full bg-accent shadow-glow" />
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase text-accent">{item.period}</p>
                      <h3 className="mt-2 text-xl font-bold text-white">{item.qualification}</h3>
                    </div>
                    <span className="w-fit rounded-full bg-accent/15 px-3 py-1 text-sm font-bold text-orange-100">
                      {item.score}
                    </span>
                  </div>
                  <p className="mt-4 font-semibold text-slate-200">{item.institution}</p>
                  <p className="mt-1 text-slate-300">{item.detail}</p>
                  <div className="mt-5">
                    <p className="text-sm font-semibold uppercase text-accent">Subjects & Skills Learned</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.learned.map((skill) => (
                        <span key={skill} className="rounded-full bg-white/[0.08] px-3 py-1 text-xs font-semibold text-slate-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
            className="glass hover-lift rounded-[2rem] p-6 md:p-8"
          >
            <p className="mb-3 text-sm font-semibold uppercase text-accent">Certifications & Skills</p>
            <h2 className="text-3xl font-bold text-white">Professional Toolkit</h2>
            <div className="mt-8 grid gap-5">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur-xl">
                  <h3 className="text-lg font-bold text-white">{group.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full bg-white/[0.08] px-3 py-1 text-xs font-semibold text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="rounded-2xl border border-accent/20 bg-accent/10 p-5 backdrop-blur-xl">
                <h3 className="text-lg font-bold text-white">Certifications</h3>
                <ul className="mt-4 grid gap-3 text-slate-200">
                  {certifications.map((certification) => (
                    <li key={certification} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span>{certification}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="section-shell py-16">
          <div className="glass hover-lift rounded-[2rem] p-6 md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase text-accent">ATS Optimization</p>
            <h2 className="text-3xl font-bold text-white">Keyword-Aligned Resume Content</h2>
            <p className="mt-4 max-w-4xl text-slate-300">
              This portfolio uses semantic HTML, clear heading structure, and recruiter-focused keywords for Claims Processor,
              Healthcare Claims, Insurance Claims, Data Analyst, Excel, Reporting, Dashboard Creation, Business Development,
              Sales Executive, Lead Generation, Customer Relationship Management, Data Cleaning, Data Validation, Problem Solving,
              Communication Skills, and Client Management roles.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {keywords.map((keyword) => (
                <span key={keyword} className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-sm text-slate-200">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell pb-20 pt-16">
          <div className="glass hover-lift rounded-[2rem] p-6 md:p-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
            >
              <div>
                <p className="mb-3 text-sm font-semibold uppercase text-accent">Contact</p>
                <h2 className="text-4xl font-bold text-white">Let’s connect.</h2>
                <p className="mt-4 max-w-xl text-slate-300">
                  Open to Claims Processor, Data Analyst, Business Development, and reporting-focused roles.
                </p>
              </div>

              <div>
                <div className="grid gap-4">
                  <a href="https://maps.google.com/?q=Coimbatore, India" className="flex items-center gap-3 text-slate-300">
                    <MapPin className="h-5 w-5 text-accent" />
                    Coimbatore, India
                  </a>
                  <a href="mailto:sjayavishnu@outlook.com" className="flex items-center gap-3 text-slate-300">
                    <Mail className="h-5 w-5 text-accent" />
                    sjayavishnu@outlook.com
                  </a>
                  <a href="tel:+919789957213" className="flex items-center gap-3 text-slate-300">
                    <Phone className="h-5 w-5 text-accent" />
                    +91 9789957213
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="https://wa.me/919789957213" target="_blank" rel="noreferrer">
                    <Button>
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </Button>
                  </a>
                  <a href="mailto:sjayavishnu@outlook.com">
                    <Button variant="secondary">
                      <Mail className="h-4 w-4" />
                      Email
                    </Button>
                  </a>
                  <a href={linkedInUrl} target="_blank" rel="noreferrer">
                    <Button variant="ghost">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="section-shell border-t border-secondary/10 py-8 text-sm text-slate-600">
        © {year} Jaya Vishnu. Built for Claims Processor, Data Analyst, and Business Development applications.
      </footer>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-background/80 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              className="glass max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] p-6 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase text-accent">Live Preview</p>
                  <h2 className="mt-2 text-3xl font-bold text-white">{activeProject.title}</h2>
                </div>
                <button
                  type="button"
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white hover:bg-white/20"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close project preview"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-6 grid gap-5">
                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                  <h3 className="text-lg font-bold text-white">Project Overview</h3>
                  <p className="mt-3 leading-7 text-slate-300">{activeProject.details.overview}</p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                  <h3 className="text-lg font-bold text-white">Problem Statement</h3>
                  <p className="mt-3 leading-7 text-slate-300">{activeProject.details.problem}</p>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                  {[
                    ["My Responsibilities", activeProject.details.responsibilities],
                    ["Key Features", activeProject.details.features],
                    ["Business Impact", activeProject.details.impact],
                    ["KPIs Tracked", activeProject.details.kpis],
                  ].map(([heading, items]) => (
                    <div key={String(heading)} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                      <h3 className="text-lg font-bold text-white">{String(heading)}</h3>
                      <ul className="mt-4 grid gap-3 text-slate-300">
                        {(items as string[]).map((item) => (
                          <li key={item} className="flex gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                  <h3 className="text-lg font-bold text-white">Tools Used</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeProject.details.tools.map((tool) => (
                      <span key={tool} className="rounded-full bg-white/[0.08] px-3 py-1 text-sm font-semibold text-orange-100">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 grid gap-3">
                    {[86, 72, 92, 78].map((width) => (
                      <div key={width} className="h-3 rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-gradient-to-r from-secondary to-accent" style={{ width: `${width}%` }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
