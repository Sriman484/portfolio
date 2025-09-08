import React from "react";
import { Layout, Server, Terminal, Code } from "lucide-react";

const skill = [
  {
    category: "Frontend",
    icon: <Layout className="bi-icon" />,
    items: ["HTML and CSS", "JavaScript","React.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Languages",
    icon: <Code className="bi-icon" />,
    items: ["Java", "C-Programming", "JavaScirpt", "Python"],
  },
  {
    category: "Backend",
    icon: <Server className="bi-icon" />,
    items: ["Express.js", "Node.js", "MongoDB", "MySQL"],
  },
  {
    category: "Tools",
    icon: <Terminal className="bi-icon" />,
    items: ["Git & GitHub", "Supabase", "Postman", "Canva", "Vercel & Render"],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-5 px-3 text-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold heading-gradient">My Skills</h2>
          <p className="fs-5 mx-auto" style={{ maxWidth: "600px", color: '#ffffff' }}>
            A comprehensive overview of my technical expertise and the technologies I work with.
          </p>
        </div>

        <div className="row g-4">
          {skill.map((skill, idx) => (
            <div key={idx} className="col-12 col-md-6">
              <div className="card h-100 shadow-sm border-0 rounded-3 surface elevate">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded p-2 d-flex justify-content-center align-items-center me-3"
                         style={{ width: "40px", height: "40px", background: 'rgba(147, 197, 253, 0.12)', border: '1px solid rgba(147, 197, 253, 0.3)' }}>
                      {skill.icon}
                    </div>
                    <h5 className="card-title mb-0 orange">{skill.category}</h5>
                  </div>
                  <ul className="list-unstyled mb-0 mx-5">
                    {skill.items.map((item, i) => (
                      <li key={i} className="d-flex align-items-center mb-2" style={{ color: '#ffffff' }}>
                        <span className="me-3 rounded-circle" style={{ display: "inline-block", width: "8px", height: "8px", background: 'rgba(255,255,255,0.9)' }}></span>
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