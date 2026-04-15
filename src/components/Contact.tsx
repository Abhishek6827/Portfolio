import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles/Contact.css";
import "./styles/Career.css";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        "service_n9quflm", // Service ID
        "template_aulu2tp", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "6-Nc8B6DHiOVw9VeT" // Public Key
      );

      if (result.status === 200) {
        setMessageText("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setMessageText("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setMessageText("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setMessageText(""), 5000);
    }
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="career-info">
          <div className="career-timeline"></div>

          <div className="career-info-box contact-box-wrapper">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social</h4>
                <div className="contact-social-container">
                  <a
                    href="https://github.com/Abhishek6827"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="disable"
                    className="contact-social"
                  >
                    GitHub <MdArrowOutward />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abhishek-tiwariiii"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="disable"
                    className="contact-social"
                  >
                    LinkedIn <MdArrowOutward />
                  </a>
                  <a
                    href="mailto:abhishektiwari6827@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="disable"
                    className="contact-social"
                  >
                    Email <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <div className="contact-box-container">
                <h4>Send a Message</h4>
                <form onSubmit={sendEmail} className="contact-form" data-cursor="disable">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                    />
                  </div>
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                  {messageText && (
                    <p style={{ textAlign: 'center', marginTop: '10px', color: messageText.includes("successfully") ? "#4ade80" : "#f87171" }}>
                      {messageText}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>

          <div className="career-info-box contact-box-wrapper" style={{ marginTop: '60px' }}>
            <div className="career-info-in">
              <div className="career-role">
                <h4>Education</h4>
                <p style={{ marginTop: '15px', color: '#9ca3af', fontSize: '18px' }}>Postgraduate in Computer Applications <br /> 2022-24</p>
              </div>
            </div>

            <div className="copyright-section">
              <h2 style={{ fontSize: '23px', margin: 0, fontWeight: 400 }}>
                Designed and Developed <br /> by <span style={{ color: 'var(--accentColor)' }}>Abhishek Tiwari</span>
              </h2>
              <h5 style={{ fontSize: '20px', fontWeight: 500, margin: '15px 0 0 0', opacity: 0.5, display: 'flex', gap: '10px', alignItems: 'center' }}>
                <MdCopyright /> 2026
              </h5>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
