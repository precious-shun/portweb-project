import Nav from "./components/Nav";
import Hero from "./components/Hero";
import "./index.css";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";

function App() {
  return (
    <h1>
      <Nav />
      <Hero />
      <Skills />
      <About />
      <Work />
    </h1>
  );
}

export default App;
