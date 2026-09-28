import profilePhoto from '../assets/images/MyProfilePhoto.jpg';

export interface Project {
  id: string;
  title: string;
  badge: string;
  period: string;
  category: 'ai-ml' | 'data-engineering' | 'software-dev' | 'analytics';
  shortDesc: string;
  fullDesc: string;
  impactMetrics: string[];
  features: string[];
  techStack: string[];
  githubUrl: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  period: string;
  score?: string;
  honors?: string;
  majorProject?: string;
  minorProject?: string;
  details?: string[];
}

export interface CertificationItem {
  title: string;
  provider: 'Coursera' | 'Udemy' | 'Be10x';
  year: string;
  badgeText: string;
  category: 'AI & ML' | 'Data & BI' | 'Programming' | 'Tools';
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export const CANDIDATE_INFO = {
  name: "Rudrashis Chowdhury",
  role: "AI/ML Engineer & Python Developer",
  tagline: "MCA in AI & Machine Learning · Data Science · Automation",
  summary:
    "MCA graduate specializing in Artificial Intelligence & Machine Learning with hands-on experience building data analysis tools, predictive models, and automation solutions using Python, Java, SQL, and Linux. Developed an intelligent financial planner to deliver rapid visual and textual analysis; implemented a Java-MySQL library system improving productivity by up to 50% and reducing costs by 30%. Eager to contribute to entry-level roles in AI/ML, Data Science, or Analytics.",
  email: "rudrashis.chowdhury@gmail.com",
  phone: "+91-833-507-3949",
  address: "B-001 Peerless Kunja, Satgachi, Dum Dum, Kolkata - 700028, India",
  linkedin: "https://www.linkedin.com/in/rudrashis-chowdhury-08019a85",
  github: "https://github.com/Ishan2025-new",
  status: "Open to AI/ML & Data Engineering Roles · Kolkata / Remote",
  avatarUrl: profilePhoto
};

export const PROJECTS: Project[] = [
  {
    id: "financial-planner",
    title: "Intelligent Financial Planner Assistant",
    badge: "MCA Major Project",
    period: "2024 – 2025",
    category: "ai-ml",
    featured: true,
    shortDesc:
      "A Python-based automated data collection and analytics engine generating instant visual and textual financial health insights, savings forecasts, and downloadable PDF reports.",
    fullDesc:
      "Engineered an end-to-end intelligent personal finance assistant in Python. Users input financial transactions or budgets to receive automated statistical summaries, asset allocation charts, debt-to-income diagnostics, and rule-based advisory recommendations. Built with scalable modular architecture supporting local execution or cloud containerization.",
    impactMetrics: [
      "Instantaneous visual & textual insights generation in < 2 seconds",
      "Automated financial advisory and portfolio health score calculation",
      "Dynamic PDF generation with automated charts and actionable breakdowns"
    ],
    features: [
      "Exploratory financial data analysis with Pandas & NumPy",
      "Interactive data visualizations via Matplotlib & Plotly",
      "Automated PDF export engine utilizing FPDF and OpenPyXL",
      "Web interface powered by lightweight Flask framework",
      "Categorized expense distribution and predictive runway calculation"
    ],
    techStack: ["Python", "Pandas", "Matplotlib", "FPDF", "OpenPyXL", "Flask", "NumPy"],
    githubUrl: "https://github.com/Ishan2025-new/financial-health-app"
  },
  {
    id: "library-management",
    title: "Library Management System",
    badge: "BCA Major Project",
    period: "2022 – 2023",
    category: "software-dev",
    featured: true,
    shortDesc:
      "An electronic management desktop suite built with Java SE 18 and MySQL, automating daily circulation, cataloging, fee tracking, and inventory auditing.",
    fullDesc:
      "Designed and developed a complete desktop enterprise management application for academic libraries using Java SE 18.0.2.1 and MySQL relational database. Digitized the complete book checkout, return, catalog search, fine calculation, and member records.",
    impactMetrics: [
      "Improved librarian day-to-day workflow productivity by ~50%",
      "Reduced library operational and paperwork costs by ~20%",
      "Sub-second book search across indexed relational catalog"
    ],
    features: [
      "Robust Object-Oriented Architecture (OOP) with clean separation of concerns",
      "Optimized MySQL relational schema with primary/foreign key integrity",
      "Automated late fee calculator and borrowing limits enforcement",
      "Member management, role-based controls, and issuance receipt generator"
    ],
    techStack: ["Java SE", "MySQL", "JDBC", "OOP", "SQL", "Swing UI"],
    githubUrl: "https://github.com/Ishan2025-new/BCA-Major-Project-Library-Management-System-using-Java-and-MySQL"
  },
  {
    id: "pyspark-bigdata",
    title: "PySpark Big Data Analytics",
    badge: "Coursera Guided Project",
    period: "2026",
    category: "data-engineering",
    featured: true,
    shortDesc:
      "Distributed large-scale data processing pipeline built with Apache PySpark, executing parallel ETL, schema transformations, and multi-dimensional aggregations.",
    fullDesc:
      "Implemented a comprehensive distributed computing pipeline on Apache Spark using PySpark DataFrames. Loaded, sanitized, and transformed multi-gigabyte datasets, applying lazy evaluation, caching, and group-by aggregations for scalable insights.",
    impactMetrics: [
      "Accelerated dataset filtering and transformation across distributed nodes",
      "Optimized PySpark DataFrame operations avoiding expensive shuffles",
      "Automated summary statistics extraction for machine learning feature pipelines"
    ],
    features: [
      "Distributed ETL pipeline for raw unstructured and tabular data",
      "Data cleansing, null handling, and type-casting with PySpark SQL functions",
      "Exploratory Data Analysis (EDA) and multi-column aggregation metrics",
      "Feature engineering preprocessing for scalable downstream ML algorithms"
    ],
    techStack: ["PySpark", "Apache Spark", "Big Data", "DataFrames", "Python", "SQL"],
    githubUrl: "https://github.com/Ishan2025-new/PySpark-Big-Data-Guided-Project-by-Coursera"
  },
  {
    id: "hr-analytics",
    title: "HR Employee Analytics Dashboard",
    badge: "Analytics Showcase",
    period: "2025",
    category: "analytics",
    featured: true,
    shortDesc:
      "Interactive executive business intelligence dashboard tracking employee attrition risk, department headcount, tenure, and compensation distribution.",
    fullDesc:
      "Designed and published an executive HR analytics dashboard in Power BI. Combined disparate workforce records to evaluate attrition drivers, correlation with work-life balance, overtime frequency, and salary bands.",
    impactMetrics: [
      "Identified top 3 predictive factors contributing to employee turnover",
      "Interactive drill-down by department, job role, and performance ratings",
      "Custom DAX calculations for attrition percentages and retention benchmarks"
    ],
    features: [
      "Data modeling, star-schema creation, and relationship mapping",
      "Custom DAX calculated columns and measure KPIs",
      "Dynamic cross-filtering slicers for demographic and department views",
      "Color-coded risk indicators for high-turnover job roles"
    ],
    techStack: ["Power BI", "DAX", "Data Modeling", "Business Intelligence", "Excel"],
    githubUrl: "https://github.com/Ishan2025-new/Power-BI-Project-HR-Employee-Analytics-Dashboard"
  },
  {
    id: "bank-management",
    title: "Bank Management System",
    badge: "MCA Minor Project",
    period: "2023 – 2024",
    category: "software-dev",
    featured: false,
    shortDesc:
      "Python and MySQL transactional banking system featuring account creation, secure deposit/withdrawal verification, and ledger logging.",
    fullDesc:
      "Spearheaded development of a relational banking suite in Python communicating with a MySQL server. Implemented transaction consistency, account balances auditing, fund transfers, and pin authentication.",
    impactMetrics: [
      "Zero-latency transaction updates across interrelated tables",
      "Streamlined customer interaction with automated balance reconciliation",
      "Integrated audit trail for administrative tracking"
    ],
    features: [
      "CRUD operations with parametrized SQL queries preventing injection",
      "Real-time user transactions with core banking ledgers",
      "Automated transaction history statement generator",
      "Validation rules for account overdraft and balance minimums"
    ],
    techStack: ["Python", "MySQL", "Database Design", "SQL Connector"],
    githubUrl: "https://github.com/Ishan2025-new/MCA-Minor-Project-Bank-Management-System-using-Python-and-MySQL"
  },
  {
    id: "movie-recommendation-db",
    title: "Movie Recommendation Database System",
    badge: "Database System",
    period: "2025",
    category: "data-engineering",
    featured: false,
    shortDesc:
      "Normalized relational schema modeling movies, users, genres, and ratings with indexed multi-table queries to support collaborative filtering.",
    fullDesc:
      "Engineered an optimized MySQL database architecture to store user-item interactions, rating timestamps, and multi-genre tags. Built complex SQL queries with indexing to calculate average ratings, genre affinity, and top recommendations.",
    impactMetrics: [
      "Third Normal Form (3NF) relational design eliminating redundancy",
      "Optimized JOIN execution plans over high-volume rating tables",
      "Flexible foundation for collaborative and content-based recommendation models"
    ],
    features: [
      "Relational schema design with foreign key cascades and indexes",
      "Aggregation queries for top-rated, trending, and genre-clustered movies",
      "User profile preference extraction through SQL window functions",
      "SQL scripts ready for Python data science integration"
    ],
    techStack: ["MySQL", "Relational Database Design", "SQL Queries", "Database Indexing"],
    githubUrl: "https://github.com/Ishan2025-new/MySQL-Project-Movie-Recommendation-Database-System"
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    field: "Artificial Intelligence & Machine Learning",
    institution: "Amity University, Noida",
    period: "July 2023 — June 2025",
    honors: "Graduated with First Division",
    majorProject: "Intelligent Financial Planner Assistant (Python, Pandas, Matplotlib, FPDF, OpenPyXL)",
    minorProject: "Bank Management System (Python & MySQL)",
    details: [
      "Advanced coursework in Deep Learning, Machine Learning Algorithms, Statistical Computing, and Big Data Technologies.",
      "Graduated with First Class Division honors.",
      "Developed an automated financial analysis engine as the capstone major project."
    ]
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Amity University, Noida",
    period: "July 2020 — June 2023",
    honors: "Graduated with First Division",
    majorProject: "Library Management System using Java & MySQL",
    details: [
      "Core training in Object-Oriented Programming (Java, C#), Data Structures & Algorithms, Relational Database Systems, and Linux OS.",
      "Graduated with First Class Division honors.",
      "Spearheaded full-stack library digitization boosting librarian productivity by 50%."
    ]
  },
  {
    degree: "Indian School Certificate (ISC)",
    field: "Science Stream",
    institution: "Monalisa English School, Madhyamgram",
    period: "2018 — 2020",
    score: "59.2%",
    details: ["Higher secondary curriculum in Mathematics, Physics, Chemistry, and English."]
  },
  {
    degree: "Indian Certificate of Secondary Education (ICSE)",
    institution: "Monalisa English School, Madhyamgram",
    period: "Completed in 2018",
    score: "60.4%",
    details: ["Secondary board education covering Science, Mathematics, Computer Applications, and Social Studies."]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    iconName: "Cpu",
    skills: [
      "Supervised & Unsupervised Learning",
      "Linear & Logistic Regression",
      "Decision Trees & Random Forest",
      "Support Vector Machines (SVM)",
      "K-Means Clustering",
      "Feature Engineering",
      "Model Training & Validation",
      "Evaluation Metrics (ROC, F1, RMSE)"
    ]
  },
  {
    title: "Programming & Development",
    iconName: "Code2",
    skills: [
      "Python (3.x)",
      "Java (SE)",
      "C#",
      "SQL",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Shell Scripting",
      "RESTful API Fundamentals"
    ]
  },
  {
    title: "Data Science & Analytics",
    iconName: "BarChart3",
    skills: [
      "Exploratory Data Analysis (EDA)",
      "Data Preprocessing & Cleaning",
      "Statistical Hypothesis Testing",
      "PySpark on Distributed DataFrames",
      "Data Aggregation & Grouping",
      "Pipeline Automation"
    ]
  },
  {
    title: "Libraries & Frameworks",
    iconName: "Layers",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow (Core/Basic)",
      "Keras (Introductory)",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Jupyter Notebook",
      "Flask (Web API)"
    ]
  },
  {
    title: "Data Visualization & BI",
    iconName: "PieChart",
    skills: [
      "Power BI (Dashboard & Reports)",
      "DAX Expressions",
      "Tableau (Visualizations)",
      "Advanced MS Excel (Formulas, Pivot Tables, Power Query)",
      "PowerPoint Presentation Design"
    ]
  },
  {
    title: "Database Management",
    iconName: "Database",
    skills: [
      "SQL Queries (Complex Joins, Subqueries)",
      "Relational Database Design (3NF)",
      "MySQL Administration",
      "PostgreSQL",
      "Schema Indexing & Performance"
    ]
  },
  {
    title: "Operating Systems & Tools",
    iconName: "Terminal",
    skills: [
      "Linux Command Line (Ubuntu/Debian)",
      "Bash Shell Scripting",
      "Git & GitHub Version Control",
      "VS Code",
      "PyCharm",
      "Eclipse IDE"
    ]
  },
  {
    title: "Additional Skills",
    iconName: "Sparkles",
    skills: [
      "Unity 2D Game Development",
      "Game Design Patterns",
      "AI in Business Implementation (Be10X LMS)",
      "Technical Documentation"
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Scalable Machine Learning on Big Data using Apache Spark",
    provider: "Coursera",
    year: "2026",
    badgeText: "Coursera Certified",
    category: "AI & ML"
  },
  {
    title: "Basic to Advanced Power BI Dashboard Mastery Certificate",
    provider: "Be10x",
    year: "2025",
    badgeText: "Be10x Certified",
    category: "Data & BI"
  },
  {
    title: "Basic to Advanced SQL Masterclass Certificate",
    provider: "Be10x",
    year: "2025",
    badgeText: "Be10x Certified",
    category: "Programming"
  },
  {
    title: "Basic to Advanced Tableau Masterclass Certificate",
    provider: "Be10x",
    year: "2025",
    badgeText: "Be10x Certified",
    category: "Data & BI"
  },
  {
    title: "Intermediate to Advanced Excel Mastery Certificate",
    provider: "Be10x",
    year: "2025",
    badgeText: "Be10x Certified",
    category: "Data & BI"
  },
  {
    title: "Basic to Intermediate Excel Certificate",
    provider: "Be10x",
    year: "2025",
    badgeText: "Be10x Certified",
    category: "Data & BI"
  },
  {
    title: "Basic to Advanced PowerPoint Mastery Certificate",
    provider: "Be10x",
    year: "2025",
    badgeText: "Be10x Certified",
    category: "Tools"
  },
  {
    title: "The Linux Command Line Bootcamp",
    provider: "Udemy",
    year: "2024",
    badgeText: "Udemy Certified",
    category: "Tools"
  },
  {
    title: "Learning Python for Data Analysis and Visualization",
    provider: "Udemy",
    year: "2021",
    badgeText: "Udemy Certified",
    category: "Data & BI"
  },
  {
    title: "The Complete Python Bootcamp",
    provider: "Udemy",
    year: "2021",
    badgeText: "Udemy Certified",
    category: "Programming"
  },
  {
    title: "Complete C# Unity Game Developer 2D",
    provider: "Udemy",
    year: "2021",
    badgeText: "Udemy Certified",
    category: "Programming"
  },
  {
    title: "Learn Python Programming Masterclass",
    provider: "Udemy",
    year: "2020",
    badgeText: "Udemy Certified",
    category: "Programming"
  },
  {
    title: "The Complete Java Certification Course",
    provider: "Udemy",
    year: "2020",
    badgeText: "Udemy Certified",
    category: "Programming"
  },
  {
    title: "Java Programming for Complete Beginners",
    provider: "Udemy",
    year: "2020",
    badgeText: "Udemy Certified",
    category: "Programming"
  }
];

export const EXTRACURRICULARS = [
  "Participated in AI/ML hackathons across university and online platforms, prototyping real-time predictive models.",
  "Studying pragmatic business implementations of AI & ML workflows through the Be10X LMS program."
];
