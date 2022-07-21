import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./components/Globalstyles";
import { Nav } from "./Layout/Nav";
import { Main } from "./Layout/Main";
import { Skills } from "./Layout/Skills";
import { Projects } from "./Layout/Projects";
import { Contact } from "./Layout/Contact";
import { Footer } from "./Layout/Footer";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Nav />
      <Main />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
