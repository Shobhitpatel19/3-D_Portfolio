import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    aicte,
    pepcoding,
    shopify,
    threejs,
    weatherImage,
    portfolioImage,
    blogImage,
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
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Student Intern",
      company_name: "AICTE NEAT",
      icon: aicte,
      iconBg: "#383E56",
      date: "May 2023 - July 2023",
      points: [
        "During my AWS CLOUD internship with AICTE, NEAT, and EDUSKILLS, I delved into the realm of cloud technologies, independently navigating the dynamic landscape.",
        "Throughout the immersive experience, I concentrated on configuring various AWS services, honing my skills in setting up cloud infrastructure and gaining practical insights into their functionalities.",
        "My focus extended to ensuring the security of AWS deployments and understanding compliance standards. This aspect of the internship provided a comprehensive understanding of best practices in maintaining a secure and compliant cloud environment.",
        "This enriching experience deepened my technical skills in cloud technologies, laying a solid foundation for my future pursuits in this field. I am appreciative of the opportunity and eager to apply my knowledge to real-world scenarios.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "PEPCODING EDUCATION (OPC) PRIVATE LTD.",
      icon: pepcoding,
      iconBg: "#E6DEDD",
      date: "Feb 2021 - May 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Blog Web App",
      description:
        "A web-based haven for bloggers and readers alike. Effortlessly search, post, and manage blogs across diverse categories. Discover a convenient and efficient solution for expressing and exploring unique perspectives.",
      tags: [
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "text-blue-800",
        },
      ],
      image: blogImage,
      source_code_link: "https://github.com/Shobhitpatel19/BlogWebsite.git",
      link: "https://blog-app-by-shobhit.netlify.app"
    },
    {
      name: "Weather Web App",
      description:
        "Explore real-time weather effortlessly with our Weather Web App. Stay informed with accurate forecasts for seamless day-to-day planning. Your go-to source for instant weather updates—simple, precise, and always within reach.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "weatherapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: weatherImage,
      source_code_link: "https://github.com/Shobhitpatel19/weather-app.git",
      link: "weather-app-by-shobhit.netlify.app"
    },
    {
      name: "Portfolio",
      description:
        "Explore my portfolio—merging technology, artistry. Captivating Three.js 3D models offer a brief, immersive glimpse into my unique vision and passion. Discover the intersection of innovation, design, and creativity in this curated showcase.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "three.js",
          color: "pink-text-gradient",
        },
      ],
      image: portfolioImage,
      source_code_link: "https://github.com/Shobhitpatel19/3-D_Portfolio.git",
      link: "portfolio-shobhit.netlify.app"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };