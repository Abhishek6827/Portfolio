import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          👋 Hi there! I'm Abhishek Tiwari, a passionate full-stack developer from
          Lucknow, India. I specialize in building scalable SaaS solutions and
          production-ready applications with modern web technologies.
        </p>
        <p className="para" style={{ marginTop: '1rem' }}>
          🚀 My expertise spans across the entire development stack - from
          crafting intuitive user interfaces with Next.js and TypeScript, to
          implementing secure payment integrations with Stripe and Zoho Payments.
          I specialize in building production-ready applications with robust
          testing environments and automated workflows.
        </p>
        <p className="para" style={{ marginTop: '1rem' }}>
          💡 I'm experienced in API development and testing with Postman, webhook
          implementations, Firebase hosting, real-time notifications via
          Telegram, and seamless email integrations using Resend API. I
          believe in writing clean, maintainable code and creating
          user-centric applications that solve real-world problems.
        </p>
      </div>
    </div>
  );
};

export default About;
