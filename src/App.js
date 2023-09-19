import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home"
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './index.css'



function App() {
  return (
    <div className="App whole-site">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />

      <SocialLinks/>
    </div>
  );
}

export default App;
