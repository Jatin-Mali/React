import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

// Image for foreground: Calculator showing ERROR 404
import Foreground404 from '../assets/Error404Calc.png';
// Image for faded background
import BackgroundMath from '../assets/Error404.png';

const NotFound = () => (
  <div className="nf-wrapper">
    {/* Background image */}
    <img src={BackgroundMath} alt="Background Math" className="nf-bg" />

    {/* Foreground content */}
    <div className="nf-content">
      <img
        src={Foreground404}
        alt="Lost in Calculations"
        className="nf-img"
      />

      <h1 className="nf-title">Error 404</h1>
      <p className="nf-tagline">
        Looks like you took a wrong <span className="highlight">turn in the number jungle.</span><br />
        Let’s get you back on the right path!
      </p>

      <Link to="/" className="nf-btn">
        ← Back to Home
      </Link>
    </div>
  </div>
);

export default NotFound;
