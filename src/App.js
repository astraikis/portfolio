import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-r from-sky-50 via-sky-100 to-indigo-100">
      <Navbar />
      <Hero />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
