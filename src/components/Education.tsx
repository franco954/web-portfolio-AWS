import React from "react";
import type { Education, Certification, Course } from "../types";
import "./Education.css";

interface EducationProps {
  education: Education[];
  certifications: Certification[];
  courses: Course[];
}

const EducationComponent: React.FC<EducationProps> = ({
  education,
  certifications,
  courses,
}) => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Formación Académica</h2>
        <p className="section-subtitle">
          Educación, certificaciones y cursos especializados
        </p>

        <div className="education-content">
          {/* Educación */}
          <div className="education-section">
            <h3 className="subsection-title">
              <span className="icon">🎓</span>
              Educación
            </h3>
            <div className="education-list">
              {education.map((edu) => (
                <div key={edu.id} className="education-item">
                  <div className="edu-header">
                    <h4 className="edu-degree">{edu.degree}</h4>
                    {edu.current && (
                      <span className="current-badge">En Curso</span>
                    )}
                  </div>
                  <p className="edu-institution">{edu.institution}</p>
                  <p className="edu-period">{edu.period}</p>
                  {edu.description && (
                    <p className="edu-description">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certificaciones */}
          <div className="certifications-section">
            <h3 className="subsection-title">
              <span className="icon">🏆</span>
              Certificaciones
            </h3>
            <div className="certifications-grid">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className={`certification-card ${
                    cert.important ? "featured" : ""
                  }`}
                >
                  {cert.important && (
                    <div className="featured-badge">Destacada</div>
                  )}
                  <div className="cert-header">
                    <h4 className="cert-name">{cert.name}</h4>
                  </div>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      <span className="icon">🔗</span>
                      Ver Certificado
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Cursos */}
          <div className="courses-section">
            <h3 className="subsection-title">
              <span className="icon">📚</span>
              Cursos
            </h3>
            <div className="courses-grid">
              {courses.map((course) => (
                <div key={course.id} className="course-card">
                  <h4 className="course-name">{course.name}</h4>
                  <p className="course-platform">{course.platform}</p>
                  <p className="course-date">{course.date}</p>
                  {course.url && (
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="course-link"
                    >
                      <span className="icon">🔗</span>
                      Ver Certificado
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationComponent;
