import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalStyles from "../components/GlobalStyles";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "sections"
    "footer";
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <GlobalStyles />
    <Helmet title="didsburydental" />
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  </div>
);

export default TemplateWrapper;
