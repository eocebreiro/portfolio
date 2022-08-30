import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./components/Globalstyles";
import { Navbar } from "./Layout/Navbar";
import { Main } from "./Layout/Main";
import { About } from "./Layout/About";
import { Projects } from "./Layout/Projects";
import { Contact } from "./Layout/Contact";
import { Footer } from "./Layout/Footer";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
