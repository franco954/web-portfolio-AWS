import React from "react";
import "./Footer.css";

interface FooterProps {
  name: string;
  email: string;
  linkedin: string;
  github: string;
  cvOnline: string;
}

const Footer: React.FC<FooterProps> = ({ name, email, cvOnline }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">{name}</h3>
            <p className="footer-subtitle">DevOps Engineer</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li>
                <a href="#about">Sobre mí</a>
              </li>
              <li>
                <a href="#experience">Experiencia</a>
              </li>
              <li>
                <a href="#education">Formación</a>
              </li>
              <li>
                <a href="#contact">Contacto</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contacto</h4>
            <p className="footer-contact">
              <span className="icon">📧</span>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p className="footer-contact">
              <span className="icon">🌐</span>
              <a href={cvOnline} target="_blank" rel="noopener noreferrer">
                CV Online
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="footer-copyright">
            © {currentYear} {name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
