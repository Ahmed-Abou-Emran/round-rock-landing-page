import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import About from "./About";
import ContactUs from "./ContactUs";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <Hero />
      <Main>
        <About />
        <Services />
        <Testimonials />
        <ContactUs />
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  /* padding-inline: clamp(1rem, 5vw, 22rem); */
  margin-inline: auto;
`;
export default Home;
