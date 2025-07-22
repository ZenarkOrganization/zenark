import React from 'react';
import Section from './Section';

interface AboutProps {
  onInViewChange: (id: string, inView: boolean) => void;
}

const About: React.FC<AboutProps> = ({ onInViewChange }) => {
  return (
    <Section id="about" onInViewChange={onInViewChange}>
      <h2 className="section-title">About Zenark</h2>
      <p className="section-subtitle">
        Zenark is built to address the growing mental health needs of today's students through a platform that is private, intelligent, and easy to use. We help students better understand their emotions, manage stress and anxiety, and access reliable support — all within a safe, structured environment. Our goal is simple: to cultivate emotionally healthier students who are better prepared to succeed in their academic and personal lives.
      </p>
    </Section>
  );
};

export default About;
