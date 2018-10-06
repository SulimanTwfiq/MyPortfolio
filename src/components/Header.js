import React from "react";
import styled from "styled-components";
import media from "./media";
import { Menu } from "styled-icons/material/Menu";
import ContactInfo from "./ContactInfo";
import { Link } from "@reach/router";
const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(-225deg, #b7f8db 0%, #50a7c2 100%);
  height: 35vh;
  nav ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    color: var(--primary-color);
    padding: 0 20px;
    text-transform: uppercase;
    margin: 0px;

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
  label {
    width: 40px;
  }
  input {
    &[type="checkbox"] {
      display: none;
    }
    &[type="checkbox"]:checked ~ nav ul {
      display: block;
      height: 100vh;
      position: relative;
      background-color: rgba(234, 239, 232, 0.9);
      li {
        margin: 15px;
        border: 2px black solid;
        background-color: blanchedalmond;
        border-radius: 20px;
        padding: 2px;
        a {
          width: 100%;
        }
      }
    }
  }
`;
const MenuIcon = styled(Menu)`
  display: none;
  color: var(--primary-color);
  cursor: pointer;
  ${media.tablet`display:block`};
`;
const HeaderContent = styled.div`
  text-align: center;
  flex: 1;
`;
const Header = () => {
  return (
    <StyledHeader>
      <input type="checkbox" id="checkbox_toggle" />
      <label htmlFor="checkbox_toggle">
        <MenuIcon />
      </label>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/doctors">doctors</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <a href="google.com">new patients</a>
          </li>
          <li>
            <a href="google.com">contact us</a>
          </li>
          <li>
            <a href="google.com">appointment request</a>
          </li>
          <li>
            <a href="google.com">patient education</a>
          </li>
          <li>
            <a href="google.com">our team</a>
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
