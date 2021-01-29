import React from "react";
import "./App.css";
import "./styles/Buttons.css";
import "./styles/MediaQueries.css";
import Header from "./components/Header";
import GetStarted from "./components/GetStarted";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import bgImageTop from "./images/bg-tablet-pattern.svg";

function App() {
  return (
    <div className="App">
      <img className="bg-pattern" src={bgImageTop} alt="" />
      <div className="centered-components">
        <Header />
        <GetStarted />
        <Features />
      </div>
      <Testimonials />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
