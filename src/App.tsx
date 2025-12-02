import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TreatmentTypes from './components/TreatmentTypes';
import PatientTransformations from './components/PatientTransformations';
import WhyChoose from './components/WhyChoose';
import SafetySection from './components/SafetySection';
import LocationsSection from './components/LocationsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TreatmentTypes />
        <PatientTransformations />
        <WhyChoose />
        <SafetySection />
        <LocationsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
