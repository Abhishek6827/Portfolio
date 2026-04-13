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
                <h5>Indian Capital & Investment Ltd.</h5>
              </div>
              <h3>2025-26</h3>
            </div>
            <p>
              Integrated Stripe & Zoho payment gateways, developed Next.js + Firebase backends, 
              automated webhooks, and implemented Notion API workflow automation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Vasnaani Education</h5>
              </div>
              <h3>2024-25</h3>
            </div>
            <p>
              Developed official website, integrated Django REST API with React frontend, 
              optimized performance, and resolved critical UI/UX issues.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Intern</h4>
                <h5>Hoping Minds</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built React + Redux + Django applications, focusing on responsive design 
              and clean code practices within cross-functional teams.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Quizario</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Created interactive quiz applications with user authentication and 
              data management using React and Bootstrap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
