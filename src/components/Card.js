import styled from "styled-components";
export const StyledCard = styled.div`
  color: var(--light);
  text-align: center;
  border: 5px solid transparent;
  border-image: linear-gradient(to bottom, #22c1c3, #fdbb2d);
  border-image-slice: 1;
`;

export const DefaultCard = styled.div`
  position: relative;
  padding: 10px;
  line-height: 1.5;
  margin: 0 5px;
  text-align: center;
  margin-bottom: 70px;
  border: 3px black solid;
  /* margin-top: ${props => (props.noMarginTop ? 0 : -50)}px; */
  border-radius: 10px;
    background-color: var(--color-tinary);
      margin-top: -55px;

  h3 {
    color: #658e61;
    margin-top: 20px;
  }
  h2 {
    color: #004469;
  }

  p {
    font-size: 0.9rem;
    text-align: ${props => (props.center ? "center" : "right")};
  }
  a {
    color: #026b67;
  }
 
  img{
    width:100%;
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
