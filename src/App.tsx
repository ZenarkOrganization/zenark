import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyZenark from './components/WhyZenark';
import WhatZenarkOffers from './components/WhatZenarkOffers';
import OurApproach from './components/OurApproach';
import Team from './components/Team';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('');

  const handleSectionInView = (id: string, inView: boolean) => {
    if (inView) {
      setActiveSection(id);
    }
  };

  return (
    <div className="App">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About onInViewChange={handleSectionInView} />
        <WhyZenark onInViewChange={handleSectionInView} />
        <WhatZenarkOffers onInViewChange={handleSectionInView} />
        <OurApproach onInViewChange={handleSectionInView} />
        <Team onInViewChange={handleSectionInView} />
        <Timeline onInViewChange={handleSectionInView} />
        <Contact onInViewChange={handleSectionInView} />
      </main>
      <Footer />
    </div>
  )
}

export default App
