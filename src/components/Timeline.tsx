import React from 'react';
import Section from './Section';

const benefits = [
  "Personalized onboarding, training, and support for your staff.",
  "Priority access to new features and platform updates.",
  "Public recognition as a founding institutional partner.",
  "Exclusive access to pilot program insights and data reports."
];

interface TimelineProps {
  onInViewChange: (id: string, inView: boolean) => void;
}

const Timeline: React.FC<TimelineProps> = ({ onInViewChange }) => {
  return (
    <Section id="timeline" className="alt-bg" onInViewChange={onInViewChange}>
      <h2 className="section-title">Launch & Early Partnership</h2>
      <div className="timeline-content">
        <p className="launch-date">Official Launch: September 2025</p>
        <p className="section-subtitle">Zenark is currently partnering with a select group of institutions for our early access program. Early school partners receive significant benefits, including:</p>
        <ul className="benefits-list">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Timeline;
