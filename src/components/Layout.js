import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sections from "../components/sections";
import GlobalStyles from "../components/GlobalStyles";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "contactInfo"
    "sections"
    "footer";
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <GlobalStyles />
    <Helmet title="didsburydental" />
    <Container>
      <Header />
      <Sections />
      {/* {children} */}
      <Footer />
    </Container>
  </div>
);

export default TemplateWrapper;
