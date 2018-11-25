import React from "react";
import styled from "styled-components";
import Whatsapp from "../images/footer/whatsapp.svg";
import Skype from "../images/footer/skype.svg";
import Call from "../images/footer/call.svg";
const StyledFooter = styled.footer`
  grid-area: footer;
  background-color: var(--primary-color);
  color: var(--light);
  text-align: center;
  span {
    font-size: 0.7rem;
  }
`;
const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  background-color: #3f5251;
  flex-direction: column;
  align-content: center;
  padding: 10px;
  span {
    padding-right: 5px;
  }
  img {
    width: 25px;
  }
`;
const Footer = () => (
  <StyledFooter>
    <SocialMedia>
      <span>
        <img src={Skype} alt="" /> Dranfakih2013
      </span>
      <span>
        <img src={Whatsapp} alt="" />
        0505580358
      </span>
      <span>
        <img src={Call} alt="" />
        0549818686
      </span>
    </SocialMedia>
    <p>الدكتور نزار فقيه</p>
    <span>تصميم سليمان توفيق</span>
  </StyledFooter>
);

export default Footer;
