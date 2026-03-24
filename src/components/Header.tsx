import React from "react";
import "./Header.css";

interface HeaderProps {
  name: string;
  title: string;
  profileImage?: string;
  linkedin?: string;
}

const Header: React.FC<HeaderProps> = ({
  name,
  title,
  profileImage,
  linkedin,
}) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h2>{name}</h2>
        </div>
        <ul className="nav-links">
          <li>
            <button onClick={() => scrollToSection("about")}>Sobre mí</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("experience")}>
              Experiencia
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("education")}>
              Formación
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")}>Contacto</button>
          </li>
        </ul>
      </nav>
      <div className="hero">
        {profileImage && (
          <div className="profile-image">
            <img src={profileImage} alt={`${name} - Profile`} />
          </div>
        )}
        <h1 className="hero-title">
          Hola, soy <span className="highlight">{name}</span>
        </h1>
        <p className="hero-subtitle">{title}</p>
        <div className="hero-actions">
          <button
            className="cta-button"
            onClick={() => scrollToSection("contact")}
          >
            Hablemos
          </button>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
