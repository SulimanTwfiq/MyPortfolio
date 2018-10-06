import React from "react";
import styled from "styled-components";
import Services from "./Services";
import Contact from "./Contact";
import Features from "./Features";
import Blog from "./blog";

const StyledSection = styled.div`
  grid-area: sections;
  background-color: var(--light);
  display: flex;
  flex-direction: column;
`;

const Sections = () => (
  <StyledSection>
    <Services />
    <Contact />
    <Features />
    <Blog />
  </StyledSection>
);

export default Sections;
