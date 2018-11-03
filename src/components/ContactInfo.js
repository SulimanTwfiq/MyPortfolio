import React from "react";
import styled from "styled-components";

const ContactInfoSection = styled.section`
  background-color: var(--secoundary-color);
  grid-area: contactInfo;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: white;
  padding: 0 10px;
  font-size: 0.8rem;
`;
const ContactInfo = () => (
  <ContactInfoSection>
    <span>أتصل اليوم 96599899664</span>
    <span>تواصل معنا</span>
  </ContactInfoSection>
);

export default ContactInfo;
