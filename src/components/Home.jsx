import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

const TypewriterInline = ({ text = '', typingSpeed = 90, pauseTime = 700, cursor = true }) => {
    const [display, setDisplay] = useState('');

    useEffect(() => {
        let isCancelled = false;
        let index = 0;

        const typeNext = () => {
            if (isCancelled) return;
            if (index <= text.length) {
                setDisplay(text.slice(0, index));
                index += 1;
                setTimeout(typeNext, typingSpeed);
            }
        };

        const start = setTimeout(typeNext, pauseTime);
        return () => {
            isCancelled = true;
            clearTimeout(start);
        };
    }, [text, typingSpeed, pauseTime]);

    return (
        <span style={{ display: 'inline-flex', alignItems: 'baseline' }}>
            <span>{display}</span>
            {cursor && (
                <span
                    aria-hidden
                    style={{
                        display: 'inline-block',
                        width: '1ch',
                        borderRight: '2px solid currentColor',
                        marginLeft: '2px',
                        animation: 'tw-caret 1s step-end infinite',
                        opacity: 0.8,
                    }}
                />
            )}
            <style>{`
                @keyframes tw-caret {
                    0%, 100% { opacity: 0; }
                    50% { opacity: 1; }
                }
            `}</style>
        </span>
    );
};

const Home = () => {

    return (
        <section id="home" className="position-relative min-vh-100 text-center d-flex align-items-center justify-content-center flex-column">
           

            <div className="container position-relative z-1">
                <h1 className="display-4 fw-bold">
                    <div>Hi, I'm</div>
                    <div className="text-warning">
                        <TypewriterInline text="Sriman G" typingSpeed={90} pauseTime={300} />
                    </div>
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
                    <a href="/Sriman_Resume.pdf" className="btn btn-outline-danger" target="_blank" rel="noopener noreferrer">
                        View Resume
                    </a>
                </div>

                <div className="mt-5 d-flex justify-content-center gap-4">
                    <a href="https://github.com/Sriman484" target="_blank" rel="noopener noreferrer" className="text-light">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/sriman-g-b01525274" target="_blank" rel="noopener noreferrer" className="text-light">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:srimang484@gmail.com" className="text-light">
                        <Mail size={24} />
                    </a>
                    <a href="tel:+919080345945" className="text-light">
                        <Phone size={24} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home
