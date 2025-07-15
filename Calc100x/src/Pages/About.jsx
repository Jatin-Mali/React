import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Your all-in-one destination for accurate, fast, and beautifully designed calculators.</p>
      </header>

      <section className="about-section mission">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-text">
          Our mission is to empower individuals, students, and professionals by offering a unified toolkit of smart calculators. We strive to blend efficiency and design, ensuring every interaction is seamless, fast, and reliable.
        </p>
        <p className="section-text">
          From finance to academics, we want every user to experience the power of intuitive calculation with minimal effort and maximum impact.
        </p>
      </section>

      <section className="about-section vision">
        <h2 className="section-title">Our Vision</h2>
        <p className="section-text">
          We envision a world where complex calculations are made effortlessly accessible. A world where digital tools not only compute but also communicate simplicity, trust, and design excellence.
        </p>
        <p className="section-text">
          Our platform aims to become the digital backbone for quick problem-solving, empowering users to think faster, calculate smarter, and act decisively.
        </p>
      </section>

      <section className="about-section team">
        <h2 className="section-title">Our Team</h2>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member" className="profile-pic" />
          <h4 className="member-name">Jatin Mali</h4>
          <p className="member-role">Founder & Lead Engineer</p>
          <p className="member-bio">
            An independent builder, thinker, and visionary determined to architect intuitive software that bridges logic and human experience. Focused on scale, quality, and innovation.
          </p>
        </div>
      </section>

      <section className="about-section feedback-form">
        <h2 className="section-title">We Value Your Feedback</h2>
        <form className="form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="feedback">Your Feedback</label>
            <textarea id="feedback" placeholder="Share your experience or suggestions..." required></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit Feedback</button>
        </form>
      </section>
    </div>
  );
};

export default About;
