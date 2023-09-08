import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text-container">
          <h1 className="about-title">
            Hi, I'm Muna.
          </h1>
          <p className="about-paragraph">
            I'm a passionate QA Automation worker with 4 years of experience. My expertise includes software testing, quality control, test automation, and project management. I thrive on implementing innovative testing methodologies that elevate software product quality. Let's connect on LinkedIn to discuss potential opportunities.
          </p>
        </div>
        <div className="about-image-container">
          <img className="about-image" alt="hero" src="./women-in-tech.jpg" />
        </div>
      </div>
    </section>
  );
}
