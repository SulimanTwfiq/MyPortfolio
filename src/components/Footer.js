import React from "react";
import styled from "styled-components";
import Whatsapp from "../images/footer/whatsapp.svg";
import Skype from "../images/footer/skype.svg";
import Call from "../images/footer/call.svg";
import media from "./media";
const StyledFooter = styled.footer`
  grid-area: footer;
  background-color: black;
  color: var(--light);
  text-align: center;
  p {
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
  span {
    margin: 0 15px;
  }
  ${media.tablet`
  display: flex;
  flex-direction:row;
  `};
`;

const Footer = () => (
  <StyledFooter>
    <Address>
      <h3> العنوان</h3>
      <span>مجمع محمد فقيه الطبية</span>
      <span>شارع التحلية</span>
      <span>خلف مركز لامول</span>
      <span>جده السعودية</span>
    </Address>
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
    <p>
      جميع الحقوق محفوظة د.نزار فقيه <br />
      استشاري جراحة تجميل الأنف والوجه
    </p>
    <a href="https://www.sulimantwfiq.com">تصميم سليمان توفيق</a>
  </StyledFooter>
);

export default Footer;
