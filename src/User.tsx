import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
import weatherAppImage from "./assets/weather-app.png";
import homeAutomationImage from "./assets/home-automation.png";

import QualcommLogo from "./assets/Qualcomm.png"; 
import DroomLogo    from "./assets/Droom.jpg"; 
import SiemensLogo  from "./assets/Siemens.png"; 


const Info = {
    name: "Vivek Rawat",
    stack: ["Software Engineer", "Full Stack Developer", "Competitive Programmer"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications. Let's connect and create something amazing together!"
}

const ProjectInfo = [
    {
        title: "Weather Application",
        desc: "Built a web app to fetch real-time weather details of any city using Web APIs. Gained experience in ReactJS, API integration, and UI development.",
        image: weatherAppImage,
        live: true,
        technologies: ["React", "Web APIs"],
        link: "https://vivekrawat1104.github.io/weatherapp/",
        github: "https://github.com/vivekrawat1104/weatherapp"
    },
    {
        title: "Home Automation",
        desc: "Created a website to control home appliances connected via Raspberry Pi. Explored IoT applications and implemented device automation.",
        image: homeAutomationImage,
        live: false,
        technologies: ["IoT", "Raspberry Pi", "Web"],
        link: "",
        github: ""
    }
];



const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Bootstrap"]
    },
    {
        title: "Backend",
        skills: ["Springboot", "Node JS", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Java"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "Windbg", "Perforce"]
    }
]
const socialLinks = [
    { link: "https://github.com/vivekrawat1104", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/vivek-singh-rawat-44528813a/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/vivekrawat.me", icon: IconBrandInstagram },
    { link: "https://www.youtube.com/@TheCurrencyNomad1", icon: IconBrandYoutube },
    { link: "https://leetcode.com/u/vivekrawat1104/", icon: IconBrandLeetcode }
];

const ExperienceInfo = [
    {
        role: "Engineer",
        company: "Qualcomm",
        date: "Apr 2023 - Present",
        desc: "I leverage my skills in C and C++ to develop and optimize graphics drivers, focusing on performance enhancement, security, and hardware compatibility. I troubleshoot and resolve critical security and high-priority bugs, ensuring seamless driver functionality. I conduct extensive hardware-level kit testing on graphics-related devices to validate performance and integration. Collaborating with cross-functional teams, I drive innovation in high-performance computing environments.",
        skills: ["C", "C++", "Graphics Driver Development", "Performance Optimization", "Windows SDK", "Perforce", "Hardware-Level Testing"],
        logo:QualcommLogo
    },
    {
        role: "Associate Software Engineer",
        company: "Droom",
        date: "Jul 2021 - Jun 2022",
        desc: "I leverage my skills in implementing OTP authentication via SMS, WhatsApp, and Call APIs, increasing reliability by 25%. Reduced login/signup failure rates by 30% with a fallback API for vendor outages, improving user engagement by 15%. Developed a reusable JavaScript location plugin, cutting Geo Location API costs by 50%, saving ₹2L annually. Optimized API performance and authentication flows, reducing application load time by 20%.",
        skills: ["React", "JavaScript", "Node.js", "HTML", "CSS", "MongoDB", "API Integration", "Performance Optimization"],
        logo:DroomLogo
    },
    {
        role: "App Service Intern",
        company: "Siemens",
        date: "Jul 2021 - Jun 2022",
        desc: "I leveraged my expertise in Java and Spring Boot to develop a General Purpose OCR (GPO) service for the Mendix low-code platform, enabling seamless document conversion from images and PDFs to XML. I enhanced performance by integrating Redis caching, reducing database load by 70%. I identified and fixed critical, high-level, and low-level bugs in service dependencies. Collaborating in an agile environment, I streamlined OCR integration for enterprise applications.",
        skills: ["Java", "Spring Boot", "PostgreSQL", "Redis", "XSLT", "Snyk", "Mendix Development"],
        logo:SiemensLogo
    }
];

const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };