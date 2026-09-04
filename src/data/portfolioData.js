export const personalProfile = {
  name: "Jamsed Hossen",
  roleTitle: "Data Analyst | Business Intelligence Specialist",
  availabilityStatus: "Available Immediately for Full-Time Roles",
  isOpenToWork: true,
  profileImage: "/images/jamsed_hossen.jpg",
  resumePdf: "/Jamsed_Hossen_Resume.pdf",
  taglines: [
    "Data Analyst",
    "Business Intelligence Specialist",
    "SQL & Dashboard Specialist",
    "Data Operations & Analytics"
  ],
  heroBio: "I help organizations turn complex data into actionable insights through analytics, dashboards, and process automation enabling smarter, faster, and more data driven decisions across the business.",
  bio: "Data Analyst with 3+ years of experience transforming business data into actionable insights using SQL, Power BI, Metabase, Excel, and BI reporting tools. Experienced in building KPI dashboards, optimizing SQL queries, analyzing business performance, and collaborating with product and engineering teams to support data-driven decision making. Strong background in ERP systems, SaaS products, and product analytics with experience across data operations and business intelligence.",
  company: "Formerly at NITEX",
  currentRole: "Open for Data Analyst Roles",
  location: "Dhaka, Bangladesh",
  email: "jamsedmozumder2@gmail.com",
  phone: "+8801310239488",
  linkedin: "https://www.linkedin.com/in/jamsed21/",
  github: "https://github.com/jamsedhossen",
  stats: [
    { label: "Experience", value: "3+ Years", change: "Data Analytics & BI" },
    { label: "SQL Queries Built", value: "500+", change: "Optimized & Automated" },
    { label: "BI Dashboards Shipped", value: "85+", change: "Metabase & Power BI" },
    { label: "Data Quality", value: "99.8%", change: "Verified & Consistent" }
  ],
  education: {
    degree: "Bachelor of Science in Information Technology (BSc in IT)",
    institution: "University of Information Technology & Sciences",
    period: "2018 - 2022",
    location: "Dhaka, Bangladesh"
  },
  languages: [
    { name: "Bangla", level: "Native" },
    { name: "English", level: "Professional" }
  ],
  softSkills: ["Problem Solving", "Communication", "Leadership"]
};

// Directly matching skills from PDF
export const pdfSkillsList = [
  "Data Analysis",
  "Business Intelligence",
  "Dashboard Development",
  "Data Visualization",
  "KPI & Performance Reporting",
  "Product Analytics",
  "Business Analysis",
  "Market Analysis",
  "ETL",
  "Data Cleaning & Validation",
  "Root Cause Analysis",
  "Stakeholder Management"
];

// Tools & Technologies split into 2 rows for slow scrolling marquee
export const marqueeRow1 = [
  { name: "SQL", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "Power BI", category: "BI Tool" },
  { name: "Metabase", category: "BI Tool" },
  { name: "Looker Studio", category: "BI Tool" },
  { name: "Microsoft Excel", category: "Analytics" },
  { name: "Google Sheets", category: "Analytics" },
  { name: "Python", category: "Scripting" }
];

export const marqueeRow2 = [
  { name: "PowerQuery", category: "ETL" },
  { name: "Mixpanel", category: "Product Analytics" },
  { name: "Notion", category: "Documentation" },
  { name: "FigJam", category: "Design & Flow" },
  { name: "Draw.io", category: "Diagramming" },
  { name: "JavaScript (Basic)", category: "Development" },
  { name: "Retool", category: "Internal Tools" }
];

export const skillsCategoriesData = [
  {
    category: "Core Analytics & BI",
    description: "Building KPI dashboards, business performance analytics, and data-driven solutions.",
    skills: [
      { name: "Data Analysis", level: 96, desc: "Transforming raw business data into actionable insights for strategic decision making." },
      { name: "Business Intelligence", level: 95, desc: "Building executive metric frameworks, reporting dashboards, and KPI tracking systems." },
      { name: "Dashboard Development", level: 95, desc: "Developing interactive dashboards in Metabase and Power BI used daily by management." },
      { name: "Data Visualization", level: 94, desc: "Crafting intuitive visual hierarchies and trend reports." },
      { name: "KPI & Performance Reporting", level: 95, desc: "Tracking operational metrics, variance analysis, and business benchmarks." },
      { name: "Product Analytics", level: 90, desc: "Analyzing user behavior, funnel conversion, and product metrics." }
    ]
  },
  {
    category: "Data Operations & Engineering",
    description: "Database queries, data cleaning, ETL automation, and stakeholder management.",
    skills: [
      { name: "SQL & Query Optimization", level: 95, desc: "Authored 500+ complex SQL queries for operational reporting and automated feeds." },
      { name: "ETL & Data Cleaning", level: 92, desc: "Data validation, deduplication, schema mapping, and pipeline automation." },
      { name: "Root Cause Analysis", level: 92, desc: "Investigating operational discrepancies and optimizing workflow processes." },
      { name: "Stakeholder Management", level: 92, desc: "Collaborating with Product Managers, Engineers, Operations, and Business teams." }
    ]
  }
];

export const featuredProjects = [
  {
    id: "gmv-performance-dashboard",
    title: "GMV & Costing Performance Analytics Suite",
    category: "Business Analysis & Sales",
    shortDesc: "Designed an interactive business performance dashboard in Metabase & Power BI to monitor GMV, order status, costing variance, and revenue trends.",
    image: "/images/gmv_dashboard.png",
    tools: ["SQL", "Metabase", "Power BI", "Data Analytics"],
    metrics: [
      { label: "GMV Monitored", value: "$45M+" },
      { label: "SQL Queries Built", value: "500+" },
      { label: "Reporting Accuracy", value: "99.8%" },
      { label: "Datasets Analyzed", value: "Thousands" }
    ],
    businessProblem: "Executive leadership lacked real-time visibility into production costing records, order status, and Gross Merchandise Value (GMV) across active apparel batches.",
    solution: "Developed 500+ SQL queries feeding into automated Metabase and Power BI dashboards. Redesigned the costing, sample management, and project management module workflows.",
    keyInsights: [
      "Analyzed business datasets containing thousands of production and costing records to identify operational trends and improve reporting accuracy.",
      "Worked closely with Product Managers, Engineers, Operations, and Business teams to define reporting requirements.",
      "Built interactive KPI dashboards used by management to monitor production performance, GMV, order status, and costing."
    ],
    sqlSnippet: `WITH order_costing_summary AS (
  SELECT 
    o.order_id,
    o.buyer_id,
    o.status AS order_status,
    DATE_TRUNC('month', o.order_date) AS order_month,
    SUM(c.fabric_cost + c.trim_cost + c.labor_cost) AS total_costing,
    SUM(o.gmv_amount) AS total_gmv
  FROM orders_master o
  JOIN order_costing c ON o.order_id = c.order_id
  WHERE o.order_date >= '2024-01-01'
  GROUP BY 1, 2, 3, 4
)
SELECT 
  order_month,
  order_status,
  COUNT(order_id) AS total_orders,
  SUM(total_gmv) AS monthly_gmv,
  ROUND(AVG(total_gmv - total_costing), 2) AS avg_margin
FROM order_costing_summary
GROUP BY 1, 2
ORDER BY order_month DESC;`,
    chartData: [
      { month: "Jan", gmv: 3.2, target: 3.0, growth: 12 },
      { month: "Feb", gmv: 3.8, target: 3.2, growth: 18 },
      { month: "Mar", gmv: 4.1, target: 3.5, growth: 22 },
      { month: "Apr", gmv: 4.6, target: 4.0, growth: 25 },
      { month: "May", gmv: 5.2, target: 4.2, growth: 31 },
      { month: "Jun", gmv: 5.9, target: 4.5, growth: 34 }
    ]
  },
  {
    id: "production-analytics-dashboard",
    title: "Production Performance & Operations Control Tower",
    category: "Operations Analytics",
    shortDesc: "Built operational KPI dashboards in Metabase and Power BI to monitor real-time production performance, order tracking, and factory metrics.",
    image: "/images/production_dashboard.png",
    tools: ["SQL", "Power BI", "Metabase", "Data Operations"],
    metrics: [
      { label: "Data Records", value: "100K+" },
      { label: "Factory Performance", value: "94.8%" },
      { label: "On-Time Fulfillment", value: "98.4%" },
      { label: "KPI Accuracy", value: "99.9%" }
    ],
    businessProblem: "Apparel production involves multi-stage workflows across manufacturing partners. Missing real-time tracking led to unpredicted shipping delays and operational bottlenecks.",
    solution: "Created interactive operational dashboards tracking key performance indicators (KPIs), order status, and factory stage milestones.",
    keyInsights: [
      "Identified critical stage bottlenecks, enabling operations teams to reallocate factory capacity proactively.",
      "Improved operational reporting accuracy across thousands of active production batches.",
      "Provided single-source-of-truth visibility for executive management and business leaders."
    ],
    sqlSnippet: `SELECT 
  f.factory_name,
  p.production_stage,
  COUNT(p.batch_id) AS total_batches,
  AVG(DATEDIFF(p.actual_completion, p.scheduled_completion)) AS avg_delay_days,
  ROUND(SUM(CASE WHEN p.status = 'ON_TIME' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS sla_compliance_pct
FROM production_batches p
JOIN factory_master f ON p.factory_id = f.factory_id
WHERE p.created_at >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY 1, 2
ORDER BY avg_delay_days DESC;`,
    chartData: [
      { stage: "Cutting", targetSLA: 95, actualSLA: 98, delayHours: 4 },
      { stage: "Dyeing", targetSLA: 92, actualSLA: 94, delayHours: 8 },
      { stage: "Stitching", targetSLA: 90, actualSLA: 96, delayHours: 6 },
      { stage: "Assembly", targetSLA: 95, actualSLA: 99, delayHours: 2 },
      { stage: "QC Check", targetSLA: 98, actualSLA: 97, delayHours: 5 },
      { stage: "Packing", targetSLA: 99, actualSLA: 100, delayHours: 1 }
    ]
  },
  {
    id: "inventory-analytics-dashboard",
    title: "Inventory & Sample Operations Suite",
    category: "Product & Data Analytics",
    shortDesc: "Created inventory & sample monitoring reports to analyze material consumption, stock movement, sample turnaround times, and operational reorders.",
    image: "/images/inventory_dashboard.png",
    tools: ["Power BI", "SQL", "Excel", "Data Analysis"],
    metrics: [
      { label: "Stock Availability", value: "99.1%" },
      { label: "Inventory Accuracy", value: "100%" },
      { label: "Turnover Ratio", value: "6.4x" },
      { label: "Data Quality", value: "Verified" }
    ],
    businessProblem: "Unsynchronized sample requests and raw material stock levels caused sample turnaround delays and capital tie-up in excess fabric.",
    solution: "Redesigned sample management and costing workflows while establishing dynamic stock burn-rate monitoring reports in Power BI and Excel.",
    keyInsights: [
      "Streamlined sample management and costing reporting workflows.",
      "Identified deadstock inventory, enabling sales teams to re-purpose raw material for customer orders.",
      "Streamlined end-to-end data availability for strategic initiatives."
    ],
    sqlSnippet: `WITH material_burn AS (
  SELECT 
    material_id,
    SUM(quantity_used) AS total_used_30d,
    AVG(quantity_used) AS daily_burn_rate
  FROM material_logs
  WHERE log_date >= CURRENT_DATE - INTERVAL '30 days'
  GROUP BY material_id
)
SELECT 
  m.material_name,
  i.current_stock,
  b.daily_burn_rate,
  ROUND(i.current_stock / NULLIF(b.daily_burn_rate, 0), 1) AS days_of_supply
FROM inventory_levels i
JOIN materials m ON i.material_id = m.material_id
JOIN material_burn b ON m.material_id = b.material_id;`,
    chartData: [
      { category: "Cotton Fabric", currentStock: 4500, reorderPoint: 2000, status: "Healthy" },
      { category: "Polyester Thread", currentStock: 1200, reorderPoint: 1500, status: "Reorder" },
      { category: "Zippers & Trims", currentStock: 8900, reorderPoint: 3000, status: "Healthy" },
      { category: "Denim Fabric", currentStock: 6200, reorderPoint: 2500, status: "Healthy" },
      { category: "Buttons & Metal", currentStock: 14000, reorderPoint: 4000, status: "Excess" }
    ]
  }
];

export const pmCaseStudies = [
  {
    id: "costing-workflow-optimization",
    title: "Costing, Sample & Project Data Workflow Redesign",
    subtitle: "Streamlining operational data handoffs and building automated SQL BI reporting across NITEX modules.",
    role: "Data Analyst",
    timeframe: "Oct 2024 - Feb 2026",
    impactMetrics: [
      { label: "SQL Queries Built", value: "500+", desc: "For reporting, tracking, & automation" },
      { label: "Data Records Analyzed", value: "Thousands", desc: "Production & costing datasets" },
      { label: "Reporting Accuracy", value: "99.8%", desc: "High consistency across teams" }
    ],
    problem: {
      headline: "Complex Operational Bottlenecks in Costing & Sample Requests",
      details: "Costing, sample management, and project management modules at NITEX suffered from fragmented data handoffs and inconsistent reporting across product, engineering, and operations teams."
    },
    solution: {
      headline: "Data Analytics & Workflow Redesign",
      steps: [
        {
          num: "01",
          title: "Dataset Analysis & Operational Trends",
          desc: "Analyzed business datasets containing thousands of production and costing records to identify operational trends and improve reporting accuracy."
        },
        {
          num: "02",
          title: "Workflow Redesign",
          desc: "Redesigned workflow for Costing, Sample Management, and Project Management modules."
        },
        {
          num: "03",
          title: "SQL Automation Pipeline",
          desc: "Developed 500+ SQL queries for operational reporting, KPI tracking, dashboard automation, and performance analysis."
        },
        {
          num: "04",
          title: "Cross-Functional Collaboration",
          desc: "Worked closely with Product Managers, Engineers, Operations, and Business teams to define reporting requirements and translate business problems into analytical solutions."
        }
      ]
    },
    impact: {
      headline: "Key Achievements & Outcomes",
      points: [
        "Redesigned workflow for Costing, Sample Management, and Project Management modules.",
        "Built interactive Metabase & Power BI KPI dashboards used daily by management.",
        "Significantly improved operational reporting accuracy and dataset consistency."
      ]
    }
  },
  {
    id: "enterprise-bi-automation",
    title: "Enterprise BI Dashboard Automation Suite",
    subtitle: "Replacing manual Excel reporting routines with automated SQL queries and real-time Metabase & Power BI scorecards.",
    role: "Data Analyst",
    timeframe: "2024 - 2026",
    impactMetrics: [
      { label: "Reporting Accuracy", value: "99.8%", desc: "Dramatically improved data consistency" },
      { label: "Dashboards Shipped", value: "85+", desc: "Metabase & Power BI dashboards" },
      { label: "Data Operations", value: "100%", desc: "Ensured accuracy, consistency, & availability" }
    ],
    problem: {
      headline: "Manual Spreadsheet Consolidation & Fragmented Metrics",
      details: "Different departments spent hours manually updating spreadsheets, causing reporting discrepancies and delayed executive visibility."
    },
    solution: {
      headline: "Unified Requirements & SQL Data Modeling",
      steps: [
        {
          num: "01",
          title: "Requirements Gathering",
          desc: "Met with Product Managers, Engineers, and Operations leads to document exact business logic and KPI definitions."
        },
        {
          num: "02",
          title: "SQL Data Modeling",
          desc: "Structured relational queries, CTEs, and aggregated database views to serve as a single source of truth."
        },
        {
          num: "03",
          title: "Interactive Dashboard Delivery",
          desc: "Built Metabase & Power BI dashboards with dynamic drill-down capabilities for management monitoring."
        }
      ]
    },
    impact: {
      headline: "Measurable Results",
      points: [
        "Established single-source-of-truth reporting across all operational modules.",
        "Empowered executive management to make data-driven strategic decisions.",
        "Streamlined communication between data operations, engineering, and business teams."
      ]
    }
  }
];

// Exact Work History from CV
export const experienceTimeline = [
  {
    role: "Data Analyst",
    company: "NITEX",
    period: "Oct 2024 – Feb 2026",
    location: "Dhaka, Bangladesh",
    keyResponsibilities: [
      "Analyzed business datasets containing thousands of production and costing records to identify operational trends and improve reporting accuracy.",
      "Built interactive KPI dashboards in Metabase and Power BI used by management to monitor production performance, GMV, order status, costing, and operational metrics.",
      "Worked closely with Product Managers, Engineers, Operations, and Business teams to define reporting requirements and translate business problems into analytical solutions.",
      "Developed 500+ SQL queries for operational reporting, KPI tracking, dashboard automation, and business performance analysis.",
      "Redesigned workflow for Costing, Sample Management, and Project Management modules."
    ],
    technologies: ["SQL", "Power BI", "Metabase", "Looker Studio", "Excel", "Python", "PowerQuery", "Data Analytics"]
  },
  {
    role: "Data Operation Associate",
    company: "NITEX",
    period: "Sept 2023 – Sept 2024",
    location: "Dhaka, Bangladesh",
    keyResponsibilities: [
      "Designed and maintained dashboards, tracking key performance indicators (KPIs) and generating comprehensive reports.",
      "Managed end-to-end data operations, ensuring data accuracy, consistency, and availability for strategic initiatives.",
      "Developed expertise in data visualization and reporting, enhancing the accessibility of actionable insights."
    ],
    technologies: ["SQL", "Excel", "Google Sheets", "Metabase", "Data Visualization", "Data Operations"]
  },
  {
    role: "Content Creator",
    company: "BASIS",
    period: "Jan 2023 – May 2023",
    location: "Dhaka, Bangladesh",
    keyResponsibilities: [
      "Drafting email and SMS content for stakeholders.",
      "Creating banner content for print and digital use.",
      "Developing content for various communications as requested.",
      "Serving as the primary contact for all content-related tasks."
    ],
    technologies: ["Communication", "Stakeholder Mgmt", "Content Strategy"]
  }
];
