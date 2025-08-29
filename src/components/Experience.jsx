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
  },
  {
    role: 'Full Stack Web Developer Intern',
    company: '8 Queens Software Technologies Pvt Ltd.',
    duration: 'Jun 1 2025 – Jun 27 2025',
    description: [
      'Developed interactive web applications using HTML, CSS, JavaScript, and React.js for frontend development.',
      'Created responsive user interfaces and implemented modern design principles for better user experience.',
      'Collaborated with the development team to build dynamic components and optimize application performance.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Responsive Design'],
  },
  {
    role: 'Full Stack Web Developer Intern',
    company: 'Vorkinsta',
    duration: 'May 2025 – Aug 2025',
    description: [
      'Completed a three-month internship with a stipend of ₹1,000/month, focusing on web application development using React.js, Tailwind CSS, and Supabase.',
      'Gained hands-on experience by implementing user authentication and developing interactive dashboards.',
      'Delivered responsive, user-friendly interfaces while collaborating with the development team.',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'Supabase', 'User Authentication', 'Dashboard Development'],
  }
];

function Experience () {
  return (
    <section id="experience" className="py-5 text-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold heading-gradient">Work Experience</h2>
          <p className="fs-5" style={{ color: '#ffffff' }}>My professional journey</p>
        </div>

        <div className="position-relative mx-auto" style={{ maxWidth: '900px' }}>
          <div className="pt-4">
            {experiences.map((experience, index) => (
              <div key={index} className="position-relative ps-5 mb-5">
                <div
                  className="position-absolute translate-middle orange rounded-circle d-flex justify-content-center align-items-center "
                  style={{
                    width: '40px',
                    height: '40px',
                    left: '0px',
                    top: '125px',
                    zIndex: 1,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    boxShadow: '0 6px 18px rgba(2,6,23,0.35)'
                  }}
                >
                  <Briefcase size={18} />
                </div>

                <div className="card border-0 shadow-sm surface p-2 elevate">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title fw-bold mb-0 orange">{experience.role}</h5>
                      <span className="badge badge-contrast">{experience.duration}</span>
                    </div>
                    <p className="fw-semibold mb-2 text-accent">{experience.company}</p>

                    <ul className="list-unstyled">
                      {experience.description.map((desc, i) => (
                        <li key={i} className="d-flex mb-2" style={{ color: '#ffffff' }}>
                          <Check className="me-2" size={16} style={{ color: '#ffffff' }} />
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-3">
                      {experience.technologies.map((tech, idx) => (
                        <span key={idx} className="badge surface text-light me-2 mb-2" style={{ opacity: 0.95 }}>
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