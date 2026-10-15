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
  // Longer summary used in the downloadable résumé
  summary:
    "SAP ABAP developer with 6.5 years of IT experience, including 4.6+ years of dedicated ABAP development on S/4HANA. Delivered the end-to-end FCSD Pinnacle S/4HANA implementation with a FICO focus, and now builds procurement workflows and Fiori back-ends as a Senior ABAP Consultant at Deloitte. Hands-on with RAP, OData (V2/V4) and CDS modelling, with a track record of consolidating complex legacy interfaces into a single source of truth. Committed to Clean Core principles and scalable, high-performance solutions.",
  website: "https://joshnaj.github.io/Portfolio/",
  email: "jmuragamala@gmail.com",
  linkedin: "https://www.linkedin.com/in/msjyothsna",
  github: "https://github.com/Joshnaj",
  resume: "resume.pdf", // lives in the /public folder
};

export const experience = [
  {
    role: "Senior ABAP Consultant",
    company: "Deloitte",
    client: "BSH (Procurement)",
    period: "May 2026 — Present",
    points: [
      "Built a two-level approval process on SAP Flexible Workflow for supplier-submitted records: event-driven start from the vendor portal, Fiori Inbox decisions, email notifications and application-log error tracking.",
      "Extended approver determination so first-level approvals route to the responsible purchasing-group owner instead of a fixed team.",
      "Extended OData V2 services for the Smart Purchasing Fiori app — create/update with business validations, plus a new Excel export with 16 additional columns built alongside the original so existing users were unaffected.",
      "Built CDS-based value helps for Flexible Workflow conditions in the Manage Workflows app.",
      "Resolved a production dump in an editable ALV maintenance program after an S/4HANA upgrade, and fixed WebDynpro data-binding defects between the supplier portal screen and back-end tables.",
      "Wrote technical specifications and planned the migration of legacy R/3 programs to S/4HANA.",
    ],
    tech: ["Flexible Workflow", "OData V2", "CDS", "Fiori", "ALV", "WebDynpro", "S/4HANA"],
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
    kind: "Award",
    title: "Employee of the Month",
    issuer: "Ford Motor Company",
    date: "2023",
    link: "",
    accent: "#ffb38a",
  },
  {
    kind: "Education",
    title: "B.Tech, Electronics & Communication",
    issuer: "MITS, Madanapalle",
    date: "2019",
    link: "",
    accent: "#8ab4ff",
  },
  {
    kind: "Training",
    title: "SAP ABAP Training",
    issuer: "Unogeeks",
    date: "",
    link: "",
    accent: "#7cf5c4",
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

// Projects are hidden on the site while this list is empty.
// Add entries like this once a project is built:
// {
//   title: "Daily Log",
//   status: "Live",
//   description: "A simple, calm website for tracking daily activities.",
//   tech: ["React"],
//   live: "https://...",
//   code: "https://github.com/Joshnaj/...",
// },
export const projects = [];
