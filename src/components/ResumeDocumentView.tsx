import React, { useState } from 'react';
import { 
  Download, 
  Printer, 
  Copy, 
  Check, 
  ExternalLink, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github
} from 'lucide-react';
import { CANDIDATE_INFO } from '../data/portfolioData';

export const ResumeDocumentView: React.FC = () => {
  const [zoom, setZoom] = useState<number>(100);
  const [copied, setCopied] = useState<boolean>(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyContact = () => {
    const text = `${CANDIDATE_INFO.name}\n${CANDIDATE_INFO.role}\nEmail: ${CANDIDATE_INFO.email}\nPhone: ${CANDIDATE_INFO.phone}\nLinkedIn: ${CANDIDATE_INFO.linkedin}\nGitHub: ${CANDIDATE_INFO.github}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Control Toolbar */}
      <div className="no-print mb-8 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <div>
          <h2 className="text-base font-semibold text-[var(--text-primary)]">
            Professional Resume Document
          </h2>
          <p className="text-xs text-[var(--text-secondary)]">
            2-Page ATS-formatted official resume · Amity University MCA (AI & ML)
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Zoom buttons */}
          <div className="flex items-center border border-[var(--border-subtle)] rounded-lg p-0.5 bg-[var(--bg-canvas)] text-xs">
            <button
              onClick={() => setZoom(Math.max(75, zoom - 10))}
              className="p-1.5 hover:bg-[var(--bg-surface)] rounded text-[var(--text-secondary)]"
              title="Zoom out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="px-2 font-mono text-[var(--text-secondary)]">{zoom}%</span>
            <button
              onClick={() => setZoom(Math.min(130, zoom + 10))}
              className="p-1.5 hover:bg-[var(--bg-surface)] rounded text-[var(--text-secondary)]"
              title="Zoom in"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoom(100)}
              className="p-1.5 hover:bg-[var(--bg-surface)] rounded text-[var(--text-secondary)]"
              title="Reset zoom"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={handleCopyContact}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] hover:bg-[var(--bg-surface)] text-[var(--text-primary)] transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied Details' : 'Copy Contact'}
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-[var(--accent-pine)] hover:bg-[var(--accent-pine-light)] text-white shadow-xs transition-all"
          >
            <Printer className="w-3.5 h-3.5" />
            Print / Save PDF
          </button>
        </div>
      </div>

      {/* Scaled Printable Document Container */}
      <div 
        className="flex flex-col items-center gap-10 transition-transform duration-200 origin-top"
        style={{ transform: `scale(${zoom / 100})` }}
      >
        {/* ================= PAGE 1 ================= */}
        <div className="w-full max-w-[850px] bg-white text-slate-900 shadow-xl border border-slate-200 rounded-sm p-8 sm:p-12 font-sans text-[13px] leading-relaxed relative">
          <div className="absolute top-4 right-8 text-[10px] font-mono text-slate-400 no-print">
            PAGE 1 OF 2
          </div>

          {/* Header Row */}
          <div className="flex flex-col sm:flex-row items-start gap-6 border-b border-slate-800 pb-5 mb-5">
            <div className="w-20 h-20 rounded-md overflow-hidden bg-slate-100 shrink-0 border border-slate-300">
              <img 
                src={CANDIDATE_INFO.avatarUrl} 
                alt="Rudrashis Chowdhury" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/profile_photo.jpg";
                }}
              />
            </div>

            <div className="flex-1">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-1 uppercase font-serif">
                RUDRASHIS CHOWDHURY
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-4 text-[12px] text-slate-700 mt-2 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-slate-900">Address:</span>
                  <span>B-001 Peerless Kunja, Satgachi, Dum Dum, Kolkata - 700028</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-slate-900">Phone:</span>
                  <a href="tel:+918335073949" className="text-blue-700 hover:underline">+91-833-507-3949</a>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-slate-900">Email:</span>
                  <a href="mailto:rudrashis.chowdhury@gmail.com" className="text-blue-700 hover:underline">rudrashis.chowdhury@gmail.com</a>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-slate-900">LinkedIn:</span>
                  <a href="https://www.linkedin.com/in/rudrashis-chowdhury-08019a85" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline truncate">
                    in/rudrashis-chowdhury-08019a85
                  </a>
                </div>
                <div className="flex items-center gap-1.5 sm:col-span-2">
                  <span className="font-semibold text-slate-900">GitHub:</span>
                  <a href="https://github.com/Ishan2025-new" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                    github.com/Ishan2025-new
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="mb-5">
            <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2 font-mono">
              SUMMARY
            </h2>
            <p className="text-slate-800 text-[12.5px] leading-relaxed text-justify">
              MCA graduate specializing in Artificial Intelligence &amp; Machine Learning with hands-on experience building data analysis tools, predictive models, and automation solutions using Python, Java, SQL, and Linux. Developed an intelligent financial planner to deliver rapid visual and textual analysis; implemented a Java-MySQL library system improving productivity by up to 50% and reducing costs by 30%. Eager to contribute to entry-level roles in AI/ML, Data Science, or Analytics.
            </p>
          </div>

          {/* EDUCATION */}
          <div className="mb-5">
            <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3 font-mono">
              EDUCATION
            </h2>
            
            <div className="space-y-3.5">
              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900">
                  <span className="text-[13px]">Master of Computer Applications (MCA), Artificial Intelligence &amp; Machine Learning</span>
                  <span className="text-[11px] font-mono text-slate-600">JULY 2023 — JUNE 2025</span>
                </div>
                <div className="text-[12px] text-slate-700 italic">Amity University, Noida</div>
                <ul className="list-disc list-inside text-[12px] text-slate-800 mt-1 space-y-0.5">
                  <li>Graduated with First Division</li>
                  <li>Major Project: Intelligent Financial Planner Assistant</li>
                  <li>Technology used: Python, Pandas, Matplotlib, FPDF, OpenPyXL and Web Frameworks</li>
                  <li>Minor Project: Bank Management System using Python &amp; MySQL</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900">
                  <span className="text-[13px]">Bachelor of Computer Applications (BCA)</span>
                  <span className="text-[11px] font-mono text-slate-600">JULY 2020 — JUNE 2023</span>
                </div>
                <div className="text-[12px] text-slate-700 italic">Amity University, Noida</div>
                <ul className="list-disc list-inside text-[12px] text-slate-800 mt-1 space-y-0.5">
                  <li>Graduated with First Division</li>
                  <li>Major Project: Library Management System using Java &amp; MySQL</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-slate-100">
                <div>
                  <div className="font-semibold text-slate-900 text-[12.5px]">Indian School Certificate (ISC) | 59.2%</div>
                  <div className="text-[11.5px] text-slate-700">Monalisa English School, Madhyamgram</div>
                  <div className="text-[11px] font-mono text-slate-500">2018 — 2020</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-[12.5px]">Indian Certificate of Secondary Education (ICSE) | 60.4%</div>
                  <div className="text-[11.5px] text-slate-700">Monalisa English School, Madhyamgram</div>
                  <div className="text-[11px] font-mono text-slate-500">2018</div>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECTS (PART 1) */}
          <div>
            <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3 font-mono">
              PROJECTS
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900">
                  <span className="text-[13px]">Intelligent Financial Planner Assistant (Python)</span>
                  <a href="https://github.com/Ishan2025-new/financial-health-app" target="_blank" rel="noreferrer" className="text-blue-700 text-[11px] font-mono hover:underline">
                    github.com/Ishan2025-new/financial-health-app ↗
                  </a>
                </div>
                <ul className="list-disc list-inside text-[12px] text-slate-800 mt-1 space-y-0.5">
                  <li>Built a Python-based data collection and analysis tool using Pandas, Matplotlib, FPDF, OpenPyXL, and web frameworks.</li>
                  <li>Generated automated visual and textual insights in seconds; designed scalable architecture deployable locally or on cloud.</li>
                  <li><span className="font-semibold">Tech:</span> Python, Pandas, Matplotlib, FPDF, OpenPyXL, Web Frameworks</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900">
                  <span className="text-[13px]">Bank Management System (Python + MySQL)</span>
                  <a href="https://github.com/Ishan2025-new/MCA-Minor-Project-Bank-Management-System-using-Python-and-MySQL" target="_blank" rel="noreferrer" className="text-blue-700 text-[11px] font-mono hover:underline">
                    github.com/Ishan2025-new/MCA-Minor-Project-... ↗
                  </a>
                </div>
                <ul className="list-disc list-inside text-[12px] text-slate-800 mt-1 space-y-0.5">
                  <li>Developed a system using Python and MySQL integration.</li>
                  <li>Spearheaded integration of cutting-edge technologies and create seamless data flow across banking platforms.</li>
                  <li>Enabled real-time user interactions with core banking systems, enhancing customer experience and operational efficiency.</li>
                  <li><span className="font-semibold">Tech:</span> Python, MySQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PAGE 2 ================= */}
        <div className="w-full max-w-[850px] bg-white text-slate-900 shadow-xl border border-slate-200 rounded-sm p-8 sm:p-12 font-sans text-[13px] leading-relaxed relative">
          <div className="absolute top-4 right-8 text-[10px] font-mono text-slate-400 no-print">
            PAGE 2 OF 2
          </div>

          {/* PROJECTS (PART 2) */}
          <div className="mb-5">
            <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3 font-mono">
              PROJECTS (CONTINUED)
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900">
                  <span className="text-[13px]">Library Management System (Java + MySQL)</span>
                  <a href="https://github.com/Ishan2025-new/BCA-Major-Project-Library-Management-System-using-Java-and-MySQL" target="_blank" rel="noreferrer" className="text-blue-700 text-[11px] font-mono hover:underline">
                    github.com/Ishan2025-new/BCA-Major-Project-... ↗
                  </a>
                </div>
                <ul className="list-disc list-inside text-[12px] text-slate-800 mt-1 space-y-0.5">
                  <li>Developed a system using Java SE 18.0.2.1 and MySQL for electronic management of daily library operations.</li>
                  <li>Improved librarian productivity by ~50% and reduced operational costs by ~20% through process automation.</li>
                  <li><span className="font-semibold">Tech:</span> Java, MySQL, OOP, SQL</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900">
                  <span className="text-[13px]">PySpark Foundations — Process, analyze, and summarize data</span>
                  <a href="https://github.com/Ishan2025-new/PySpark-Big-Data-Guided-Project-by-Coursera" target="_blank" rel="noreferrer" className="text-blue-700 text-[11px] font-mono hover:underline">
                    github.com/Ishan2025-new/PySpark-Big-Data-... ↗
                  </a>
                </div>
                <ul className="list-disc list-inside text-[12px] text-slate-800 mt-1 space-y-0.5">
                  <li>Process large datasets using PySpark, including data loading, cleaning, and preprocessing.</li>
                  <li>Perform data exploration and visualization using dataframe operations.</li>
                  <li>Perform data aggregation and summarization using PySpark and dataframe operations.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="mb-5">
            <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2 font-mono">
              CERTIFICATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-[11.5px] text-slate-800">
              <div>• Scalable Machine Learning on Big Data using Apache Spark — Coursera (2026)</div>
              <div>• Basic to Advanced Power BI Dashboard Mastery — Be10x (2025)</div>
              <div>• Basic to Advanced SQL Masterclass Certificate — Be10x (2025)</div>
              <div>• Basic to Advanced Tableau Masterclass Certificate — Be10x (2025)</div>
              <div>• Intermediate to Advanced Excel Mastery Certificate — Be10x (2025)</div>
              <div>• Basic to Intermediate Excel Certificate — Be10x (2025)</div>
              <div>• Basic to Advanced PowerPoint Mastery Certificate — Be10x (2025)</div>
              <div>• The Linux Command Line Bootcamp — Udemy (2024)</div>
              <div>• The Complete Python Bootcamp — Udemy (2021)</div>
              <div>• Learning Python for Data Analysis &amp; Visualization — Udemy (2021)</div>
              <div>• Complete C# Unity Game Developer 2D — Udemy (2021)</div>
              <div>• The Complete Java Certification Course — Udemy (2020)</div>
              <div>• Learn Python Programming Masterclass — Udemy (2020)</div>
              <div>• Java Programming for Complete Beginners — Udemy (2020)</div>
            </div>
          </div>

          {/* TECHNICAL SKILLS */}
          <div className="mb-5">
            <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2 font-mono">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-[11.5px] text-slate-800">
              <div>
                <span className="font-semibold text-slate-900">Programming &amp; Development:</span> Python (3.x), Java, C#, SQL, OOP, Data Structures &amp; Algorithms
              </div>
              <div>
                <span className="font-semibold text-slate-900">AI &amp; Machine Learning:</span> Supervised Learning, Unsupervised Learning, Regression (Linear, Logistic), Classification (Decision Trees, Random Forest, SVM), Clustering (K-Means), Feature Engineering, Model Training &amp; Evaluation
              </div>
              <div>
                <span className="font-semibold text-slate-900">Data Science &amp; Analytics:</span> EDA, Data Preprocessing, Statistical Analysis, PySpark
              </div>
              <div>
                <span className="font-semibold text-slate-900">Libraries &amp; Frameworks:</span> Pandas, NumPy, Scikit-learn, TensorFlow (basic), Keras (beginner), Matplotlib, Seaborn, Plotly, Jupyter Notebook
              </div>
              <div>
                <span className="font-semibold text-slate-900">Data Visualization &amp; BI:</span> Power BI (basic), Tableau (basic), MS Excel (Advanced)
              </div>
              <div>
                <span className="font-semibold text-slate-900">Database Management:</span> SQL Queries, Relational Database Design, MySQL, PostgreSQL
              </div>
              <div>
                <span className="font-semibold text-slate-900">OS &amp; Tools:</span> Linux Command Line, Shell Scripting, Git
              </div>
              <div>
                <span className="font-semibold text-slate-900">Additional Skills:</span> Unity 2D Game Development, Game Design Patterns
              </div>
            </div>
          </div>

          {/* EXTRACURRICULARS */}
          <div>
            <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2 font-mono">
              EXTRACURRICULARS
            </h2>
            <ul className="list-disc list-inside text-[11.5px] text-slate-800 space-y-0.5">
              <li>Participated in AI/ML hackathons (University and Online).</li>
              <li>Studying implementation of AI/ML in business through Be10X LMS.</li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200 flex justify-between items-center text-[10px] font-mono text-slate-400">
            <span>Official Profile of Rudrashis Chowdhury</span>
            <span>Kolkata, India · 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};
