import React from 'react';
import Section from './Section';

const features = [
  {
    title: "Improved Student Well-being",
    description: "Proactive support leads to better focus, fewer emotional disruptions in the classroom, and stronger academic outcomes."
  },
  {
    title: "Empowered Educators & Counselors",
    description: "Positions staff with resources and anonymized, high-level insights to foster a supportive campus environment, all while upholding strict student privacy."
  },
  {
    title: "A Commitment to Holistic Education",
    description: "Partnering with Zenark demonstrates a powerful commitment to student development that goes beyond academics."
  },
  {
    title: "Designed for Seamless Integration",
    description: "Our platform is built to fit effortlessly into your existing student wellness framework, from classrooms to counseling centers."
  }
];

interface WhyZenarkProps {
  onInViewChange: (id: string, inView: boolean) => void;
}

const WhyZenark: React.FC<WhyZenarkProps> = ({ onInViewChange }) => {
  return (
    <Section id="features" className="alt-bg" containerClassName="features-grid" onInViewChange={onInViewChange}>
      <h2 className="section-title">Why Zenark for Your Institution?</h2>
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </Section>
  );
};

export default WhyZenark;
