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
        <div className="career-info" style={{ width: '100%', maxWidth: '1000px', margin: '60px auto 0' }}>
          <div className="career-timeline" style={{ backgroundImage: "linear-gradient(to top, #14b8a6 20%, var(--accentColor) 50%, transparent 95%)", maxHeight: "100%" }}></div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role" style={{ width: '100%' }}>
                <h4 style={{ fontSize: '33px', fontWeight: 500, margin: 0 }}>Social</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '30px' }}>
                  <a
                    href="https://github.com/Abhishek6827"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="disable"
                    className="contact-social"
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    GitHub <MdArrowOutward />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abhishek-tiwariiii"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="disable"
                    className="contact-social"
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    LinkedIn <MdArrowOutward />
                  </a>
                  <a
                    href="mailto:abhishektiwari6827@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="disable"
                    className="contact-social"
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    Email <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>

            <div className="career-info-right" style={{ width: "40%" }}>
              <div className="contact-box" style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '15px' }}>
                <h4 style={{ marginBottom: '20px', fontSize: '20px', fontWeight: 500, color: '#fff' }}>Send a Message</h4>
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
          </div>

          <div className="career-info-box" style={{ marginTop: '60px' }}>
            <div className="career-info-in">
              <div className="career-role">
                <h4 style={{ fontSize: '33px', fontWeight: 500, margin: 0 }}>Education</h4>
                <p style={{ marginTop: '15px', color: '#9ca3af' }}>Postgraduate in Computer Applications <br /> 2022-24</p>
              </div>
            </div>

            <div className="career-info-right" style={{ width: "40%", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
