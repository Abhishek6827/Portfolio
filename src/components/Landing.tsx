import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ABHISHEK
              <br />
              <span>TIWARI</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Full Stack Developer &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">SaaS</div>
              <div className="landing-h2-2">Builder</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Builder</div>
              <div className="landing-h2-info-1">SaaS</div>
            </h2>
            <p className="landing-info-p" style={{ 
              color: 'var(--paraColor)', 
              fontSize: '16px', 
              marginTop: '20px', 
              maxWidth: '300px',
              lineHeight: '1.5'
            }}>
              Crafting digital experiences with modern web technologies. Passionate about creating scalable solutions that make a difference.
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
