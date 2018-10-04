import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  grid-area: header;
  background-color: var(--primary-color);

  nav {
    grid-area: nav;
    background-color: var(--primary-color);
  }

  nav ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    color: wheat;
    padding: 0 20px;
    text-transform: uppercase;
  }
`;
const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <ul>
          <li>home</li>
          <li>office</li>
          <li>services</li>
          <li>new patients</li>
          <li>contact us</li>
          <li>appointment request</li>
          <li>patient education</li>
          <li>our team</li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
