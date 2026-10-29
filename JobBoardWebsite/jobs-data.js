/* ============================================================
   Foothold — mock job listings
   postedDaysAgo is relative; postedDate is computed at load time
   in each page so "Last 24 hours / 7 days / 2 weeks" filters
   behave correctly no matter when the bot runs.
   ============================================================ */

const JOBS = [
  {
    id: 1,
    title: "Data Analyst Intern",
    company: "Riverstone Analytics",
    location: "Singapore, Central",
    level: "Intern",
    type: "Internship",
    salaryMin: 1000,
    salaryMax: 1400,
    postedDaysAgo: 0,
    keywords: ["data analyst", "python", "sql", "excel", "data analysis"],
    description:
      "Support the analytics team in building dashboards and cleaning datasets for client reporting.",
    requirements: [
      "Currently pursuing a Diploma or Degree in Data Science, IT, or related field",
      "Comfortable with Excel; exposure to SQL or Python is a plus",
      "Able to commit at least 3 months full-time"
    ]
  },
  {
    id: 2,
    title: "Junior Software Engineer",
    company: "Northloop Systems",
    location: "Singapore, Jurong",
    level: "Junior",
    type: "Full Time",
    salaryMin: 3200,
    salaryMax: 3800,
    postedDaysAgo: 1,
    keywords: ["java", "python", "sql", "software engineer", "javascript"],
    description:
      "Join a small product team building internal tooling. You'll work across the stack with senior engineers mentoring closely.",
    requirements: [
      "Diploma or Degree in Computer Science or related field",
      "Familiarity with Java or Python",
      "Basic understanding of relational databases"
    ]
  },
  {
    id: 3,
    title: "Marketing Executive",
    company: "Palm & Co Creative",
    location: "Singapore, Tanjong Pagar",
    level: "Executive",
    type: "Full Time",
    salaryMin: 2800,
    salaryMax: 3300,
    postedDaysAgo: 2,
    keywords: ["marketing", "content writing", "communication", "social media"],
    description:
      "Plan and execute social campaigns for SME clients, from content calendars to performance reporting.",
    requirements: [
      "Diploma or Degree in Marketing, Communications, or related field",
      "Strong writing skills",
      "Familiarity with social media scheduling tools"
    ]
  },
  {
    id: 4,
    title: "Business Analyst (Entry Level)",
    company: "Meridian Consulting Group",
    location: "Singapore, Raffles Place",
    level: "Junior",
    type: "Full Time",
    salaryMin: 3400,
    salaryMax: 4000,
    postedDaysAgo: 3,
    keywords: ["business analyst", "excel", "data analysis", "sql", "project management"],
    description:
      "Support client engagements with process mapping, requirements gathering, and reporting.",
    requirements: [
      "Degree in Business, IT, or related field",
      "Strong Excel skills",
      "Good stakeholder communication"
    ]
  },
  {
    id: 5,
    title: "UX Design Intern",
    company: "Kinfolk Studio",
    location: "Singapore, Kampong Glam",
    level: "Intern",
    type: "Internship",
    salaryMin: 900,
    salaryMax: 1200,
    postedDaysAgo: 4,
    keywords: ["ux design", "ui design", "figma", "design"],
    description:
      "Work alongside product designers on wireframes, prototypes, and usability testing for client apps.",
    requirements: [
      "Pursuing a Diploma or Degree in Design or related field",
      "Portfolio showing UI/UX work (student projects fine)",
      "Familiarity with Figma"
    ]
  },
  {
    id: 6,
    title: "Python Developer",
    company: "Ferrotech Automation",
    location: "Singapore, Woodlands",
    level: "Junior",
    type: "Full Time",
    salaryMin: 3500,
    salaryMax: 4200,
    postedDaysAgo: 5,
    keywords: ["python", "sql", "software engineer", "automation", "machine learning"],
    description:
      "Build internal automation scripts and light data pipelines supporting the manufacturing ops team.",
    requirements: [
      "Degree in Computer Science, Engineering, or related field",
      "Solid Python fundamentals",
      "Exposure to SQL databases"
    ]
  },
  {
    id: 7,
    title: "Customer Service Associate",
    company: "Harbourline Retail",
    location: "Singapore, Orchard",
    level: "Executive",
    type: "Part Time",
    salaryMin: 1800,
    salaryMax: 2100,
    postedDaysAgo: 6,
    keywords: ["customer service", "communication"],
    description:
      "Front-of-house support for a retail flagship store, handling enquiries and order issues.",
    requirements: [
      "Good spoken and written English",
      "Available weekends",
      "Prior retail experience a plus but not required"
    ]
  },
  {
    id: 8,
    title: "Accounting Intern",
    company: "Weslake & Partners",
    location: "Singapore, Shenton Way",
    level: "Intern",
    type: "Internship",
    salaryMin: 1000,
    salaryMax: 1300,
    postedDaysAgo: 8,
    keywords: ["accounting", "excel", "microsoft office"],
    description:
      "Assist with bookkeeping, invoice processing, and month-end reconciliation for SME clients.",
    requirements: [
      "Pursuing a Diploma or Degree in Accountancy or Finance",
      "Comfortable with Excel",
      "Detail-oriented"
    ]
  },
  {
    id: 9,
    title: "Product Manager, Associate",
    company: "Northloop Systems",
    location: "Singapore, Jurong",
    level: "Manager",
    type: "Full Time",
    salaryMin: 4800,
    salaryMax: 5600,
    postedDaysAgo: 10,
    keywords: ["project management", "product management", "communication", "data analysis"],
    description:
      "Own a feature area end to end, from writing specs to coordinating with engineering and design.",
    requirements: [
      "2+ years in a product, project, or business analyst role",
      "Comfortable reading basic usage data",
      "Strong written communication"
    ]
  },
  {
    id: 10,
    title: "React Frontend Developer",
    company: "Basalt Digital",
    location: "Singapore, one-north",
    level: "Junior",
    type: "Contract",
    salaryMin: 3800,
    salaryMax: 4500,
    postedDaysAgo: 12,
    keywords: ["javascript", "react", "software engineer", "ui design"],
    description:
      "Six-month contract building customer-facing dashboards in React for a fintech client.",
    requirements: [
      "1+ years' experience with React or a similar framework",
      "Comfortable with JavaScript fundamentals",
      "Available to start within 3 weeks"
    ]
  },
  {
    id: 11,
    title: "Graphic Design Intern",
    company: "Palm & Co Creative",
    location: "Singapore, Tanjong Pagar",
    level: "Intern",
    type: "Internship",
    salaryMin: 900,
    salaryMax: 1100,
    postedDaysAgo: 15,
    keywords: ["design", "content writing", "social media"],
    description:
      "Produce visual assets for client social campaigns and pitch decks.",
    requirements: [
      "Pursuing a Diploma or Degree in Design, Media, or related field",
      "Comfortable with Adobe or Canva",
      "Portfolio of prior work"
    ]
  },
  {
    id: 12,
    title: "Senior Business Analyst",
    company: "Meridian Consulting Group",
    location: "Singapore, Raffles Place",
    level: "Senior Manager",
    type: "Full Time",
    salaryMin: 6500,
    salaryMax: 7800,
    postedDaysAgo: 18,
    keywords: ["business analyst", "project management", "sql", "data analysis"],
    description:
      "Lead workstreams on large-scale process transformation engagements across banking clients.",
    requirements: [
      "5+ years in business or systems analysis",
      "Experience leading a small team",
      "Strong SQL and stakeholder management"
    ]
  },
  {
    id: 13,
    title: "IT Helpdesk Intern",
    company: "Ferrotech Automation",
    location: "Singapore, Woodlands",
    level: "Intern",
    type: "Internship",
    salaryMin: 950,
    salaryMax: 1150,
    postedDaysAgo: 21,
    keywords: ["microsoft office", "customer service", "software engineer"],
    description:
      "First-line support for internal staff, logging tickets and troubleshooting common issues.",
    requirements: [
      "Pursuing a Diploma in IT or related field",
      "Patient, clear communicator",
      "Basic Windows troubleshooting knowledge"
    ]
  },
  {
    id: 14,
    title: "Machine Learning Intern",
    company: "Riverstone Analytics",
    location: "Singapore, Central",
    level: "Intern",
    type: "Internship",
    salaryMin: 1100,
    salaryMax: 1500,
    postedDaysAgo: 25,
    keywords: ["machine learning", "python", "data analysis", "sql"],
    description:
      "Support the data science team in preparing training data and evaluating model performance.",
    requirements: [
      "Pursuing a Degree in Computer Science, Data Science, or related field",
      "Working knowledge of Python",
      "Coursework in statistics or ML is a plus"
    ]
  },
  {
    id: 15,
    title: "Data Engineer, Associate",
    company: "Basalt Digital",
    location: "Singapore, one-north",
    level: "Junior",
    type: "Full Time",
    salaryMin: 4000,
    salaryMax: 4800,
    postedDaysAgo: 0,
    keywords: ["python", "sql", "data engineering", "etl", "data analysis"],
    description:
      "Build and maintain ETL pipelines feeding the analytics warehouse for a fintech client.",
    requirements: [
      "Degree in Computer Science, IT, or related field",
      "Working knowledge of Python and SQL",
      "Exposure to cloud data warehouses is a plus"
    ]
  },
  {
    id: 16,
    title: "SQL Data Analyst",
    company: "Harbourline Retail",
    location: "Singapore, Orchard",
    level: "Junior",
    type: "Full Time",
    salaryMin: 3300,
    salaryMax: 3900,
    postedDaysAgo: 0,
    keywords: ["sql", "data analyst", "excel", "data analysis", "python"],
    description:
      "Analyse sales and inventory data across retail stores to support merchandising decisions.",
    requirements: [
      "Diploma or Degree in Data Science, Statistics, or related field",
      "Strong SQL skills",
      "Comfortable with Excel and basic Python"
    ]
  },
  {
    id: 17,
    title: "Full Stack Developer Intern",
    company: "Northloop Systems",
    location: "Singapore, Jurong",
    level: "Intern",
    type: "Internship",
    salaryMin: 1000,
    salaryMax: 1400,
    postedDaysAgo: 1,
    keywords: ["javascript", "python", "react", "software engineer", "sql"],
    description:
      "Work on both the React frontend and Python backend of an internal tooling platform.",
    requirements: [
      "Pursuing a Diploma or Degree in Computer Science or related field",
      "Basic JavaScript and Python",
      "Keen to learn full stack development"
    ]
  },
  {
    id: 18,
    title: "HR Executive",
    company: "Weslake & Partners",
    location: "Singapore, Shenton Way",
    level: "Executive",
    type: "Full Time",
    salaryMin: 3000,
    salaryMax: 3600,
    postedDaysAgo: 1,
    keywords: ["human resources", "communication", "microsoft office", "excel"],
    description:
      "Manage recruitment coordination, onboarding, and HR record-keeping for a growing SME.",
    requirements: [
      "Diploma or Degree in Human Resources or Business",
      "Organised and detail-oriented",
      "Comfortable with Excel and HR systems"
    ]
  },
  {
    id: 19,
    title: "Junior Data Scientist",
    company: "Riverstone Analytics",
    location: "Singapore, Central",
    level: "Junior",
    type: "Full Time",
    salaryMin: 4200,
    salaryMax: 5000,
    postedDaysAgo: 2,
    keywords: ["python", "machine learning", "sql", "data analysis", "data analyst"],
    description:
      "Build predictive models and dashboards for client-facing analytics products.",
    requirements: [
      "Degree in Data Science, Statistics, Computer Science, or related field",
      "Solid Python and SQL",
      "Some exposure to machine learning frameworks"
    ]
  },
  {
    id: 20,
    title: "Digital Marketing Intern",
    company: "Palm & Co Creative",
    location: "Singapore, Tanjong Pagar",
    level: "Intern",
    type: "Internship",
    salaryMin: 900,
    salaryMax: 1200,
    postedDaysAgo: 2,
    keywords: ["marketing", "social media", "content writing", "communication"],
    description:
      "Support paid and organic campaign execution across social platforms for retail clients.",
    requirements: [
      "Pursuing a Diploma or Degree in Marketing, Communications, or related field",
      "Interest in social media trends",
      "Basic copywriting ability"
    ]
  },
  {
    id: 21,
    title: "Backend Engineer (Java)",
    company: "Ferrotech Automation",
    location: "Singapore, Woodlands",
    level: "Junior",
    type: "Full Time",
    salaryMin: 3800,
    salaryMax: 4600,
    postedDaysAgo: 3,
    keywords: ["java", "sql", "software engineer", "automation"],
    description:
      "Develop and maintain backend services supporting factory automation systems.",
    requirements: [
      "Degree in Computer Science, Engineering, or related field",
      "Solid Java fundamentals",
      "Familiarity with relational databases"
    ]
  },
  {
    id: 22,
    title: "Finance Executive",
    company: "Meridian Consulting Group",
    location: "Singapore, Raffles Place",
    level: "Executive",
    type: "Full Time",
    salaryMin: 3200,
    salaryMax: 3800,
    postedDaysAgo: 3,
    keywords: ["accounting", "excel", "data analysis", "microsoft office"],
    description:
      "Support budgeting, forecasting, and month-end close for client engagements.",
    requirements: [
      "Degree in Accountancy, Finance, or related field",
      "Strong Excel modelling skills",
      "Detail-oriented and deadline-driven"
    ]
  },
  {
    id: 23,
    title: "QA Engineer Intern",
    company: "Basalt Digital",
    location: "Singapore, one-north",
    level: "Intern",
    type: "Internship",
    salaryMin: 950,
    salaryMax: 1250,
    postedDaysAgo: 4,
    keywords: ["software engineer", "python", "automation", "sql"],
    description:
      "Write and run automated test scripts for a customer-facing fintech dashboard.",
    requirements: [
      "Pursuing a Diploma or Degree in Computer Science or related field",
      "Basic scripting ability in Python",
      "Attention to detail"
    ]
  },
  {
    id: 24,
    title: "Operations Executive",
    company: "Harbourline Retail",
    location: "Singapore, Orchard",
    level: "Executive",
    type: "Full Time",
    salaryMin: 2900,
    salaryMax: 3400,
    postedDaysAgo: 5,
    keywords: ["excel", "data analysis", "communication", "project management"],
    description:
      "Coordinate store operations, inventory reporting, and vendor communications.",
    requirements: [
      "Diploma or Degree in Business, Logistics, or related field",
      "Comfortable with Excel",
      "Good organisational skills"
    ]
  },
  {
    id: 25,
    title: "Frontend Developer Intern",
    company: "Northloop Systems",
    location: "Singapore, Jurong",
    level: "Intern",
    type: "Internship",
    salaryMin: 1000,
    salaryMax: 1300,
    postedDaysAgo: 6,
    keywords: ["javascript", "react", "ui design", "software engineer"],
    description:
      "Build UI components for an internal admin dashboard using React.",
    requirements: [
      "Pursuing a Diploma or Degree in Computer Science or related field",
      "Basic JavaScript and HTML/CSS",
      "Interest in frontend development"
    ]
  },
  {
    id: 26,
    title: "Content Marketing Executive",
    company: "Kinfolk Studio",
    location: "Singapore, Kampong Glam",
    level: "Executive",
    type: "Full Time",
    salaryMin: 3000,
    salaryMax: 3500,
    postedDaysAgo: 7,
    keywords: ["content writing", "marketing", "communication", "social media"],
    description:
      "Plan and write long-form content and campaign copy for design-led client brands.",
    requirements: [
      "Degree in Communications, Marketing, English, or related field",
      "Excellent writing portfolio",
      "Comfortable working to editorial deadlines"
    ]
  },
  {
    id: 27,
    title: "Data Analytics Manager",
    company: "Meridian Consulting Group",
    location: "Singapore, Raffles Place",
    level: "Manager",
    type: "Full Time",
    salaryMin: 6000,
    salaryMax: 7200,
    postedDaysAgo: 9,
    keywords: ["data analysis", "sql", "python", "project management", "business analyst"],
    description:
      "Lead a small analytics team delivering data products for banking and insurance clients.",
    requirements: [
      "4+ years in data analytics or business intelligence",
      "Strong SQL and stakeholder management",
      "Experience managing a small team"
    ]
  },
  {
    id: 28,
    title: "DevOps Engineer",
    company: "Ferrotech Automation",
    location: "Singapore, Woodlands",
    level: "Senior Manager",
    type: "Full Time",
    salaryMin: 7000,
    salaryMax: 8500,
    postedDaysAgo: 11,
    keywords: ["automation", "python", "software engineer", "sql"],
    description:
      "Own CI/CD pipelines and cloud infrastructure for factory automation software.",
    requirements: [
      "6+ years in DevOps or infrastructure engineering",
      "Strong Python scripting",
      "Experience leading infrastructure decisions"
    ]
  },
  {
    id: 29,
    title: "Retail Sales Associate",
    company: "Harbourline Retail",
    location: "Singapore, Orchard",
    level: "Intern",
    type: "Part Time",
    salaryMin: 1200,
    salaryMax: 1500,
    postedDaysAgo: 13,
    keywords: ["customer service", "communication"],
    description:
      "Weekend and evening retail floor support, including basic stock replenishment.",
    requirements: [
      "Good spoken English",
      "Available weekends and evenings",
      "No prior experience required"
    ]
  },
  {
    id: 30,
    title: "Product Design Intern",
    company: "Kinfolk Studio",
    location: "Singapore, Kampong Glam",
    level: "Intern",
    type: "Internship",
    salaryMin: 900,
    salaryMax: 1200,
    postedDaysAgo: 20,
    keywords: ["ux design", "ui design", "figma", "design"],
    description:
      "Contribute to design systems and user research for client mobile apps.",
    requirements: [
      "Pursuing a Diploma or Degree in Design or related field",
      "Familiarity with Figma",
      "Curiosity about user research methods"
    ]
  }
];

// Attach a real Date object to each job, computed relative to now,
// so date-posted filtering is correct regardless of when this runs.
JOBS.forEach(function (job) {
  const d = new Date();
  d.setDate(d.getDate() - job.postedDaysAgo);
  job.postedDate = d;
});

function getJobById(id) {
  return JOBS.find(function (j) { return String(j.id) === String(id); });
}

function formatSalary(job) {
  return "$" + job.salaryMin.toLocaleString() + " – $" + job.salaryMax.toLocaleString() + " / mo";
}

function formatPostedDate(date) {
  return date.toLocaleDateString("en-SG", { day: "numeric", month: "short", year: "numeric" });
}

function daysSince(date) {
  const ms = new Date().setHours(0, 0, 0, 0) - new Date(date).setHours(0, 0, 0, 0);
  return Math.round(ms / (1000 * 60 * 60 * 24));
}

function freshnessClass(daysAgo) {
  if (daysAgo <= 1) return "rail-fresh";
  if (daysAgo <= 7) return "rail-recent";
  if (daysAgo <= 14) return "rail-standard";
  return "rail-older";
}
