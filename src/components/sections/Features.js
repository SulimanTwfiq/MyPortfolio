import React from "react";
import styled from "styled-components";

const StyledFeatures = styled.section`
  text-align: center;
  background-color: beige;
  ul {
    list-style: none;
    text-align: left;
  }
  p {
    margin-top: -22px;
  }
`;

const Features = () => (
  <StyledFeatures>
    <h3>CALL TODAY FOR A FREE CONSULTATION FOR IV SEDATION, DENTAL IMPLANTS & ORTHODONTICS!</h3>
    <ul>
      <li>
        <h4>QUALITY CARE</h4>
        <p>
          When you have dental problems, you need to turn to a dentist who listens and responds … an experienced dentist
          who knows the field and can effectively diagnose and treat your needs … a friendly dentist who counsels you on
          the best ways to maintain and improve your teeth and gums. Our doctors meet all of those criteria and more.
          Plus you benefit from a dedicated team of professionals who give you the individual attention you deserve.
        </p>
      </li>
      <li>
        <h4>INFORMED PATIENTS</h4>
        <p>
          Didsbury Dental Centre believes that informed patients are better prepared to make decisions regarding their
          health and well-being. That is why we’ve included an extensive section on this website covering the full array
          of topics associated with dentistry and dental diagnoses and treatments. We encourage you to look through
          these pages whenever you have an interest or concern about your dental needs and care.
        </p>
      </li>
      <li>
        <h4>COMFORTABLE & INDIVIDUALIZED CARE</h4>
        <p>
          The best care in the world doesn’t mean anything if you can’t access it. At Didsbury Dental Centre, we strive
          to make our office as efficient and convenient as possible. Included in these web pages is information about
          Didsbury Dental Centre's office, including our location, maps, directions, hours, insurance policies and
          appointment scheduling. You can even email a request for an appointment right here! We hope you find this
          website useful and invite you to contact us with any questions you may have at any time.
        </p>
      </li>
    </ul>
  </StyledFeatures>
);

export default Features;
