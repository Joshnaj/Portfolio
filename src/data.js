// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update your portfolio.
//  Everything on the site is read from here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Your Name",
  role: "SAP ABAP Developer",
  company: "Deloitte",
  tagline:
    "I build SAP S/4HANA solutions — workflows, CDS views, OData services and Fiori back-ends that make business processes run smoother.",
  location: "Your City, Country",
  email: "you@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  resume: "", // e.g. "/resume.pdf" — put the PDF in the /public folder
};

export const experience = [
  {
    role: "SAP ABAP Developer",
    company: "Deloitte",
    client: "BSH", // remove this line if you'd rather not name the client
    period: "Apr 2026 — Present",
    points: [
      "Built an end-to-end approval process on SAP Flexible Workflow, including status reporting and application logging (SLG1).",
      "Developed CDS views, value helps and OData services backing SAP Fiori apps.",
      "Fixed and extended WebDynpro ABAP and ALV applications in production after a system upgrade.",
      "Wrote technical specifications and planned the migration of legacy R/3 programs to S/4HANA.",
    ],
    tech: ["ABAP", "CDS", "OData", "Fiori", "Flexible Workflow", "WebDynpro", "S/4HANA"],
  },
  // Add earlier roles or internships here, same shape as above.
  // {
  //   role: "Intern",
  //   company: "Company",
  //   period: "2024 — 2025",
  //   points: ["What you did"],
  //   tech: ["Skill"],
  // },
];

export const certificates = [
  {
    title: "SWIFT Essentials",
    issuer: "Deloitte",
    date: "In progress",
    link: "",
    accent: "#7cf5c4",
  },
  {
    title: "Your Certificate Name",
    issuer: "Issuer (e.g. SAP, Coursera)",
    date: "Month Year",
    link: "https://link-to-credential",
    accent: "#8ab4ff",
  },
  {
    title: "Your Certificate Name",
    issuer: "Issuer",
    date: "Month Year",
    link: "",
    accent: "#ffb38a",
  },
];

export const skills = {
  "SAP": ["ABAP", "ABAP OO", "CDS Views", "OData / SEGW", "SAP Fiori", "Flexible Workflow", "WebDynpro ABAP", "ALV", "S/4HANA"],
  "Web": ["HTML", "CSS", "JavaScript", "React", "Three.js"],
  "Tools": ["Eclipse ADT", "SAP GUI", "VS Code", "Git"],
};

export const projects = [
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
