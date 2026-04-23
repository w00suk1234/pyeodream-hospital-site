import About from './components/About';
import AIReservationAssistant from './components/AIReservationAssistant';
import BookingBand from './components/BookingBand';
import Clinicians from './components/Clinicians';
import Contact from './components/Contact';
import FloatingDesk from './components/FloatingDesk';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <BookingBand />
        <Clinicians />
        <AIReservationAssistant />
        <Contact />
      </main>
      <Footer />
      <FloatingDesk />
    </>
  );
}
