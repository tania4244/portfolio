import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Works from "../../Components/Works/Works";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Skills from "../../Components/Skills/Skills";
import Footer from "../../Components/Footer/Footer";
// import Blogs from "../../Components/Blogs/Blogs";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Works></Works>
        {/* <Blogs></Blogs> */}
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
