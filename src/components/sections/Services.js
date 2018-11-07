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
    border: 1.6px var(--secoundary-color) solid;
    border-right: none;
    border-left: none;
    font-size: 1.3rem;
    width: 250px;
    color: var(--secoundary-color);
    padding: 1px;
  }
  img {
    width: 70px;
  }
`;

const Styleddiv = styled.div``;
const Services = () => (
  <StyledServices>
    <ServiceCards>
      <h3>نحن سوف نوفر عليك </h3>
      <Styleddiv>
        <h5>الجهد</h5>
        <img src={tired} alt="وفر جهدك" />
      </Styleddiv>
      <Styleddiv>
        <h5>المال</h5>
        <img src={saveMoney} alt="وفر مالك" />
      </Styleddiv>
      <h3> لنا خبرة في </h3>

      <Styleddiv>
        <h5>الشحن</h5>
        <img src={shipping} alt="الشحن" />
      </Styleddiv>
      <Styleddiv>
        <h5>التشطيب</h5>
        <img src={clean} alt="تشطيب" />
      </Styleddiv>
      <Styleddiv>
        <h5>السياحة</h5>
        <img src={travel} alt="السياحة" />
      </Styleddiv>
    </ServiceCards>
  </StyledServices>
);

export default Services;
