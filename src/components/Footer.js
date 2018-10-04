import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  grid-area: footer;
  background-color: var(--primary-color);
  color: var(--light);
  text-align: center;
`;

const Footer = () => (
  <StyledFooter>
    <p>Copyright © 2018 Officite. Admin Log In Privacy Policy Terms of Use Health Disclaimer Cookie Policy</p>
  </StyledFooter>
);

export default Footer;
