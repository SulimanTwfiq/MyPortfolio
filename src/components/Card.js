import styled from "styled-components";
import media from "../components/media";
export const StyledCard = styled.div`
  color: var(--light);
  text-align: center;
  border: 5px solid transparent;
  border-image: linear-gradient(to bottom, #22c1c3, #fdbb2d);
  border-image-slice: 1;
`;

export const DefaultCard = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  padding: 5px;
  line-height: 1.5;
  margin: 0 4px;
  text-align: right;
  margin-bottom: 30px;
  h3 {
    color: #658e61;
    text-align: center;
    margin-top: 20px;
  }
  h2 {
    text-align: center;
    color: #026b67;
  }
  p {
    font-size: 0.9rem;
  }
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

export const DoctorCard = styled(StyledCard)`
  background-color: var(--secoundary-color);
  flex: 1 1 250px;
  margin: 10px 5px;
`;
