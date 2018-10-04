import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Sections from "../components/Sections";
import GlobalStyles from "../components/GlobalStyles";
import ContactInfo from "../components/ContactInfo";
const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    "header header"
    "contactInfo contactInfo"
    "slider sections"
    "slider footer";
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <GlobalStyles />
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Container>
      <Header />
      <ContactInfo />
      <Slider />
      <Sections />
      {/* {children} */}
      <Footer />
    </Container>
  </div>
);

export default TemplateWrapper;
