import "./styles/Career.css"; // Reusing career styles for consistency

const Skills = () => {
  return (
    <div className="career-section section-container" id="skills">
      <div className="career-container">
        <h2>
          My <span>Skills</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Development</h4>
                <h5>Expertise</h5>
              </div>
              <h3>01</h3>
            </div>
            <p>
              Next.js (90%), React (92%), TypeScript (88%), JavaScript (90%), Tailwind CSS (90%), Redux (85%), Angular (78%), Socket.io (82%), HTML5 (95%), CSS3 (92%)
            </p>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend & Database</h4>
                <h5>Expertise</h5>
              </div>
              <h3>02</h3>
            </div>
            <p>
              Node.js (85%), Express.js (82%), Firebase (88%), MongoDB (80%), Python (75%), Django (70%), PostgreSQL (78%), Prisma (80%), MySQL (75%)
            </p>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Payment & Integration</h4>
                <h5>Expertise</h5>
              </div>
              <h3>03</h3>
            </div>
            <p>
              Stripe (85%), Zoho Payments (80%), Postman API (90%), Webhook Config (85%), Telegram API (82%), Resend API (80%)
            </p>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps & Tools</h4>
                <h5>Expertise</h5>
              </div>
              <h3>04</h3>
            </div>
            <p>
              Git & GitHub (90%), Firebase CLI (85%), Firebase Hosting (88%), Ngrok (80%), Vercel (85%), VS Code (92%), Firebase Emulators (82%)
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
