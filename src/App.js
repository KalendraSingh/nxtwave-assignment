import React from 'react';
import Header from './components/Header/Index';
import HeroSection from "./components/HeroSection/index"
import WhyChooseUs from "./components/WhyChooseUs/index"
import AccaEligibility from "./components/AccaEligibility/index"
import LearnSection from "./components/LearnSection/index"
import PlacementAssistance from "./components/PlacementAssistent/index"
import KickOfAcca from "./components/KickOfAcca/index"
import './App.css';

function App() {
  return (
    <>
      <Header />
      <HeroSection/>
      <WhyChooseUs/>
      <AccaEligibility/>
      <LearnSection/>
      <PlacementAssistance/>
      <KickOfAcca/>
    </>
  );
}

export default App;
