import { useEffect, useMemo, useState } from 'react';
import About from './components/About';
import AIReservationAssistant from './components/AIReservationAssistant';
import Clinicians from './components/Clinicians';
import Contact from './components/Contact';
import FloatingDesk from './components/FloatingDesk';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';

const hashToView = {
  '#about': 'about',
  '#services': 'services',
  '#doctors': 'doctors',
  '#ai-desk': 'ai',
  '#contact': 'contact',
};

const viewToHash = {
  home: '#top',
  about: '#about',
  services: '#services',
  doctors: '#doctors',
  ai: '#ai-desk',
  contact: '#contact',
};

export default function App() {
  const initialView = useMemo(() => hashToView[window.location.hash] || 'home', []);
  const [activeView, setActiveView] = useState(initialView);

  const navigate = (view) => {
    setActiveView(view);
    window.history.replaceState(null, '', viewToHash[view] || '#top');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const syncHash = () => setActiveView(hashToView[window.location.hash] || 'home');
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  return (
    <>
      <Header activeView={activeView} onNavigate={navigate} />
      <main className="min-h-screen">
        {activeView === 'home' && <Hero onNavigate={navigate} />}
        {activeView === 'about' && <About onNavigate={navigate} />}
        {activeView === 'services' && <Services />}
        {activeView === 'doctors' && <Clinicians />}
        {activeView === 'ai' && <AIReservationAssistant onNavigate={navigate} />}
        {activeView === 'contact' && <Contact />}
      </main>
      <Footer />
      {activeView !== 'ai' && <FloatingDesk />}
    </>
  );
}
