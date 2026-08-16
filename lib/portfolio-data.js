export const PORTFOLIO_DATA = [
  {
    id: 'abis',
    name: 'AllWorkss Business Intelligence Suite (ABIS)',
    tagline: 'AI-Driven Corporate Intelligence & Financial Growth SaaS',
    description: 'A comprehensive, enterprise-grade business intelligence platform tailored for Indian SMEs. Integrates Gemini AI, XGBoost, and Prophet models to deliver automated business audits, supply chain optimization, and predictive financial insights.',
    architecture: 'Python / FastAPI Backend with Gradio 6 UI',
    cloudInfrastructure: 'Google Cloud Run (asia-south1, us-central1)',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Google OAuth 2.0', 'Razorpay', 'Gemini AI', 'XGBoost', 'Prophet'],
    businessImpact: [
      'Automated Business Auditor & Supply Chain Intelligence',
      'Inventory Optimization & Demand Forecasting',
      'Secure, localized data pipelines with strict access controls',
      'Scalable serverless deployment on Google Cloud'
    ],
    liveDemoUrl: 'https://allworkss.space',
    githubRepo: 'AllWorkss/allworkss-bi-suite',
    status: 'Production'
  },
  {
    id: 'costflow',
    name: 'CostFlow (CSF)',
    tagline: 'Universal Multi-Industry AI/ML Powered Costing Platform',
    description: 'An advanced visual costing platform that utilizes AI and real Excel formula engines. Designed to streamline and standardize costing sheets across multiple industries through a dynamic node-based architecture.',
    architecture: 'Next.js 14 Frontend with Zustand State Management',
    cloudInfrastructure: 'Google Cloud Run (europe-west1)',
    techStack: ['Next.js 14', 'TypeScript', 'React Flow', 'ExcelJS', 'Recharts', 'TailwindCSS'],
    businessImpact: [
      'Visual, drag-and-drop workflow modeling for costing structures',
      'Real-time calculation engine identical to Excel',
      'Universal adaptability across manufacturing and service sectors',
      'High-performance client-side rendering and state management'
    ],
    liveDemoUrl: '#',
    githubRepo: 'AllWorkss/CostFlow',
    status: 'Production'
  },
  {
    id: 'smartparchi',
    name: 'SmartParchi',
    tagline: 'Intelligent Digital Invoicing & Ticketing',
    description: 'A lightning-fast digital invoicing and ticketing platform engineered for high-throughput operational environments. Built on a serverless microservices architecture to ensure zero downtime.',
    architecture: 'Serverless Microservices Architecture',
    cloudInfrastructure: 'Google Cloud Run (europe-west1)',
    techStack: ['Node.js', 'Google Cloud Run', 'NoSQL', 'WebHooks'],
    businessImpact: [
      'Automated, instant receipt generation',
      'Seamless integration with POS hardware and software',
      'Cost reduction in paper and manual processing',
      'Real-time analytics and reporting dashboard'
    ],
    liveDemoUrl: '#',
    githubRepo: 'AllWorkss/smartparchi',
    status: 'Production'
  },
  {
    id: 'cloudcraft',
    name: 'CloudCraft Studio',
    tagline: 'Next-Gen Cloud Infrastructure Management',
    description: 'A solo-developer focused SaaS platform embodying AllWorkss’ cloud infrastructure DNA. Designed to abstract and simplify complex cloud deployments across GCP and AWS.',
    architecture: 'Full-Stack Enterprise Cloud App',
    cloudInfrastructure: 'Multi-Cloud / GCP Core',
    techStack: ['TypeScript', 'Cloud SDKs', 'Docker', 'Kubernetes'],
    businessImpact: [
      'Drastically reduced time-to-deployment for new microservices',
      'Centralized visibility into cloud resource utilization and costs',
      'Automated security policies and compliance checks',
      'Scalable architecture built for enterprise adoption'
    ],
    liveDemoUrl: '#',
    githubRepo: 'AllWorkss/AllWorkss-Cloud-Infra-Mangement',
    status: 'Private Beta'
  }
];
