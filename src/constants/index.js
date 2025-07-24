import {
  c,

  javascript_icon,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,

  git,
  ecommerce,
  threejs,

  expenses,
  blog,
  kaspro,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
   { title: "JavaScript", icon: javascript_icon },
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
 
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Mern Stack Intern",
    company_name: "Kaspro Solutions Pvt. Ltd.",
    icon: kaspro,
    iconBg: "#161329",
    date: "Mar 2025 - Sep 2025",
    points: [
      "Contributed to developing and maintaining real-world MERN stack applications used by actual customers.",
      "Worked on both frontend (React.js, Tailwind CSS) and backend (Node.js, Express.js, MongoDB), ensuring smooth data flow and feature implementation.",
      "Optimized UI performance by refactoring components, using React hooks, and lazy-loading assets.",
      "Gained hands-on experience working in a development team, attending stand-ups, and following Agile methodology.",
    ],
  },

];

export const projects = [
  {
    name: "Expense Tracker",
    description:
      "A personal finance management app built using React that helps users track their income, expenses, and loans. The app features an intuitive UI and uses local storage to store user data persistently in the browser. It also includes downloadable monthly and annual reports in PDF and Excel format.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "css3", color: "pink-text-gradient" },
      { name: "Personal Tracker", color: "yellow-text-gradient" },
    ],
    image: expenses,
    source_code_link: "https://github.com/Nitish-Sharma935/Expense-Tracker",
  },
  {
    name: "E-Commerce",
    description:
      "A full-featured E-Commerce platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This application supports complete admin control, secure user authentication, dynamic product management, cart handling, and a responsive shopping experience with real-time backend data.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/Nitish-Sharma935/E-commerce",
  },
  {
    name: "Blog App",
    description:
      "Developed a full-featured blogging platform using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to register, write and submit blog posts, and interact through comments. Each blog post is subject to admin approval before being published on the homepage, ensuring content quality and moderation.",
    tags: [
       { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: blog,
    source_code_link:
      "https://github.com/Nitish-Sharma935/Blog-App",
  },

];
