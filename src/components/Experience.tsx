import React from "react";
import type { Experience } from "../types";
import "./Experience.css";

interface ExperienceProps {
  experiences: Experience[];
}

const ExperienceComponent: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experiencia Profesional</h2>
        <p className="section-subtitle">
          Mi trayectoria en el desarrollo de software
        </p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <div className="timeline-date">
                  {exp.current && (
                    <span className="current-badge">Presente</span>
                  )}
                  <span className="date-text">{exp.period}</span>
                </div>

                <div className="experience-card">
                  <h3 className="position">{exp.position}</h3>
                  <h4 className="company">{exp.company}</h4>
                  <p className="description">{exp.description}</p>

                  <div className="technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceComponent;
