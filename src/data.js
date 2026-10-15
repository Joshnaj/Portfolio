// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update your portfolio.
//  Everything on the site is read from here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Jyothsna Muragamala",
  role: "SAP ABAP S/4HANA Developer",
  company: "Deloitte",
  tagline:
    "6.5 years in IT, 4.6+ of them building on SAP S/4HANA. I specialise in RAP, OData and CDS for Finance (FICO), Logistics and Procurement, with a focus on Clean Core and turning tangled legacy interfaces into a single source of truth.",
  stats: [
    { value: "6.5", label: "years in IT" },
    { value: "4.6+", label: "years SAP ABAP" },
    { value: "3", label: "markets rolled out" },
  ],
  email: "jmuragamala@gmail.com",
  linkedin: "https://www.linkedin.com/in/msjyothsna",
  github: "https://github.com/Joshnaj",
  resume: "", // e.g. "resume.pdf" — put the PDF in the /public folder
};

export const experience = [
  {
    role: "Senior ABAP Consultant",
    company: "Deloitte",
    client: "BSH (Procurement)",
    period: "May 2026 — Present",
    points: [
      "Designed and optimised automated approval workflows in S/4HANA with Flexible Workflow and BRFplus, cutting manual intervention and speeding up procurement cycle times.",
      "Debugged and performance-tuned complex custom ABAP applications, resolving critical runtime errors to keep systems stable and S/4HANA-compatible.",
    ],
    tech: ["Flexible Workflow", "BRFplus", "ABAP", "S/4HANA", "Performance tuning"],
  },
  {
    role: "SAP ABAP S/4HANA Developer",
    company: "Ford Motor Company",
    focus: "IERP implementation, Finance transformation & FCSD Pinnacle",
    period: "Nov 2021 — Apr 2026",
    points: [
      "Key developer on FCSD Pinnacle, a full-cycle S/4HANA implementation for Finance (FICO), from blueprint to go-live, rolled out across 3 international markets on one core codebase.",
      "Led the consolidation of legacy Goods Issue, Accounts Receivable and Goods Receipt flows into one IERP interface — a single source of truth for global finance.",
      "Built 3 RAP applications (managed scenario) for FICO data management.",
      "Delivered CDS views over OData V4 and Fiori tiles for real-time in-transit material tracking.",
      "Automated daily exchange-rate loads from GCR into S/4HANA (TCURR) with BAPI_EXCHRATE_CREATE.",
      "Automated monthly TPOP finance reports (.xlsx to AL11), removing 99% of the manual effort.",
      "Built RFC-based real-time Bill of Distribution transfer between S/4HANA and ECC with full data integrity through go-live.",
    ],
    tech: ["RAP", "CDS", "OData V4", "Fiori", "FICO", "BAPI", "RFC", "AMDP"],
  },
  {
    role: "PL/SQL Developer / Associate Developer",
    company: "Ford Motor Company",
    focus: "Database engineering & foundation for IERP",
    period: "Nov 2019 — Oct 2021",
    points: [
      "Designed and optimised PL/SQL stored procedures and triggers for transaction-level tracking and auditability.",
      "Led the PL/SQL logic for barcode systems across International Markets, enabling high-speed data capture at scale.",
      "Bridged database-layer and ABAP development during the early IERP journey, leading into the SAP ABAP track.",
    ],
    tech: ["PL/SQL", "SQL", "Triggers", "Stored procedures"],
  },
];

// kind: "Certification" | "Award" | "Education" | "Training"
export const certificates = [
  {
    kind: "Certification",
    title: "SAP ABAP Training Certification",
    issuer: "Unogeeks",
    date: "",
    link: "",
    accent: "#7cf5c4",
  },
  {
    kind: "Award",
    title: "Employee of the Month",
    issuer: "Ford Motor Company",
    date: "2023",
    link: "",
    accent: "#ffb38a",
  },
  {
    kind: "Training",
    title: "SWIFT Essentials",
    issuer: "Deloitte",
    date: "In progress",
    link: "",
    accent: "#c49bff",
  },
  {
    kind: "Education",
    title: "Bachelor of Technology",
    issuer: "MITS, Madanapalle",
    date: "",
    link: "",
    accent: "#8ab4ff",
  },
];

export const skills = {
  "S/4HANA development": ["RAP (Managed / Unmanaged)", "CDS Views & Annotations", "AMDP", "ABAP on HANA", "OO ABAP"],
  "Integration & APIs": ["OData V2 / V4", "SEGW", "Service Bindings", "RFC / BAPI", "REST", "JSON", "XML", "File interfaces"],
  "Extensibility": ["BAdIs", "User Exits", "Substitutions (GGB1)", "Enhancement Framework", "Flexible Workflow", "BRFplus"],
  "Functional": ["FI (AR / AP / GL)", "SD", "Procurement", "Logistics"],
  "Languages & tools": ["ABAP", "SQL", "PL/SQL", "Eclipse ADT", "ATC", "HANA Studio"],
  "Ways of working": ["Clean Core", "Agile / Scrum"],
};

export const projects = [
  {
    title: "FCSD Pinnacle",
    status: "Key project · Ford",
    description:
      "End-to-end S/4HANA implementation with a FICO focus for Ford's sales division, rolled out across 3 international markets.",
    tech: ["S/4HANA", "FICO", "CDS", "RAP"],
    live: "",
    code: "",
  },
  {
    title: "Daily Log",
    status: "In progress",
    description: "A simple, calm website for tracking daily activities — a lighter alternative to Notion.",
    tech: ["React"],
    live: "",
    code: "",
  },
  {
    title: "Productivity Launcher",
    status: "Planned",
    description: "An Android home-screen launcher designed around focus and fewer distractions.",
    tech: ["Android"],
    live: "",
    code: "",
  },
];
