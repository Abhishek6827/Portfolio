import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import Skills from "./Skills";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  const [_showTechStack, setShowTechStack] = useState(false);
  const [_showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "work") {
            setShowTechStack(entry.isIntersecting);
          }
          if (entry.target.classList.contains("landing-section") || entry.target.id === "home") {
            setShowLanding(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.1 }
    );

    const workSection = document.getElementById("work");
    const landingSection = document.getElementById("home");
    
    if (workSection) observer.observe(workSection);
    if (landingSection) observer.observe(landingSection);

    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };

    document.fonts.ready.then(() => {
      setSplitText();
    });

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="main-wrapper">
      <Cursor />
      <Navbar />
      <div className="container-main">
        <SocialIcons />
        {isDesktopView && children}
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="container-main">
              <Landing>{!isDesktopView && children}</Landing>
              <About />
              <WhatIDo />
              <Skills />
              <Career />
              <Certifications />
              <Work />
              {isDesktopView && (
                <Suspense fallback={<div>Loading....</div>}>
                  <TechStack />
                </Suspense>
              )}
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
