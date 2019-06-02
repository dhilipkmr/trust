import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Header from '../components/header';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import JoinUs from '../components/JoinUs';
import About from '../components/About';
import Contact from '../components/Contact';
import Donate from '../components/Donate';

const IndexPage = () => {
  return (
    <div>
      <SEO title="Home" />
      <Header/>
      <Events/>
      <Gallery/>
      <JoinUs/>
      <About/>
      <Contact/>
      <Donate/>
    </div>
  );
}

export default IndexPage
