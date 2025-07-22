import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./navbar/Navbar";
import Banner from "./banner/Banner";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;