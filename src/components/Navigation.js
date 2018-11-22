import React from "react";
import Menu from "../images/menu.svg";
import styled from "styled-components";
import { Link } from "@reach/router";
import media from "./media";

const StyledNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    text-transform: uppercase;
    margin: 0px;
    background-color: rgba(255, 255, 255, 0.4);
    margin-bottom: 42px;
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
    position: absolute;
    width: 40px;
    display: none;
    cursor: pointer;
    ${media.tablet`display:block;     z-index: 500;`};
  }
  input {
    &[type="checkbox"] {
      display: none;
    }
    &[type="checkbox"]:checked ~ nav ul {
      display: block;
      height: 100vh;
      position: relative;
      padding-top: 70px;
      background-color: rgba(234, 239, 232, 0.9);
      li {
        margin: 15px;
        border: 2px black solid;
        background-color: #a9edd7;
        border-radius: 20px;
        padding: 2px;
      }
    }
  }
`;
export default function Navigation() {
  return (
    <StyledNav>
      <input type="checkbox" id="checkbox_toggle" />
      <label htmlFor="checkbox_toggle">
        <img src={Menu} alt="website menu" />
      </label>
      <nav>
        <ul>
          <Link to="/">
            <li>الرئيسية</li>
          </Link>
          <Link to="/surgeries">
            <li>العمليات الجراحية</li>
          </Link>
          <Link to="/">
            <li>صحف ومقابلات</li>
          </Link>
          <Link to="/">
            <li>معرض الصور</li>
          </Link>
          <Link to="/">
            <li>الاتصال بنا</li>
          </Link>
        </ul>
      </nav>
    </StyledNav>
  );
}
