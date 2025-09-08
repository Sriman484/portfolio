import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function Contact() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="contact" className="projects-section">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="heading-gradient">Get In Touch</h2>
          <p className='fs-5 mx-auto'>Let's discuss your project or opportunity</p>
        </div>

        <div ref={ref} className="row justify-content-center g-4">
          <div className={`col-12 col-md-8 col-lg-6 fade-reveal ${isVisible ? 'visible' : ''}`}>
            <div className="surface elevate p-4 h-100 rounded-5" style={{ maxWidth: 450, margin: '0 auto' }}>
              <h3 className="mb-3 text-center">Contact Information</h3>
              <p className="mb-4">Feel free to reach out with any questions or inquiries. I'm always open to discussing new projects, opportunities, and partnerships.</p>

              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary" style={{ width: 40, height: 40 }}>
                  <Mail size={18} />
                </div>
                <div className="ms-3 text-start d-flex align-items-center">
                  <h6 className="mb-0 me-2" style={{ minWidth: 90 }}>Email :</h6>
                  <a href="mailto:srimang484@gmail.com" className='text-white'>srimang484@gmail.com</a>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary" style={{ width: 40, height: 40 }}>
                  <Phone size={18} />
                </div>
                <div className="ms-3 text-start d-flex align-items-center">
                  <h6 className="mb-0 me-2" style={{ minWidth: 90 }}>Phone :</h6>
                  <a href="tel:+9080345945" className='text-white'>+91 9080345945</a>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary" style={{ width: 40, height: 40 }}>
                  <MapPin size={18} />
                </div>
                <div className="ms-3 text-start d-flex align-items-center">
                  <h6 className="mb-0 me-2" style={{ minWidth: 90 }}>Location :</h6>
                  <p className="mb-0">Chennai, TamilNadu, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
