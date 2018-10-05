import React from "react";
import styled from "styled-components";

const StyledSlider = styled.div`
  grid-area: slider;
  width: 100%;
  height: 25vh;
  background-image: linear-gradient(to right, #d299c2 0%, #fef9d7 100%);

  img {
    object-fit: cover;
    object-position: 100% 0;
  }
`;
const Slider = () => <StyledSlider>{/* <img src="img/doctor-landing.jpg" alt="doctor" /> */}</StyledSlider>;

export default Slider;
