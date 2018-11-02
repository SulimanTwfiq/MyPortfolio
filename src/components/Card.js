import styled from "styled-components";
import media from "../components/media";
export const StyledCard = styled.div`
  color: var(--light);
  border-radius: 10px;
  padding: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  border: 5px solid transparent;
  border-image: linear-gradient(to bottom, #22c1c3, #fdbb2d);
  border-image-slice: 1;
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

  /* ${media.desktop`
    &:hover {
    transform: scale(1.1);
    background-color: var(--primary-color);
  } */
  `};
`;

export const DoctorCard = styled(StyledCard)`
  background-color: var(--secoundary-color);
  flex: 1 1 250px;
  margin: 10px 5px;
`;
