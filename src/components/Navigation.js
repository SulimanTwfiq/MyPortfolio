import React from "react";
import Menu from "../img/menu.svg";
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
    display: none;
    cursor: pointer;
    ${media.tablet`display:block`};
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
        background-color: #a9edd7;
        border-radius: 20px;
        padding: 2px;
        a {
          width: 100%;
        }
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
          <li>
            <Link to="/">الرئيسية</Link>
          </li>
          <li>
            <Link to="/surgeries">العمليات الجراحية</Link>
          </li>
          <li>
            <Link to="/blog">صحف ومقابلات</Link>
          </li>
          <li>
            <Link to="/">معرض الصور</Link>
          </li>
          <li>
            <Link to="/contact">الاتصال بنا</Link>
          </li>
        </ul>
      </nav>
    </StyledNav>
  );
}
