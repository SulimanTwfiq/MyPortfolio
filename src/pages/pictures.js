import React from "react";
import Layout from "../templates/Layout";
import styled from "styled-components";
import { DefaultCard } from "../components/Card";
import PicOne from "../images/beforeANDafter/nizarfakih-1-2-300x300.png";
import PicTwo from "../images/beforeANDafter/nizarfakih-2-2-300x225.jpg";
import PicThree from "../images/beforeANDafter/nizarfakih-3-2.jpg";
import PicFour from "../images/beforeANDafter/nizarfakih-4-2-300x300.jpg";
import PicFive from "../images/beforeANDafter/nizarfakih-5-2-300x300.jpg";
import PicSix from "../images/beforeANDafter/nizarfakih-6-2-300x300.jpg";
import PicSeven from "../images/beforeANDafter/nizarfakih-7-2-300x282.jpg";
import PicEight from "../images/beforeANDafter/nizarfakih-8-2-300x208.jpg";
import PicNine from "../images/beforeANDafter/nizarfakih-9-2-300x225.jpg";
import PicTen from "../images/beforeANDafter/nizarfakih-10-2-300x225.jpg";
import Office from "../images/in-office.jpeg";
import Metatags from "../components/Metatags";

const Container = styled(DefaultCard)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: stretch;
  justify-items: center;
  overflow: hidden;
  grid-gap: 40px;
  padding: 0px;
  h1 {
    grid-column: 1/-1;
  }
`;

const Pictures = () => (
  <Layout>
    <Metatags title={"معرض الصور"} description={"صور لبعض العمليات التي قام بها الدكتور نزار فقيه"} />
    <Container as="section">
      <h1>معرض الصور</h1>
      <img src={PicOne} alt="patient" />
      <img src={PicTwo} alt="patient" />
      <img src={PicThree} alt="patient" />
      <img src={PicFour} alt="patient" />
      <img src={PicFive} alt="patient" />
      <img src={PicSix} alt="patient" />
      <img src={PicSeven} alt="patient" />
      <img src={PicEight} alt="patient" />
      <img src={PicNine} alt="patient" />
      <img src={PicTen} alt="patient" />
    </Container>
  </Layout>
);

export default Pictures;
