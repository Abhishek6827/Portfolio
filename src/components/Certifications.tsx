import "./styles/Career.css"; // Reusing career styles for consistency

const Certifications = () => {
  return (
    <div className="career-section section-container" id="certifications">
      <div className="career-container">
        <h2>
          My <span>Certifications</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Developer Certification</h4>
                <h5>Meta</h5>
              </div>
              <h3>2025</h3>
            </div>
            <div style={{ width: "40%" }}>
              <p style={{ width: "100%", margin: "0 0 10px 0" }}>
                Advanced React concepts including hooks, context, and performance optimization
              </p>
              <p style={{ width: "100%", fontSize: "14px", color: "var(--accentColor)" }}>
                <strong>Skills:</strong> React, JavaScript, JSX, Hooks
              </p>
            </div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Web Development</h4>
                <h5>FreeCodeCamp</h5>
              </div>
              <h3>2024</h3>
            </div>
            <div style={{ width: "40%" }}>
              <p style={{ width: "100%", margin: "0 0 10px 0" }}>
                Comprehensive full-stack development covering frontend and backend technologies
              </p>
              <p style={{ width: "100%", fontSize: "14px", color: "var(--accentColor)" }}>
                <strong>Skills:</strong> React, JavaScript, Node.js, Bootstrap
              </p>
            </div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>JavaScript Algorithms and Data Structures</h4>
                <h5>FreeCodeCamp</h5>
              </div>
              <h3>2023</h3>
            </div>
            <div style={{ width: "40%" }}>
              <p style={{ width: "100%", margin: "0 0 10px 0" }}>
                Advanced JavaScript programming and algorithmic problem solving
              </p>
              <p style={{ width: "100%", fontSize: "14px", color: "var(--accentColor)" }}>
                <strong>Skills:</strong> JavaScript, Algorithms, Data Structures
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="career-container" style={{ marginTop: "100px" }}>
        <h2>
          Key <span>Achievements</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GitHub Contributions</h4>
                <h5>🚀 500+</h5>
              </div>
              <h3>01</h3>
            </div>
            <p>
              500+ contributions in the last year
            </p>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Projects Completed</h4>
                <h5>💻 15+</h5>
              </div>
              <h3>02</h3>
            </div>
            <p>
              15+ web applications built and deployed
            </p>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technologies Mastered</h4>
                <h5>⚡ 10+</h5>
              </div>
              <h3>03</h3>
            </div>
            <p>
              10+ programming languages and frameworks
            </p>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Problem Solving</h4>
                <h5>🧩 100+</h5>
              </div>
              <h3>04</h3>
            </div>
            <p>
              100+ coding challenges solved
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Certifications;
