import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalStyles from "../components/GlobalStyles";
import { StaticQuery, graphql } from "gatsby";
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  grid-template-areas:
    "header"
    "sections"
    "footer";
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2373e8e0' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query layoutTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "Layout" } }) {
          frontmatter {
            Address
            rights
            shortDesc
            contactInfo {
              name
              logo
            }
          }
        }
      }
    `}
    render={data => {
      const { shortDesc, Address, rights, contactInfo } = data.markdownRemark.frontmatter;
      return (
        <>
          <GlobalStyles />
          <Helmet>
            <meta charSet="utf-8" />
            <title>دكتور نزار فقيه</title>
            <html lang="ar" dir="rtl" />
          </Helmet>
          <Container>
            <Header shortDesc={shortDesc} />
            {children}
            <Footer AddressInfo={Address} rights={rights} contactInfo={contactInfo} />
          </Container>
        </>
      );
    }}
  />
);

export default Layout;
