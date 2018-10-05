import React from "react";
import styled from "styled-components";
import media from "./media";
import { Menu } from "styled-icons/material/Menu";
const StyledHeader = styled.header`
  grid-area: header;
  background-color: var(--primary-color);

  nav {
    grid-area: nav;
    background-color: var(--primary-color);

    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      color: wheat;
      padding: 0 20px;
      text-transform: uppercase;
      margin: 0px;

      label {
        display: none;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      li {
        margin: 7px;
      }
      ${media.tablet`
      background-color:#1c5856;
    text-align:center;
    flex-direction:column;
    display:none; 
    padding:10px;
    `};
    }
  }

  input {
    &[type="checkbox"] {
      display: none;
    }
    &[type="checkbox"]:checked ~ ul {
      display: block;
    }
  }
`;
const MenuIcon = styled(Menu)`
  display: none;
  color: aquamarine;
  cursor: pointer;
  width: 40px;
  ${media.tablet`display:block`};
`;
const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle">
          <MenuIcon />
        </label>

        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">office</a>
          </li>
          <li>
            <a href="#">services</a>
          </li>
          <li>
            <a href="#">new patients</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
          <li>
            <a href="#">appointment request</a>
          </li>
          <li>
            <a href="#">patient education</a>
          </li>
          <li>
            <a href="#">our team</a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
