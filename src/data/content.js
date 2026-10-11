/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT ME ✏️
 *  Everything you'll want to personalise lives in this one file.
 *  The photo lives in:  public/images/profile.jpg
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Harshavardhan Reddy N",
  initials: "HR",
  role: "Web Developer",
  tagline:
    "I design and build fast, accessible interfaces and the APIs behind them — turning rough ideas into products people actually enjoy using.",
  location: "Bengaluru, India",
  availability: "Open to work",

  // ⬇ Drop your photo at: public/images/profile.jpg
  photo: "images/profile.jpg",

  resume: "resume.pdf", // put your PDF in /public
  email: "harshavardhanreddynusum@gmail.com",
  phone: "+91 7032546058",
};

export const socials = [
  {
    label: "GitHub",
    url: "https://github.com/HarshavardhanReddy-Nusum",
    icon: "github",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/harshavardhan-reddy-nusum/",
    icon: "linkedin",
  },
  
  {
    label: "Email",
    url: "mailto:harshavardhanreddynusum@gmail.com",
    icon: "mail",
  },
];

export const stats = [
  { value: "10+", label: "Projects shipped" },
  { value: "100%", label: "Coffee consumed" },
];

export const about = {
  eyebrow: "About me",
  title: "A developer who sweats the small stuff",
  paragraphs: [
    "I'm a full-stack developer who enjoys the whole journey — from sketching a flow on paper to shipping it to production and watching real people use it. My sweet spot is the intersection of clean engineering and thoughtful design.",
    "Over the last few years I've worked with startups and product teams to build dashboards, e-commerce experiences, internal tooling and REST/GraphQL APIs. I care a lot about performance budgets, accessibility and code that the next person can actually read.",
    "When I'm not pushing commits, you'll find me writing technical posts, contributing to open source, or hunting down the city's best filter coffee.",
  ],
  highlights: [
    "Performance-obsessed (Lighthouse 95+ is the floor)",
    "Accessibility built in, never bolted on",
    "Clear async communication across time zones",
  ],
};

export const skills = [
  {
    category: "Frontend",
    icon: "layout",
    items: [
      { name: "HTML", level: 95},
      { name: "JavaScript", level: 90},
      { name: "React", level: 95 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 90},
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 85}
    ],
  },
  {
    category: "Tooling",
    icon: "tool",
    items: [
      { name: "Git / GitHub Actions", level: 90 },
      { name: "vscode", level: 90}
    ],
  },
  {
    category: "Design & Soft Skills",
    icon: "sparkles",
    items: [
      { name: "Figma & design systems", level: 82 },
      { name: "UI / UX thinking", level: 86 },
      { name: "Technical writing", level: 88 },
      { name: "Mentoring", level: 85 },
    ],
  },
];

export const toolbelt = [
  "React",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Java",
  "JDBC",
  "JavaScript",
  "HTML",
  "Express"
];

export const projects = [
  {
    title: "E-commerce-platform",
    year: "2026",
    role: "",
    description:
      "Developed a full-stack e-commerce platform with user and seller functionalities for authentication, product management, and order processing. Implemented JWT-based authentication and role-based authorization.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    gradient: "from-indigo-500 via-violet-500 to-fuchsia-500",
    icon: "chart",
    links: {
      live: "https://e-commerce-platform-harshas-projects-eef943aa.vercel.app/",
      source: "https://github.com/HarshavardhanReddy-Nusum/E-commerce-platform",
    },
    featured: true,
  },
  {
    title: "Fresh Basket",
    year: "2025",
    role: "",
    description:
      "A modern, user-friendly online grocery platform that allows customers to shop for fresh fruits, vegetables, and essentials from the comfort of their home.",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "mongoose", "Vercel"],
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    icon: "bag",
    links: {
      live: "https://github.com/HarshavardhanReddy-Nusum/Fresh-Basket",
      source: "https://github.com/HarshavardhanReddy-Nusum/Fresh-Basket",
    },
    featured: true,
  },
  {
    title: "Wanderlust",
    year: "2025",
    role: "",
    description:
      "Built a travel booking platform to make the booking more easier with good user interface using JavaScript, Ejs, Express and MongoDB",
    tags: ["JavaScript", "Express", "MongoDB", "Bootstrap"],
    gradient: "from-cyan-500 via-sky-500 to-blue-600",
    icon: "code",
    links: {
      live: "https://wanderlust-ug0z.onrender.com/listings",
      source: "https://github.com/HarshavardhanReddy-Nusum/Wanderlust",
    },
    featured: false,
  },
  {
    title: "Hospital Management System",
    year: "2025",
    role: "",
    description:
      "Designed and developed a Java-based application leveraging SQL database integration for efficient data management. Utilized JDBC to establish secure connectivity and seamless data handling. Demonstrated strong understanding of Java, SQL, and JDBC technologies.",
    tags: ["Java", "MySQL", "JDBC"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    icon: "map",
    links: {
      live: "https://github.com/HarshavardhanReddy-Nusum/Hospital-Management-System",
      source: "https://github.com/HarshavardhanReddy-Nusum/Hospital-Management-System",
    },
    featured: false,
  },
  {
    title: "Employee Management System",
    year: "2026",
    role: "",
    description:
      "Developed a Java-based application connecting SQL database for efficient data management. Utilized JDBC to establish secure connectivity and seamless data handling. ",
    tags: ["Java", "JDBC", "MySQL",],
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-600",
    icon: "layers",
    links: {
      live: "https://github.com/HarshavardhanReddy-Nusum/Employee-Management-System",
      source: "https://github.com/HarshavardhanReddy-Nusum/Employee-Management-System",
    },
    featured: false,
  },
  
];

/**
 * Timeline shown in the "Experience" section (pulls straight from your résumé).
 * `kind` renders as a small badge: "work" | "education" | "award".
 */
export const experience = [
  {
    period: "Jun 2026 — Present",
    role: "Software Development Intern",
    company: "Kodnest Technologies",
    location: "Bengaluru, Karnataka",
    kind: "work",
    detail:
      "Completed comprehensive training in Java Full Stack Development — Java, JDBC, Servlets, JSP, SQL, HTML, CSS, JavaScript and React. Built scalable web applications, created and integrated RESTful APIs, and worked with MySQL to write optimised SQL.",
  },
  {
    period: "2022 — 2026",
    role: "B.Tech, Computer Science & Engineering",
    company: "Srinivasa Ramanujan Institute of Technology",
    location: "Anantapur, Andhra Pradesh",
    kind: "education",
    detail:
      "Graduated with a CGPA of 8.52, with coursework centred on data structures, DBMS, and full-stack web development.",
  },
  {
    period: "2026",
    role: "100+ problems solved",
    company: "LeetCode",
    location: "Achievement",
    kind: "award",
    detail:
      "Solved 100+ problems on LeetCode, strengthening algorithmic and problem-solving skills.",
  },
];

export const contact = {
  eyebrow: "Get in touch",
  title: "Let's build something together",
  blurb:
    "Have a project in mind, a role to fill, or just want to say hi? My inbox is always open — I usually reply within 24 hours.",

  /**
   * Web3Forms config — https://web3forms.com/#access-key
   * The access key lives in the .env file (VITE_WEB3FORMS_ACCESS_KEY) so it
   * stays out of version control. Leave formEndpoint as "" and the form falls
   * back to a pre-filled mailto: link instead.
   */
  formEndpoint: "https://api.web3forms.com/submit",
  formAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
