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
  padding: 10px;
  line-height: 1.5;
  margin: 0 6px;
  text-align: center;
  margin-bottom: 30px;
  margin-top: -50px;
  border: 3px black solid;
  border-radius: 10px;
  background-color: rgb(202, 244, 255);
  h3 {
    color: #658e61;
    margin-top: 20px;
  }
  h2 {
    color: #026b67;
  }

  p {
    font-size: 0.9rem;
    text-align: ${props => (props.center ? "center" : "right")};
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
