import React from "react";
import { Layout, Server, Database, Workflow, Smartphone, Terminal, Code, Globe } from "lucide-react";

const skill = [
  {
    category: "Frontend",
    icon: <Layout className="bi-icon" />,
    items: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js"],
  },
  {
    category: "Backend",
    icon: <Server className="bi-icon" />,
    items: ["Node.js", "Express", "MongoDB", "MySQL"],
  },
  {
    category: "Tools",
    icon: <Terminal className="bi-icon" />,
    items: ["Git", "GitHub", "VS Code", "Postman", "Canva"],
  },
  {
    category: "Languages",
    icon: <Code className="bi-icon" />,
    items: ["Java", "Python", "C-Programming", "JavaScirpt"],
  },
  {
    category: "Other",
    icon: <Globe className="bi-icon" />,
    items: ["SEO", "Accessibility", "Performance Optimization", "Testing"],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-5 px-3 bg-dark text-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">My Skills</h2>
          <p className="text-light fs-5 mx-auto" style={{ maxWidth: "600px" }}>
            A comprehensive overview of my technical expertise and the technologies I work with.
          </p>
        </div>

        <div className="row g-4">
          {skill.map((skill, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border border-secondary rounded-3">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="bg-warning text-white rounded p-2 d-flex justify-content-center align-items-center me-3"
                      style={{ width: "40px", height: "40px" }}
                    >
                      {skill.icon}
                    </div>
                    <h5 className="card-title mb-0">{skill.category}</h5>
                  </div>
                  <ul className="list-unstyled mb-0 mx-5">
                    {skill.items.map((item, i) => (
                      <li key={i} className="d-flex align-items-center mb-2 text-secondary">
                        <span
                          className="me-3 rounded-circle bg-primary"
                          style={{ display: "inline-block", width: "8px", height: "8px" }}
                        ></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;