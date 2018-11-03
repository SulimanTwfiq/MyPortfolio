import React from "react";
import styled from "styled-components";
import { ServiceCard } from "../Card";
import tired from "../../img/tired.svg";
import saveMoney from "../../img/save-money.svg";
import shipping from "../../img/shipping.svg";
import travel from "../../img/travel.svg";
import clean from "../../img/clean.svg";

const StyledServices = styled.section`
  background-color: beige;

  h4 {
    margin-top: -20px;
  }
  h5 {
    font-size: 1rem;
    margin: 2px;
  }
`;
const ServiceCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  justify-content: center;
  align-content: center;
  h3 {
    grid-column: 1/-1;
    margin: 20px auto;
    margin-bottom: 2px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 13px;
    border: 1.6px #00ada7 solid;
    border-bottom: none;
    font-size: 0.9rem;
    width: 250px;
  }
  img {
    width: 70px;
  }
`;

const Services = () => (
  <StyledServices>
    <ServiceCards>
      <h3>نحن سوف نوفر عليك </h3>
      <ServiceCard>
        <h5>الجهد</h5>
        <img src={tired} alt="وفر جهدك" />
      </ServiceCard>
      <ServiceCard>
        <h5>المال</h5>
        <img src={saveMoney} alt="وفر مالك" />
      </ServiceCard>
      <h3> لنا خبرة في </h3>

      <ServiceCard>
        <h5>الشحن</h5>
        <img src={shipping} alt="الشحن" />
      </ServiceCard>
      <ServiceCard>
        <h5>التشطيب</h5>
        <img src={clean} alt="تشطيب" />
      </ServiceCard>
      <ServiceCard>
        <h5>السياحة</h5>
        <img src={travel} alt="السياحة" />
      </ServiceCard>
    </ServiceCards>
  </StyledServices>
);

export default Services;
