// src/pages/Home.jsx
import React from 'react';
import Hero from '../Components/Hero';
import ChooseUsSection from '../Components/ChooseUs';
import GymSteps from '../Components/steps';
import Reviews from '../Components/reviews';
import FAQs from '../Components/FAQs';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <ChooseUsSection/>
      <GymSteps/>
      <Reviews/>
      
      {/* Add an ID for the FAQ section */}
      <div id="faqs">
        <FAQs/>
      </div>
      
    </div>
  );
}

export default Home;
