import React from 'react';
import { Briefcase, Check } from 'lucide-react';

const experiences = [
  {
    role: 'Web Development Intern',
    company: 'OctaNet Services Pvt Ltd',
    duration: 'Aug 2024 – Sep 2024',
    description: [
      'Created responsive landing pages using HTML and CSS.',
      'Worked on UI/UX improvements and implemented modern design practices.',
      'Collaborated with senior developers to fix layout issues and improve performance.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-5 bg-light text-dark">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">Work Experience</h2>
          <p className="text-muted fs-5">My professional journey</p>
        </div>

        <div className="position-relative mx-auto" style={{ maxWidth: '900px' }}>
          <div className="border-start border-3 border-primary position-absolute top-0 start-0 h-100" style={{ left: '24px' }}></div>

          <div className="pt-4">
            {experiences.map((experience, index) => (
              <div key={index} className="position-relative ps-5 mb-5">
                <div
                  className="position-absolute top-0 translate-middle bg-primary text-white rounded-circle d-flex justify-content-center align-items-center shadow"
                  style={{
                    width: '40px',
                    height: '40px',
                    left: '0px',
                    zIndex: 1,
                  }}
                >
                  <Briefcase size={18} />
                </div>

                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title fw-bold mb-1">{experience.role}</h5>
                    <div className="d-flex justify-content-between flex-wrap mb-2">
                      <p className="text-primary fw-semibold mb-0">{experience.company}</p>
                      <span className="badge bg-primary-subtle text-primary">
                        {experience.duration}
                      </span>
                    </div>

                    <ul className="list-unstyled">
                      {experience.description.map((desc, i) => (
                        <li key={i} className="d-flex mb-2 text-secondary">
                          <Check className="me-2 text-primary" size={16} />
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-3">
                      {experience.technologies.map((tech, idx) => (
                        <span key={idx} className="badge bg-secondary-subtle text-dark me-2 mb-2">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;