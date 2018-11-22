import React from "react";
import styled from "styled-components";

import CV from "./CV";

const StyledSection = styled.div`
  grid-area: sections;
  background-color: var(--light);
`;

const Sections = () => (
  <StyledSection>
    <CV />
  </StyledSection>
);

export default Sections;
