
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
