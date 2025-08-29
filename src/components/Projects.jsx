import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'The E-Commerce Website is a platform that supports product listings, secure user authentication, and shopping cart management. It offers a shopping experience with order tracking and a responsive design across all devices.',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: 'https://trenzz-shop.onrender.com',
      githubUrl: 'https://github.com/Sriman484/e-commerce-website'
    },
    {
      id: '2',
      title: 'Hotel Management System',
      description: 'The Hotel Management System enables customers to place orders seamlessly through QR-based menus, with support for dine-in and takeaway. It allows staff to track orders in real-time, manage billing, and ensure faster service',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2bx64w409f2IrVVkas8Fp_vIHEjDwVBKAeA&s',
      tags: ['React', 'TypeScript', 'Firebase', 'Material UI'],
    },
    {
      id: '3',
      title: 'Parking Reservation System UI',
      description: 'A smart parking reservation system that allows users to book parking spots in advance with real-time availability tracking.',
      image: 'https://img.freepik.com/premium-photo/smart-systems-parking-management-solid-color-background-4k-ultra-hd_964851-139796.jpg',
      tags: ['React.js', 'TailwindCSS', 'Express.js', 'MongoDB'],
      githubUrl: 'https://github.com/Sriman484/parking-reservation-system.git'
    },
    {
      id: '4',
      title: 'Login and Sign-Up Page',
      description: 'A secure login and sign-up page with form validation, password encryption, and responsive design for seamless user authentication.',
      image: 'https://plus.unsplash.com/premium_photo-1720192861639-1524439fc166?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9naW58ZW58MHx8MHx8fDA%3D',
      tags: ['React.js', 'Express.js', 'MongoDB', 'Bootstrap'],
    },
    {
        id: '5',
        title: 'Calculator using Javascript',
        description: 'A Mathematical Calculator with basic arithmetic operations done using HTML, CSS and JavaScript.',
        image: 'https://wallpapers.com/images/featured/calculator-background-9idet8pma9adeqd5.jpg',
        tags: ['JavaScript', 'HTML', 'CSS'],
        liveUrl: 'https://calculator-7w1o.onrender.com/',
        githubUrl: 'https://github.com/Sriman484/calculator.git'
    },
    {
        id: '6',
        title: 'To Do List',
        description: 'A simple and intuitive To-Do List app that lets users add, edit, and manage daily tasks efficiently with a responsive design.',
        image: 'https://img.freepik.com/premium-photo/list-icon-notebook-with-completed-todo-list-3d-render_471402-428.jpg',
        tags: ['JavaScript', 'HTML', 'CSS'],
        liveUrl: 'https://to-do-list-q142.onrender.com',
        githubUrl: 'https://github.com/Sriman484/To-Do-List.git'
    }
  ];

function Projects() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="heading-gradient">My Projects</h2>
          <p className="text-white fs-5 mx-auto">Selected works I've built</p>
        </div>

        <div ref={ref} className="row g-4">
          {projects.map((project, index) => (
            <div key={project.id} className="col-12 col-lg-6">
              <div
                className={`project-card surface elevate position-relative fade-reveal ${
                  isVisible ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${index * 160}ms` }}
              >
                <div className="position-relative">
                  <img src={project.image} alt={project.title} className="project-image" />
                  {project.githubUrl && project.liveUrl && (
                    <div className="project-overlay">
                      <div className="d-flex gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: 40, height: 40 }}
                        >
                          <Github size={18} />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: 40, height: 40 }}
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="mb-2">{project.title}</h3>
                  <p className="mb-3">{project.description}</p>
                  <div className="project-badges">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-badge">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;