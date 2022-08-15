import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-50 via-sky-50 to-indigo-50">
      <Navbar />
      <Hero />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
