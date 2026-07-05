export const contactInfo = {
  name: "Hamdan Khan",
  role: "Software Engineer & Data Analyst",
  email: "hamdankhan.dev@gmail.com",
  phone: "+91 9860285189",
  location: "Bhiwandi, Maharashtra, IN",
  linkedin: "https://linkedin.com/in/hamdan-khan-25313231a",
  github: "https://github.com/HamdanKhan09"
};

export const projects = [
  {
    title: "E-Commerce Analytics — SQL + Power BI",
    tags: ["PostgreSQL", "Power BI", "DAX", "DirectQuery"],
    github: "#",
    accent: "#B10F2E",
    bullets: [
      "Built an end-to-end analytics pipeline on the Brazilian Olist e-commerce dataset. Designed a 9-table PostgreSQL schema with named foreign key constraints, optimised indexes, and a layered SQL view architecture (raw → staging → fact view) similar to a dbt pipeline.",
      "Used DISTINCT ON for review deduplication and ARRAY_AGG to resolve dominant payment type per order.",
      "Connected Power BI via DirectQuery and built a 9-page report with 20+ DAX measures including YTD, YoY%, Rolling 30-Day Revenue, On-time Delivery %, and a dynamic KPI drillthrough page."
    ]
  },
  {
    title: "Restaurant Analytics Dashboard — Power BI",
    tags: ["Power BI", "DAX", "Data Visualisation"],
    github: "#",
    accent: "#B10F2E",
    bullets: [
      "Designed a 6-page Power BI dashboard on a Zomato restaurant dataset covering Executive Overview, Customer Analytics, Restaurant Performance, Delivery & Operations, and an Advanced Insights page.",
      "Wrote DAX measures for Repeat Customer %, Revenue per Restaurant, Late Delivery %, and Review Sentiment Buckets.",
      "Implemented a dynamic KPI switcher using a disconnected table and SELECTEDVALUE pattern. Built a drill-through page for per-restaurant detail analysis."
    ]
  },
  {
    title: "Go-HAWK — Hyperlocal Staffing App",
    tags: ["React Native", "Expo", "Supabase", "TypeScript", "Twilio"],
    github: "https://github.com/HamdanKhan09",
    bullets: [
      "Designed and built a production-ready mobile app connecting daily wage workers with local clients in Bhiwandi — a city with a large migrant labor economy — with phone OTP and Google OAuth authentication.",
      "Architected the full PostgreSQL schema on Supabase: users, workers, clients, orders, ratings, and notifications, with all relationships and constraints defined.",
      "Integrated Anthropic API for AI-powered features across core screens, iterating through multiple feedback cycles."
    ]
  },
  {
    title: "Countries Dataset Analysis",
    tags: ["Python", "Pandas", "Plotly", "Seaborn", "Matplotlib", "EDA"],
    github: "https://github.com/HamdanKhan09",
    bullets: [
      "Analyzed a global countries dataset using seven distinct chart types across three different libraries — deliberately chosen to learn each library's strengths.",
      "Explored correlations between GDP, population, area, and regional groupings with custom color schemes per chart.",
      "Wrote the complete analysis from a blank notebook without referencing prior code — a deliberate practice in recall over recognition."
    ]
  },
  {
    title: "Anime Dataset Analysis",
    tags: ["Python", "Pandas", "Matplotlib", "EDA", "Data Cleaning"],
    github: "https://github.com/HamdanKhan09",
    bullets: [
      "Wrote custom Python parsing functions to clean and normalize raw anime data — handling multi-value fields, nulls, and inconsistent formats entirely from scratch.",
      "Built a four-chart Matplotlib dashboard covering genre distribution, score trends, episode counts, and popularity — no starter template used.",
      "Published to GitHub with full documentation of the analysis process and findings."
    ]
  }
];

export const skills = [
  {
    category: "SQL",
    items: ["PostgreSQL", "MySQL", "Schema Design", "Views", "Indexes", "Window Functions", "CTEs"]
  },
  {
    category: "BI Tools",
    items: ["Power BI", "DAX", "DirectQuery", "Time Intelligence", "Drill-through", "Data Modelling"]
  },
  {
    category: "Python",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Scikit-learn"]
  },
  {
    category: "Other",
    items: ["Excel (Pivot Tables, VLOOKUP, Inventory Tracking)", "Git", "pgAdmin", "React Native", "Supabase", "REST APIs"]
  }
];

export const aboutText = [
  "I'm a Computer Engineering graduate from Mumbai University (2025) specialising in data analysis. I build end-to-end analytics pipelines — designing PostgreSQL schemas, writing complex SQL queries, and turning raw data into actionable Power BI dashboards with DAX measures.",
  "I've worked with real-world datasets (Olist e-commerce, Zomato restaurants, global countries data) and I'm comfortable across the full DA stack: SQL, Python, and BI tools. Based in Bhiwandi, Maharashtra — actively looking for Data Analyst roles."
];

export const education = [
  {
    degree: "B.E. Computer Engineering",
    institution: "VPP's College of Engineering, Mumbai University",
    year: "2025"
  },
  {
    degree: "IBM Data Science Professional Certificate",
    institution: "Coursera · Python · SQL · ML · Data Visualization",
    year: "2024"
  },
  {
    degree: "GATE Examination — Core CS",
    institution: "OS · DBMS · CN · DSA",
    year: ""
  }
];
