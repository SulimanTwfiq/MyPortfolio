import React from "react";
import styled from "styled-components";
import { ServiceCard } from "../Card";
const StyledServices = styled.section`
  width: 100%;
  text-align: center;
  background-color: beige;
  h3 {
    font-size: 2rem;
  }
  h4 {
    margin-top: -20px;
  }
  h5 {
    font-size: 1.2rem;
    margin-bottom: -10px;
  }
`;
const ServiceCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px 20px;
  margin-top: 50px;
`;

const Services = () => (
  <StyledServices>
    <h3> خدماتنا المميزة </h3>
    <h4>Click to find out more </h4>
    <ServiceCards>
      <ServiceCard>
        <h5>SEDATION DENTISTRY</h5>
        <p>
          Calm your dental anxiety with Sedation Dentistry! We have oral and IV sedation techniques available for even
          the most apprehensive patient.
        </p>
      </ServiceCard>
      <ServiceCard>
        <h5>SEDATION DENTISTRY</h5>
        <p>
          Calm your dental anxiety with Sedation Dentistry! We have oral and IV sedation techniques available for even
          the most apprehensive patient.
        </p>
      </ServiceCard>
      <ServiceCard>
        <h5>SEDATION DENTISTRY</h5>
        <p>
          Calm your dental anxiety with Sedation Dentistry! We have oral and IV sedation techniques available for even
          the most apprehensive patient.
        </p>
      </ServiceCard>
      <ServiceCard>
        <h5>SEDATION DENTISTRY </h5>
        <p>
          Calm your dental anxiety with Sedation Dentistry! We have oral and IV sedation techniques available for even
          the most apprehensive patient.
        </p>
      </ServiceCard>
    </ServiceCards>
  </StyledServices>
);

export default Services;
