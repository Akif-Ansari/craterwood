import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Map from '../components/Map';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Gallery />
      <Pricing />
      <About />
      <Map />
    </div>
  );
};

export default Home;