import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const Home = () => {

    return (
        <section id="home" className="position-relative min-vh-100 bg-dark text-center text-light d-flex align-items-center justify-content-center flex-column">
           

            <div className="container position-relative z-1">
                <h1 className="display-4 fw-bold">
                    <div>Hi, I'm</div>
                    <div className="text-warning">Sriman G</div>
                </h1>

                <p className="lead mt-3">
                    Full Stack Developer specializing in building exceptional digital experiences
                </p>

                <div className="mt-4 d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
                    <button
                        className="btn btn-warning d-flex align-items-center gap-2"
                        onClick={() => window.open('https://github.com/Sriman484', '_blank')}
                    >
                        View my Work
                    </button>
                    <button className="btn btn-outline-danger">
                        Get in Touch
                    </button>
                </div>

                <div className="mt-5 d-flex justify-content-center gap-4">
                    <a href="https://github.com/Sriman484" target="_blank" rel="noopener noreferrer" className="text-light">
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com/in/srimang" target="_blank" rel="noopener noreferrer" className="text-light">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://twitter.com/srimang" target="_blank" rel="noopener noreferrer" className="text-light">
                        <Twitter size={24} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home
