import React from "react";
import Layout from "../components/Layout";
import { ContactCopmonent as Contact } from "./contact";
import { SurgeriesComponent as Surgeries } from "./surgeries";
import CV from "../components/sections/cv";
import styled from "styled-components";

import { graphql } from "gatsby";
const StyledSection = styled.div`
  grid-area: sections;
  background-color: var(--light);
`;
const IndexPage = ({ data }) => {
  const { edges: surgeries } = data.allMarkdownRemark;

  return (
    <Layout>
      <StyledSection>
        <CV />
        {Surgeries(surgeries)}
        <Contact />
      </StyledSection>
    </Layout>
  );
};

export const SurgeriesQuery = graphql`
  query Surgeries {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "surgery-page" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            description
            img
          }
        }
      }
    }
  }
`;

export default IndexPage;
