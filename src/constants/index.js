import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";
import projects4 from "../assets/projects4.webp";
import projects5 from "../assets/projects5.webp";

export const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

export const HERO_CONTENT = {
  greeting: "Hey, I'm Aniket ",
  introduction:
    "I'm a passionate developer with expertise in full-stack development, AI, and system optimization. I thrive on solving complex problems and building innovative solutions.",
  description:
    "With experience in Flask, React, Node.js, and LangChain, I specialize in creating full stack web applications, AI integrations, and scalable system designs. I enjoy exploring new technologies to enhance performance and usability.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  {
    name: "AudiHealth",
    description:
      "A voice pathology detection platform using AI to identify laryngitis and polyps, generating medical reports with actionable insights. Integrated with WhatsApp for real-time doctor search and health monitoring.",
    image: projects1,
    link: "#", // Add demo link if available
  },
  {
    name: "AIQuest",
    description:
      "An AI-driven Q&A platform leveraging hybrid RAG and AI agents for accurate responses, with a moderator review system and analytics. Developed for organizational knowledge management.",
    image: projects2,
    link: "https://github.com/Jeevanchoudhary9/AIQuests",
  },
  {
    name: "Vilokana (Reunite)",
    description:
      "A missing person search platform integrating facial recognition, real-time tracking, and dynamic search area mapping. Facilitates police and NGO collaboration for faster recovery.",
    image: projects3,
    link: "https://github.com/rushiijadhav23/Renuite-TSEC",
  },
  {
    name: "ArthML",
    description:
      "A machine learning platform for sales forecasting, hybrid recommendations, and strategic outlet placement using AI techniques. Implements Apriori and K-Means clustering for better insights.",
    image: projects4,
    link: "#", // Add demo link if available
  },
  {
    name: "Meows & Woofs",
    description:
      "A pet product marketplace with JWT authentication, secure browsing, purchasing, and product management. Features cloud-based image storage using Cloudinary.",
    image: projects5,
    link: "#", // Add link if available
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated developer with experience in AI, full-stack web development, and system architecture. I focus on creating scalable and efficient solutions with a user-centric approach.",
    "My expertise includes technologies like Flask, React.js, LangChain, and AI-driven architectures. I constantly strive to improve performance, security, and user experience in all my projects.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "Aug. 2024 – Dec. 2024",
    title: "SDE Intern at Prepbook",
    location: "Navi Mumbai, India",
    description: [
      "Architected a content creation platform using Flask, optimizing workflow efficiency by 65%.",
      "Automated content scraping with BeautifulSoup and Selenium, expanding content availability by 80%.",
      "Implemented role-based access control and a content moderation system using MongoDB.",
      "Integrated Google Sheets API for language-based content segregation and enhanced legacy system compatibility.",
    ],
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S CONNECT AND BUILD SOMETHING INNOVATIVE",
  description:
    "I'm always open to new challenges and collaborations. Feel free to reach out if you want to work on an exciting project or just chat about technology!",
  email: "aniketmdinde@gmail.com",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/aniketmdinde",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/aniketmdinde",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Aniket Dinde. All rights reserved.`,
};