// import React from 'react'
// import Hero from '../pages/Hero'
// import About from '../pages/About'
// import Services from '../pages/Services'
// import Contact from '../pages/Contact'
// import Projects from '../pages/Projects'
// import Pricing from '../pages/Pricing'

// const Home = () => {
//   return <>
//   <Hero/>
//   <About/>
//   <Services/>
//   <Projects/>
//   <Pricing/>

//   <Contact/>
  
//   </>
// }

// export default Home



import About from "../pages/About";
import Contact from "../pages/Contact";
import Hero from "../pages/Hero";
import Pricing from "../pages/Pricing";
import Projects from "../pages/Projects";
import Services from "../pages/Services";

const Home = () => {
  return (
    <>
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="projects"><Projects /></section>
      <section id="pricing"><Pricing /></section>
      <section id="contact"><Contact /></section>
    </>
  );
};

export default Home;
