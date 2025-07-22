import React from 'react';
import Section from './Section';

const offerings = [
  {
    title: "Intelligent Real-time Check-ins",
    description: "Brief assessments adapt to student responses, offering tailored insights and practical recommendations for self-care."
  },
  {
    title: "Personalized Mental Health Pathways",
    description: "Each student receives a unique roadmap of strategies aligned with their emotional needs, helping them build lasting coping skills."
  },
  {
    title: "Guided Meditation & Breathing",
    description: "A library of scientifically-backed practices designed to reduce stress, improve focus, and promote mental clarity."
  },
  {
    title: "Cognitive Behavioral Therapy (CBT)",
    description: "Easy-to-follow, interactive exercises that empower students to reframe negative thought patterns and navigate life's challenges."
  },
  {
    title: "In-App Professional Consultation",
    description: "Confidential, direct access to certified therapists and psychiatrists for students who may require expert intervention."
  }
];

interface WhatZenarkOffersProps {
  onInViewChange: (id: string, inView: boolean) => void;
}

const WhatZenarkOffers: React.FC<WhatZenarkOffersProps> = ({ onInViewChange }) => {
  return (
    <Section id="offerings" containerClassName="offerings-grid" onInViewChange={onInViewChange}>
      <h2 className="section-title">What Zenark Offers</h2>
      {offerings.map((offering, index) => (
        <div key={index} className="offering-card">
          <h4>{offering.title}</h4>
          <p>{offering.description}</p>
        </div>
      ))}
    </Section>
  );
};

export default WhatZenarkOffers;
