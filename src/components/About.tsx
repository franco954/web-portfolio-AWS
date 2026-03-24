import React from "react";
import "./About.css";

interface AboutProps {
  about: string;
  skills: string[];
  cvOnline?: string;
  location: string;
}

const About: React.FC<AboutProps> = ({ about, skills, cvOnline, location }) => {
  const handleDownloadCV = () => {
    if (cvOnline) {
      window.open(cvOnline, "_blank");
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre mí</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{about}</p>
            <div className="location-info">
              <span className="location-icon">📍</span>
              <span className="location-text">{location}</span>
            </div>
          </div>
          <div className="skills">
            <h3>Tecnologías</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        {cvOnline && (
          <div className="cv-download-section">
            <button onClick={handleDownloadCV} className="cv-download-button">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                <path d="M12,19L8,15H10.5V12H13.5V15H16L12,19Z" />
              </svg>
              Descargar CV
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
