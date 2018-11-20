import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  grid-area: footer;
  background-color: var(--primary-color);
  color: var(--light);
  text-align: center;
  span {
    font-size: 0.7rem;
  }
`;

const Footer = () => (
  <StyledFooter>
    <p>الدكتور نزار فقيه</p>
    <span>تصميم سليمان توفيق</span>
  </StyledFooter>
);

export default Footer;
