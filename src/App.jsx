import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import GitHubStats from "./sections/GitHubStats";
import Contact from "./sections/Contact";

function App() {
  return (
    <main className="min-h-screen bg-background text-text">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Services />
      <Projects />
      <GitHubStats />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
