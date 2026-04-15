import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Indian Capital and Investment (Coimbatore) Limited</h5>
              </div>
              <h3>11/2025 - 03/2026</h3>
            </div>
            <div className="career-info-right">
              <ul style={{ color: "var(--paraColor)", fontSize: "16px", paddingLeft: "20px", margin: "0 0 10px 0" }}>
                <li>Developed secure payment gateway integration using Stripe and Zoho Payments.</li>
                <li>Built scalable backend services with Next.js and Firebase for real-time data handling.</li>
                <li>Implemented automated webhooks for transaction status updates and Resend API notifications.</li>
                <li>Integrated Notion API for automated record-keeping and workflow management.</li>
              </ul>
              <p style={{ width: "100%", fontSize: "14px", color: "var(--accentColor)" }}>
                <strong>Technologies:</strong> Next.js, Firebase, Stripe, Zoho Payments, Resend API
              </p>
            </div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Vasnaani Education</h5>
              </div>
              <h3>08/2024 - 10/2025</h3>
            </div>
            <div className="career-info-right">
              <ul style={{ color: "var(--paraColor)", fontSize: "16px", paddingLeft: "20px", margin: "0 0 10px 0" }}>
                <li>Developed and maintained the official Vasnaani Education website with a focus on performance and scalability.</li>
                <li>Collaborated with cross-functional teams to design and implement user-centric, responsive web interfaces.</li>
                <li>Integrated Django REST APIs with React frontend modules, ensuring seamless data flow and consistency.</li>
                <li>Optimized website performance, improved database structure, and resolved critical UI/UX bugs.</li>
              </ul>
              <p style={{ width: "100%", fontSize: "14px", color: "var(--accentColor)" }}>
                <strong>Technologies:</strong> React, JavaScript, Tailwind CSS, HTML, CSS
              </p>
            </div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer Intern</h4>
                <h5>Hoping Minds</h5>
              </div>
              <h3>01/2024 - 06/2024</h3>
            </div>
            <div className="career-info-right">
              <ul style={{ color: "var(--paraColor)", fontSize: "16px", paddingLeft: "20px", margin: "0 0 10px 0" }}>
                <li>Developed and maintained web applications using React, Redux, and Django</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
                <li>Implemented responsive designs and optimized application performance</li>
                <li>Participated in code reviews and followed best practices for clean code</li>
              </ul>
              <p style={{ width: "100%", fontSize: "14px", color: "var(--accentColor)" }}>
                <strong>Technologies:</strong> React, Redux, Django, PostgreSQL, JavaScript
              </p>
            </div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Quizario</h5>
              </div>
              <h3>11/2023 - 12/2023</h3>
            </div>
            <div className="career-info-right">
              <ul style={{ color: "var(--paraColor)", fontSize: "16px", paddingLeft: "20px", margin: "0 0 10px 0" }}>
                <li>Built interactive quiz applications with modern web technologies</li>
                <li>Coordinated with team members to ensure project deliverables</li>
                <li>Implemented user authentication and data management features</li>
                <li>Optimized application performance and user experience</li>
              </ul>
              <p style={{ width: "100%", fontSize: "14px", color: "var(--accentColor)" }}>
                <strong>Technologies:</strong> React, JavaScript, Bootstrap, RESTful APIs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
