import React from "react";
import styled from "styled-components";

const ContactInfoSection = styled.section`
  background-color: var(--secoundary-color);
  grid-area: contactInfo;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: white;
  padding: 5px 30px;
`;
const ContactInfo = () => (
  <ContactInfoSection>
    <span>Contact with us</span>
    <span>Call today 403-335-3855</span>
  </ContactInfoSection>
);

export default ContactInfo;
