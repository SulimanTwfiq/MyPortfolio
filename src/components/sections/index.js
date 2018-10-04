import React from "react";
import styled from "styled-components";
import Services from "./Services";
import Contact from "./Contact";
import Features from "./Features";

const StyledSection = styled.div`
  grid-area: sections;
  background-color: var(--light);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const Sections = () => (
  <StyledSection>
    <Services />
    <Contact />
    <Features />
  </StyledSection>
);

export default Sections;
