import React from 'react';
import Section from './Section';

const teamMembers = [
  { name: 'Wajahat Sayeed', role: 'Founder & CEO', linkedin: 'https://www.linkedin.com/in/wajahat-sayeed-0ab214290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { name: 'Shephin Philip', role: 'Co-founder & CTO', linkedin: 'https://www.linkedin.com/in/shephin-philip-54b371205/' },
  { name: 'Alina Khan', role: 'Marketing Head', linkedin: 'https://www.linkedin.com/in/alina-khan-a80440225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { name: 'Mehar Chaithanya', role: 'Operations Head', linkedin: 'https://www.linkedin.com/in/mehar-chaithanya-pemmasani/' },
  { name: 'Vaibhav Reddy', role: 'Tech Lead', linkedin: 'https://www.linkedin.com/in/vaibhav-reddy-1136a2287/' },
  { name: 'Adarsh Bisht', role: 'Team Member', linkedin: '' },
];

interface TeamProps {
  onInViewChange: (id: string, inView: boolean) => void;
}

const Team: React.FC<TeamProps> = ({ onInViewChange }) => {
  return (
    <Section id="team" onInViewChange={onInViewChange}>
      <h2 className="section-title">Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h4>{member.name}</h4>
            <span>{member.role}</span>
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                LinkedIn
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Team;
