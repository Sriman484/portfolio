import React from 'react';
import aboutimage from '../assets/1000207211.jpg';

function About() {
    return (
        <section id="about" className="py-5 text-light" aria-labelledby="about-heading">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 id="about-heading" className="fw-bold heading-gradient">About Me</h2>
                    <p className="fs-5" style={{ opacity: 0.85 }}>Get to know more about me and my background</p>
                </div>

                <div className="row gy-4 justify-content-center">
                    <div className="col-12 col-lg-10">
                        <div className="row align-items-center g-4">
                            <div className="col-md-5 text-center">
                                <div className="rounded-4 overflow-hidden d-inline-block" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                                    <img
                                        src={aboutimage}
                                        alt="Sriman G"
                                        style={{ height: '520px', objectFit: 'cover', width: '350px' }}
                                    />
                                </div>
                            </div>

                            <div className="col-md-7 text-center">
                                <h3 className="mb-3 fw-bold orange text-center">Who am I?</h3>
                                <div style={{ opacity: 0.95 }}>
                                    <p className="mb-3">
                                        I am a passionate Full Stack web developer currently pursuing a Bachelor's degree on Computer Science and Engineering (2022-2026) in S A Engineering College with a strong academic track record (CGPA: 9.02). Skilled in HTML, CSS, JavaScript, React JS, Express JS and Java, I love building creative and user-friendly web interfaces.
                                    </p>
                                    <p className="mb-3">
                                        With experience in developing projects such as an eCommerce website and a Parking Reservation system, I'm constantly expanding my knowledge of web technologies, including Express JS and Java. I'm a fast learner, problem solver, and adaptable team player with excellent communication skills.
                                    </p>
                                    <p className="mb-0">
                                        Currently, I'm seeking opportunities to further enhance my skills and gain real-world experience in Full Stack web development.
                                    </p>
                                </div>

                                <div className="mt-4 divider-soft"></div>

                                <div className="row text-center mt-4 g-3">
                                    <div className="col-4">
                                        <div>
                                            <div className="fw-bold" style={{ fontSize: '1.5rem' }}>5+</div>
                                            <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>Projects</div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div>
                                            <div className="fw-bold" style={{ fontSize: '1.5rem' }}>3</div>
                                            <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>Certifications</div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div>
                                            <div className="fw-bold" style={{ fontSize: '1.5rem' }}>3</div>
                                            <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>Internships</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 d-flex flex-wrap gap-2 justify-content-center">
                                    <span className="badge badge-pill badge-amber">JavaScript</span>
                                    <span className="badge badge-pill badge-indigo">React.js</span>
                                    <span className="badge badge-pill badge-teal">Express.js</span>
                                    <span className="badge badge-pill badge-amber">MongoDB</span>
                                </div>

                                <div className="mt-4 d-flex flex-wrap gap-3 justify-content-center">
                                    <a href="#projects" className="btn btn-warning">View Projects</a>
                                    <a href="#contact" className="btn btn-outline-light">Contact Me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;