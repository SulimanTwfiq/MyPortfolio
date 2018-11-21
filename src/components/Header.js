import React from "react";
import styled from "styled-components";
import Logo from "../img/logo.png";
import { Link } from "@reach/router";
import Navigation from "./Navigation";
import Img from "gatsby-image";
import { graphql, StaticQuery } from "gatsby";

const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(-225deg, #b7f8db 0%, #50a7c2 100%);
  margin-bottom: 20px;
  border-bottom: 4px black solid;
`;

const ContactInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 10px;
  font-size: 0.8rem;
`;

const HeaderContent = styled.div`
  flex: 1;
  line-height: 1.2;
  color: #026b67;
  h1 {
    font-size: 2.5rem;
    text-shadow: 1px 3px 7px white;
  }
  img {
    width: 10rem;
    margin-top: 13px;
  }
`;
const Header = () => (
  <StaticQuery
    query={graphql`
    imageOne: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    `}
    render={data => {
      return (
        <StyledHeader>
          <Navigation />
          <HeaderContent>
            <h1>د. نزار فقيه</h1>
            <h4>استشاري جراحة تجميل الأنف و الحنجرة</h4>
            {/* <img src={Logo} alt="د. نزار فقيه" /> */}
            <Img fluid={data.imageOne.childImageSharp.fluid} />
          </HeaderContent>
          <ContactInfoSection>
            <span>أتصل اليوم 96599899664</span>
            <span>تواصل معنا</span>
          </ContactInfoSection>
        </StyledHeader>
      );
    }}
  />
);

/* 
export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`; */
export default Header;
