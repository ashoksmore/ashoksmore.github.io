export const RESUME_URL = '/Ashok_More_Resume.pdf';

export const profile = {
  name: 'Ashok S. More',
  title: 'Full Stack Software Engineer',
  credentials: 'Open-source contributor',
  tagline:
    'I build production systems in Python, Java, and React; contribute tests and fixes to open source when I can; and run half marathons on the side.',
  subtitle: 'MedTech · FinTech · eCommerce · Python · React · AWS · ML / AI',
  relocationNote: 'Open to relocation in the United States',
  location: 'Boston, MA',
  phone: '(617) 412-5427',
  phoneHref: 'tel:+16174125427',
  email: 'ashoksmore11@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ashok-more/',
  github: 'https://github.com/ashoksmore',
};

export const aboutText =
  'Full stack software engineer with 6 years building and scaling production systems in Python, React, Java, and AWS across MedTech, FinTech, and eCommerce, from clinical analytics and regulated health data at Medsix, to brokerage APIs and compliance-heavy finance at DriveWealth, to high-volume marketplace and logistics platforms at Ingram Micro. Comfortable joining early-stage MedTech or FinTech teams with 0→1 ownership. I ship ML/AI in production (deterministic patterns, RAG-style grounding), run tight code review for AI-generated changes, and partner across teams for quality.';

export const experience = [
  {
    company: 'Medsix, Boston MA (MedTech)',
    dates: '03/2024 – Present',
    role: 'Software Engineer (Python + Full-Stack)',
    bullets: [
      'Architected full-stack clinical analytics with FastAPI, React (TypeScript), and Kafka; cut end-to-end latency 35% via backend tuning and component-level state design.',
      'Built a backend-focused agentic AI proof-of-concept with AWS Bedrock and LangChain (ReAct; multi-tool pipeline: OCR, classification, extraction, validation) to reduce manual document review steps in controlled testing.',
      'Material-UI and reusable React patterns; 15+ async REST endpoints, PostgreSQL tuning (−20% retrieval), 95% coverage (Pytest, Jest/RTL), and peer review standards for secure integration of AI-generated backend code.',
    ],
  },
  {
    company: 'DriveWealth, Jersey City NJ (FinTech)',
    dates: '06/2022 – 12/2022',
    role: 'Software Engineering API Intern (Python + Java)',
    bullets: [
      'Django analytics on 500GB+ monthly API logs for millions of investor accounts; React + Material-UI internal ops dashboard.',
      'Java Spring Boot brokerage APIs on AWS for 100+ partners; Redis sessions at 99.99% availability; Okta/JWT security aligned to FINRA expectations.',
    ],
  },
  {
    company: 'Ingram Micro (eCommerce & logistics)',
    dates: '07/2017 – 08/2021',
    role: 'Software Engineer (Python + Full-Stack)',
    bullets: [
      'Django microservices for marketplace (users, inventory, orders, payments); partitioned SQL and stored procedures for heavy transactional workloads.',
      'Spring Boot on EKS (orders, catalog, auth): 99.9% uptime, 1k+ daily transactions; Terraform + EKS migration to standardize releases and remove environment drift.',
    ],
  },
];

export const projects = [
  {
    title: 'Lighthouse Health',
    subtitle: 'AI post-discharge monitoring for heart failure',
    tags:
      'May 2026 · 2nd place · Harvard Innovation Labs · React · Express · Retell AI · Render · NVIDIA NemoClaw · Nebius Nemotron',
    description:
      'Harbor (voice + chat agent) collects daily weight and symptoms, applies clinical protocol, and escalates high-risk patients to nurses before readmission. Demo: patient mark/demo · clinician nurse/demo.',
    highlights: [
      'Live clinician dashboard with population view, timelines, and escalation cards',
      'NemoClaw guardrails enforce clinical policy before dashboard updates',
      'Deployed on Render with Retell webhooks and webhook signature verification',
    ],
    github: 'https://github.com/ashoksmore/lighthouse-health',
    demo: 'https://lighthouse-health.onrender.com/login',
    link: 'https://lighthouse-health.onrender.com/clinician/login',
    linkLabel: 'Clinician UI',
  },
  {
    title: 'Meta balance (facebookresearch)',
    tags: 'Python · Pytest · Causal inference',
    description:
      'Contributor to Meta’s open-source balance library: regression test for CBPS rank-deficient SVD handling, locking down existing matrix prep behavior flagged with an inline TODO.',
    github: 'https://github.com/facebookresearch/balance',
    demo: null,
  },
  {
    title: 'AI Assisted Expense Tracker',
    tags:
      'Feb 2026 – Apr 2026 · Python · FastAPI · SQLAlchemy · SQLite · React (Vite) · Groq · Ollama · Render',
    description:
      'FastAPI + SQLite CRUD with Pydantic validation; React (Vite) on Render. Pluggable Groq/Ollama inference for NL parsing and categorization. Deterministic-first design: Python aggregations and JSON-grounded prompts for reliable dashboards when LLMs fail.',
    github: 'https://github.com/ashoksmore/expense-tracker-api',
    demo: 'https://expense-tracker-fe-wg3g.onrender.com',
  },
  {
    title: 'GenAI Finance Health Dashboard',
    tags: 'Python · FastAPI · React · Azure OpenAI · PostgreSQL',
    description:
      'Hackathon build: CFO-style KPI dashboard with a deterministic Python pipeline feeding Azure OpenAI (GPT-4o) for spend analysis.',
    github: 'https://github.com/ashoksmore/genai-finance-dashboard',
    demo: null,
  },
];

export const skillGroups = [
  {
    label: 'Languages:',
    pills: ['Python', 'Java', 'JavaScript', 'C++', 'SQL'],
  },
  {
    label: 'Frameworks:',
    pills: [
      'Django',
      'FastAPI',
      'React',
      'Spring Boot',
      'SQLAlchemy',
      'Hibernate',
      'Material-UI',
      'Pytest',
      'JUnit',
      'Jest',
      'Maven',
    ],
  },
  {
    label: 'AI & LLMs:',
    pills: [
      'AWS Bedrock',
      'LangChain',
      'LLMs',
      'Groq',
      'Ollama',
      'RAG',
      'Prompt engineering',
      'Deterministic AI',
      'AI code review',
    ],
  },
  {
    label: 'Cloud & data:',
    pills: ['AWS', 'Azure', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite'],
  },
  {
    label: 'Platform:',
    pills: [
      'Kafka',
      'SQS',
      'SNS',
      'WebSockets',
      'REST',
      'SOAP',
      'Docker',
      'Kubernetes',
      'Terraform',
      'CodePipeline',
      'Sumo Logic',
      'CloudWatch',
      'Git',
      'Jira',
      'Agile',
    ],
  },
];

export const educationItems = [
  {
    strong: 'Northeastern University',
    text: ', M.S. Computer Science (2021–2023). Coursework: databases, algorithms, data mining, ML, NLP.',
  },
  {
    text: 'AWS Certified Cloud Practitioner (in progress). Best Performer of the Year, Ingram Micro (2019). Led juniors on a Django + NLP resume classifier (90.25% accuracy). 2nd place, Healthcare Agentic AI Hackathon, Harvard Innovation Labs (2026).',
  },
];

export const navRoutes = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/work', label: 'Work' },
  { path: '/projects', label: 'Projects' },
  { path: '/beyond-code', label: 'Beyond Code' },
  { path: '/contact', label: 'Contact' },
];
