import Nav from "./components/Nav";
import Hero from "./components/Hero";
import "./index.css";
import Skills from "./components/Skills";
import About from "./components/About";

function App() {
  return (
    <h1>
      <Nav />
      <Hero />
      <Skills />
      <About />
    </h1>
  );
}

export default App;
