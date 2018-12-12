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
  background-image: linear-gradient(-225deg, white -119%, var(--color-primary) 121%);
  margin-bottom: 20px;
  border-bottom: 4px black solid;
`;

const HeaderContent = styled.div`
  flex: 1;
  line-height: 1.2;
  color: black;
  h1 {
    font-size: 2.5rem;
    text-shadow: 1px 3px 7px white;
  }
`;
const Header = ({ shortDesc }) => (
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
          <p>{shortDesc && shortDesc}</p>
          <Link to="/">
            <Img fixed={data.imageOne.childImageSharp.fixed} alt="د. نزار فقيه" />
          </Link>
        </HeaderContent>
      </StyledHeader>
    )}
  />
);

export default Header;
