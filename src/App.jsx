import Nav from "./components/Nav";
import Hero from "./components/Hero";
import "./index.css";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <h1>
      <Nav />
      <Hero />
      <Skills />
      <About />
      <Work />
      <Contact />
    </h1>
  );
}

export default App;
