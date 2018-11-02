import React from "react";
import styled from "styled-components";
import { ServiceCard } from "../Card";
import tired from "../../img/tired.svg";
import saveMoney from "../../img/save-money.svg";
import shipping from "../../img/shipping.svg";
import travel from "../../img/travel.svg";

const StyledServices = styled.section`
  background-color: beige;

  h3 {
    font-size: 2rem;
    margin: 5px;
  }
  h4 {
    margin-top: -20px;
  }
  h5 {
    font-size: 1.4rem;
    margin: 2px;
  }
`;
const ServiceCards = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  h3 {
    grid-column: 1/-1;
  }
  img {
    width: 100px;
  }
`;

const Services = () => (
  <StyledServices>
    <h3> لماذا نحن ؟ </h3>
    <ServiceCards>
      <ServiceCard>
        <h5>وفر جهدك</h5>
        <img src={tired} alt="وفر جهدك" />
      </ServiceCard>
      <ServiceCard>
        <h5>وفر مالك</h5>
        <img src={saveMoney} alt="وفر مالك" />
      </ServiceCard>
      <h3> متخصصين في </h3>

      <ServiceCard>
        <h5>الشحن</h5>
        <img src={shipping} alt="الشحن" />
      </ServiceCard>
      <ServiceCard>
        <h5>التشطيب</h5>
        <p />
      </ServiceCard>
      <ServiceCard>
        <h5>السياحة</h5>
        <img src={travel} alt="السياحة" />
      </ServiceCard>
    </ServiceCards>
  </StyledServices>
);

export default Services;
