import React from 'react';
import { ArrowUp, Code, Github, Linkedin, Twitter } from 'lucide-react';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="dark-blue text-white py-4">
            <div className="container">
                <div className="row g-4">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="mb-3 d-flex align-items-center fw-bold">
                            <Code className="me-2 bi-icon" />
                            <span>Sriman G</span>
                        </div>
                        <p className="mb-4 text-white-50">Full Stack Developer specializing in building exceptional digital experiences.</p>
                        <div className="d-flex gap-3">
                            <a href="https://github.com/Sriman484" target="_blank" rel="noopener noreferrer" className="text-white-50">
                                <Github size={20} />
                                <span className="visually-hidden">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/sriman-g-b01525274" target="_blank" rel="noopener noreferrer" className="text-white-50">
                                <Linkedin size={20} />
                                <span className="visually-hidden">LinkedIn</span>
                            </a>
                            <a href="https://twitter.com/srimang" target="_blank" rel="noopener noreferrer" className="text-white-50">
                                <Twitter size={20} />
                                <span className="visually-hidden">Twitter</span>
                            </a>
                        </div>
                    </div>

                    <div className="col-6 col-lg-2">
                        <h5 className="mb-3 orange">Quick Links</h5>
                        <ul className="list-unstyled m-0 text-white-50">
                            <li className="mb-2"><a href="#home" className="text-white-50">Home</a></li>
                            <li className="mb-2"><a href="#about" className="text-white-50">About</a></li>
                            <li className="mb-2"><a href="#skills" className="text-white-50">Skills</a></li>
                            <li className="mb-2"><a href="#projects" className="text-white-50">Projects</a></li>
                            <li><a href="#contact" className="text-white-50">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-lg-3">
                        <h5 className="mb-3 orange">Services</h5>
                        <ul className="list-unstyled m-0 text-white-50">
                            <li className="mb-2">Web Development</li>
                            <li className="mb-2">Frontend Engineering</li>
                            <li className="mb-2">Backend Development</li>
                            <li className="mb-2">Full Stack Solutions</li>
                            <li>Consulting</li>
                        </ul>
                    </div>

                    <div className="col-12 col-lg-3">
                        <h5 className="mb-3 orange">Contact</h5>
                        <address className="m-0 text-white-50">
                            <p className="mb-2">Chennai, TamilNadu, India</p>
                            <p className="mb-2"><a href="mailto:contact@srimang.dev" className="text-white-50">srimang484@gmail.com</a></p>
                            <p className="mb-0"><a href="tel:+1234567890" className="text-white-50">+91 9080345945</a></p>
                        </address>
                    </div>
                </div>

                <div className="mt-4 pt-4 divider-soft d-flex flex-column flex-md-row align-items-center justify-content-between">
                    <p className="mb-3 mb-md-0 text-white-50">&copy; {new Date().getFullYear()} Sriman G. All rights reserved.</p>
                    <button onClick={scrollToTop} className="btn btn-outline-light rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }} aria-label="Scroll to top">
                        <ArrowUp size={18} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;