import React from "react";
import styled from "styled-components";
import media from "./media";
import { Menu } from "styled-icons/material/Menu";
import ContactInfo from "./ContactInfo";
const StyledHeader = styled.header`
  grid-area: header;
  display:flex;
  flex-direction:column;
  background-image: linear-gradient(-225deg, #B7F8DB 0%, #50A7C2 100%);  height:35vh;
  nav ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      color: var(--primary-color);;
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
      background-color:inherit;
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
  color: var(--primary-color);
  cursor: pointer;
  width: 40px;
  ${media.tablet`display:block`};
`;
const HeaderContent = styled.div`
  text-align: center;
  flex: 1;
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
      <HeaderContent>
        <h1>dental clink</h1>
        <p>The best clinc ever!</p>
      </HeaderContent>
      <ContactInfo />
    </StyledHeader>
  );
};

export default Header;
