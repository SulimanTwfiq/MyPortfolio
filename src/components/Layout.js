import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Sections from "../components/sections";
import GlobalStyles from "../components/GlobalStyles";
import ContactInfo from "../components/ContactInfo";
import media from "./media";

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
  ${media.phone` 
    grid-template-columns: 1fr ;
   grid-template-areas:
      "header"
      "slider"
      "contactInfo"
      "sections"
      "footer";`};
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <GlobalStyles />
    <Helmet title="didsburydental" />
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
