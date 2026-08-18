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
    name: 'CostFlow (CSF Costing)',
    tagline: 'Universal Multi-Industry AI/ML Powered Costing Platform',
    description: 'Production-grade visual costing platform dynamically adapting across 5 industry domains (Manufacturing, Education, Retail, E-Commerce, Construction). Generates live Excel sheets with real formulas, interactive React Flow diagrams, and AI price optimization.',
    architecture: 'Next.js 14 Frontend with Zustand State Management & React Flow',
    cloudInfrastructure: 'Google Cloud Run / Vercel',
    techStack: ['Next.js 14', 'TypeScript', 'React Flow', 'ExcelJS', 'Recharts', 'TailwindCSS', 'Zustand'],
    businessImpact: [
      'Visual drag-and-drop workflow modeling for complex costing structures',
      'Real-time calculation engine exporting live Excel formulas',
      'AI/ML anomaly detection and optimal price recommendation engine',
      'Universal adaptability across manufacturing, retail, e-commerce, and construction'
    ],
    liveDemoUrl: 'https://github.com/AllWorkss/CostFlow',
    githubRepo: 'AllWorkss/CostFlow',
    status: 'Production'
  },
  {
    id: 'smartparchi',
    name: 'SmartParchi (स्मार्टपर्ची)',
    tagline: 'Modular OPD, Practice & Loose Tablet Dispensary ERP',
    description: 'Ultra-fast Electronic Medical Record (EMR) and OPD Dispensary software for single-doctor clinics and polyclinics. Features sub-5s token generation, loose tablet pudiya calculation, 32-teeth interactive dental SVG, eye refraction matrix, and split billing with Khata ledger.',
    architecture: 'Next.js / TypeScript Web App & EMR Suite',
    cloudInfrastructure: 'Google Cloud Run / Vercel',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'SVG Canvas', 'WhatsApp API'],
    businessImpact: [
      'Sub-5-second patient token lookup and instant WhatsApp alerts',
      'Automated loose tablet count calculation & inventory deduction',
      'Specialty practice modules: Dental 32-teeth canvas, Eye Refraction, Pediatric WHO charts',
      'Split billing (Cash + UPI + Khata/Udhar) with permanent patient debt alerts'
    ],
    liveDemoUrl: 'https://github.com/AllWorkss/smartparchi',
    githubRepo: 'AllWorkss/smartparchi',
    status: 'Production'
  },
  {
    id: 'grif_assistant',
    name: 'GRIF — Personal AI Executive',
    tagline: 'PC Command Center & Hinglish AI Assistant',
    description: 'An all-powerful personal executive AI assistant operating via Telegram. Features Gemini AI with native Multimodal Function Calling, Hinglish/Hindi/English voice & photo OCR, SMTP Email Dispatcher, WhatsApp Messenger, Bluetooth Manager, and local/remote PC automations.',
    architecture: 'Python Async Engine with SQLite Long-Term Memory',
    cloudInfrastructure: 'Local PC & Multi-PC Remote Agent Nodes',
    techStack: ['Python', 'Google Gemini API', 'Telegram Bot API', 'SQLite', 'Multimodal OCR', 'SMTP'],
    businessImpact: [
      'Hinglish voice notes, image OCR, and PDF analysis powered by Gemini AI',
      'Autonomous email and WhatsApp message dispatch from PC',
      '29+ local PC automation tools (Bluetooth, Alarms, Process Management)',
      'Lightweight remote node agent for multi-PC command execution'
    ],
    liveDemoUrl: 'https://github.com/AllWorkss/grif_assistant',
    githubRepo: 'AllWorkss/grif_assistant',
    status: 'Production'
  },
  {
    id: 'zenith_algo_terminal',
    name: 'ZenithAlgo Pro Terminal',
    tagline: 'Algorithmic Trading & Indicator Studio',
    description: 'Institutional-grade dark-themed algorithmic trading software terminal designed for Indian retail traders using Upstox API v2 and ICICI Breeze API. Features live canvas candlestick charting, automated Buy/Sell indicator signals, daily circuit breaker capital protection, and historical strategy backtesting.',
    architecture: 'Python Flask API Gateway + Canvas Chart Engine',
    cloudInfrastructure: 'Desktop Local Server / Windows App',
    techStack: ['Python', 'Flask', 'Upstox API v2', 'ICICI Breeze API', 'HTML5 Canvas', 'Technical Indicators'],
    businessImpact: [
      'Real-time NIFTY/BANKNIFTY charting with EMA, Supertrend, VWAP, RSI, Bollinger Bands',
      "Dad's Safety Guard: Circuit breaker daily loss limit & strict 1.5% position risk calculator",
      'Automated visual BUY/SELL signals directly rendered on live chart candles',
      'Historical 12-month backtester with Win Rate %, Profit Factor, and Drawdown analysis'
    ],
    liveDemoUrl: 'https://github.com/AllWorkss/zenith_algo_terminal',
    githubRepo: 'AllWorkss/zenith_algo_terminal',
    status: 'Production'
  },
  {
    id: 'abis_mobile',
    name: 'ABIS Mobile App',
    tagline: 'Secure Native Android WebView Gateway for ABIS',
    description: 'High-performance Android native mobile application wrapper for the ABIS SaaS web app. Provides native Google OAuth redirects, Razorpay payment flows, camera/storage file uploads, Android Download Manager integration, and custom offline state handling.',
    architecture: 'Native Android Java (Android Studio)',
    cloudInfrastructure: 'Google Play Store / Android Package (APK/AAB)',
    techStack: ['Java', 'Android SDK', 'WebView', 'OAuth 2.0', 'Razorpay Web Checkout'],
    businessImpact: [
      'Seamless mobile web wrapper with full native Android capability',
      'Supported Google OAuth and Razorpay checkout without breaking WebView',
      'Integrated Android Download Manager for instant report & PDF downloads',
      'Zero paid mobile SDK dependencies — lightweight and high performance'
    ],
    liveDemoUrl: 'https://github.com/AllWorkss/ABIs-Mobile-App',
    githubRepo: 'AllWorkss/ABIs-Mobile-App',
    status: 'Production'
  },
  {
    id: 'allworkss_website',
    name: 'AllWorkss Consultancy Platform',
    tagline: 'Digital Transformation & SAP Consulting Website',
    description: 'Official web platform for AllWorkss Consultancy. Features interactive service showcases, consultancy booking system with calendar integration, direct WhatsApp API routing for services, animated modern UI, and optimized responsive layouts.',
    architecture: 'Next.js Frontend with API Routes',
    cloudInfrastructure: 'Railway.app',
    techStack: ['Next.js', 'React', 'CSS Modules', 'Framer Motion', 'Node.js', 'WhatsApp API'],
    businessImpact: [
      'Interactive service booking engine and SAP consulting showcase',
      'Direct WhatsApp API routing for instant client inquiry resolution',
      'High performance modern gradient design with responsive animations',
      'Full SEO optimization with automated sitemap and meta tags'
    ],
    liveDemoUrl: 'https://allworkss.in',
    githubRepo: 'AllWorkss/AllWorkss.in',
    status: 'Production'
  }
];
