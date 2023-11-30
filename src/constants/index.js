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
    aicte,
    pepcoding,
    threejs,
    weatherImage,
    portfolioImage,
    blogImage,
    atulImage,
    shivamImage,
    mohitImage,
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
        "In my AWS CLOUD internship with AICTE, NEAT, and EDUSKILLS, I independently explored cloud technologies.",
        "In the immersive experience, I honed my skills in configuring diverse AWS services, mastering cloud infrastructure setup and gaining practical insights.",
        "I focused on securing AWS deployments and compliance standards in the internship, mastering best practices for a secure cloud environment.",
        "This deepened my cloud tech skills, laying the foundation for future pursuits. Grateful for the opportunity, I'm eager to apply this knowledge.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "PEPCODING EDUCATION (OPC) PRIVATE LTD.",
      icon: pepcoding,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - May 2022",
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
        "Incredibly skilled in web development - a reliable source for tech insights and solutions, making collaborative projects a breeze.",
      name: "Atul Tiwari",
      designation: "Student",
      company: "LNCT, Bhopal",
      image: atulImage,
    },
    {
      testimonial:
        "A true tech enthusiast! Your web development proficiency not only enhances our projects but also motivates the entire team to excel.",
      name: "Mohit Patel",
      designation: "Student",
      company: "LNCT, Bhopal",
      image: mohitImage,
    },
    {
      testimonial:
        "An invaluable team member! Your web development expertise adds a special touch to our projects, ensuring success every time.",
      name: "Shivam Jain",
      designation: "Student",
      company: "LNCT, Bhopal",
      image: shivamImage,
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
          color: "text-fuchsia-600",
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
      link: "https://weather-app-by-shobhit.netlify.app"
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
      link: "https://portfolio-shobhit.netlify.app"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };