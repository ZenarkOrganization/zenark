import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Empowering Students to Thrive - Emotionally and Academically</h1>
        <p>Zenark is a comprehensive mental health platform for students, offering personalized, evidence-based tools and expert guidance to help them build emotional resilience and fly high.</p>
        <div className="cta-buttons">
  <button
    className="btn btn-primary"
    onClick={() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    Request Early Access
  </button>
</div>
      </div>
    </section>
  );
};

export default Hero;
