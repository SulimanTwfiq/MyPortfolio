import React from "react";
import styled from "styled-components";
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


const HeaderContent = styled.div`
  flex: 1;
  line-height: 1.2;
  color: #026b67;
  h1 {
    font-size: 2.5rem;
    text-shadow: 1px 3px 7px white;
  }
  img {
    margin-top: 13px;
  }
`;
const Header = () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        imageOne: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <StyledHeader>
        <HeaderContent>
          <Navigation />
          <h1>د. نزار فقيه</h1>
          <h4>استشاري جراحة تجميل الأنف و الحنجرة</h4>
          <Link to="/">
            <Img fixed={data.imageOne.childImageSharp.fixed} alt="د. نزار فقيه" />
          </Link>
        </HeaderContent>

      </StyledHeader>
    )}
  />
);

export default Header;
