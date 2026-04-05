import { FaReact, FaWordpress, FaTools } from "react-icons/fa";
import store from "../assets/images/dv-stores.png";
import Edumind from "../assets/images/Edumind.png";

export const servicesData = [
  {
    icon: <FaReact size={40} />,
    title: "FullStack Development",
    description:
      "I specialize in crafting high-quality, responsive, and dynamic websites using cutting-edge technologies such as HTML5, CSS3, JavaScript, Firebase/Supabase and React.js. My focus is on creating engaging user interfaces that are both intuitive and visually compelling.",
  },
  {
    icon: <FaWordpress size={40} />,
    title: "WordPress Development",
    description:
      "I offer comprehensive WordPress development services, from custom theme and plugin development to complete website design and maintenance. I can help create anything from blogs to e-commerce sites, delivering high-quality websites that meet your business goals.",
  },
  {
    icon: <FaTools size={40} />,
    title: "Website Maintenance & Support",
    description:
      "I provide ongoing website maintenance services to ensure your site stays up-to-date, secure, and fully functional. From content updates to troubleshooting, I’m here to keep your website running smoothly.",
  },
];
export const projectData = [
  {
    title: "DV-Store",
    description:
      "Plateforme e-commerce offrant des solutions digitales pour les entreprises en Arabie Saoudite.",
    icon: FaWordpress,

    thumbnail: store,
    link: "https://dv-stores.com/",
    tech: "WordPress",
  },
  {
    title: "Edumind",
    description:
      "Educational mobile application for mothers to book qualified nannies",
    icon: FaReact,
    thumbnail: Edumind,
    link: "https://edumind-nanny.firebaseapp.com",
    tech: "React Native",

  },
  
];

export const skillsData = [
  { name: "HTML5", level: 100, color: "#E34F26", icon: "✻" },
  { name: "CSS3", level: 95, color: "#1572B6", icon: "✦" },
  { name: "JavaScript", level: 90, color: "#F7DF1E", icon: "JS" },
  { name: "React", level: 85, color: "#61DAFB", icon: "⚛" },
  { name: "WordPress", level: 80, color: "#21759B", icon: "WP" },
];
export const educationData = [
  {
    degree:
      "Engineer Degree in Computer Science, Web Technologies and Multimedia",
    institution:
      "Higher institute of computer science and multimedia of Sfax, Tunisia",
    date: "Sep.2016 - Jul.2019",
  },
  {
    degree: "Applied License in Computer Science and Multimedia",
    institution:
      "Institute of Higher Business Administration of Gafsa, Tunisia",
    date: "Sep.2013 - May.2016",
  },
  {
    degree: "High School Diploma in Computer Science",
    institution: "Bir El Hafey High School - Sidi Bouzid, Tunisia",
    date: "Sep.2012 - May.2013",
  },
];

export const experienceData = [
  {
    post: "Freelancer : Front End Developer & WordPress Developer",
    company: "Independent",
    date: "Jan.2024 - Present",
  },
  {
    post: "Front End Developer",
    company: "Smart Team Company",
    date: "May.2022 - Dec.2023",
  },
  {
    post: "Front End Developer",
    company: "Lezart Digital",
    date: "Oct.2020 - Feb.2022",
  },
  {
    post: "Full Stack Developer",
    company: "Sirat",
    date: "Nov.2019 - Sep.2020",
  },
];
