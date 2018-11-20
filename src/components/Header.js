import React from "react";
import styled from "styled-components";
import media from "./media";
import Menu from "../img/menu.svg";
import Logo from "../img/logo.png";
import { Link } from "@reach/router";
const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(-225deg, #b7f8db 0%, #50a7c2 100%);
  margin-bottom: 20px;
  /* height: 200px; */

  nav ul {
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

const ContactInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 10px;
  font-size: 0.8rem;
`;

const HeaderContent = styled.div`
  flex: 1;
  line-height: 1.2;
  color: #026b67;
  h1 {
    font-size: 2.5rem;
    text-shadow: 1px 3px 7px white;
  }
  img {
    width: 8rem;

    transform: translateY(30px);
  }
`;
const Header = () => {
  return (
    <StyledHeader>
      {/*    <input type="checkbox" id="checkbox_toggle" />
      <label htmlFor="checkbox_toggle">
        <img src={Menu} alt="website menu" />
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
      */}
      <HeaderContent>
        <h1>د. نزار فقيه</h1>
        <h4>استشاري جراحة تجميل الأنف و الحنجرة</h4>
        <img src={Logo} alt="" />
      </HeaderContent>
      {/*  <ContactInfoSection>
        <span>أتصل اليوم 96599899664</span>
        <span>تواصل معنا</span>
      </ContactInfoSection> */}
    </StyledHeader>
  );
};

export default Header;
