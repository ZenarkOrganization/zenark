import React, { useState, useEffect } from 'react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setIsMenuOpen(false); // Close menu on link click
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav>
        <div className="logo">
          <a href="#hero" className="logo-text">Zenark</a>
        </div>
        <div className={`nav-links-container ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#features" onClick={(e) => handleNavClick(e, 'features')} className={activeSection === 'features' ? 'active' : ''}>Features</a></li>
            <li><a href="#offerings" onClick={(e) => handleNavClick(e, 'offerings')} className={activeSection === 'offerings' ? 'active' : ''}>Offerings</a></li>
            <li><a href="#approach" onClick={(e) => handleNavClick(e, 'approach')} className={activeSection === 'approach' ? 'active' : ''}>Our Approach</a></li>
            <li><a href="#team" onClick={(e) => handleNavClick(e, 'team')} className={activeSection === 'team' ? 'active' : ''}>Team</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </div>
        <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
