

import React from 'react';
import Navbar from '../Navbar/Page';
import Hero from '../Hero/Page';
import Companies from '../Companies/Page';
import Will from '../Will/Page';
import Platform from '../Platform/Page';
import Plans from '../Plans/Page';
import Review from "../Review/Page"
import Footer from "../Footer/Page"

const Main: React.FC = () => {
  return (
    <>
        <Navbar />
        <Hero />
      <Companies  />
      <Will />
      <Platform />
      <Plans />
      <Review/>
      <Footer/>
    </>
  );
};

export default Main;
