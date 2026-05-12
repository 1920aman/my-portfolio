// ============================================================
//  data.js — Edit ALL personal content here.
//  No need to touch any UI component files.
// ============================================================

export const personalInfo = {
  name: "Aman Banik",
  title: "Full-Stack Web Developer",
  tagline: "I build fast, scalable web experiences — from pixel-perfect UIs to robust APIs.",
  email: "amanbanik1920@email.com",
  phone: "+91 9634922854",
  location: "Gadarpur, Uttarakhand, India",

  profileImage: "https://api.dicebear.com/7.x/adventurer/svg?seed=alexmorgan&backgroundColor=0d1321",
  // resumeLink: "/resume.pdf", // Place resume.pdf inside the public/ folder
  bio: [
    "I'm a software engineer with 1+ years of experience crafting end-to-end web applications. My stack lives at the intersection of React, Node.js, and cloud infrastructure — I care about clean code, performance, and delightful UX.",
    "When I'm not shipping features, I contribute to open-source, write technical blog posts, and mentor junior developers. I believe the best software is built by curious, empathetic teams.",
  ],
  socials: {
    github: "https://github.com/1920aman",
    linkedin: "https://www.linkedin.com/in/aman-banik-b94185250/",
    twitter: "https://x.com/AmanBanik1",
   
  },
};

export const education = [
  {
    id: 1,
    degree: "B.tech in Computer Science",
    institution: "Surajmal University Kiccha, Uttarakhand",
    period: "2023 – 2026",
    gpa: "7/10",
    highlights: [
      // "Senior thesis: Real-time collaborative code editor using CRDTs",
      // "Teaching Assistant for Data Structures & Algorithms",
    ],
  },
  {
    id: 2,
    degree: "Diploma in Computer Science",
    institution: "Govt. Polytechnic Kashipur, Uttarakhand",
    period: "2020 – 2023",
    gpa: "8.5/10",
    highlights: [
      // "Associate-level certification",
    ],
  },
];

export const experience = [
 
  {
    id: 1,
    role: "Fresher",
   
    type: "Full-time",
    description:
      "Fresher in software development, eager to learn and contribute to impactful projects. Passionate about building scalable web applications and improving user experiences.",
    stack: ["React", "Node.js", "MySQL", "MongoDB","DSA"],
    achievements: [
     ],
  },
  {
    id: 2,
    role: "Internship",
    
    period: "May 2025 – Aug 2025",
    type: "Internship",
    description:
      "Worked on Figma's plugin marketplace UI and developer tooling. Delivered a search-filter component used by 200K plugin developers.",
    stack: ["React", "Node.js", "Java","Python"],
    achievements: [
      "45 days java training at slog solution, Dehradun",
      "45 days frontend development training at prodot it solution, Haldwani",
      "Completed 3+ personal projects using React and Node.js, showcasing full-stack development skills",
      "30+ hrs MERN stack project development experience, including RESTful APIs and responsive UIs",
    ],
  },
];

export const skills = {
  Frontend: [
    { name: "React / Next.js", level: 85 },
    { name: "Html/Html5", level: 90 },
    { name: "Tailwind CSS", level: 80 },
   
  ],
  Backend: [
    { name: "Node.js / Express", level: 88 },
    { name: "Python ", level: 75 },
    { name: "MongoDB", level: 82 },
   
  ],
  DevOps: [
    { name: "AWS", level: 60 },
    { name: "Git/GitHub", level: 70 },
   
  ],
  Tools: [
    
    { name: "Figma", level: 80 },
    { name: "Thunderclient", level: 82 },
    { name: "MySQL", level: 78 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Textutils",
    description:
      "A real-time collaborative text editor with rich formatting, live cursors, and offline support. Built with React, Node.js, WebRTC, and CRDTs for conflict-free syncing.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format&fit=crop",
    tags: ["React","JavaScript","Bootstrap"],
    github: "https://github.com/1920aman/practice-list",
    demo: "https://1920aman.github.io/practice-list/",
    featured: true,
  },
  {
    id: 2,
    title: "AkahbaarWala",
    description:
      "A news aggregator dashboard that pulls in real-time headlines from 50+ sources worldwide. Features personalized topic filters, sentiment analysis, and interactive data visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop",
    tags: ["React", "News API","Bootstrap"],
     github: "https://github.com/1920aman/newsapp",
   
    featured: true,
  },
  {
    id: 3,
    title: "Library Management System",
    description:
      "A Desktop application for managing library operations, including book inventory, member management, and borrowing/returning books. Built with Java Swing and MySQL.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&q=80&auto=format&fit=crop",
    tags: ["Java","MySQL","Swing"],
    
    featured: false,
  },
  {
    id: 4,
    title: "iNoteBook",
    description:
      "A web application for creating and managing digital notes with a clean, intuitive interface. Built with React and TypeScript.",
    image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=600&q=80&auto=format&fit=crop",
    tags: ["MERN Stack","Bootstrap"],
    // github: "https://github.com/",
    
    featured: false,
  },
];

export const contactInfo = {
  heading: "Let's Build Something",
  subheading:
    "Open to freelance projects, full-time roles, and interesting collaborations. Drop me a line — I reply within 24 hours.",
  availableForWork: true,
};
