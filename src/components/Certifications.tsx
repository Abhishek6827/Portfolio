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
            <p>
              Professional certification covering advanced React concepts, hooks, context API, 
              and performance optimization strategies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Web Development</h4>
                <h5>FreeCodeCamp</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Comprehensive curriculum covering responsive web design, frontend libraries, 
              backend development, and database management.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>JS Algorithms & Data Structures</h4>
                <h5>FreeCodeCamp</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              In-depth study of JavaScript fundamentals, complex data structures, 
              and algorithmic problem-solving techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
