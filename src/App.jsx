import React from "react";
import Nav from "./components/nav"
import About from "./components/about";
import Menu from "./components/menu";
import Landing from "./components/landing";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import Footer from "./footer";

function App() {

  return (
    <div className="App">
     <Nav />
     <Landing />
     <About />
     <Menu />
     <Gallery />
     <Contact />
     <Footer />
    </div>
  );
}

export default App