import styled from "styled-components";

export const StyledCard = styled.section`
  color: var(--light);
  border-radius: 10px;
  padding: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

export const ContactCard = styled(StyledCard)`
  background-color: var(--box-color);
  padding: 30px;
  padding-bottom: 200px;
  margin: 20px;
`;

export const ServiceCard = styled(StyledCard)`
  background-color: var(--secoundary-color);
  flex: 1 1 250px;
  margin: 10px 5px;
`;
