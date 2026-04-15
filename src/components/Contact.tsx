import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles/Contact.css";

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
        <div className="contact-flex border-bottom-separator" style={{ paddingBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '30px', flexWrap: 'wrap' }}>
          
          {/* Contact Details Column */}
          <div className="contact-box" style={{ flex: '1 1 300px' }}>
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/abhishek-tiwariiii"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — abhishek-tiwariiii
              </a>
            </p>
            <p>
              <a
                href="/Portfolio/Resume.pdf"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Resume — View Download
              </a>
            </p>
            <h4>Phone & Location</h4>
            <p>
              <a href="tel:+917081660941" data-cursor="disable">
                +91 7081660941
              </a>
            </p>
            <p>Lucknow, Uttar Pradesh, India</p>

            <h4>Social</h4>
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

          {/* Form Column */}
          <div className="contact-box" style={{ flex: '1 1 400px', backgroundColor: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '15px' }}>
            <h4 style={{ marginBottom: '20px' }}>Send a Message</h4>
            <form onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }} data-cursor="disable">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px' }}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px' }}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', resize: 'vertical' }}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                style={{ width: '100%', padding: '15px', background: 'var(--accentColor)', color: '#000', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: isLoading ? 'not-allowed' : 'pointer' }}
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

        <div className="contact-flex">
          <div className="contact-box">
             <h4>Education</h4>
             <p>Postgraduate in Computer Applications — 2022-24</p>
          </div>
          <div className="contact-box">
             {/* Left intentionally blank for flex spacing */}
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Abhishek Tiwari</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
