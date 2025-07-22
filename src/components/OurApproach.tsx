import React from 'react';
import Section from './Section';

const approachItems = [
  {
    title: "Private and Confidential",
    description: "Students can explore their mental health in a judgment-free, secure space, encouraging honest self-reflection and growth."
  },
  {
    title: "Personalized, Not One-Size-Fits-All",
    description: "Our adaptive platform ensures that every student receives the specific guidance they need, right when they need it."
  },
  {
    title: "Built on an Expert Foundation",
    description: "Every module, tool, and resource is developed and reviewed by mental health professionals to ensure clinical relevance and impact."
  },
  {
    title: "Ready for the Real World of Schools",
    description: "Created with continuous feedback from educators, counselors, and students to ensure practical value and real-world applicability."
  }
];

interface OurApproachProps {
  onInViewChange: (id: string, inView: boolean) => void;
}

const OurApproach: React.FC<OurApproachProps> = ({ onInViewChange }) => {
  return (
    <Section id="approach" className="alt-bg" containerClassName="approach-list" onInViewChange={onInViewChange}>
      <h2 className="section-title">Our Approach</h2>
      {approachItems.map((item, index) => (
        <div key={index} className="approach-item">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </Section>
  );
};

export default OurApproach;
