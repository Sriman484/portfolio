import React from 'react';
import aboutimage from '../assets/my-pic.jpg';

const About = () => {
    return (
        <section id="about" className="py-5 bg-white text-dark" aria-labelledby="about-heading">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 id="about-heading" className="text-dark fw-bold">About Me</h2>
                    <p className="text-muted fs-5">Get to know more about me and my background</p>
                </div>

                <div className="row gy-5 justify-content-center">
                    <div className="col-md-8 transition-opacity" style={{ transition: 'all 0.7s' }}>
                        <div className="row align-items-center">
                            <div className="col-md-5 col-12 text-center mb-4 mb-md-0">
                                <img
                                    src={aboutimage}
                                    alt="Sriman G"
                                    className="img-fluid"
                                    style={{ height: '500px', width: '100%', borderRadius: '15px', objectFit: 'cover, margin-left: -20px' }}
                                />
                            </div>

                            <div className="col-md-7 col-12">
                                <h3 className="mb-4 fw-bold">Who am I?</h3>
                                <div className="text-muted">
                                    <p>
                                        I am a passionate web developer currently pursuing a Bachelor's degree in Computer Science and Engineering (2022-2026) with a strong academic track record (CGPA: 9.06). Skilled in HTML, CSS, JavaScript, and React JS, I love building creative and user-friendly web interfaces.
                                    </p>
                                    <p>
                                        My backend skills include Node.js, Express.js, and MongoDB, along with basic knowledge of MySQL. My programming skills include JavaScript, Java, Python and C-Programming.
                                    </p>
                                    <p>
                                        With experience in developing projects such as an eCommerce website and a library management system, I'm constantly expanding my knowledge of web technologies, including MongoDB and Java. I’m a fast learner, problem solver, and adaptable team player with excellent communication skills.
                                    </p>
                                    <p>
                                        Currently, I'm seeking opportunities to further enhance my skills and gain real-world experience in web development.
                                    </p>
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