import React from "react";
import styled from "styled-components";
import Services from "./Services";
import Contact from "./Contact";
import CV from "./CV";

const StyledSection = styled.div`
  grid-area: sections;
  background-color: var(--light);
`;

const Sections = () => (
  <StyledSection>
    <CV />
    {/* <Services /> */}
    {/* <Contact /> */}
  </StyledSection>
);

export default Sections;
