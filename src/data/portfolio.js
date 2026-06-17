// ============================================================
//  Vishal Prajapati — Portfolio Data
//  All resume content centralised here for easy editing.
// ============================================================

export const personalInfo = {
  name: 'Vishal',
  lastName: 'Prajapati',
  title: 'AI & ML Engineer',
  subtitles: ['AI & ML Engineer', 'Research Intern @ IIT Gandhinagar', 'RAG & LLM Specialist'],
  tagline: 'Turning research papers into production pipelines.',
  email: 'vishalprajapati9427@gmail.com',
  location: 'Ahmedabad, India',
  github: 'https://github.com/vishalpr013',
  linkedin: 'https://www.linkedin.com/in/vishal-prajapati-56a233290/',
  resumeUrl: '/VISHAL_PRAJAPATI_RESUME-2.pdf',
}

export const about = {
  bio: `AI/ML Engineer with hands-on experience building hybrid RAG pipelines, agentic AI systems, and multimodal deep learning models. Focused on retrieval-augmented generation architecture, LLM-powered automation, and applied NLP research. Currently pursuing B.E. in AI-ML at L.D. College of Engineering, Ahmedabad.`,
  highlights: [
    { text: 'Hybrid RAG & Retrieval Systems', icon: 'sparkles' },
    { text: 'Agentic AI & LLM Automation', icon: 'bolt' },
    { text: 'Production ML Pipelines & Deployment', icon: 'server' },
    { text: 'B.E. AI & ML — LDCE, CGPA: 8.5/10', icon: 'academic' },
  ],
  stats: [
    { value: '1st Place', label: 'York IE Hackathon' },
    { value: '40%', label: 'Dev Effort Reduced' },
    { value: '14.56', label: 'MAE — Price Predictor' },
  ],
}

export const skills = [
  {
    category: 'Languages',
    color: 'cyan',
    items: ['Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'ML / Deep Learning',
    color: 'violet',
    items: ['PyTorch', 'TensorFlow', 'HuggingFace', 'scikit-learn'],
  },
  {
    category: 'AI / LLM / GenAI',
    color: 'amber',
    items: [
      'RAG Pipelines',
      'LLM Fine-Tuning',
      'Prompt Engineering',
      'Agentic AI',
      'LangChain',
      'LangGraph',
      'Groq API',
      'OpenAI API',
    ],
  },
  {
    category: 'Tools & DevOps',
    color: 'emerald',
    items: ['Git', 'Docker', 'Firebase', 'Jupyter', 'Ollama'],
  },
]

export const projects = [
  {
    title: 'Hybrid RAG System',
    subtitle: 'AI Research Paper QA Pipeline',
    tech: ['FAISS', 'BM25', 'Cross-Encoder', 'Llama-3.1', 'Groq', 'Python'],
    description:
      'Architected hybrid RAG pipeline over 200+ AI research papers combining FAISS dense retrieval + BM25 sparse retrieval with Cross-Encoder reranking for maximum recall and precision.',
    bullets: [
      'Combined FAISS dense retrieval + BM25 sparse retrieval with Cross-Encoder reranking',
      'Grounded QA via Llama-3.1 through Groq API — reduced hallucinations vs single-method baselines',
    ],
    github: 'https://github.com/vishalpr013/Hybrid-RAG-System',
    live: null,
  },
  {
    title: 'Jira-AI',
    subtitle: 'Task-to-Code Automator',
    tech: ['LLMs', 'OpenAI API', 'Jira API', 'LangChain', 'Python'],
    description:
      'AI assistant that parses Jira tickets, auto-generates technical documentation, and executes development tasks end-to-end.',
    bullets: [
      'Parses Jira tickets → auto-generates docs → executes dev tasks end-to-end',
      'Automated code generation, testing & deployment via LLM + API — reduced manual effort by 40%',
    ],
    github: 'https://github.com/vishalpr013/Jira-AI',
    live: null,
  },
  {
    title: 'Smart Product Pricing',
    subtitle: 'Multimodal Price Predictor',
    tech: ['SentenceTransformer', 'EfficientNet-B3', 'XGBoost', 'Python'],
    description:
      'Multimodal price predictor fusing text embeddings + image features across ~20K products.',
    bullets: [
      'Fused SentenceTransformer text embeddings + EfficientNet-B3 image features across ~20K products',
      'XGBoost regressor on concatenated feature vectors — achieved MAE 14.56 / MSE 25.8',
    ],
    live: null,
  },
]

export const experience = [
  {
    title: 'AI Research Intern',
    company: 'IIT Gandhinagar — LINGO Research',
    location: 'Gandhinagar, India',
    period: 'Apr 2026 — Present',
    current: true,
    bullets: [
      'Curated and annotated large-scale research datasets for AI and NLP model training, evaluation, and benchmarking',
      'Engineered Python automation scripts for systematic collection, processing, and validation of research papers and metadata',
      'Conducted structured literature reviews, analysing recent publications to inform experiment design and research direction',
      'Contributed to model benchmarking pipelines and preparation of research publications for peer review',
    ],
  },
  {
    title: 'React Developer Intern (AI-Integrated Systems)',
    company: 'York IE',
    location: 'Remote',
    period: 'Aug 2025 — Oct 2025',
    current: false,
    bullets: [
      'Engineered responsive analytics dashboards using React.js and REST APIs, integrating ML-powered prediction endpoints',
      'Delivered production-ready features across Agile sprints with Git-based version control and cross-functional workflows',
    ],
  },
]

export const education = [
  {
    degree: 'B.E. (AI & ML)',
    institution: 'L.D. College of Engineering, Ahmedabad',
    board: 'GTU',
    period: '2023 — 2027',
    score: 'CGPA: 8.5 / 10',
    current: true,
  },
  {
    degree: 'HSC (12th)',
    institution: 'Divine Buds School',
    board: 'GSEB',
    period: '2023',
    score: 'PR: 89.37%',
    current: false,
  },
]

export const achievements = [
  {
    icon: 'trophy',
    title: 'York IE Hackathon 2025 — 1st Place',
    description:
      'Won 1st place for building an AI-powered automation system solving a real-world enterprise problem.',
  },
  {
    icon: 'target',
    title: 'SSIP Phase 5 Grantee — ZeroTrace',
    description:
      "Selected for ZeroTrace, an AI-based startup project, under Gujarat Government's Student Startup & Innovation Policy.",
  },
]

export const certifications = [
  { name: 'Generative AI Foundations', issuer: 'Oracle' },
  { name: 'Data Science Professional', issuer: 'Oracle' },
  { name: 'ML, Deep Learning & NLP', issuer: 'Udemy' },
]

export const googleFormConfig = {
  submitUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSfpadpa8Dc11pPQMFca1ugj5DUgKWXSX8_4x00o44V834JeWA/formResponse',

  fields: {
    name: 'entry.258454878',
    email: 'entry.1992637417',
    subject: 'entry.1113123597',
    message: 'entry.234858882',
  },
}

