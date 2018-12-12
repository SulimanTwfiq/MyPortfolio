import React from "react";
import styled from "styled-components";
import media from "./media";
const StyledFooter = styled.footer`
  grid-area: footer;
  background-color: black;
  color: white;
  text-align: center;
  pre {
    font-size: 0.8rem;
  }

  a,
  a:visited,
  a:link {
    color: grey;
    font-size: 0.7rem;
  }
`;
const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--color-primary);
  flex-direction: column;
  align-content: center;
  padding: 10px;
  img {
    width: 25px;
  }

  ${media.tablet`
  span {
    padding-right: 20px;
  }
  display: flex;
  flex-direction:row;
  `}
`;

const Address = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--color-secoundary);
  flex-direction: column;
  align-content: center;
  font-size: 0.9rem;
  line-height: 1.4;
  padding: 10px;
  pre {
    font-size: 0.8rem;
  }
`;

const Footer = ({ AddressInfo, rights, contactInfo }) => (
  <StyledFooter>
    <Address>
      <h3> العنوان</h3>
      <pre>{AddressInfo}</pre>
    </Address>
    <SocialMedia>
      {contactInfo.map(({ name, logo }) => (
        <span>
          <img src={logo} alt={name} /> {name}
        </span>
      ))}
      {/*  <span>
        <img src={Skype} alt="" /> Dranfakih2013
      </span>
      <span>
        <img src={Whatsapp} alt="" />
        00966549818686
      </span>
      <span>
        <img src={Call} alt="" />
        00966555067869
      </span> */}
    </SocialMedia>
    <pre>{rights}</pre>
    <a href="https://www.sulimantwfiq.com">تصميم سليمان توفيق</a>
  </StyledFooter>
);

export default Footer;
