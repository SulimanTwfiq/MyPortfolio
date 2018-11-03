import styled from "styled-components";
import media from "../components/media";
export const StyledCard = styled.div`
  color: var(--light);
  text-align: center;
  border: 5px solid transparent;
  border-image: linear-gradient(to bottom, #22c1c3, #fdbb2d);
  border-image-slice: 1;
`;

export const ContactCard = styled(StyledCard)`
  background-color: #efefb5;
  color: black;
  padding: 20px 0;
  margin: 7px;
  font-size: 0.9rem;
  p:nth-child(2n) {
    color: brown;
  }

  img {
    width: 150px;
  }
`;

export const ServiceCard = styled(StyledCard)`
  background-color: var(--secoundary-color);
 margin: 5px 3px; 
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
