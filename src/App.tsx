import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import EducationComponent from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import type {
  Experience as ExperienceType,
  Education,
  Certification,
  Course,
} from "./types";
import "./App.css";

function App() {
  // Información personal actualizada basada en CV
  const personalInfo = {
    name: "Franco Alejandro Núñez",
    title: "DevOps Engineer",
    location: "Buenos Aires, Argentina",
    phone: "+54 11 2878-0357",
    email: "frannunez1866@gmail.com",
    linkedin: "https://www.linkedin.com/in/franco954/",
    github: "https://github.com/franco954",
    cvOnline: "https://franconunezresume.netlify.app/",
    profileImage: "/images/profile.jpg",
    about:
      "DevOps Engineer con más de 5 años de experiencia construyendo soluciones tecnológicas end-to-end. Especializado en el desarrollo de aplicaciones web con el stack MERN y la implementación de infraestructura cloud en AWS. Experiencia en la creación de pipelines CI/CD, automatización de procesos y gestión de sistemas tanto en desarrollo como en producción. Actualmente cursando Analista Programador en UAI y certificado AWS Cloud Practitioner. Nivel B2 de inglés con capacidad para trabajar en entornos internacionales.",
  };

  const skills = [
    "AWS",
    "PowerBI",
    "Microsoft SQL Server",
    "Python",
    "JavaScript",
    "React",
    "NodeJS",
    "TypeScript",
    "Azure DevOps",
    "CI/CD",
    "Jenkins",
    "Git",
    "Windows/Linux Administration",
    "API Testing",
    "Zendesk",
    "Inglés B2",
  ];

  const experiences: ExperienceType[] = [
    {
      id: "1",
      company: "CFOTECH | Red Link Client",
      position: "Infrastructure Analyst",
      period: "Octubre 2023 - Mayo 2025",
      current: false,
      description:
        "Gestioné cuentas, ABM de usuarios, configuraciones y pruebas de API testing/support en el sistema WebHelpDesk ticketing. Creé reportes detallados utilizando PowerBI para análisis de performance de infraestructura y garantizando su disponibilidad para el resto de las areas. Administracion de bases de datos SQL Server y PostgreSQL. Mantenimiento de servidores Windows/Linux, garantizando alta disponibilidad del sistema.",
      technologies: [
        "PowerBI",
        "Microsoft SQL Server",
        "Python",
        "Windows/Linux",
        "API Testing",
      ],
    },
    {
      id: "2",
      company: "Sisorg",
      position: "DevOps Engineer",
      period: "Enero 2023 - Octubre 2023",
      description:
        "Implementé y gestioné infraestructura en AWS utilizando servicios como IAM, S3, EC2, RDS y Lex. Desarrollé pipelines CI/CD con Azure DevOps para automatizar deployments. Brindé soporte técnico especializado y mantenimiento de aplicaciones a clientes. Administré sistemas de ticketing Zendesk para gestión eficiente de incidencias.",
      technologies: ["AWS", "CI/CD", "Azure DevOps", "Zendesk", "SQL Server"],
    },
    {
      id: "3",
      company: "BP4 | Galicia Bank Client",
      position: "Fullstack Developer",
      period: "Enero 2022 - Febrero 2023",
      description:
        "Desarrollé microservicios con NodeJS, Express y NestJS para sistemas bancarios. Creé sitios web responsivos basados en diseños de Figma, garantizando una experiencia de usuario óptima. Construí SPAs utilizando JavaScript, React y NextJS para interfaces dinámicas. Implementé sistemas de deployment con Jenkins y documenté APIs usando Swagger para facilitar la integración.",
      technologies: [
        "NodeJS",
        "Express",
        "NestJS",
        "React",
        "NextJS",
        "JavaScript",
        "Jenkins",
        "Swagger",
      ],
    },
    {
      id: "4",
      company: "Novared",
      position: "Cyber Security Analyst",
      period: "Enero 2021 - Diciembre 2021",
      description:
        "Desarrollé scripts en JavaScript y Python para automatizar tareas de seguridad y análisis de vulnerabilidades. Brindé soporte técnico a usuarios internos dentro de la empresa",
      technologies: ["JavaScript", "Python", "CyberArk"],
    },
  ];

  const education: Education[] = [
    {
      id: "1",
      institution: "UAI - Universidad Abierta Interamericana",
      degree: "Analista Programador",
      period: "Agosto 2024 - Presente",
      current: true,
      description:
        "Carrera orientada al análisis, diseño y desarrollo de soluciones informáticas integrales, con una sólida base en software, hardware y telecomunicaciones.",
      coursework: [],
    },
  ];

  const certifications: Certification[] = [
    {
      id: "1",
      name: "AWS Certified Cloud Practitioner",
      issuer: "AWS",
      date: "Febrero 2025",
      url: "https://www.credly.com/badges/48bf25e0-250e-4945-a689-ebb3550ddcde/linked_in?t=ss00bq",
      important: true,
    },
  ];

  const courses: Course[] = [
    {
      id: "1",
      name: "JavaScript Algorithms and Data Structures",
      platform: "FreeCodeCamp",
      date: "Noviembre 2023",
      url: "https://www.freecodecamp.org/certification/fcc536d7d63-f9c2-4f84-a4bc-8d9d0fd49f09/javascript-algorithms-and-data-structures",
    },
    {
      id: "2",
      name: "Frontend Development Libraries",
      platform: "FreeCodeCamp",
      date: "Marzo 2023",
      url: "https://www.freecodecamp.org/certification/fcc536d7d63-f9c2-4f84-a4bc-8d9d0fd49f09/front-end-development-libraries",
    },
    {
      id: "3",
      name: "Responsive Web Design",
      platform: "FreeCodeCamp",
      date: "Enero 2023",
      url: "https://www.freecodecamp.org/certification/fcc536d7d63-f9c2-4f84-a4bc-8d9d0fd49f09/responsive-web-design",
    },
    {
      id: "3",
      name: "Armado y Reparación de PC",
      platform: "UTN - Universidad Tecnológica Nacional",
      date: "Julio 2020 - Agosto 2020",
      url: "",
    },
  ];

  return (
    <div className="app">
      <Header
        name={personalInfo.name}
        title={personalInfo.title}
        profileImage={personalInfo.profileImage}
        linkedin={personalInfo.linkedin}
      />
      <About
        about={personalInfo.about}
        skills={skills}
        cvOnline={personalInfo.cvOnline}
        location={personalInfo.location}
      />
      <Experience experiences={experiences} />
      <EducationComponent
        education={education}
        certifications={certifications}
        courses={courses}
      />
      <Contact
        phone={personalInfo.phone}
        email={personalInfo.email}
        linkedin={personalInfo.linkedin}
        github={personalInfo.github}
      />
      <Footer
        name={personalInfo.name}
        email={personalInfo.email}
        linkedin={personalInfo.linkedin}
        github={personalInfo.github}
        cvOnline={personalInfo.cvOnline}
      />
    </div>
  );
}

export default App;
