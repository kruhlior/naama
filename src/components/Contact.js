import { useState } from 'react';
import './styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create email content
    const emailSubject = encodeURIComponent(formData.subject);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`,
    );

    // Create mailto link
    const mailtoLink = `mailto:k.naama@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    alert('Thank you for your message! Your email client will open with the message ready to send.');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <div className="contact-hero-text">
              <h1 className="contact-hero-title">
                Let&apos;s talk
              </h1>
              <p className="contact-hero-subtitle">
                I&apos;d love to hear about your next project, big idea, or challenge. Let&apos;s chat over a virtual coffee (or a real one, if you&apos;re nearby).
              </p>
            </div>
            <div className="contact-hero-image">
              <div className="coffee-steam">
                <img
                  src="/projects/steam-line.png"
                  alt="Steam Line"
                  className="steam-line steam-line-1"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
                <img
                  src="/projects/steam-line2.png"
                  alt="Steam Line 2"
                  className="steam-line steam-line-2"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
                <img
                  src="/projects/steam-line3.png"
                  alt="Steam Line 3"
                  className="steam-line steam-line-3"
                  onError={(e) => {
                    e.target.src = '/placeholder-large.jpg';
                  }}
                />
              </div>
              <img
                src="/projects/coffee-mug.png"
                alt="Coffee Mug"
                className="coffee-mug-image"
                onError={(e) => {
                  e.target.src = '/placeholder-large.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get In Touch</h3>

              <div className="contact-methods">
                <a href="mailto:k.naama@gmail.com" className="contact-method contact-method-link">
                  <div className="contact-icon">
                    <img src="/projects/email icon.png" alt="Email" />
                  </div>
                  <div className="contact-details">
                    <p>Email</p>
                    <h4>k.naama@gmail.com</h4>
                  </div>
                </a>

                <a href="tel:669-2499635" className="contact-method contact-method-link">
                  <div className="contact-icon">
                    <img src="/projects/Phone-icon.png" alt="Phone" />
                  </div>
                  <div className="contact-details">
                    <p>Phone</p>
                    <h4>669-2499635</h4>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/naama-kruh-7405862a/" target="_blank" rel="noopener noreferrer" className="contact-method contact-method-link">
                  <div className="contact-icon">
                    <img src="/projects/linkedin-icon.png" alt="LinkedIn" />
                  </div>
                  <div className="contact-details">
                    <p>LinkedIn</p>
                    <h4>My Linkedin profile</h4>
                  </div>
                </a>

                <div className="contact-method">
                  <div className="contact-icon">
                    <img src="/projects/map-icon.png" alt="Location" />
                  </div>
                  <div className="contact-details">
                    <p>Location</p>
                    <h4>Sunnyvale, California</h4>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>

          <div className="section-subtitle-bottom">
            <p className="section-subtitle">
              Great results come from creativity, hard work and coffee.<br />
              Not necessarily in that order.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
