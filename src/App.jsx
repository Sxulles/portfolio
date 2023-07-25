import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import ChatSection from './components/ChatSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AboutMeSection from './components/AboutMeSection';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <AboutMeSection/>
      <ChatSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App
